import React,{Component} from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
class Search extends Component{
    render(){
        var searched = this.props.match.params.search;
        return (
        <div className="Home">
            <Slider title={"Busqueda: "+ searched}
            size = 'slider-small'/>
            <div className="center"> 
                <section id="content">
                    <Articles 
                        search = {searched}
                    />
                </section>
                <Sidebar 
                    show="true"
                />
            </div> 
        </div>)
    }
}
export default Search;