
## 一、规范

1.目录规范
* /src/pages下的目录按照业务模块划分

    * 前缀：zf-租房
    * 后缀：list-列表页，detail-详情页

* /src/assets/：存放公共资源（图片、样式）
* /src/components/：存放公共组件
* /src/pages/**/components/：存放当前页面的组件

2.组件规范
* 每个组件都是一个文件，遵循class命名规范，**首字母大写**

3.组件内容规范
* 参见Vue官方规范

4.样式规范
* 同一使用less语法
* **组件的样式最外层一定要是嵌套的形式，避免组件被引用时样式覆盖**，如：
```
.wrapper{
    .content{
        //具体样式
    }
}
```





## 二、开发

### 1.准备工作
* 安装依赖
```
npm i
```


* 构建

```
npm run build
```

* 启动(一定要先运行npm run build)

```
npm run dev
```

* 访问：http://dev.m.anjuke.com:9000/webpack-dev-server ，进入对应的页面即可开发


### 2.开发

* 第一步：新建分支

```
frs cr
```


* 第二步：提测

 ```
 frs test
 ```

 注意：由于线上js和css地址是安居客的域名，但是frs上线系统传到15上的是58域名，所以在测试环境进行测试的时候需要把模版中的路径改成测试时候的域名，待上线时候再改回来。

* 第三步：发布

```
frs rl
```

* 第四步：上线，去[frs](http://frs.58corp.com/record)系统操作


ada
