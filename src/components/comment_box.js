import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

/**
 *  The official docs form connect it recommends creating a function called mapDispatchToProps. We are going to use a
 *  shortcut. We are going to import * as actions from '../actions'. This will import all the Action Creators from our
 *  actions file and we save them in a variable called 'actions'. Now we can pss in the entire 'actions' object instead
 *  of the function mapDispatchToProps. By passing this entire actions object it will automatically bind all of our
 *  Action Creators to the CommentBox container. So now we have access to all of our action creators inside of
 *  CommentBox as on this.props. Now we need to call our Action Creator and pass it the current comments inside our
 *  handleSubmit function.
 */
class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = { comment: '' };
  }

  handleChange(event) {
        this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
        event.preventDefault();

        // the action creator
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
  }

    /**
     *  User enters a comment in the text area. When the Submit Comment button is pressed the text area is cleared.
     * @returns {XML}
     */
  render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
                <h4>Add a comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange.bind(this)} />
                <div>
                    <button action="submit">Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);
