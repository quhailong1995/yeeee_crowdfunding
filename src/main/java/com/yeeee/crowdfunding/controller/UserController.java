package com.yeeee.crowdfunding.controller;

import com.github.xiaoymin.knife4j.annotations.ApiOperationSupport;
import com.yeeee.crowdfunding.api.CommonResult;
import com.yeeee.crowdfunding.model.dto.auth.Oauth2TokenDTO;
import com.yeeee.crowdfunding.service.CustomUserDetailsService;
import com.yeeee.crowdfunding.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.endpoint.TokenEndpoint;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * description......
 *
 * @author yeeee
 * @since 2022/4/28 22:53
 */
@Slf4j
@Api(tags = "前台用户管理", description = "前台用户管理")
@RequiredArgsConstructor
@RestController
@RequestMapping("user")
public class UserController {

    private final CustomUserDetailsService userDetailsService;

    private final UserService userService;

    private final TokenEndpoint tokenEndpoint;


    @ApiOperation("用户登录")
    @ApiImplicitParams({
            @ApiImplicitParam(value = "用户名", name = "username"),
            @ApiImplicitParam(value = "密码", name = "password")
    })
    @PostMapping(value = "/login")
    public CommonResult<Oauth2TokenDTO> login(String username, String password) {
        return CommonResult.success(userDetailsService.oauthToken(username, password, null));
    }

    @ApiOperation("用户注册")
    @PostMapping(value = "register")
    public CommonResult<Void> register(String username, String password, String code) {
        return CommonResult.success(userService.register(username, password, code));
    }

}
