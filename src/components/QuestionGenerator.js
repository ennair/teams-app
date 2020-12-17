import React from 'react';
import './App.css';
import Question from './Question.js'

/**
 * The 'QuestionGenerator' component renders a question.
 */
import data from './data/questions.json';

// Whether the question should start updating at certain time of day
var hasCertainStartTime = true;
// Next update of the question:
//               h   m
var firstTime = [16, 37];
// interval in millieseconds update of the question
var interval = 1000;

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

    calculateIntervalNextDateUpdate() {
        var currentDate = new Date();
        var nextDate = new Date(currentDate.getFullYear(), 
        currentDate.getMonth(), currentDate.getDate(), 
        firstTime[0], firstTime[1], 0, 0);

        nextDate = nextDate.getTime();

        // Calculate time in milliseconds until next start time
        if (currentDate.getHours() > firstTime[0] ||
        currentDate.getMinutes() >= firstTime[1]) {
            nextDate = nextDate + 86400000;
        }

        return nextDate - currentDate.getTime();
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
        if (hasCertainStartTime) {
            var nextUpdate = this.calculateIntervalNextDateUpdate();
            this.timeout = setTimeout(() => this.changeQuestion(), nextUpdate);
            this.timeout = setTimeout(() => this.interval = setInterval(
                () => this.changeQuestion(), interval), nextUpdate);
        } else {
            this.interval = setInterval(() => this.changeQuestion(), interval);
        }
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