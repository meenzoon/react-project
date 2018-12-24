import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/page" className="Header-Nav">
                홈
            </Link>
            <Link to="/previous" className="Header-Nav">이전</Link>
            <Link to="/next" className="Header-Nav">다음</Link>
        </div>
    );
};
export default Header;
