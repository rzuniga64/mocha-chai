import jsdom from 'jsdom';
import jquery from 'jquery';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like a browser in the command line
global.document = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
global.window = global.document.window;
const $ = jquery(global.window);

/**
 *  Build 'renderComponent' helper that should render a given react class.
 *  The parameters allow our ComponentClass to get access to the data we expecting to get out of the Redux store.
 *  @param ComponentClass
 *  @param props, any props that should be placed onto the component class
 *  @param state, any application state that we want to inject into our redux store
 *  @returns {*|jQuery|HTMLElement}
 */
function renderComponent(ComponentClass, props, state) {

    // hold a reference to the rendered component of our instance.
    // state parameter is some initial state which is a list of comments.
    const componentInstance = ReactTestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    // Get a reference to the actual DOM element and wrap with a jquery call so we can get access to matchers in
    // chai-jquery. Produces HTML.
    return $(ReactDOM.findDOMNode(componentInstance));
}

/**
 * Build helper for simulating events.
 * To get access to the element inside the fuction just use 'this'.
 * @param eventName, the event we care about.
 * @param value, if we want to set a value on the element itself.
 */
$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
