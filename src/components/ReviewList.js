import React from 'react';
import Review from './Review';
const ReviewList = (props) => {
	return (
		<div>
            <h5 className="m-3">Reviews:</h5>
            {props.reviews.map(review =>
                <div className='card-body'>
				<Review title={review.title} reviewer={review.reviewer} rating={review.rating} review={review.review}/>
			</div>  
                )}
			
		</div>
	);
};

export default ReviewList;
