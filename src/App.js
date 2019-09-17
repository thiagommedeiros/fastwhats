import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super()
    
    this.state = {
      phoneNumber: '+'
    }

    this.linkRef = React.createRef()
  }

  createCall () {
    this.linkRef.current.click()
  }

  changePhone (e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  render() {
    const { phoneNumber } = this.state
    return (
      <div className="container">
        <img 
          src={logo}
          className="logo"
          alt="FastWhats"
        />
        <h1>Fastwhats</h1>
        <p>
          Inicie uma conversa com você mesmo ou com outra pessoa sem precisar salvar na agenda.
        </p>
        <div className="input-wrap">
          <input 
            className="phoneNumber" 
            type="number"
            placeholder="+5511999999999"
            onChange={this.changePhone.bind(this)}
          />
        </div>
        <button onClick={this.createCall.bind(this)}>
          Criar conversa
        </button>
        {/*<button>Indicar o FastWhats</button>*/}
        <a
          className="hidden"
          ref={this.linkRef}
          href={`intent://send/${phoneNumber}#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end`}
        ></a>
        <div className="createdBy">
          <a 
            href="http://github.com/thiagommedeiros" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Created by Thiago Medeiros
          </a>
        </div>
      </div>
    );
  }
}

export default App;
