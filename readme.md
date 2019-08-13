### 萤石云SDK

## Install

```bash
$ npm i ys7 --save
```

## Usage
初始化
```js
    const YS7 = require('ys7');
    /*
     // 获取到的accessToken有效期是7天，请勿频繁调用，频繁调用将会被拉入限制黑名单。
     获取后应缓存起来，即将过期时重新获取
     {
           accessToken: 'at.6rqp8nh5a8xzl9ah9kcsu8teca8r9gzy-2h67wrzfcq-12zjusw-gbnaksvv8',
           expireTime: 1566186144634
        }
    */
    const token = await YS7.getToken(AppKey, AppSecret); 
    const ys = YS7.init(token.accessToken);
    
```
添加设备
```js
    // 使用设备序列号和校验码添加摄像头
    const result = await ys.addDevice(deviceSerial, validateCode);
```
移除设备
```js
    // 使用设备序列号移除摄像头
    const result = await ys.removeDevice(deviceSerial);
```
摄像头管理
```js
    // 通过设备序列号获取一个摄像头实列
    const camera = ys.getCamera(deviceSerial);
```
```js
    // 获取直播地址
    // expireTime 可不传，默认最大值  地址过期时间：单位秒数，最大62208000（即720天），最小300（即5分钟）
    // channelNo 可不传，默认为1  通道号，IPC设备填1
    const result = await camera.getLiveAddress(expireTime, channelNo);
```

```js
    // 获取摄像头信息
    const info = await camera.getInfo();
```

```js
    // 布撤防,开关摄像头报警功能
    // 具有防护能力设备布撤防状态：0-睡眠，8-在家，16-外出，普通IPC设备布撤防状态：`0-撤防，1-布防
    const result = await camera.defence(isDefence);
```
云台控制
```js
    // 开始控制
    // direction 操作命令：0-上，1-下，2-左，3-右，4-左上，5-左下，6-右上，7-右下，8-放大，9-缩小，10-近焦距，11-远焦距
    // speed 云台速度：0-慢，1-适中，2-快  // 默认1
    // channelNo 通道号 默认1
    await camera.startCtrl(direction, speed, channelNo);
    
```

```js
    // 停止控制
    // direction 操作命令：0-上，1-下，2-左，3-右，4-左上，5-左下，6-右上，7-右下，8-放大，9-缩小，10-近焦距，11-远焦距
    // channelNo 通道号 默认1 
    await camera.stopCtrl(direction, channelNo);
```





