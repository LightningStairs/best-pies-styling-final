import React from 'react'
import Review from './Review'
import '../styles/Pie.css'

const Pie = ({ id, averageRating, name, image, reviews }) => {
  let pieReviews = reviews.map(review => {
    return(
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
      />
    )
  })

  return(
    <div className="pie">
      <h2 className="pie-name">{name}</h2>
      <img src={image} alt={name}/>
      <div className="row">
        {pieReviews}
      </div>
    </div>
  )
}

export default Pie;
