import React from "react";

interface CircularProgressBarProps {
	percentage: number;
	size?: number;
	strokeWidth?: number;
	circleOneStroke?: string;
	circleTwoStroke?: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
	percentage,
	size = 75,
	strokeWidth = 10,
	circleOneStroke = "#ffff",
	circleTwoStroke = "#7ea9e1",
}) => {
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * 2 * Math.PI;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<svg width={size} height={size}>
			<circle
				stroke={circleOneStroke}
				fill="transparent"
				strokeWidth={strokeWidth}
				r={radius}
				cx={size / 2}
				cy={size / 2}
			/>
			<circle
				stroke={circleTwoStroke}
				fill="transparent"
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={offset}
				r={radius}
				cx={size / 2}
				cy={size / 2}
				style={{ transition: "stroke-dashoffset 0.35s" }}
			/>
			<text
				x="50%"
				y="50%"
				textAnchor="middle"
				dy=".3em"
				fontSize="17px"
				fill={circleTwoStroke}
			>
				{`${percentage}%`}
			</text>
		</svg>
	);
};

export default CircularProgressBar;
