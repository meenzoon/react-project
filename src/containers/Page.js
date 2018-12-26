import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Link } from 'react-router-dom';
class Page extends Component {
    constructor(props) {
        super(props);

        this.moveBackPage = this.moveBackPage.bind(this);
    }

    componentDidMount() {
        this.props.setHeaderVisibility(false);
    }

    componentWillUnmount() {
        this.props.setHeaderVisibility(true);
    }

    moveBackPage() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                존재하지 않는 페이지입니다.
                <button onClick={this.moveBackPage}>뒤로 가기</button>
                <Link to="/">홈</Link>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    // ActionType에서 설정한 이름 그대로 사용
    //return bindActionCreators(actions, dispatch);
    return {
        setHeaderVisibility: visible => {
            dispatch(actions.setHeaderVisibility(visible));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Page);
