import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';
import {beforeEach} from 'mocha';
import jsdomify from 'jsdomify';

let React;

describe('CommentList', () => {

    let component;

    beforeEach(() => {

        jsdomify.create();
        React = require('react');
        const props = { comments: ['New Comment', 'Other New Comment'] };
        // props parameter serves as some initial data that we are going to push into our application level state.
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component).to.contain('New Comment');
        expect(component).to.contain('Other New Comment');
    });
});
