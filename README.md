# vue模版工程（TS版）

## 一、规范

1.目录规范
* /src/pages下的目录按照业务模块划分

    * 前缀：zf-租房
    * 后缀：list-列表页，detail-详情页

* /src/assets/：存放公共资源（图片、样式）
* /src/components/：存放公共组件
* /src/pages/**/components/：存放当前页面的组件

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


* 构建

```
npm run build
```

* 启动(`一定要先运行npm run build`)

```
npm run dev
```

### 2.开发

当前版本为ts版，如果想继续使用原生写法，修改webpack.base.js的loader配置即可。