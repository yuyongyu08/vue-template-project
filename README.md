# vue模版工程（TS版）

支持MPA和SPA

## 一、规范

1.目录规范
```$xslt
src
├── assets //静态资源
├── components //系统级组件
├── plugins 
│   ├── directives //指令
│   ├── filters //过滤器
│   └── widgets //挂件
├── services //接口服务
├── utils //常用工具
├── views //页面
│   ├── index.html //webpack-dev-server的引导页

```

2.组件规范
* 每个组件都是一个文件，遵循class命名规范，**`首字母大写`**

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

* 启动

```
npm run dev
```

* 构建

```
npm run build
```


### 2.开发

当前版本为ts版，如果想继续使用原生写法，修改webpack.base.js的loader配置即可。