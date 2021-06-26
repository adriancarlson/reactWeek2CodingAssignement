import React from 'react';
import Stars from './Stars';
import { useState } from 'react';

const ReviewForm = (props) => {
	const [userName, setUserName] = useState('');
	const [rating, setRating] = useState('');
	const [title, setTitle] = useState('');
	const [review, setReview] = useState('');
	const [movieId] = useState(props.movieId);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!review) {
			alert('Please add a Review');
			return;
		}

		props.onAdd({ userName, title, review, movieId, rating });
		setUserName('');
		setTitle('');
		setRating('');
		setReview('');
	};

	//Add star rating
	const addStartRating = (rating) => {
		const newRating = rating;
		setRating(newRating);
	};

	return (
		<form className='card m-3 p-2' onSubmit={onSubmit}>
			<h3 className='pb-2'>Add Your Review</h3>
			<div className='mb-3'>
				<label htmlFor='reviewerInput' className='form-label'>
					Your Username
				</label>
				<input type='text' className='form-control' id='reviewerInput' value={userName} onChange={(e) => setUserName(e.target.value)} />
			</div>
			<div className='mb-3'>
				<label htmlFor='rating' className='form-label'>
					Your Rating
				</label>
				<Stars onStarRating={addStartRating} />
			</div>

			<div className='mb-3'>
				<label htmlFor='titleInput' className='form-label'>
					Review Title
				</label>
				<input type='text' className='form-control' id='titleInput' value={title} onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div className='form-floating mb-2'>
				<textarea className='form-control' placeholder='Type Your Review Here' id='floatingTextarea2' style={{ height: '100px' }} value={review} onChange={(e) => setReview(e.target.value)}></textarea>
				<label htmlFor='floatingTextarea2'>Type Your Review Here</label>
			</div>

			<button type='submit' className='btn btn-primary'>
				Submit Review
			</button>
		</form>
	);
};

export default ReviewForm;
