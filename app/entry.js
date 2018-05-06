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
    )
  }
};
ReactDOM.render(<SearchComponent />, document.getElementById('search'));

