import React, { Component } from "react";
import Sidebar from "./Sidebar";
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router-dom';
import Loading from "./Loading";
import SimpleReactValidator from 'simple-react-validator';

class CrearArticulo extends Component {  
    constructor(props){
        super(props);
        this.validator = new SimpleReactValidator();
    }
    
    // componentDidMount() {
    //     this.validator = new SimpleReactValidator();
    // }
    url = Global.url;
    port = Global.port;
    api = Global.api;
    title = React.createRef();
    content = React.createRef();
    status = null;
    state = {
        article: [],
        status: null,
        file: null
    }
    setearDatos = () => {
        var article = {
            title: this.title.current.value,
            content: this.content.current.value
        }
        this.setState({
            article: article,

        });
        this.validator.showMessages();
        this.forceUpdate();
    }
    saveData = (e) => {
        e.preventDefault();
        const state = this.state;
        this.setearDatos();
        if (this.validator.allValid) {
            axios.post(this.url + this.port + this.api + '/save', this.state.article).then(res => {
                if (res.data.articleStored) {
                    state.article = res.data.articleStored;
                    state.status = 'waiting';
                    this.status = 'waiting';
                    this.setState(state);
                    if (this.state.file !== null) {
                        var articleid = this.state.article._id;
                        const formData = new FormData();
                        formData.append(
                            'file0',
                            this.state.file,
                            this.state.file.name
                        );
                        axios.post(this.url + this.port + this.api + '/upload-image/' + articleid, formData).then(res => {
                            if (res.data.status === 'success') {
                                this.status = 'success';
                                state.status = 'success';
                                this.setState((state) => {
                                    return state;
                                });
                            } else {
                                this.setState((state) => {
                                    return {
                                        article: state.article = [],
                                        status: state.status = 'failed'

                                    }
                                });
                                this.status = 'failed';
                            }
                        })
                    } else {
                        this.status = 'success';
                        this.setState((state) => {
                            return {
                                status: state.status = 'success'
                            }
                        });
                        
                        this.forceUpdate();
                    }

                } else if (res.data.status === 'error' && !res.data.articleStored) {
                    this.setState((state) => {
                        return {
                            article: state.article = [],
                            status: state.status = 'failed'
                        }
                    });
                }
            });
        } else {
            // this.setState((state)=>{
            //     return {status: state.status= 'failed'}
            // })
            this.validator.showMessages();
            this.forceUpdate();

        }

    }
    selectedFile = (e) => {
        const state = this.state;
        state.file = e.target.files[0];
        this.setState((state) => {
            return state;
        });
    }

    render() {

        if (this.status === 'waiting') {
            return <Loading />
        }
        if (this.status === 'success') {
            // return <Redirect to='/Blog'/>;
            return <Redirect to='/Blog' />

        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Articulo</h1>
                    <form className="mid-form" onSubmit={this.saveData} onChange={this.setearDatos}>
                        <div className="form-group">
                            <label htmlFor="title" >Titulo</label>
                            <input type="text" name="title" ref={this.title} />
                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">content</label>
                            <textarea name="content" ref={this.content}></textarea>
                            {this.validator.message('content', this.state.article.content, 'required')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.selectedFile} />
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" onClick={this.saveData} />

                    </form>
                </section>
                <Sidebar />
            </div>
        )
    }
}
export default CrearArticulo;