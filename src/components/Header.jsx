import { h1 } from 'framer-motion/client';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="leftSide">
                <h1>João Almir</h1>
            </div>
            <div className="rightSide">
                {/* Conteúdo do lado direito */}
            </div>
        </header>
    );
};

export default Header;