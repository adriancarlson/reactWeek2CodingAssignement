import React from 'react';
import { FaStar } from 'react-icons/fa';

const colors = {
	orange: '#FFBA5A',
	grey: '#A9A9A9',
};

const MovieStars = (props) => {
	let stars = Array(5).fill(0);

	let [currentValue, setCurrentValue] = React.useState(0);
	const [hoverValue, setHoverValue] = React.useState(undefined);

	const handelClick = (value) => {
		setCurrentValue(value);
	};

	const handelMouseOver = (value) => {
		setHoverValue(value);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};

	if (props.rating) {
		return (
			<div>
				<div>
					{stars.map((_, index) => {
						return <FaStar size={26} style={{ marginRight: 10 }} color={props.rating > index ? colors.orange : colors.grey} />;
					})}
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<div>
					{stars.map((_, index) => {
						return (
							<FaStar
								key={index}
								size={20}
								style={{ marginRight: 10, cursor: 'pointer' }}
								onClick={() => handelClick(index + 1)}
								color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
								onMouseOver={() => handelMouseOver(index + 1)}
								OnMouserLeave={handleMouseLeave}
							/>
						);
					})}
				</div>
			</div>
		);
	}
};

export default MovieStars;
