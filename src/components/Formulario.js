import React, { Component } from "react";
import Sidebar from './Sidebar';

class Formulario extends Component {
    nombreRef = React.createRef();
    apellidosRef= React.createRef();
    bioRef = React.createRef();
    generoHref = React.createRef();
    generoMref = React.createRef();
    generoOref = React.createRef();
    state = {
        datos: {}
    }
    enviarDatos = (e) =>{
        e.preventDefault();
        console.log("Datos enviados");
        var genero = "hombre";
        if(this.generoHref.current.checked){
            genero= this.generoHref.current.value;
        }else if(this.generoMref.current.checked){
            genero = this.generoMref.current.value;
        }else if(this.generoOref.current.checked){
            genero = this.generoOref.current.value;
        }
        var data = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }
        this.setState({
            datos: data
        });
    }
    render() {
        return (
            <div className="formulario">
                <div className="center">
                    <section id="content">

                        <h1 className="subheader">Formulario</h1>
                        {
                            this.state.datos.nombre &&
                            <div className="datosFormulario">
                                <p>
                                    <strong>Nombre:</strong>{this.state.datos.nombre}<br/>
                                    <strong>Apellidos:</strong>{this.state.datos.apellidos}<br/>
                                    <strong>Bio</strong>{this.state.datos.bio}<br/>
                                    <strong>Genero:</strong>{this.state.datos.genero}
                                </p>
                            </div>
                        }
                        <form className="mid-form" onSubmit={this.enviarDatos}>
                            <div className="form-group">
                                <label htmlFor="nombre" >Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHref} /> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMref} /> Mujer
                                <input type="radio" name="genero" value="otro"  ref={this.generoOref}/> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>

                    </section>
                    <Sidebar
                        show="false"
                    />
                </div>
            </div>)
    }
}
export default Formulario;