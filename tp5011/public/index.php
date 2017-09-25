<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

namespace think;

// 定义应用目录
define('APP_PATH', __DIR__ . '/../application/');

// 加载基础文件 // ThinkPHP 引导文件
require __DIR__ . '/../thinkphp/base.php';

//绑定到admin模块
#define('BIND_MODULE','index');

// 执行应用
App::run()->send();
