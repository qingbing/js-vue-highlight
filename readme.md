# 封装 vue-element-ui 的组件
封装 highlight.js 在 vue 上对代码进行高亮显示
- 代码高亮针对 pre>code 有效
- 对高亮代码添加行号标识

### ====== 版本说明 ======
- 1.0.1 : 代码高亮并添加行号
- 1.0.2 : 版本标识错误
- 1.0.3 : 代码高亮支持自定义模板，模板参考 “highlight.js/styles”

## 1. 安装
```
npm install @qingbing/vue-highlight
```

## 2. 全局引用导入，在vue的main.js中确认加入如下代码
```js
import Highlight from "@qingbing/vue-highlight";
Vue.use(Highlight);
```

## 3. vue文件中使用
### 3.1 静态html
```
<pre v-highlight><code class="language-js">var date = new Date(); </code></pre>
```


### 3.2 动态加载字段
```
# 定义字段
var highContent = '<php? echo 11;';

# html 标签加载
<pre v-highlight="highContent"><code></code></pre>
```

### 3.3 动态加载html字段
```
# 定义字段
var highContent = '<pre><code><php? echo 11;</code></pre>';

# html 标签加载
<div v-highlight v-html="highContent"></div>
```