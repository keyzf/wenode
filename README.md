
# Wenode

A mini Node.js App Framework, for Web-Chatroom, Info-push, REST-API!  
一个适合于：网页聊天, 信息推送, REST-API, 微信扫码交互的 Node.js 微框架！


----------------------------------- 


# Wenode - Node.js 微框架！ # 


### 聊天室功能

* 已有功能
  - 分聊天室，
  - 同一人员，加入多聊天室（客户端）

* 使用情景
  - 直播聊天
  - APP消息推送 : 升级,提示,消息
  - 微信扫码交互 : 登录,绑定,
  - Web客服聊天 : 

* 聊天室扩展(待实现)
  - 上传文件/图片
  - 消息屏蔽过滤


### Web功能

* REST-API
  - /rest/news (新闻首页)
  - /rest/news-a1002 (新闻栏目)
  - /rest/news-a1008 (新闻栏目)
  - /rest/news.2017-ab-1234 (新闻详情：id=2017-ab-1234)
  - 以下根据需要扩展实现
  - /rest/news-add + POST (增加)
  - /rest/news-upd + POST (更新)
  - /rest/news-del + id=2017-ab-1234 (删除)

* Web常用功能
  - 图片，静态解析
  - 模板继承
  - 模板包含
  - 列表标签
  - 纯数据展示（见：REST-API）
  - xml解析
  - md解析
  - 自定义数据扩展
  - 自定义扩展显示

* Web扩展(待实现)
  - 上传文件/图片，静态解析
  - 标签显示里面：数据处理（过滤，剪切，格式化）


### 服务器配置

* 安装器配 node.js和模块
 - 安装：node.js
 - 安装模块：npm install socket.io -g
 - 安装模块：npm install mysql -g

* 配置应用/运行
 - 配置db：/@bak/data.sql
 - 配置nodejs：/module/config.js (注意手动建立相关日志目录)
 - 运行：node app.js


### 深度DIY提示

* 精简,nodejs只做聊天服务端
  - https://github.com/peacexie/wenode/tree/wemin

* 其他web功能由其他web服务器实现
  - 如：Apache, IIS, Nginx

* php和长连接

* 选nodejs
 - 静态文件
 - 回调

* 文件列表：
 - /@bak/tree_fdir.txt


----------------------------------- 


### 相关资源

* 外部链接

  - http://www.runoob.com/nodejs/nodejs-tutorial.html
    Node.js 教程
  
  - http://cnodejs.org/topic/53787247cbcc396349fe3f5a
    用NodeJS实现一个简单的聊天室
  
  - http://blog.csdn.net/u013742084/article/details/51225635
    利用nodejs搭建server端
  
  - 安装express, 用这个来托管socket.io,以及静态页面,命令
    npm install express --save,--save可以使包添加到package.json文件里.
  
  - 安装socket.io,命令npm install socket.io --save.
  
  - http://yuncode.net/code/c_519c10363c14177
    js发送心跳包 web socket 

  - http://www.devstore.cn/essay/essayInfo/2199.html
    node.js的15个应用场景


----------------------------------- 




