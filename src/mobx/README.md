使用mobx会用到装饰器，装饰器是ES7的新特性，目前需要babel来进行转译，需要安装一个babel插件，并且修改VSCODE配置来避免标红

## babel插件

### npm i @babel/plugin-proposal-decorators

### 在package.json中的babel下配置

```
"plugins": [
    [
        "@babel/plugin-proposal-decorators",
        {
            "legacy": true
        }
    ]
]
```

## VSCODE配置

如果你安装好了插件但使用装饰器的代码仍然标红，那需要commmand + ,打开VSCODE配置页，搜索"decoratorsBeforeExport"然后更改这个配置。

## 机制猜测

在最上层用useRef创建mutable的对象，对象中有state和修改state的方法。需要共享state的组件就都引这个ref，然后通过ref中的方法修改就完了，修改后其他组件再读就能读到最新值。
当然修改ref对象中的state不会引发rerender,所以还需要使用useObserver api来包裹组件return的JSX，这意味着组件会观察其中的共享的state，当state被修改了，那么就会自动触发整个子树的rerendr。
