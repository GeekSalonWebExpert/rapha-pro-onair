import React, { Component } from 'react'
import './About.css';

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "professors": [
        {
          "id": 0,
          "name": "バカぽんのパパ",
          "university":"バカ田大学",
          "undergraduate":"バ科",
          "className":"算数教室"
        }
       ],
    }
  }

  fetchData(){
    fetch("http://localhost:3001/data") // データを取得しに行く
    .then( response => response.json() ) // json型のレスポンスをオブジェクトに変換する
    .then( json => { // オブジェクトに変換したレスポンスを受け取り、
      this.setState({ data: json }) // Stateを更新する
    })
  }

  componentWillMount(){
      this.fetchData()
    }

  render() {
    return (
      <div className="App">
       <header>
        <img src="images/professorsgrades.logo.png" class="logo-image" />
        </header>

    <div class="" id="info-board">
      <p id="rate-a-professor">教授を評価する</p>
      <div class="rate-underbar"></div>
      <div class="professor-name">
        {this.props.match.params.name}
      </div>
      <div class="school-name">慶應義塾大学</div>
      <div class="faculty-name">経済学部</div>
    </div>

    <div class="info-detail">
      <div class="class-name">
        <div class="number">1</div>
        <div class="label" id="input-label">授業名</div>
        <input input-box="class" id="input-class" type="text" name="" value="授業名を入力"/>
      </div>
      <div class="tanishutoku">
        <div class="number">2</div>
        <div class="label" id="tanishutoku-label">単位取得</div>
        <div class="slider" id="tanishutoku-slider"></div>
      </div>
      <div class="content">
        <div class="number">3</div>
        <div class="label" id="content-label">授業内容</div>
        <div class="slider" id="content-slider"></div>
      </div>
      <div class="humor">
        <div class="number">4</div>
        <div class="label" id="humor-label">教授のユーモア</div>
        <div class="slider" id="humor-slider"></div>
      </div>
      <div class="again">
        <div class="number">5</div>
        <div class="label" id="again-label">またとりたい</div>
        <div class="slider" id="againslider"></div>
      </div>
      <div class="attendance">
        <div class="number">6</div>
        <div class="label" id="attendance-label">出席</div>
        <div class="slider" id="attendance-slider"></div>
      </div>
      <div class="test">
        <div class="number">7</div>
        <div class="label" id="test-label">テスト</div>
        <div class="slider" id="test-slider"></div>
      </div>
      <div class="report">
        <div class="number">8</div>
        <div class="label" id="report-label">レポート</div>
        <div class="slider" id="report-slider"></div>
      </div>
      <div class="comment">
        <div class="number">9</div>
        <div class="label">コメント</div>
        <input class="input-box" id="input-comment" type="text" name="" value="詳細情報を入力（）"/>
      </div>
    </div>
    </div>
      
    );
  }
}

export default About


