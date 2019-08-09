package org.kuhlins.webkit.ex;

public class UnauthorizedException extends ClientException {

  private static final long serialVersionUID = 1L;

  public static final String DEFAULT_KEY = "UNAUTHORIZED";
  
  public UnauthorizedException() {
    super(DEFAULT_KEY);
  }
  
  public UnauthorizedException(String key) {
    super(key);
  }

  @Override
  public int getHttpCode() {
    return 401;
  }

}
