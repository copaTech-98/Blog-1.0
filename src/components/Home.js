import React,{Component} from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from "./Articles";
class Home  extends Component{
    render(){
        return (
            <div className="Home">
                <Slider title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                btn= "Ir al blog"/>
                <div className="center"> 
                    <section id="content">
                        <h2 className="subheader">Ultimos Articulos</h2>
                        <Articles 
                            home= "true"
                        />
                    </section>
                    <Sidebar 
                        show="false"

                    />
                </div> 
            </div>
        )
    }
}
export default Home;