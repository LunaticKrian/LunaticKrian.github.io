# Golang 基础语法

---

```golang
package main // 设置当前程序的包名

//import "fmt"
import (
	"fmt"
	"time"
)

// 定义main函数
func main() {
	// golang中的表达式，加分号和不加分号都可以，建议是不加分号
	fmt.Println("Hello World")

	time.Sleep(1 * time.Second)
}
```

---

## 二、变量声明

## 1.变量

声明变量的一般形式是使用 var 关键字

```golang
package main

import "fmt"

func main() {
	// 方式一：声明变量不进行初始化，默认值
	var number int
	fmt.Println("Number is", number)

	// 方式二：根据值自行判定变量类型
	var str = "String Value"
	fmt.Println("String is", str)

	// 方法三：省略var关键字，使用:=进行变量类型推导（PS：不支持全局变量声明）
	data := "this is a data without var"
	fmt.Println("data is", data)
}
```

---

### 2.常量

常量是一个简单值的标识符，在程序运行时，不会被修改的量。常量中的数据类型只可以是布尔型、数字型（整数型、浮点型和复数）和字符串型。

```golang
const identifier [type] = value
```


#### iota

iota可以做更多事情，而不仅仅是 increment。更精确地说，iota总是用于 increment，但是它可以用于表达式，在常量中的存储结果值。



---

## 三、函数



```golang
package main

import "fmt"

// 定义函数
func function(param string) string {
	fmt.Println("Function called with param", param)
	return param
}

// Golang中的函数支持返回多个值
func multiBackFunc(param string) (string, string) {
	fmt.Println("param is", param)
	return "first return param", "second return param"
}

func main() {
	data := function("this is a data without var")
	fmt.Println("data is", data)

	returnData1, returnData2 := multiBackFunc("this is a data for multi back func")
	fmt.Println("returnData1 is", returnData1)
	fmt.Println("returnData2 is", returnData2)
}
```

---

## 四、包管理

