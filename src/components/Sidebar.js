import React, { Component } from "react";
import {Link,Redirect} from 'react-router-dom';
class Sidebar extends Component {
    searchRef = React.createRef();

    state = {
        search: '',
        redirect : false
    };
    redirectSearch = (e)=>{
        e.preventDefault();
        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });
        
    }

    render() {
        if(this.state.redirect===true)
        {
           return (<Redirect to={'/redirect/'+this.state.search} />);
        }
        return (
            <aside id="sidebar">
            {
            this.props.show === "true" && 
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <Link className="btn btn-success" to='/blog/creararticulo'>Crear artículo</Link>
                </div>
            }
                

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form  onSubmit= {this.redirectSearch}>
                        <input type="text" name="search" ref={this.searchRef} />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        );
    }
}
export default Sidebar;