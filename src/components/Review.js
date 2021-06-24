import React from 'react';

const Review = () => {
	return (
		<div>
			<div>
				<div className='card mb-3' style={{ maxWidth: '800px' }}>
					<div className='row g-0'>
						<div className='col-md-8'>
							<div className='card-body'>
								<h5 className='card-title'>Review Title</h5>
								<p className='card-text'>
									<small className='text-muted'>Username</small>
								</p>
								<p className='card-text'>This movie is the best.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
