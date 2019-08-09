package org.kuhlins.webkit.ex;

public class SystemException extends ClientException {

  private static final long serialVersionUID = 1L;

  public static final String DEFAULT_KEY = "SYSTEM";

  public SystemException() {
    super(DEFAULT_KEY);
  }

  public SystemException(Throwable cause) {
    super(DEFAULT_KEY);
    withParam("msg", cause.getMessage());
  }
  
  public SystemException(String key, Throwable cause) {
    super(key, cause);
  }

  @Override
  public int getHttpCode() {
    return 500;
  }

}
