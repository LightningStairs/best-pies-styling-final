import React from 'react';
import '../styles/Review.css'

const Review = ({ rating, body, onClick }) => {
  return(
    <div className="large-6 columns" onClick={onClick}>
      <div className="review">

        <p>
          <span className="bold">Rating:</span> {rating}
        </p>
        <p>
          <span className="bold">Review:</span> {body}
        </p>
      </div>
    </div>
  )
}

export default Review;
