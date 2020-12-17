// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import QuestionGenerator from './QuestionGenerator.js'
import Chat from './Chat.js'
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * The 'GroupTab' component renders the main tab content
 * of your app.
 */
class Tab extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      context: {},
      answers: [],
    }
  }

  clearAnswers(){
    this.setState({
      answers: []
    });
  }
  addAnswer(answer){
    let answers = this.state.answers;
    answers.push(answer);
    this.setState({
        answers: answers,
    });
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context
      });
    });
    // Next steps: Error handling using the error object
  }

  render() {
      return (
      <div className="tab">
        <QuestionGenerator clearAnswers={this.clearAnswers.bind(this)} />
        <Chat answers={this.state.answers} addAnswer={this.addAnswer.bind(this)} />
      </div>
      );
  }
}
export default Tab;