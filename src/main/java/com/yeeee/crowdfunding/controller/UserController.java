package com.yeeee.crowdfunding.controller;

import com.yeeee.crowdfunding.api.CommonResult;
import com.yeeee.crowdfunding.model.dto.auth.Oauth2TokenDTO;
import com.yeeee.crowdfunding.model.vo.*;
import com.yeeee.crowdfunding.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

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

    private final UserService userService;


    @ApiOperation("用户登录")
    @ApiImplicitParams({
            @ApiImplicitParam(value = "用户名", name = "username"),
            @ApiImplicitParam(value = "密码", name = "password")
    })
    @PostMapping(value = "/login")
    public CommonResult<Oauth2TokenDTO> login(UserCheckVO userCheckVO) {
        return CommonResult.success(userService.login(userCheckVO));
    }

    @ApiOperation("退出登录")
    @GetMapping(value = "/logout")
    public CommonResult<Void> logout() {
        return CommonResult.success(userService.logout());
    }

    @ApiOperation("修改密码")
    @PostMapping(value = "/updatePassword")
    public CommonResult<Void> updatePassword(@Validated @RequestBody UpdatePasswordVO updatePasswordVO) {
        return CommonResult.success(userService.updatePassword(updatePasswordVO));
    }

    @ApiOperation("用户注册")
    @PostMapping(value = "register")
    public CommonResult<Void> register(@Validated UserCheckVO userCheckVO) {
        return CommonResult.success(userService.register(userCheckVO));
    }

    @ApiOperation("修改资料")
    @PostMapping("front/update")
    public CommonResult<Void> updateMyselfInfo(@RequestBody UserVO userVO) {
        return CommonResult.success(userService.updateMyselfInfo(userVO));
    }

    @ApiOperation("个人资料")
    @GetMapping("front/info")
    public CommonResult<UserVO> getMyselfInfo() {
        return CommonResult.success(userService.getMyselfInfo());
    }

    @ApiOperation("用户分页")
    @PostMapping(value = "admin/page/list")
    public CommonResult<PageVO<UserVO>> userPageList(UserPageReqVO userPageReqVO) {
        return CommonResult.success(userService.userPageList(userPageReqVO));
    }

}
