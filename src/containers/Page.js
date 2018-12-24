import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Link } from 'react-router-dom';

class Page extends Component {
    componentDidMount() {
        this.props.setHeaderVisibility(false);
    }

    render() {
        return (
            <div>
                존재하지 않는 페이지입니다.
                <Link to="/next">뒤로 가기</Link>
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
