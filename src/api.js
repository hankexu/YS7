module.exports = {
    BASE_URL: 'https://open.ys7.com/api/lapp',
    TOKEN: 'https://open.ys7.com/api/lapp/token/get', // 获取accessToken
    LIVE: {
        LIST: 'https://open.ys7.com/api/lapp/live/video/list',  //获取用户下的直播地址列表
        LIMIT_LIST: 'https://open.ys7.com/api/lapp/live/address/limited',   // 获取指定有效期的直播地址
        OPEN: 'https://open.ys7.com/api/lapp/live/video/open',  // 批量开通直播功能
        CLOSE: 'https://open.ys7.com/api/lapp/live/video/close',   // 批量关闭直播功能
        GET: 'https://open.ys7.com/api/lapp/live/address/get',      // 批量获取设备的直播地址信息
    },
    DEVICE_MANAGER: {
        ADD: 'https://open.ys7.com/api/lapp/device/add',    //添加设备到账号下
        DELETE: 'https://open.ys7.com/api/lapp/device/delete', // 删除账号下指定设备
        RENAME: 'https://open.ys7.com/api/lapp/device/name/update', // 修改设备名称
        CAPTURE: 'https://open.ys7.com/api/lapp/device/capture',  // 抓拍设备的当前画面
        ADD_IPC: 'https://open.ys7.com/api/lapp/device/ipc/add',  // NVR设备关联IPC
        DEL_IPC: 'https://open.ys7.com/api/lapp/device/ipc/delete',   // NVR设备删除IPC
        CHANGE_PASS: 'https://open.ys7.com/api/lapp/device/password/update',  // 修改设备视频加密密码
        QR_CODE: 'https://open.ys7.com/api/lapp/device/wifi/qrcode',     // 生成设备扫描配网二维码二进制数据
        RENAME_CHANEL: 'https://open.ys7.com/api/lapp/camera/name/update',  // 修改通道名称
        SET_DEFENCE_TIME: 'https://open.ys7.com/api/lapp/device/defence/plan/set', // 设置布撤防时间计划
    },
    DEVICE_QUERY: {
        LIST: 'https://open.ys7.com/api/lapp/device/list',  //获取用户下的设备列表
        INFO: 'https://open.ys7.com/api/lapp/device/info',  // 获取单个设备信息
        CAMERAS: 'https://open.ys7.com/api/lapp/camera/list', // 获取摄像头列表
        STATUS: 'https://open.ys7.com/api/lapp/device/status/get', //获取设备状态信息
        ALARM: 'https://open.ys7.com/api/lapp/alarm/device/list',  // 按照设备获取告警消息列表
        CAPACITY: 'https://open.ys7.com/api/lapp/device/capacity',  //根据设备序列号查询设备能力集
        DEFENCE_TIME: 'https://open.ys7.com/api/lapp/device/defence/plan/get', // 获取设备布撤防时间计划
    },
    DEVICE_SET:{
        ARMING: 'https://open.ys7.com/api/lapp/device/defence/set',  // 设备布撤防
    },
    YUNTAI: {
        START: 'https://open.ys7.com/api/lapp/device/ptz/start', // 开始云台控制
        STOP: 'https://open.ys7.com/api/lapp/device/ptz/stop', //停止云台控制
        MIRROR: 'https://open.ys7.com/api/lapp/device/ptz/mirror', // 镜像翻转
        PRESET: 'https://open.ys7.com/api/lapp/device/preset/add', // 添加预置点
        MOVE: 'https://open.ys7.com/api/lapp/device/preset/move', // 调用预置点
        CLEAR: 'https://open.ys7.com/api/lapp/device/preset/clear', //清除预置点
    },
    ALARM:{
        ALL: 'https://open.ys7.com/api/lapp/alarm/list', //  获取所有告警信息列表
        DEVICE: 'https://open.ys7.com/api/lapp/alarm/device/list',  // 按照设备获取告警消息列表
    },
    AI:{
        BODY: 'https://open.ys7.com/api/lapp/intelligence/human/analysis/detect', // 人体人形检测
    }
};

