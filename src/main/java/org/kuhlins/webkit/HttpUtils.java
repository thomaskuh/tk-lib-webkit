package org.kuhlins.webkit;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.kuhlins.webkit.ex.ClientException;
import org.kuhlins.webkit.ex.SystemException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * HTTP utils for library related tasks like exception handling and common tasks
 * i dont want to depend on a large library just because of a single method.
 */
public class HttpUtils {

  private static final Logger L = LoggerFactory.getLogger(HttpUtils.class);

  private static final ObjectMapper mapper = new ObjectMapper();

  public static void handleException(Exception e, HttpServletResponse resp) throws IOException {
    // Pass-through IOExceptions.
    if (e instanceof IOException) {
      throw (IOException) e;
    }

    // Convert unknown/unexpected exceptions to SystemException to not leak
    // internals.
    ClientException ce = e instanceof ClientException ? (ClientException) e : new SystemException(e);

    // Log system exceptions only.
    if (ce instanceof SystemException) {
      L.warn("System exception occured. {}.", ce.getMessage(), ce);
    }

    // Pass to client in expected format.
    resp.setStatus(ce.getHttpCode());
    resp.setContentType("application/json");
    resp.setCharacterEncoding("UTF-8");
    mapper.writeValue(resp.getOutputStream(), ce.getErrorResponse());
  }

  /**
   * Get remote address out of request or header field when passed through reverse
   * proxy.
   * 
   * @param req
   * @param proxyHeader
   * @return
   */
  public static String remoteAdr(HttpServletRequest req, String proxyHeader) {
    String result = null;

    if (proxyHeader != null && !proxyHeader.isEmpty()) {
      String addrHeader = req.getHeader(proxyHeader);
      if (addrHeader != null) {
        // multiple proxies may concat "client, proxy1, proxy2, proxy3, ...";
        result = addrHeader.split(",")[0].trim();
      }
    }

    // Fallback to classic remote address
    if (result == null || result.isEmpty()) {
      result = req.getRemoteAddr();
    }
    return result;
  }

  /**
   * Parse basic auth header.
   * 
   * @param authHeader
   * @return UserAndPass or null if input is null, empty, invalid or whatever.
   */
  public static UserAndPass parseBasicAuth(String authHeader) {
    if (authHeader != null && authHeader.startsWith("Basic ")) {
      try {
        String[] split = new String(Base64.getDecoder().decode(authHeader.substring(6)), StandardCharsets.UTF_8)
            .split(":");
        // String[] split = B64Code.decode(authHeader.substring(6),
        // StandardCharsets.UTF_8).split(":");
        if (split.length == 2 && split[0].length() > 0 && split[1].length() > 0) {
          return new UserAndPass(split[0], split[1]);
        }
      } catch (Exception e) {
      }
    }
    return null;
  }

  public static class UserAndPass {
    private String user;
    private String pass;

    public UserAndPass(String user, String pass) {
      this.user = user;
      this.pass = pass;
    }

    public String getUser() {
      return user;
    }

    public void setUser(String user) {
      this.user = user;
    }

    public String getPass() {
      return pass;
    }

    public void setPass(String pass) {
      this.pass = pass;
    }
  }
}