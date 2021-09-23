import React, { Component } from "react";
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';

import Error from "./components/Error";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from "./components/Blog";
import Peliculas from "./components/Peliculas"
import Formulario from "./components/Formulario";
import Articulo from "./components/Articulo";
import Search from "./components/Search";
import CrearArticulo from "./components/crearArticulo";

class Router extends Component {
    render() {

        return (
            <BrowserRouter>
                <Header />                                                                                                           
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Blog' component={Blog} />
                    <Route exact path='/Blog/busqueda/:search' component={Search} />
                    <Route exact path='/peliculas' component={Peliculas} />
                    <Route exact path='/blog/articulo/:id' component={Articulo}/>
                    <Route exact path='/formulario' component={Formulario} />
                    <Route exact path='/blog/creararticulo' component={CrearArticulo} />
                    <Route exact path='/redirect/:search' render ={ (props)=>{
                        var search = props.match.params.search;
                        return (<Redirect to={'/Blog/busqueda/'+search} />);
                    }}/>
                    <Route component={Error} />
                </Switch>
                <div className="clearfix"></div>
                
                <Footer />
            </BrowserRouter>
        )
    }
}
export default Router;