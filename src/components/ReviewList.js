import React from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';
const ReviewList = (props) => {
	const filteredReviews = props.reviews.filter((review) => review.movieId === props.movieId);
	return (
		<div>
			<h5 className='m-3'>Reviews:</h5>
			{filteredReviews.map((review) => (
				<div className='card-body'>
					<Review id={review.id} title={review.title} reviewer={review.reviewer} rating={review.rating} review={review.review} />
				</div>
			))}
			<ReviewForm />
		</div>
	);
};

export default ReviewList;
