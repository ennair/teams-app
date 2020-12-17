import React from 'react';
import './App.css';
import Question from './Question.js'

/**
 * The 'QuestionGenerator' component renders a question.
 */
import data from './data/questions.json';


 class QuestionGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            question: data.questions[0].value
        };
        var contentful = require("contentful");
        this.client = contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: "y1b6nxbk9ebk",
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: "wRs4nqUwJmy6FLbdAgcC_ndLTxY4Fum2XrK0SWjPd8o"
        });
    }

    changeQuestion() {
        this.setState(state => ({
            question: this.state.questions[Math.floor(Math.random() * this.state.questions.length)].fields.value
        }));
    }

    componentDidMount() {
        this.client.getEntries({
            'content_type': 'question',
            'include': 2
        }).then((entry) => {
            this.setState(state => ({
                questions: entry.items
            }))
            console.log(entry.items[0]);
        });
        this.interval = setInterval(() => this.changeQuestion(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

  render() {
    return (
      <div>
          <Question question={this.state.question}/>
      </div>
    );
  }


}
export default QuestionGenerator;