import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Link } from 'react-router-dom'
// import About from './About'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "professor": {
        "id": 0,
        "name": "バカぽんのパパ",
        "university":"バカ田大学",
        "undergraduate":"バ科",
        "className":"算数教室"
      },
      page: "top",
      // name:"toya"
    }
  }

  fetchData(){
    fetch("http://localhost:3001/professors/1") // データを取得しに行く
    .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
    .then( json => { // オブジェクトに変換したレスポンスを受け取り、
      this.setState({ professor: json }) // Stateを更新する
    })
  }

  componentWillMount(){
      this.fetchData()
      console.log()
    }

  render() {
    return (
      <div className="App">
        <header>
        <img src="images/professorsgrades.logo.png" class="logo-image" />
        </header>

        {/* <About name={this.state.name}/> */}

        <div className="below-header">
          <div className="information-board">
            <div className="first-block">
            　<h3 className="professor-name">
                      <div className="profName">
                      <div className="professor" key={ this.state.professor.id }>{ this.state.professor.name }</div>
                  </div>
              </h3>
                      <p className="school">
                      <div className="profUniv">
                      <div className="professor" key={ this.state.professor.id }>{ this.state.professor.name }</div>
                </div>
              </p>
              <p className="department profUNderGrad">
              <div className="professor" key={ this.state.professor.id }>{ this.state.professor.name }</div>
              </p>
              <button type="button" name="button">
                <div>
                  <Link to={'/about/'+this.state.professor.name}>この教授を評価する</Link>
                </div>
              </button>
            </div>
            <div className="second-block">
              <h6 className="sogohyoka">総合評価</h6>
              <h1 className="total-rate">4.5</h1>
            </div>
            <div className="bar">
            </div>
            <div className="third-block">
              <h6 className="tanishutoku">単位取得</h6>
              <h1 className="tanishutoku-rate">4.5</h1>
              <h6 className="matatoritai">またとりたい</h6>
              <h1 className="matatoritai-rate">90</h1>
              <h1 className="matatoritai-percent">%</h1>
            </div>
          </div>


          <table className="rating-list">
          <tbody>
            <tr>
              <td className="list-label" id="rating-label">
                <p className="label-letter">評価</p>
                <img src="images/expand-arrow.png" className="label-letter" id="expand-arrow" />
              </td>
              <td className="list-label" id="class-label">
                <p className="label-letter">授業</p>
                <img src="images/expand-arrow.png" className="label-letter" id="expand-arrow" />
              </td>
              <td className="list-label" id="comment-label">
                <p className="label-letter">コメント</p>
                <img src="images/expand-arrow.png" className="label-letter" id="expand-arrow" />
              </td>
              <td className="box" id="rating-box">
                <div className="date-bar">
                  <h6 className="date" id="year">2019</h6>
                  <h6 className="date">/</h6>
                  <h6 className="date" id="month">2</h6>
                  <h6 className="date">/</h6>
                  <h6 className="date" id="day">28</h6>
                </div>
                {/* <div className="rating-bar">
                  <img src="images/smile2.png" className="ratebar-content" id="face-image" />
                  <p className="ratebar-content" id="rate-text">Excellent</p>
                </div> */}
                <div className="rate-number">4.5</div>
              </td>
              <td className="box" id="class-box">
                <div className="classname-label">
                <div className="profClass">
                <div className="professor" key={ this.state.professor.id }>{ this.state.professor.name }</div>
                  </div>
                </div>
                  <div className="inside-classbox">
                    <div className="rsult-list">
                      <div className="credit" id="tanishutoku-label">単位取得:</div>
                      <div className="credit" id="tanishutoku-rate">0.0</div>
                    </div>
                    <div className="result-list">
                      <div className="content" id="content-label">授業内容:</div>
                      <div className="content" id="content-rate">0.0</div>
                    </div>
                    <div className="result-list">
                      <div className="humor" id="humor-label">教授のユーモア:</div>
                      <div className="humor" id="humor-rate">0.0</div>
                    </div>
                    <div className="result-list">
                      <div className="again" id="again-label">またとりたい:</div>
                      <div className="again" id="again-bool">はい</div>
                    </div>
                    <div className="result-list">
                      <div className="attendance" id="attendance-label">出席:</div>
                      <div className="attendance" id="attendance-bool">はい</div>
                    </div>
                    <div className="result-list">
                      <div className="test" id="test-label">テスト:</div>
                      <div className="test" id="test-bool">あり</div>
                    </div>
                    <div className="result-list">
                      <div className="report" id="report-label">レポート:</div>
                      <div className="report" id="report-bool">あり</div>
                    </div>
                  </div>
                </td>
                <td className="box" id="comment-box">
                  <p className="comment">授業は面白いよ。</p>
                </td>
              </tr>
              </tbody>
            </table>

          <footer>
          </footer>

          </div>
           

        </div>
      
    );
  }
}

export default App;