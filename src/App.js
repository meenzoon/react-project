import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Page from './containers/Page';
import Previous from './containers/Previous';
import Next from './containers/Next';

class App extends Component {   

    componentWillReceiveProps() {
        this.props.setHeaderVisibility(true);

        console.log(this.props);
    }

    render() {
        return (
            <Router>
                <div>
                    {this.props.visible && <Header />}
                    <div>
                        <Switch>
                            <Route path="/page" component={Page} />
                            <Route path="/previous" component={Previous} />
                            <Route path="/next" component={Next} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        visible: state.header.visible
    };
};

const mapDispatchToProps = dispatch => {
    // ActionType에서 설정한 이름 그대로 사용
    //return bindActionCreators(actions, dispatch);
    return {
        setHeaderVisibility: visible => {
            dispatch(actions.setHeaderVisibility(visible));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
