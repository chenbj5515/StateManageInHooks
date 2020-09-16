# Hooks时代各种状态管理方案的初步比较

## 配置webpack.config.js的entry来选择你现在要看的状态管理方案的demo

```
 entry: [
    isEnvDevelopment &&
        require.resolve('react-dev-utils/webpackHotDevClient'),
    // 更改src后的目录切换到不同状态管理方案的demo
    './src/useContext/index.js'
    ].filter(Boolean),
```

## 阅读顺序

### useContext -> unstated-next -> 其他


## 参考文章
### Hooks & Mobx的使用技巧：https://zhuanlan.zhihu.com/p/138226768

## 要点总结

### 1、纯原生Hooks api只能全量更新，因此只适合用于局部的状态管理。且如果不加封装的话会把model杂糅到组件内部，降低可读性和可维护性。

### 2、unstated-next这种库是原生Hooks的简单封装（40行代码），可以用来分离model到组件外。

### 3、mobx方案下你可以写全局/局部的model，进行全局/局部的状态管理，并且可以精准更新。