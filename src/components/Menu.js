import React,{Component} from "react";
import {NavLink} from 'react-router-dom';
class Menu extends Component{

    render(){
        return (<nav id="menu">
                <ul>
                    <li>
                        <NavLink to='/Home' activeClassName="active">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Blog' activeClassName="active">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/formulario' activeClassName="active">Formulario</NavLink>
                    </li>
                    <li>
                        <NavLink to='/peliculas' activeClassName="active">Peliculas</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName="active">Pagina 2</NavLink>
                    </li>                            
                </ul>
            </nav>
        );
    }
}
export default Menu;