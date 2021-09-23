import React,{Component} from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
class Blog extends Component{
    render(){
        return (
        <div className="Home">
            <Slider title="Blog"
            size = 'slider-small'/>
            <div className="center"> 
                <section id="content">
                    <Articles />
                </section>
                <Sidebar 
                    show="true"
                />
            </div> 
        </div>)
    }
}
export default Blog;