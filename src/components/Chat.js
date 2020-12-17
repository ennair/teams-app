import React from 'react';
import './App.css';

/**
 * The 'Chat' component renders answers.
 */

class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          answers: [],
          answer: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({answer: event.target.value});
    }
  
    handleSubmit(event) {
        let answers = this.state.answers;
        answers.push(this.state.answer);
        this.setState({
            answers
        });
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
                {this.state.answers && this.state.answers && this.state.answers.map((answer, index) => (
                  <p key={index}>{answer}</p>
                ))}
             
            <form onSubmit={this.handleSubmit}>
                <label>
                    Answer:
                    <input type="text" value={this.state.answer} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
          </div>
      );
    }
  }

  export default Chat;