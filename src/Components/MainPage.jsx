import React,{Component} from "react";
import MyNav from "./MyNav";
import DisplayMovies from "./DisplayMovies";
import Footer from "./Footer";
import Model from "./Model";
import SingleMovie from "./SingleMovie";

class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            MoviesMI: [],
            MoviesHP: [],
            filterMovie:"",
            showMovie :null
        });
    }

    showSingleMovie =(movie) =>{
        this.setState({
            showMovie : movie,
            showMo:true
        });
        console.log(movie);
    }

    

    componentDidMount = async () => {   
        var MovieName=[];
        var AllMovies=[];
       
        MovieName =["Mission%20Impossible","harry%20potter"] ;
        
        for(var i=0;i<MovieName.length;i++)
        {
            
            var response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=424da7b2&s=" + MovieName[i] );
            var jSON = await response.json();
            AllMovies.push(jSON.Search);
        }
       
       
        this.setState({
            MoviesMI: AllMovies
        });

        console.log(this.state.MoviesMI);

        // response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=424da7b2&s=harry%20potter"
        // );
        // jSON = await response.json();
        // console.log(jSON.Search);
        // this.setState({
        //     MoviesHP: jSON.Search
        // });
    }

render(
   
){

    
    return(
       
        <>
        <MyNav/>
        <div className="container mt-4"> 
        <input type="text" onChange={value=> this.setState({filterMovie:value.currentTarget.value}) } width="250px" />           
            {/* <DisplayMovies filterItem={this.state.MoviesMI.map((data)=>data.filter(final=>final.Title.includes(this.state.filterMovie)))} /> */}
            {/* <DisplayMovies filterItem={this.state.MoviesMI.map((data)=>
                data.filter(final=>final.Title.includes(this.state.filterMovie)))} /> */}
           <SingleMovie singleMovie={this.state.showMovie} />
            <DisplayMovies oneMovieSelected={this.showSingleMovie} filterItemHP={this.state.MoviesMI.map((data=>data.filter(
                final=>final.Title.includes(this.state.filterMovie)
            )))} />


            
            <Model showMo={this.state.showMo} closeModal={()=>this.setState({
                showMo:false
            })} />
     
            </div>        
        <Footer/>       
        </>
    );
}

}

export default MainPage;