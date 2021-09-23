import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Global from "../Global";
import axios from "axios";
import Loading from "./Loading";
import Moment from "react-moment";
import 'moment/locale/es';
import { Link } from 'react-router-dom';
class Articulo extends Component {
    url = Global.url;
    port = Global.port;
    api = Global.api;
    state = {
        article: null,
        status: null
    }
    getArticle = () => {
        var id = this.props.match.params.id;
        axios.get(this.url + this.port + this.api + '/article/' + id).then((res) => {
            this.setState({
                article: res.data.article,
                status: 'success'
            });

        }).catch(err => {
            this.setState({
                article: null,
                status: 'success'
            })
        });
    }
    componentWillMount() {
        this.getArticle();
    }
    render() {
        if (this.state.article != null && this.state.status === 'success') {
            return (
                <div className="center">
                    <section id="content">
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {this.state.article.image != null ? (
                                    <img src={this.url + this.port + this.api + "/get-image/" + this.state.article.image} alt={this.state.article.title} />
                                ) : (
                                    <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt={this.state.article.title} />
                                )}
                            </div>

                            <h1 className="subheader">{this.state.article.title}</h1>
                            <span className="date">
                                <Moment fromNow>{this.state.article.date}</Moment>
                            </span>
                            <p>{this.state.article.content}</p>
                            <div className="clearfix"></div>
                        </article>
                        <Link to="/Blog" className="btn btn-danger">Eliminar</Link>
                        <Link to="/Blog" className="btn btn-warning">Editar</Link>
                    </section>
                    <Sidebar />
                </div>
            )
        } else if (this.state.article === null && this.state.status === null) {
            return (
                <Loading />
            )
        } else if (this.state.article === null && this.state.status === 'success') {
            return (
                <div id="article">
                    <h1>Error el articulo no existe!!</h1>
                </div>
            )
        }

    }
}
export default Articulo;