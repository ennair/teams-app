import React from 'react';
import './App.css';

/**
 * The 'Question' component renders the question.
 */

export default function Question({ question }) {
    return(
        <div class="question">
            <h1>{question}</h1>
        </div>
    );
};