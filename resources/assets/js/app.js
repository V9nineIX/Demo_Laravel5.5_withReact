
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');

import React from  'react';
import ReactDOM from 'react-dom';
import { Router , Route ,IndexRoute, browserHistory } from 'react-router';
//import Example from  './components/Example';
import Master from './components/Master';
import FormItem from './components/FormItem';
import DisplayItems  from './components/DisplayItems';



if (document.getElementById('root')) {
    ReactDOM.render( 
            <Router history={browserHistory}>
 
                <Route path="/" component={Master} >
                  <IndexRoute component={DisplayItems}/>
                    <Route path="/create" component={FormItem} />
                    <Route path="/dispaly" component={DisplayItems} />
                    <Route path="/edit/:itemId" component={FormItem} />
                </Route>
            </Router>
        ,document.getElementById('root'));
}
