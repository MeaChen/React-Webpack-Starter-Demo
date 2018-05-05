import React from 'react';
import ReactDOM from 'react-dom';
import style2 from './app.css';

class SearchComponent extends React.Component{
  render() {
    return (
      <div className={style2.search}>
        <input type="text" className={style2.search_key} value="站内搜索" />
        <input type="submit" className={style2.submit} value="搜索" />
      </div>
      
      /*<h1 className={style2.test}> Hello </h1>*/
    )
  }
};
// 你的第一个组件
class FirstTouch extends React.Component{
  render() {
    return (
      <div>
        <h1>Hello AMAZEUI-TOUCH</h1>
        <Button>first amazeui-touch touch</Button>
      </div>
    )
  }
};

// 渲染, 当然你还需要一个 html来加载打包好的文件，手动创建一个就好。
ReactDOM.render(<SearchComponent />, document.getElementById('search'));

