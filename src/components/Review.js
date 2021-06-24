import React from 'react';

const Review = (props) => {
	return (
		<div>
			<div>
				<div className='card' >
					<div className='row g-0'>
						<div className='col-md-12'>
							<div className='card-body'>
								<h5 className='card-title'>{props.title}</h5>
								<p className='card-text'>
									<small className='text-muted'>{props.reviewer}</small>
								</p>
								<p className='card-text'>{props.review}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
