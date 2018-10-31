import React, { Component } from 'react'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading">About Me</h2>
            </div>
            <div className="col-md-8">
              <p>現在、サーバーサイドエンジニア4年目。
                「世界中の人々が喜ぶサービスをつくりたい」と思い
                2014年に人材業界の営業から思い切ってWEB系エンジニアにキャリアチェンジ。
                要件定義から開発・テスト・セキュリティ監査まで全て対応。
                とにかく「決めたゴールに突き進む突破力」が武器。
                友人にも「バルサみたいだな」と言われるくらいです。
                主にサーバーサイドを担当しておりますが
                技術に関しては好き嫌いせずに勉強も兼ねて、比較的なんでも触ってます。
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
