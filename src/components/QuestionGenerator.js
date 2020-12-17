import React from 'react';
import './App.css';
import Question from './Question.js'

/**
 * The 'QuestionGenerator' component renders a question.
 */
import data from './data/questions.json';


 class QuestionGenerator extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       seconds: {}
//     }
//   }

//   render() {
//     Date.now();

//     let question = data.questions[1].value;

//     return (
//         <Question question={question}/>
//     );
//   }


  constructor(props) {
    super(props);
    this.state = {
        question: data.questions[0].value
    };
  }

  changeQuestion() {
    this.setState(state => ({
      question: data.questions[Math.floor(Math.random() * 10)].value
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeQuestion(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

//   formatTime(secs) {
//     let hours   = Math.floor(secs / 3600);
//     let minutes = Math.floor(secs / 60) % 60;
//     let seconds = secs % 60;
//     return [hours, minutes, seconds]
//         .map(v => ('' + v).padStart(2, '0'))
//         .filter((v,i) => v !== '00' || i > 0)
//         .join(':');
//   }

  render() {
    return (
      <div>
          <Question question={this.state.question}/>
      </div>
    );
  }


}
export default QuestionGenerator;