### this
#### 函数调用
```
function a (){
    console.log(this);
}

const b = {
    a
};
a(); // this是window
b.a(); // this是b
```
this是调用函数前的对象

### new 
```
const a1 = new a();
```
this是创建的事例a1

### apply call bind

```
a.call(b);
a.apply(b);
a.bind(b)();
```
可以改变this，第一个参数是this指向

### 箭头函数

```
function a() {
    return () => {
        return () => {
            console.log(this)
        } 
    }
}
```

本身没有this，取决于最外层的函数运行的上下文，this绑定了上下文不会被改变