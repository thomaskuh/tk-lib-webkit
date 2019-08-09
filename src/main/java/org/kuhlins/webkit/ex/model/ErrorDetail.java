package org.kuhlins.webkit.ex.model;

public class ErrorDetail extends ErrorKeyAndParams<ErrorDetail> {

  private static final long serialVersionUID = 1L;

  /**
   * Do not call. Only for (De)serialization.
   */
  public ErrorDetail() {
  }

  public ErrorDetail(String key) {
    super(key);
  }

  @Override
  protected ErrorDetail self() {
    return this;
  }

  @Override
  public String toString() {
    return "ErrorDetail [key=" + key + ", params=" + params + "]";
  }

}
