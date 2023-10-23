package org.kuhlins.lib.webkit.ex.model;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * Abstract container for a key (usually an i18n key) and some named parameters
 * for variable replacement.
 */
public abstract class ErrorKeyAndParams<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    protected String key;
    protected Map<String, String> params = new HashMap<String, String>();
    protected String msg;

    protected abstract T self();

    /**
     * Do not call. Only for (De)serialization.
     */
    public ErrorKeyAndParams() {}

    public ErrorKeyAndParams(String key) {
        this.key = key;
    }

    public T withParam(String name, String value) {
        this.params.put(name, value);
        return self();
    }

    public String getKey() {
        return key;
    }

    public Map<String, String> getParams() {
        return params;
    }

    /**
     * Do not call. Only for (De)serialization.
     */
    public String getMsg() {
        return msg;
    }

    /**
     * Do not call. Only for (De)serialization.
     */
    public void setMsg(String msg) {
        this.msg = msg;
    }

    /**
     * Do not call. Only for (De)serialization.
     */
    public void setKey(String key) {
        this.key = key;
    }

    /**
     * Do not call. Only for (De)serialization.
     */
    public void setParams(Map<String, String> params) {
        this.params = params;
    }

    @Override
    public String toString() {
        return "ErrorKeyParams [key=" + key + ", params=" + params + "]";
    }
}
