import React, { useState } from "react";
import CenterContent from "../Components/FormContent/CenterContent";
import LeftContent from "../Components/FormContent/LeftContent";
import RightContent from "../Components/FormContent/RightContent";

const WellnessForm = () => {
	const [openingQuestion, setOpeningQuestion] = useState("");

	const [redOpeningQuestion1, setRedOpeningQuestion1] = useState(false);
	const [redOpeningQuestion2, setRedOpeningQuestion2] = useState(false);
	const [blueOpeningQuestion1, setBlueOpeningQuestion1] = useState(false);
	const [blueOpeningQuestion2, setBlueOpeningQuestion2] = useState(false);
	const [youthQuestion1, setYouthQuestion1] = useState(false);
	const [youthQuestion2, setYouthQuestion2] = useState(false);
	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-3 bg-secondary'>
					<LeftContent />
				</div>
				<div className='col-6 bg-danger'>
					<CenterContent />
				</div>
				<div className='col-3 bg-warning'>
					<RightContent
						openingQuestion={openingQuestion}
						redOpeningQuestion1={redOpeningQuestion1}
						redOpeningQuestion2={redOpeningQuestion2}
						blueOpeningQuestion1={blueOpeningQuestion1}
						blueOpeningQuestion2={blueOpeningQuestion2}
						youthQuestion1={youthQuestion1}
						youthQuestion2={youthQuestion2}
						setOpeningQuestion={setOpeningQuestion}
						setRedOpeningQuestion1={setRedOpeningQuestion1}
						setRedOpeningQuestion2={setRedOpeningQuestion2}
						setBlueOpeningQuestion1={setBlueOpeningQuestion1}
						setBlueOpeningQuestion2={setBlueOpeningQuestion2}
						setYouthQuestion1={setYouthQuestion1}
						setYouthQuestion2={setYouthQuestion2}
					/>
				</div>
			</div>
		</div>
	);
};

export default WellnessForm;
