package com.yeeee.crowdfunding.service;

import com.yeeee.crowdfunding.model.vo.PageVO;
import com.yeeee.crowdfunding.model.vo.ReceiveInfoVO;
import com.yeeee.crowdfunding.model.vo.ReceivePageReqVO;

/**
 * description......
 *
 * @author yeeee
 * @since 2022/5/7 23:07
 */
public interface ReceiveInfoService {
    PageVO<ReceiveInfoVO> getReceivePageList(ReceivePageReqVO receivePageReqVO);

    Void updateReceiveInfo(ReceiveInfoVO receiveInfoVO);

}
