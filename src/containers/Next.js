import React, { Component } from 'react';
import './Next.css';

const propTypes = {};

const defaultProps = {};

class Next extends Component {
    render() {
        return (
            <div id="Next">
                <div className="Next1">Next1</div>
                <div className="Next2">Next2</div>
                <div className="Next3">Next3</div>
            </div>
        );
    }
}

Next.propTypes = propTypes;

Next.defaultProps = defaultProps;

export default Next;
