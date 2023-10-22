package org.kuhlins.webkit.ex.model;

public class ErrorDetail extends ErrorKeyAndParams<ErrorDetail> {

  private static final long serialVersionUID = 1L;
  
  /**
   * Set if detail refers to a special field from request.
   */
  private String field;
  
  /**
   * Do not call. Only for (De)serialization.
   */
  public ErrorDetail() {
  }

  public ErrorDetail(String key) {
    super(key);
  }

  public ErrorDetail(String key, String field) {
	  super(key);
	  this.field = field;
  }
  
  public void setField(String field) {
	this.field = field;
  }
  public String getField() {
	return field;
  }
  
  @Override
  protected ErrorDetail self() {
    return this;
  }

  @Override
  public String toString() {
    return "ErrorDetail [key=" + key + ", field=" + field + ", params=" + params + "]";
  }

}
