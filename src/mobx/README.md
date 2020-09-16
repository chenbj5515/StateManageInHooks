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

