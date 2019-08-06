import React,{Component} from 'react'
import {Card} from "reactstrap"
import AddComments from "./AddComments"

class SingleMovie extends Component {
    
    render() { 
        console.log(this.props)
        return ( 
            <>
            {this.props.singleMovie && (
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <Card>
                            {/* <CardBody>
                                // <CardTitle ><b>{this.props.selectedBook.title}</b></CardTitle>
                                // <CardSubtitle>Price : {this.props.showMovie.}</CardSubtitle>
                            </CardBody> */}
                            <img width="100%" src={this.props.singleMovie.Poster} alt="" />
                        </Card>
                    </div>
                    <div className="col-md-9">
                                <div className="row">
                                  <AddComments IMDBID={this.props.singleMovie.imdbID }/>
                                </div>
                                {/* <div className="row my-4">
                                   <ShowComments asinId={this.props.selectedBook.asin} 
                                   handleComments={(loadeComments)=>this.setState({comments:loadeComments}) }  
                                   Comments={this.state.comments} />
                                </div> */}
                 </div>
                    
                </div>
               </div>
                )}
            </>
        );
    }
    }

 
export default SingleMovie;