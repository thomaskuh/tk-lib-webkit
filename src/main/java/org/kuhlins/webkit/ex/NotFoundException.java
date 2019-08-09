package org.kuhlins.webkit.ex;

public class NotFoundException extends ClientException {

  private static final long serialVersionUID = 1L;

  public static final String DEFAULT_KEY = "NOTFOUND";

  public NotFoundException() {
    super(DEFAULT_KEY);
  }  
  
  public NotFoundException(String key) {
    super(key);
  }

  @Override
  public int getHttpCode() {
    return 404;
  }

}
