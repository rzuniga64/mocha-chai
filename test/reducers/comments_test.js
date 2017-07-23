import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {

    /**
     *  We are not going to pass in any state or any action and should return empty array. When the switch looks for
     *  an action type it will off the type property on this empty object which is going to be undefined.
     */
    it('handles action with unknown type', () => {
        expect(commentReducer(undefined, {})).to.eql([]);
    });

    /**
     *  We craft an action ahead of time and pass it into the Reducer with some default state. We expect that whatever
     *  gets returned from the reducer is the state we expect. If call the comment Reducer with an empty array and and
     *  an Action of type SAVE_COMMENT with a payload of ‘new comment’, ‘new comment’ should be added into the array
     */
    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'new comment' };
        expect(commentReducer([], action)).to.eql(['new comment']);
    });
});
