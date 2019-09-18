import React from 'react';
import {FullPreviewSection} from '../Preview/full-preview-section';
import './free.css';

export class Free extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      emailFocused: false,
      emailSent: false,
      emailLoading: false,
      emailError: false
    };
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      email: '',
      emailFocused: false,
      emailSent: false,
      emailLoading: false,
      emailError: false
    });
  }

  onInputFocus() {
    this.setState({
      emailFocused: true
    });
  }

  onInputBlur() {
    this.setState({
      emailFocused: false
    });
  }

  onSubmitEmail() {
    this.setState({
      emailLoading: true
    });
    const fetchObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: this.state.email})
    };
    fetch('http://milkicons.com/api/free-email', fetchObj)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.message === 'Invalid Email') {
            this.setState({
              emailError: true,
              emailLoading: false
            });
          } else {
            this.setState({
              emailSent: true,
              emailLoading: false
            });
          }
        }
      )
  }

  onUpdateEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  render() {
    let inputContainerClasses = 'free-input-container';
    if (this.state.emailFocused) {
      inputContainerClasses += ' focused';
    }

    let emailBlock;
    if (this.state.emailLoading) {
      emailBlock = (
        <div className="loading">
          <img src="/gif/preloader.gif"/>
        </div>
      );
    } else if (this.state.emailError) {
      emailBlock = (
        <div className="email-sent error">
          Something went wrong.
          <br/>
          <button onClick={this.resetForm}>Try Again</button>
        </div>
      );
    } else if (this.state.emailSent) {
      emailBlock = (
        <div className="email-sent">
          Welcome to the milk icons fam! Your icons are on their way to your inbox.
        </div>
      );
    } else {
      emailBlock = (
        <div className={inputContainerClasses}>
          <input className="free-input"
                 placeholder="Email"
                 onFocus={this.onInputFocus}
                 onBlur={this.onInputBlur}
                 onChange={evt => this.onUpdateEmail(evt)}
                 value={this.state.email}
          />
          <button className="free-btn"
                  onClick={this.onSubmitEmail}>Get Icons
          </button>
        </div>
      );
    }

    return (
      <div className="free page">
        <div className="container">

          <section className="title-section">
            <h1>Over 1,000 Free Icons</h1>
            <p className="subtext">Enter your email to receive the free pack with lifetime updates!</p>

            {emailBlock}
          </section>

          <FullPreviewSection></FullPreviewSection>

        </div>
      </div>
    );
  }
}
