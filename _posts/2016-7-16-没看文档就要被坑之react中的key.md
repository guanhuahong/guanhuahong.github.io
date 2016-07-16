没看文档就要被坑之react中的key
=============================================================

`文件: Head.react.js`

```jsx
import React from 'react';
import { Link } from 'react-router';

var NavItem = React.createClass({
    render() {
        const { title, url, className } = this.props;
        return <li className={className}><Link to={url}>{title}</Link></li>;
    }
})

export default React.createClass({
    render () {
        const modules = this.props.modules;
        return (
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    {modules.map(function(module, index) {
                        const { key, name } = module;
                        const to = '/grid/' + key;
                        return <NavItem url={to} title={name}/>;
                    })}
                </ul>
            </div>
        );
    }
});
```

这是一个简单的HEADER模块，接受`modules`数据生成导航链接。这个简单的代码会报一下警告

```
warning.js:44Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `Head.react`. See https://fb.me/react-warning-keys for more information.
    in NavItem (created by Head.react)
    in Head.react (created by CMSApp.react)
    in div (created by CMSApp.react)
    in CMSApp.react (created by RouterContext)
    in RouterContext (created by Router)
    in Routerwarning @ warning.js:44
```

看到警告我一直处于茫然的状态，显示给代码加上Key

```jsx
import React from 'react';
import { Link } from 'react-router';

var NavItem = React.createClass({
    render() {
        const { key, title, url, className } = this.props;
        return <li key={key} className={className}><Link to={url}>{title}</Link></li>;
    }
})

export default React.createClass({
    render () {
        const modules = this.props.modules;
        return (
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    {modules.map(function(module, index) {
                        const { key, name } = module;
                        const to = '/grid/' + key;
                        return <NavItem key={key} url={to} title={name}/>;
                    })}
                </ul>
            </div>
        );
    }
});
```

再次警告

```
warning.js:44 Warning: NavItem: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)
```

没办法了，只好翻译一下

```
warning.js：44警告：的NavItem：`key`不是一个道具。试图访问它将导致`undefined`返回。如果您需要到子组件内访问相同的值，你应该把它作为一个不同的道具。 （https://fb.me/react-special-props）
```

尼玛的，NavItem不能访问`Key`这个参数。修改失败，只好死死气去查文档关于`Key`方面的，以下内容摘录自[reactjs.cn](http://reactjs.cn/react/docs/multiple-components.html)

动态子级
----------------------------------------------------------------
如果子组件位置会改变（如在搜索结果中）或者有新组件添加到列表开头（如在流中）情况会变得更加复杂。如果子级要在多个渲染阶段保持自己的特征和状态，在这种情况下，你可以通过给子级设置惟一标识的 key 来区分。

```jsx
  render: function() {
    var results = this.props.results;
    return (
      <ol>
        {results.map(function(result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
    );
  }
```

当 React 校正带有 key 的子级时，它会确保它们被重新排序（而不是破坏）或者删除（而不是重用）。 务必 把 key 添加到子级数组里组件本身上，而不是每个子级内部最外层 HTML 上：

```jsx
// 错误！
var ListItemWrapper = React.createClass({
  render: function() {
    return <li key={this.props.data.id}>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.results.map(function(result) {
          return <ListItemWrapper data={result}/>;
        })}
      </ul>
    );
  }
});

// 正确 :)
var ListItemWrapper = React.createClass({
  render: function() {
    return <li>{this.props.data.text}</li>;
  }
});
var MyComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.results.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});
```

也可以传递 object 来做有 key 的子级。object 的 key 会被当作每个组件的 key。但是一定要牢记 JavaScript 并不总是保证属性的顺序会被保留。实际情况下浏览器一般会保留属性的顺序，除了 使用 32位无符号数字做为 key 的属性。数字型属性会按大小排序并且排在其它属性前面。一旦发生这种情况，React 渲染组件的顺序就是混乱。可能在 key 前面加一个字符串前缀来避免：

```jsx
  render: function() {
    var items = {};

    this.props.results.forEach(function(result) {
      // 如果 result.id 看起来是一个数字（比如短哈希），那么
      // 对象字面量的顺序就得不到保证。这种情况下，需要添加前缀
      // 来确保 key 是字符串。
      items['result-' + result.id] = <li>{result.text}</li>;
    });

    return (
      <ol>
        {items}
      </ol>
    );
  }
```

以上内容摘录自[reactjs.cn](http://reactjs.cn/react/docs/multiple-components.html)

好了这属于动态子集，`Key`必须在循环生产节点的时候添加`Key`，而不是在子类中添加`Key`。

终极完整版
------------------------------

```jsx
import React from 'react';
import { Link } from 'react-router';

var NavItem = React.createClass({
    render() {
        const { title, url, className } = this.props;
        return <li className={className}><Link to={url}>{title}</Link></li>;
    }
})

export default React.createClass({
    render () {
        const modules = this.props.modules;
        return (
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    {modules.map(function(module, index) {
                        const { key, name } = module;
                        const to = '/grid/' + key;
                        return <NavItem key={key} url={to} title={name}/>;
                    })}
                </ul>
            </div>
        );
    }
});
```