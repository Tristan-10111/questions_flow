import React, { useEffect } from "react";
import RedOpeningQuestions from "../../Data/RedQuestions.json";
import BlueOpeningQuestions from "../../Data/BlueQuestions.json";
import YouthQuestions from "../../Data/YouthQuestions.json";
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

	const renderResult = () => {
		let result;
		props.openingQuestion === ""
			? (result = (
					<div>
						<p>
							Start your Call <br />
							with selected opening Question
						</p>
					</div>
			  ))
			: props.openingQuestion === "redOpeningQuestion1"
			? (result = (
					<div className='mt-4'>
						{RedOpeningQuestions.map((redQuestions) => {
							return (
								<div key={redQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.posibbleResponse4}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.promptQuestion2}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "redOpeningQuestion2"
			? (result = (
					<div className='mt-4'>
						{RedOpeningQuestions.map((redQuestions) => {
							return (
								<div key={redQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.possibleResponse3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.posibbleResponse4}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{redQuestions.promptQuestion2}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "blueOpeningQuestion1"
			? (result = (
					<div className='mt-4'>
						{BlueOpeningQuestions.map((blueQuestions) => {
							return (
								<div key={blueQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "blueOpeningQuestion2"
			? (result = (
					<div className='mt-4'>
						{BlueOpeningQuestions.map((blueQuestions) => {
							return (
								<div key={blueQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.possibleResponse3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.followUpQuestion3}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{blueQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "youthQuestion1"
			? (result = (
					<div className='mt-4'>
						{YouthQuestions.map((youthQuestions) => {
							return (
								<div key={youthQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: props.openingQuestion === "youthQuestion2"
			? (result = (
					<div className='mt-4'>
						{YouthQuestions.map((youthQuestions) => {
							return (
								<div key={youthQuestions.id}>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Possible Responses
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.possibleResponses2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Follow-up Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.followUpQuestion2}
										</button>
									</div>
									<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
										<div>
											<h2 className='text-center text-light fs-3 fw-bold'>
												Prompt Questions
											</h2>
										</div>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion1}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion2}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion3}
										</button>
										<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
											{youthQuestions.promptQuestion4}
										</button>
									</div>
								</div>
							);
						})}
					</div>
			  ))
			: (result = "");
		return result;
	};

	return (
		<div className='container-fluid rightContent'>
			<div className='mt-4 d-flex flex-column'>
				<select
					className='form-select dropDown'
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
			<div>{renderResult()}</div>
		</div>
	);
};

export default RightContent;
