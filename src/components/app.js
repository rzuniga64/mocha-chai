import React from 'react';
import { Component } from 'react';
import './app.css';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <CommentBox />
                    <CommentList />
                </div>
            </div>
        );
    }
}
