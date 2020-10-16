## callback当然是局部状态管理用到的方案
## 说白了就是把方法从父组件传到子组件，这方法就叫做callback
## callback通常并不是一个好主意，原因有二。
## callback通常会下发一个set方法让子组件可以更改父组件的状态
## 1.其他组件修改自身的状态应该是被约束的，不应该这样随意更改，推荐使用useReducer，下发dispatch（而不是callback）给子组件，让子组件只能用父组件规定的动作修改状态
## 2.callback直接传会导致整个子树无法缓存，你必须用useCallback将callback包裹起来才能解决问题
