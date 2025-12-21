# Golang JSON 序列化

json.Marshal（序列化）与json.Unmarshal（反序列化）

```golang
// 定义一个结构数据
type Info struct {
	Name     string `json:"name"`
	Location string `json:"location"`
}

// 初始化一个Info实体
info := Info{
    Name:     "test",
    Location: "https://www.test.com",
}
```

- 使用 `json.Marshel` 将实体对象进行序列化：

```golang
// 执行序列化，把一个实体序列化为JSON字符串
marshalJsonStr, err := json.Marshal(info)
if err != nil {
    fmt.Println("error:", err)
}
fmt.Println("序列化为JSON之后：", string(marshalJsonStr))
```

- 使用 `json.Unmarshel` 将JSON字符串反序列化为实体：

```golang
// 执行反序列化，把一个JSON字符串转换为实体
var infoUnmarshal Info
err = json.Unmarshal(marshalJsonStr, &infoUnmarshal)
if err != nil {
    fmt.Println("error:", err)
}
fmt.Println("Name: ", infoUnmarshal.Name)
fmt.Println("Location: ", infoUnmarshal.Location)
```

:::info

### 结构体Tag

Tag是结构体的元信息，可以在运行的时候通过反射的机制读取出来。Tag在结构体字段的后方定义，由一对反引号包裹起来，具体的格式如下：

```text
`key1:"value1" key2:"value2"`
```

1. 结构体tag由一个或多个键值对组成。键与值使用冒号分隔，值用双引号括起来。
2. 同一个结构体字段可以设置多个键值对tag，不同的键值对之间使用空格分隔。

:::

- **使用 JSON Tag 指定字段名称：**

序列化与反序列化默认情况下使用结构体的字段名，我们可以通过给结构体字段添加tag来指定json序列化生成的字段名。

```golang
// 使用json tag指定序列化与反序列化时的行为
type Person struct {
	Name   string `json:"name"` // 指定json序列化/反序列化时使用小写name
	Age    int64
}
```

- **使用 JSON Tag 序列化时忽略字段：**

如果你想在json序列化/反序列化的时候忽略掉结构体中的某个字段，可以按如下方式在tag中添加 `-` 。

```golang
// 使用json tag指定json序列化与反序列化时的行为
type Person struct {
	Name   string `json:"name"` // 指定json序列化/反序列化时使用小写name
	Age    int64  `json:"-"`    // 指定json序列化/反序列化时忽略此字段
}
```

- **使用 JSON Tag 序列化时忽略空值：**

当 struct 中的字段没有值时， json.Marshal() 序列化的时候不会忽略这些字段，而是默认输出字段的类型零值（例如int和float类型零值是 0，string类型零值是""，对象类型零值是 nil）。

如果想要在序列化时忽略这些没有值的字段时，可以在对应字段添加omitempty tag。

```golang
type User struct {
	Name  string   `json:"name"`
	Email string   `json:"email"`
	Hobby []string `json:"hobby"`
}

func omitemptyDemo() {
	u1 := User{
		Name: "小明",
	}
	// struct -> json string
	b, err := json.Marshal(u1)
	if err != nil {
		fmt.Printf("json.Marshal failed, err:%v\n", err)
		return
	}
	fmt.Printf("str:%s\n", b)
}
```

输出结果：

```text
str:{"name":"小明","email":"","hobby":null}
```

如果想要在最终的序列化结果中去掉空值字段，可以像下面这样定义结构体：使用 `omitempty` ：

```golang
// 在tag中添加omitempty忽略空值
// 注意这里 hobby,omitempty 合起来是json tag值，中间用英文逗号分隔
type User struct {
	Name  string   `json:"name"`
	Email string   `json:"email,omitempty"`
	Hobby []string `json:"hobby,omitempty"`
}
```

输出结果：

```text
str:{"name":"小明"} // 序列化结果中没有email和hobby字段
```

- ** `omitempty` 忽略嵌套结构体空值字段：**

```golang
type User struct {
	Name  string   `json:"name"`
	Email string   `json:"email,omitempty"`
	Hobby []string `json:"hobby,omitempty"`
	Profile
}

type Profile struct {
	Website string `json:"site"`
	Slogan  string `json:"slogan"`
}

func nestedStructDemo() {
	u1 := User{
		Name:  "小明",
		Hobby: []string{"足球", "篮球"},
	}
	b, err := json.Marshal(u1)
	if err != nil {
		fmt.Printf("json.Marshal failed, err:%v\n", err)
		return
	}
	fmt.Printf("str:%s\n", b)
}
```

匿名嵌套Profile时序列化后的json串为单层的：

```golang
str:{"name":"小明","hobby":["足球","蓝球"],"site":"","slogan":""}
```

想要变成嵌套的json串，需要改为具名嵌套或定义字段tag：

```golang
type User struct {
	Name    string   `json:"name"`
	Email   string   `json:"email,omitempty"`
	Hobby   []string `json:"hobby,omitempty"`
	Profile `json:"profile"`
}
// str:{"name":"小明","hobby":["足球","篮球"],"profile":{"site":"","slogan":""}}
```

**想要在嵌套的结构体为空值时，忽略该字段，仅添加 `omitempty` 是不够的，还需要使用嵌套的结构体指针。**

```golang
type User struct {
	Name     string   `json:"name"`
	Email    string   `json:"email,omitempty"`
	Hobby    []string `json:"hobby,omitempty"`
	*Profile `json:"profile,omitempty"`  //这里是重点
}
// str:{"name":"小明","hobby":["足球","篮球"]}
```


- **优雅处理字符串格式的数值类型：**

有时候，前端在传递来的json数据中可能会使用字符串类型的数字，这个时候可以在结构体tag中添加string来告诉json包从字符串中解析相应字段的数据：

```golang
type Card struct {
	ID    int64   `json:"id,string"`    // 添加string tag
	Score float64 `json:"score,string"` // 添加string tag
}

func intAndString() {
	jsonStr1 := `{"id": "1234567","score": "1314.52"}`
	var c1 Card
	if err := json.Unmarshal([]byte(jsonStr1), &c1); err != nil {
		fmt.Printf("json.Unmarsha jsonStr1 failed, err:%v\n", err)
		return
	}
	fmt.Printf("c1:%#v\n", c1)
}
```

