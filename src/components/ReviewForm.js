import React from 'react'
import Stars from './Stars';

const ReviewForm = () => {
    return (
        <div className='card m-3 p-2'>
            <h6 className='pb-2'>Add Your Review</h6>
            <div class="mb-3">
                <label for="rating" className="form-label">Your Rating</label>
                <Stars />
            </div>
            <div class="mb-3">
                <label for="titleInput" className="form-label">Review Title</label>
                <input type="text" className="form-control" id="titleInput" />
            </div>
            <div class="form-floating mb-2">
                <textarea className="form-control" placeholder="Type Your Review Here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                <label for="floatingTextarea2">Type Your Review Here</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
        </div>
    )
}

export default ReviewForm
