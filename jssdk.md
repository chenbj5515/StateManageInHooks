#### 1. sdk简介

sdk主要提供**方法**和**事件**来完成需求。

sdk提供**方法**来进行需要的操作（如初始化直播应用、发送讨论区消息等）和数据（如大小班数据等）获取

提供**事件**监听来在相应节点做必要的工作（如收到信令需要弹出红包、推课弹窗等场景）

#### 2. sdk接口

1. 初始化方法，用于初始化直播应用
	
```
// selector传入dom选择器和教室相关参数（room_id、user_number等），直播的dom挂载到相应的dom上面，并进行初始化（进教室）
sdk.init(selector = '', params) {};
```

2. 添加特定元素的接口

```
// 添加业务方元素，如评价按钮等
sdk.addNode('pkbar', node);

// 
sdk.addListener('survey_button_click', callback);
```

3. 信令回调的接口

```
// 收到信令时候做一些处理，如收到推题、推课、互动题等
sdk.addListener('iframe_operation_survey', callback);
```

4. 其他
	1. 数据，例如大小班状态等等
		
		```
		// 是否是在大班
		sdk.getRoomData().isSuperClass;
		```
		
	2. 其他事件，例如上下课等等

		```
		// 上课事件
		sdk.addListener('class_start', callback);
		```
	
	3. 特定业务相关接口

		```
		// 发送讨论区消息
		sdk.sendLocalMessage({content: '您已成功签到！'});
		```

