package org.kuhlins.webkit;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import jakarta.servlet.http.HttpServletRequest;

/**
 * HTTP utils for library related tasks like exception handling and common tasks
 * i dont want to depend on a large library just because of a single method.
 */
public class HttpUtils {

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
   * Decode base64 UTF-8 string. 
   * @param input
   * @return Decoded value or fallback in case of null or invalid input.
   */
  public static String base64Decode(String input, String defaultValue) {
    String result = defaultValue;
    if(input != null) {
      try {
        result = new String(Base64.getDecoder().decode(input), StandardCharsets.UTF_8);
      } catch (Exception e) {/* return null/defaultValue */}
    }
    return result;
  }
  
  /**
   * Encode base64 UTF-8 string.
   * @param input
   * @return
   */
  public static String base64Encode(String input) {
    String result = null;
    if(input != null) {
      try {
        result = Base64.getEncoder().encodeToString(input.getBytes(StandardCharsets.UTF_8));
      } catch (Exception e) {/* return null */}
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
