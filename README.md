# Hooks时代各种状态管理方案的初步比较

## 在webpack.config.js的entry配置中更改入口

### 

```
 entry: [
    isEnvDevelopment &&
        require.resolve('react-dev-utils/webpackHotDevClient'),
    // 更改src后的目录切换到不同状态管理方案的demo
    './src/useContext/index.js'
    ].filter(Boolean),
```
