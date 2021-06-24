import React from 'react'
import ReviewList from './ReviewList';
const moviesArray = [
    {
        name: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
        synopsis: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader',
        rating: 4,
        imgsrc: '4.jpg'
    },
    {
        name: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        synopsis: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett',
        rating: 5,
        imgsrc: '5.jpg'
    },
];


const Movie = () => {
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="../../img/4.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Star Wars: Episode IV - A New Hope</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <p className="card-text">Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.</p>
                        
                    </div>
                    <ReviewList />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Movie
