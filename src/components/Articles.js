import React, { Component } from "react";
import axios from "axios";
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import {Link} from 'react-router-dom';
import Loading from "./Loading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Articles extends Component {
    url = Global.url;
    port = Global.port;
    api = Global.api;
    state = {
        articles: [],
        status: null
    }
    getArticlesBySearch = (search) => {
        axios.get(this.url+this.port+this.api+"/search/"+search).then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
        }).catch(err=>{
            this.setState({
                articles: [],
                status: 'success'
            })
        });
    }
    getArticles = () => {
        axios.get(this.url+this.port+this.api+"/articles").then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
            
        })
    }
    getlastArticles = () => {
        axios.get(this.url+this.port+this.api+"/articles/last").then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
           
        })
    }
    deleteArticle = (articleId)=>
    {
        return (
            <div className="alert-message">
                <p>Desea eliminar este articulo?</p>
                <span>
                    <button>Si</button>
                    <button>No</button>
                </span>
            </div>
        );
    }
    componentDidMount() {
        if(this.props.home === 'true')
        {
            this.getlastArticles();
        }else if(this.props.search && this.props.search !== null && this.props.search !== undefined)
        {
            this.getArticlesBySearch(this.props.search);
        }
        else{
            this.getArticles();
        }
        
    }
    render() {
        if (this.state.articles.length >= 1 && this.state.status === 'success') {
            var listArticles = this.state.articles.map((article, i) => {
                return (
                    <article className="article-item" id="article-template" key={i}>
                        <div className="image-wrap">
                        {article.image != null ?(
                            <img src={this.url+this.port+this.api+"/get-image/"+article.image} alt={article.title}/>
                        ): (
                            <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt={article.title}/>
                        )}
                            
                        </div>

                        <h2>{article.title}</h2>
                        <span className="date">
                          <Moment locale="es" fromNow >{article.date}</Moment>  
                        </span>
                        <Link to={"/blog/articulo/"+article._id}>Leer más</Link>
                        <span id='icons'>
                         <button onClick={()=>this.deleteArticle(article._id)}><FontAwesomeIcon icon={['fas','trash-alt']}/></button>
                         <button><FontAwesomeIcon icon={['fas','edit']}/></button>
                        </span>
                        <div className="clearfix"></div>
                    </article>
                );
            })
            return (
                <div id="articles">
                    {listArticles}
                </div>
            )
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className='subheader'>No hay contenido</h2>
                </div>
            )
        } else {
            return (
                <div id="articles">
                    <Loading />
                </div>
            )
        }

    }
}
export default Articles;