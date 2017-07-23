import React from 'react';
import { connect } from 'react-redux';

/**
 * The comment list will get the list of comments from the application state.
 * So the CommentList component will be a container.
 * @param props
 * @returns {XML}
 * @constructor
 */
const CommentList = (props) => {
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

    return (
        <ul className="comment-list">{list}</ul>
    );
};

/**
 * We will need a Reducer for comments.
 * @param state
 * @returns {{comments: (*|Array|boolean|module.exports.comments|{type, default, description})}}
 */
function mapStateToProps(state) {

    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
