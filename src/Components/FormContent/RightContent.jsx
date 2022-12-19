import React, { useEffect } from "react";
import BlueOpeningQuestion1 from "../BlueOpeningQuestion1";
import BlueOpeningQuestion2 from "../BlueOpeningQuestion2";
import RedOpeningQuestion1 from "../RedOpeningQuestion1";
import RedOpeningQuestion2 from "../RedOpeningQuestion2";
import YouthQuestion1 from "../YouthQuestion1";
import YouthQuestion2 from "../YouthQuestion2";
import "../../Styles/RightContent.css";

const RightContent = (props) => {
	useEffect(() => {
		props.openingQuestion === "redOpeningQuestion1"
			? props.setRedOpeningQuestion1(true)
			: props.setRedOpeningQuestion1(false);
		props.openingQuestion === "redOpeningQuestion2"
			? props.setRedOpeningQuestion2(true)
			: props.setRedOpeningQuestion2(false);
		props.openingQuestion === "blueOpeningQuestion1"
			? props.setBlueOpeningQuestion1(true)
			: props.setBlueOpeningQuestion1(false);
		props.openingQuestion === "blueOpeningQuestion2"
			? props.setBlueOpeningQuestion2(true)
			: props.setBlueOpeningQuestion2(false);
		props.openingQuestion === "youthQuestion1"
			? props.setYouthQuestion1(true)
			: props.setYouthQuestion1(false);
		props.openingQuestion === "youthQuestion2"
			? props.setYouthQuestion2(true)
			: props.setYouthQuestion2(false);
	}, [props.openingQuestion, props]);

	const handleOnChange = (e) => {
		props.setOpeningQuestion(e.target.value);
	};
	return (
		<div className='container-fluid rightContent'>
			<div className='mt-4 d-flex flex-column'>
				<select
					className='form-select'
					value={props.openingQuestion}
					onChange={handleOnChange}>
					<option value=''>Select Opening Question</option>
					<option value='redOpeningQuestion1'>How are you doing today ?</option>
					<option value='redOpeningQuestion2'>How are you feeling Today</option>
					<option value='blueOpeningQuestion1'>
						How are things going at work/home
					</option>
					<option value='blueOpeningQuestion2'>
						How is your relation ship with your family
					</option>
					<option value='youthQuestion1'>Earlier you said you...?</option>
					<option value='youthQuestion2'>What im hearing is...?</option>
				</select>
			</div>
			<div>
				{props.redOpeningQuestion1 && <RedOpeningQuestion1 />}
				{props.redOpeningQuestion2 && <RedOpeningQuestion2 />}
				{props.blueOpeningQuestion1 && <BlueOpeningQuestion1 />}
				{props.blueOpeningQuestion2 && <BlueOpeningQuestion2 />}
				{props.youthQuestion1 && <YouthQuestion1 />}
				{props.youthQuestion2 && <YouthQuestion2 />}
			</div>
		</div>
	);
};

export default RightContent;
