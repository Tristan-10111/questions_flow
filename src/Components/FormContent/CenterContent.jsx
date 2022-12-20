import React from "react";

export default function CenterContent(props) {
	const testClick = () => {
		alert("clicks");
	};
	return (
		<div>
			<div>
				{props.redOpeningQuestion1 ? <p>{props.redOpeningQuestion1}</p> : null}
			</div>

			<button onClick={testClick}>s</button>
		</div>
	);
}
