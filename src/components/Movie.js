import React from 'react';
import ReviewList from './ReviewList';
import aNewHopeImg from '../img/4.jpg';
import empireStrikesBackImg from '../img/5.jpg';
import Stars from './Stars';
import { useState } from 'react';

const moviesArray = [
	{
		id: 4,
		name: 'Star Wars: Episode IV - A New Hope',
		year: 1977,
		synopsis:
			"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader",
		rating: 4,
		imgsrc: aNewHopeImg,
	},
	{
		id: 5,
		name: 'Star Wars: Episode V - The Empire Strikes Back',
		year: 1980,
		synopsis:
			'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett',
		rating: 5,
		imgsrc: empireStrikesBackImg,
	},
];

const Movie = () => {
	const [reviews, setReview] = useState([
		{
			id: 1,
			movieId: 4,
			reviewer: 'Bob Jones',
			rating: 4,
			title: 'Legendary piece of cinema',
			review:
				'Only seen the original Star Wars films a few times, I tend to forget how great of a magical experience it is! A New Hope is so awesome in so many aspects especially the music and sounds of everything!',
		},
		{
			id: 2,
			movieId: 4,
			reviewer: 'Natalie Childs',
			rating: 5,
			title: 'A classics, phenomenal and arguably the best sci-fi flick masterpiece!',
			review: 'Star wars made epic fantasy real. For a generation of people it has defined what the cinema experience is meant to be.',
		},
		{
			id: 3,
			movieId: 5,
			reviewer: 'Darkside',
			rating: 4,
			title: 'All the fun of the original with a much better, darker plot',
			review:
				"I cannot believe some people out there didn't like this film, yet claim to have enjoyed Episode One. No comparison whatsoever. The Empire Strike Back is George Lucas' best contribution to human history, and it will be remembered long after most other science fiction films have gone the way of the Do-Do Bird. The optical effects still stand the test of time, and the acting is superb.",
		},
		{
			id: 4,
			movieId: 5,
			reviewer: 'that one guy',
			rating: 5,
			title: 'Best of the best',
			review:
				'The Empire Strikes Back is the best film in the original Star Wars trilogy. It has all the great qualities that the original Star Wars has: great effects (at the time of its release), appealing characters, and lots of spellbinding action.',
		},
	]);

	//Add Review
	const addReview = (review) => {
		const id = Math.floor(Math.random() * 10000) + 1;

		const newReview = { id, ...review };
		setReview([...reviews, newReview]);
	};

	return (
		<div>
			{moviesArray.map((movie) => (
				<div className='card mb-3' key={movie.id}>
					<div className='row g-0'>
						<div className='col-md-4'>
							<img src={movie.imgsrc} className='img-fluid rounded-start' alt='...' />
						</div>
						<div className='col-md-8'>
							<div className='card-body'>
								<h5 className='card-title'>{movie.name}</h5>
								<Stars rating={movie.rating} />
								<p className='card-text'>
									<small className='text-muted'>{movie.year}</small>
								</p>
								<p className='card-text'>{movie.synopsis}</p>
							</div>
							<ReviewList key={movie.id} onAdd={addReview} reviews={reviews} movieId={movie.id} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Movie;
