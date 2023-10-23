package org.kuhlins.lib.webkit.ex;

public class ValidationException extends ClientException {

    private static final long serialVersionUID = 1L;

    // This exception itself:
    public static final String KEY_DEFAULT = "val.gen"; // Validation error.

    // Typical details:
    public static final String KEY_UNDEF = "val.undef"; // Must be defined.
    public static final String KEY_EMPTY = "val.empty"; // Must not be empty.
    public static final String KEY_ONEOF = "val.oneof"; // Must not be one of: {of}.
    public static final String KEY_LENGTH_MIN = "val.length.min"; // Must have at least {min} characters.
    public static final String KEY_LENGTH_MAX = "val.length.max"; // Must have no more than {max} characters.
    public static final String KEY_LENGTH_MINMAX = "val.length.minmax"; // Must have between {min} and {max} characters.

    public ValidationException() {
        super(KEY_DEFAULT);
    }

    public ValidationException(String key) {
        super(key);
    }

    @Override
    public int getHttpCode() {
        return 400;
    }
}
