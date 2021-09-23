import React,{Component} from "react";
class Pruebas extends Component{
    
       state={
        contador: 0
        }
    
    sumar = (e) =>{
        this.setState({
            contador: (this.state.contador + 1)
        })
    }
    restar = (e)=>{
        this.setState({
            contador: (this.state.contador - 1)
        })
    }
    render(){
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                    <p>{this.state.contador}</p>
                <div>
                    <input type="submit" value="sumar" onClick={this.sumar}/>
                    <input type="submit" value="restar" onClick={this.restar}/>
                </div>
            </section>
        );
    }
}
export default Pruebas;