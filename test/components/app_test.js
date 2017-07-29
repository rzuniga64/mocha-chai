import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';
import {beforeEach} from 'mocha';
import jsdomify from 'jsdomify';

let React;

// Use 'describe' to group together similar tests
describe('App', () => {

    let component;

    beforeEach(() => {
        jsdomify.create();
        React = require('react');
        component = renderComponent(App);
    });

    it('shows a comment box', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('shows a comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    });
});
