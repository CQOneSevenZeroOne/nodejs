# GET请求和POST请求

php的get和post请求的写法
```php
$_GET["name"]
$_POST["name"]
```

nodejd的GET请求写法
```js
req.url//   /?name=laoyao&skill=js
url.parse(req.url)//   name=laoyao&skill=js
querystring.parse(query)  // {name:laoyao,skill:ps}
```

nodejd的POST请求写法
```js
var post = '';

// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
req.on('data', function (chunk) {
    post += chunk;
});

// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
req.on('end', function () {
    console.log(post)
    post = querystring.parse(post);
    console.log(post)
    res.end("success")
});
```

