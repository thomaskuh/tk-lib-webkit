package org.kuhlins.lib.webkit.spring;

import org.kuhlins.lib.webkit.HttpUtils;
import org.kuhlins.lib.webkit.HttpUtils.UserAndPass;
import org.kuhlins.lib.webkit.ex.UnauthorizedException;
import org.kuhlins.lib.webkit.ex.ValidationException;
import org.kuhlins.lib.webkit.ex.model.ErrorDetail;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ControllerApi implements ApplicationContextAware {

    private ApplicationContext context;

    @Override
    public void setApplicationContext(ApplicationContext ctx) throws BeansException {
        this.context = ctx;
    }

    @PostMapping("/shutdown")
    public void shutdown() {
        ((ConfigurableApplicationContext) context).close();
    }

    @GetMapping("/sleep")
    public void sleep() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/probe")
    public void probe(@RequestHeader(name = "Authorization", required = false) String auth) {
        UserAndPass up = HttpUtils.parseBasicAuth(auth);
        if (up == null || !"admin".equals(up.getUser()) || !"admin".equals(up.getPass())) {
            throw new UnauthorizedException();
        }
    }

    @GetMapping("/errorKnown")
    public void errorKnown() {
        throw new ValidationException("val.known_key")
                .withParam("valueReceived", "zero")
                .withParam("valuesAllowed", "one, two, three");
    }

    @GetMapping("/errorUnknown")
    public void errorUnknown() {
        throw new ValidationException("val.unknown_key")
                .withParam("valueReceived", "zero")
                .withParam("valuesAllowed", "one, two, three");
    }

    @GetMapping("/errorDetails")
    public void errorDetails() {
        throw new ValidationException("val.with_details")
                .withParam("mainParam", "mainValue")
                .withDetail(new ErrorDetail("detail.key_1")
                        .withParam("valueReceived", "zero")
                        .withParam("valuesAllowed", "one, two, three"));
    }
}
