package org.kuhlins.webkit;

import java.io.IOException;
import java.util.Map;

import org.kuhlins.webkit.ex.ClientException;
import org.kuhlins.webkit.ex.SystemException;
import org.kuhlins.webkit.ex.model.ErrorResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletResponse;

public class HttpExceptionizer {

	private static final Logger L = LoggerFactory.getLogger(HttpExceptionizer.class);

	private ObjectMapper mapper = new ObjectMapper();
	private ClientExceptionMsgResolver msgResolver = null;

	public HttpExceptionizer() {
	}

	public HttpExceptionizer(ClientExceptionMsgResolver msgResolver) {
		this.msgResolver = msgResolver;
	}

	public void handleException(Exception e, HttpServletResponse resp) throws IOException {
		// Pass-through IOExceptions.
		if (e instanceof IOException) {
			throw (IOException) e;
		}

		// Convert unknown/unexpected exceptions to SystemException to not leak
		// internals.
		ClientException ce = e instanceof ClientException ? (ClientException) e : new SystemException(e);

		// Always log system exceptions. In debug with stack.
		if (ce instanceof SystemException) {
			L.warn("System exception occured. {}.", ce.getMessage(), L.isDebugEnabled() ? ce : null);
		}

		// Log exceptions in debug.
		if (L.isDebugEnabled()) {
			L.warn("Passing to client: {}.", ce.getMessage());
		}
		
		// Fill msgs if resolver is defined.
		if (msgResolver != null) {
			ErrorResponse er = ce.getErrorResponse();
			er.setMsg(msgResolver.resolveClientExceptionMsg(er.getKey(), er.getParams()));
			er.getDetails().forEach(ed -> ed.setMsg(msgResolver.resolveClientExceptionMsg(ed.getKey(), ed.getParams())));
		}

		// Pass to client in expected format.
		resp.setStatus(ce.getHttpCode());
		resp.setContentType("application/json");
		resp.setCharacterEncoding("UTF-8");
		mapper.writeValue(resp.getOutputStream(), ce.getErrorResponse());
	}
	
	@FunctionalInterface
	public interface ClientExceptionMsgResolver {
		public String resolveClientExceptionMsg(String key, Map<String,String> params);
	}
}
