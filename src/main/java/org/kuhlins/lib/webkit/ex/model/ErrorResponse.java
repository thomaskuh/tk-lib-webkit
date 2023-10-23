package org.kuhlins.lib.webkit.ex.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Error format expected by client/webkit to show proper i18n messages to the user.
 * Contains of an i18n-key and optional parameters for placeholder-replacement in the final message.
 */
public class ErrorResponse extends ErrorKeyAndParams<ErrorResponse> {

    private static final long serialVersionUID = 1L;

    private List<ErrorDetail> details = new ArrayList<>();

    /**
     * Do not call. Only for (De)serialization.
     */
    public ErrorResponse() {}

    public ErrorResponse(String key) {
        this.key = key;
    }

    @Override
    protected ErrorResponse self() {
        return this;
    }

    public ErrorResponse withDetail(ErrorDetail detail) {
        this.details.add(detail);
        return this;
    }

    public List<ErrorDetail> getDetails() {
        return details;
    }

    /**
     * Do not call. Only for (De)serialization.
     */
    public void setDetails(List<ErrorDetail> details) {
        this.details = details;
    }

    @Override
    public String toString() {
        return "ErrorResponse [key=" + key + ", params=" + params + ", details=" + details + "]";
    }
}
