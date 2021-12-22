import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css"
const MovieCard = ({Movie, filtermovie}) => {
 

  return (
   
    
   <div className='all'>
  
    <div className='movie'>
   
      <Card style={{ width: '18rem' , height:'550px'}} className='card'>
  <Card.Img variant="top"  src={Movie.posterUrl} height={300} width={200}/>
  <Card.Body>
    <Card.Title style={{color:"orange"}}>{Movie.title}</Card.Title>
    <Card.Text>
     {Movie.description}
    </Card.Text>
    <Card.Text><ReactStars
    count={Movie.rating}
    // onChange={ratingChanged}
    edit ={false}
    size={24}
    activeColor="#ffff00"
    color="#ffd700"
  />
       </Card.Text>
  </Card.Body>
</Card>

    </div>

   
   
    </div>
  )
}

export default MovieCard
