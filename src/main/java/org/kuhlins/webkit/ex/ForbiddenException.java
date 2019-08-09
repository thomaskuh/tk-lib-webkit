package org.kuhlins.webkit.ex;

public class ForbiddenException extends ClientException {

  private static final long serialVersionUID = 1L;

  public static final String DEFAULT_KEY = "FORBIDDEN";

  public ForbiddenException() {
    super(DEFAULT_KEY);
  }

  public ForbiddenException(String key) {
    super(key);
  }

  @Override
  public int getHttpCode() {
    return 403;
  }

}
