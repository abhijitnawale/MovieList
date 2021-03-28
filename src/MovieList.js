import React from "react";

import "./Movielist.css";


const movies =[
    {
       img:   "https://wallpapercave.com/wp/wp2618521.jpg" ,
       title : "Name : Pursuit Of Happiness" ,
       imdb :"IMDB :   8 ",
    
    },
    {
        img:   "https://wallpapercave.com/wp/wp2861510.jpg " ,
        title : "Name : BatMan Triology" ,
        imdb :"IMDB :   8.2",
        
    },
    {
        img:   "https://wallpapercave.com/wp/wp6653101.jpg" ,
        title : "Name : Gangs Of Wasseypur" ,
        imdb :"IMDB :   8.5",
        
    },
    {
        img:   "https://wallpapercave.com/wp/mNAyr9t.jpg " ,
        title : "Name : RockStar" ,
        imdb :"IMDB :   7.7",
        
    },
    
    {
        img:   "https://wallpapercave.com/wp/wp5270354.jpg " ,
        title : "Name : Train to Busan" ,
        imdb :"IMDB :   7.6",
        
    },
    {
        img:   "https://wallpapercave.com/wp/ViJKzjv.jpg " ,
        title : "Name : Inception" ,
        imdb :"IMDB :   8.8",
        
    },
    {
        img:   "https://wallpapercave.com/wp/wp7136137.jpg " ,
        title : "Name : Manjhi : The Mountain Man" ,
        imdb :"IMDB :   8.0",
        
    },
    {
        img:   "https://wallpapercave.com/wp/wp7115150.jpg " ,
        title : "Name :Zindagi na milegi dobara" ,
        imdb :"IMDB :   8.2",
        
    },
    {
        img:   "https://wallpapercave.com/wp/mUFQX3F.jpg " ,
        title : "Name : Iron Man 1" ,
        imdb :"IMDB :   8.0",
        
    },
    {
        img:   " https://wallpapercave.com/wp/wp7851268.jpg" ,
        title : "Name : My Name is Khan " ,
        imdb :"IMDB :   8.0",
        
    },
];


function MovieList() {
  return (
    <section className="movielist">
        {/* /* <Movie img={firstMovie.img} title={firstMovie.title} imdb={firstMovie.imdb}/>  */}

      {movies.map((movie)=>{
      const {img,title,imdb}=movie;
      return <Movie movie={movie}></Movie>

    
           })} 
       </section> 
  );
}



const Movie = (props) => {
    console.log( props);
    const{img,title,imdb}=props.movie;
  return (
    <article className="movie">
      <img src={img} alt=''width="200px" height="270px"/>
      <h4 >{title} </h4>
      <h4 >{imdb}</h4>
  
    </article>
  );
};





export default MovieList;
