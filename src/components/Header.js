import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import Menu from './Menu';
class Header extends Component {

    render() {
        return (
            <header id="header">
                <div className="center">
                    {/*<!-- LOGO -->*/}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>
                    <Menu />

                    {/*--LIMPIAR FLOTADOS--*/}
                    <div className="clearfix"></div>
                </div>
            </header>);
    }
}
export default Header;