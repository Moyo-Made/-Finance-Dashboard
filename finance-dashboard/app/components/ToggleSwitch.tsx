import React from "react";

interface ToggleSwitchProps {
	isOn: boolean;
	handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
	return (
		<div className="flex items-center">
			<span className="mr-2">{isOn ? "Dark" : "Light"}</span>
			<div
				onClick={handleToggle}
				className={`relative w-12 h-6 rounded-full cursor-pointer ${
					isOn ? "bg-gray-700" : "bg-gray-300"
				}`}
			>
				<div
					className={`absolute top-0 left-0 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
						isOn ? "translate-x-full" : ""
					}`}
				/>
			</div>
		</div>
	);
};

export default ToggleSwitch;
