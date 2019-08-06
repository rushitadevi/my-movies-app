import React, { Component } from "react";
import { CardImg } from "reactstrap"
import {Model} from "./Model"

class DisplayMovies extends Component {
    constructor(props)
    {
        super(props);
        this.state=({
            imgId:0,
           // showMo:false
         
        });

//        this.showModal = this.showModal.bind(this);
    }

   

    // showModal = () => {
    //     this.setState({ showMo: true });
    //  };

    //  hideModal = () => {
    //     this.setState({ showMo: false });
    //   };

    
     
    
    
    
    render( ) {
        return (
            <>
                 <h3>Mission Impossible</h3>
                <div className="row">
                    {this.props.filterItemHP.length > 0 &&
                        this.props.filterItemHP[0].map((m, index) => (
                            <div key={index} >
                                <div className="col-md-4 mt-4">
                                    <div className="card">
                                        <CardImg top src={m.Poster}
                                            alt="Card image cap" 
                                            style={{ cursor: "pointer", width: "150px", height: "150px" }}
                                            onClick={()=>this.props.oneMovieSelected(m)}  
                                            />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div> 
                <h3>Harry Potter</h3>
                <div className="row">
                    {this.props.filterItemHP.length > 0 &&
                        this.props.filterItemHP[1].map((m, index) => (
                            <div key={index} >
                                <div className="col-md-4 mt-4">
                                    <div className="card">
                                        <CardImg top src={m.Poster}
                                            alt="Card image cap"    
                                            style={{ cursor: "pointer", width: "150px", height: "150px" }} 
                                            onClick={()=>this.props.oneMovieSelected(m)}  
                                             />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </>        );
    }
}

export default DisplayMovies;