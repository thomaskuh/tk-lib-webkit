package org.kuhlins.webkit.ex;

import org.kuhlins.webkit.ex.model.ErrorDetail;
import org.kuhlins.webkit.ex.model.ErrorResponse;

/**
 * Base class for exceptions meant to be passed to the client aka shown to the
 * user with a dedicated model handled by library frontend components.
 */
public abstract class ClientException extends RuntimeException {

  private static final long serialVersionUID = 1L;

  private ErrorResponse errorResponse;

  public ClientException(String key) {
    errorResponse = new ErrorResponse(key);
  }

  public ClientException(String key, Throwable cause) {
    super(cause);
    errorResponse = new ErrorResponse(key);
  }

  public abstract int getHttpCode();

  public ClientException withParam(String name, String value) {
    errorResponse.withParam(name, value);
    return this;
  }

  public ClientException withDetail(ErrorDetail detail) {
    errorResponse.withDetail(detail);
    return this;
  }

  public void throwOnDetails() {
    if (!errorResponse.getDetails().isEmpty()) {
      throw this;
    }
  }

  public ErrorResponse getErrorResponse() {
    return errorResponse;
  }

  @Override
  public String getMessage() {
    return errorResponse.toString();
  }

}
