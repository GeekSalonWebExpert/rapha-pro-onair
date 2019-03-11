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

      <div class="input-field" id="tanishutoku">
        <div class="">
          <div class="number">2</div>
          <div class="label" id="tanishutoku-label">単位取得</div>
        </div>
        <div class="input-slider">
          <div class="rate-number" id="tanishutoku-value">1</div>
        　<input type="range" class="slider" id="tanishutoku-slider" name="tanishutoku" min="1" max="5" value="1" list="slider-gauge">
        </div>
      </div>

      <div class="input-field" id="content">
        <div class="">
          <div class="number">3</div>
          <div class="label" id="content-label">授業内容</div>
        </div>
        <div class="input-slider">
          <div class="rate-number" id="content-value">1</div>
          <input type="range" class="slider" id="content-slider" name="content" min="1" max="5" value="1" list="slider-gauge">
        </div>
      </div>

      <div class="input-field" id="humor">
        <div class="">
          <div class="number">4</div>
          <div class="label" id="humor-label">教授のユーモア</div>
        </div>
        <div class="input-slider">
          <div class="rate-number" id="humor-value">1</div>
          <input type="range" class="slider" id="humor-slider" name="humor" min="1" max="5" value="1" list="slider-gauge">
        </div>
      </div>

      <div class="input-field-bool" id="again">
        <div class="">
          <div class="number">5</div>
          <div class="label" id="again-label">またとりたい</div>
        </div>
          <div class="switch" id="again-switch">
            <input type="radio" name="again-choice" id="Yes" value="Yes">
            <label for="yes">はい</label>
            <input type="radio" name="again-choice" id="no" value="No">
            <label for="no">いいえ</label>
            <span class="switchFilter"></span>
          </div>
        </div>

        <div class="input-field-bool" id="attendance">
          <div class="">
            <div class="number">6</div>
            <div class="label" id="attendance-label">出席</div>
          </div>
          <div class="switch" id="attendance-switch">
            <input type="radio" name="attendance-choice" id="Yes" value="Yes">
            <label for="yes">はい</label>
            <input type="radio" name="attendance-choice" id="no" value="No">
            <label for="no">いいえ</label>
            <span class="switchFilter"></span>
          </div>
        </div>

        <div class="input-field-bool" id="test">
          <div class="">
            <div class="number">7</div>
            <div class="label" id="test-label">テスト</div>
          </div>
          <div class="switch" id="test-switch">
            <input type="radio" name="test-choice" id="Yes" value="Yes">
            <label for="yes">はい</label>
            <input type="radio" name="test-choice" id="no" value="No">
            <label for="no">いいえ</label>
            <span class="switchFilter"></span>
          </div>
        </div>

        <div class="input-field-bool" id="report">
          <div class="">
            <div class="number">8</div>
            <div class="label" id="report-label">レポート</div>
          </div>
          <div class="switch" id="report-switch">
            <input type="radio" name="report-choice" id="Yes" value="Yes">
            <label for="yes">はい</label>
            <input type="radio" name="report-choice" id="no" value="No">
            <label for="no">いいえ</label>
            <span class="switchFilter"></span>
          </div>
        </div>

      <div class="comment">
        <div class="number">9</div>
        <div class="label">コメント</div>
        <input class="input-box" id="input-comment" type="text" name="" value="詳細情報を入力（）"/>
      </div>

      <div class="grade">
        <div class="number">10</div>
        <div class="label">自分の成績</div>
        <input class="input-box" id="input-grade" type="text" name="" value="A">
      </div>
      <button id="submit-button" type="button" name="button">提出</button>

      </div>
    </div>

    );
  }
}

export default About
