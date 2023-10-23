package org.kuhlins.lib.webkit.ex;

public class ForbiddenException extends ClientException {

    private static final long serialVersionUID = 1L;

    public static final String DEFAULT_KEY = "sec.forbidden";

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
