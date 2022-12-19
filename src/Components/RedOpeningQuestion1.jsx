import React from "react";
import RedOpeningQuestions from "../Data/RedQuestions.json";

const RedOpeningQuestion1 = () => {
	return (
		<div className='mt-4'>
			<div className=''>
				{RedOpeningQuestions.map((redQuestions) => {
					return (
						<div>
							<div>
								<div className='d-flex flex-column justify-content-center mt-3'>
									<div>
										<h2 className='text-center text-light fs-3 fw-bold'>
											Possible Responses
										</h2>
									</div>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										{redQuestions.possibleResponse2}
									</button>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										I am sorry to hear that.
									</button>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										That is great.{" "}
									</button>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										That is unfortunate
									</button>
								</div>
								<div className='d-flex flex-column justify-content-center mt-3'>
									<div>
										<h2 className='text-center text-light fs-3 fw-bold'>
											Follow-up Questions
										</h2>
									</div>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										Would you like to say more ?
									</button>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										What exactly do you mean when you say “…” ?
									</button>
								</div>
								<div className='d-flex flex-column justify-content-center mt-3 mb-4'>
									<div>
										<h2 className='text-center text-light fs-3 fw-bold'>
											Prompt Questions
										</h2>
									</div>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										What makes you feel that way?
									</button>
									<button className='border border-2 border-light rounded bg-transparent text-light m-2 fs-5'>
										Is there something that happened that makes you feel… ?
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RedOpeningQuestion1;
