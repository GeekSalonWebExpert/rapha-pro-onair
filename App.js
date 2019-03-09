import React, { Component } from 'react';
import './stylesheet';
// import console = require('console');

class App extends Component {
    constructor() {
      super()
      this.state = {
        data: [
          {
            id: 1,
            body: "とりあえず表示してみる"
          },
          {
            id: 2,
            body: "私たち、いずれ書き換えられる運命"
          }
        ]
      }
    }

    componentWillMount(){
        this.fetchData()
      }
    
      fetchData(){
        fetch("http://localhost:3001/data") // データを取得しに行く
        .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
        .then( json => { // オブジェクトに変換したレスポンスを受け取り、
          this.setState({ data: json }) // Stateを更新する
        })
      }
  
    render() {
      return (
        <div className="App">
          <div className="dataList">
          {
            this.state.data.map( data => {
                return <div className="data" key={ data.id }>{ data.body }</div>
            })
          }
          </div>
        </div>
      );
    }
  }
  
  export default App;