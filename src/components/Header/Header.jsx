import React from 'react';

function Header(props) {
    return (
        <div className="container">
            <header>
                <span class="material-icons-outlined">account_circle</span>
                <h1>Despesas</h1>
                <span class="material-icons-outlined-">menu</span>
            </header>
        </div>
    );
}

export default Header
