import React from 'react';
import './App.css';

/**
 * The 'Chat' component renders answers.
 */

class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          answer: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({answer: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.addAnswer(this.state.answer);
      this.setState({
          answer: ''
      });
      event.preventDefault();
    }
  
    render() {
      return (
          <div className="chat">
                {this.props.answers && this.props.answers && this.props.answers.map((answer, index) => (
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