"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import Total from "../components/Total";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import Balance from "../components/Balance";
import { useTheme } from "../components/ThemeContext";
import ToggleSwitch from "../components/ToggleSwitch";

const Dashboard: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={`flex w-full h-full ${
				theme === "dark"
					? "bg-[#000000] text-[#ffffff]"
					: "bg-[#ffffff] text-[#000000]"
			} border-[20px] border-white rounded-lg`}
		>
			<Sidebar />
			<div>
				<SearchBar />
				<Total />
				<IncomeExpenseChart />
			</div>
			<Balance />
			<div className="fixed mt-6 mr-5 top-4 right-4">
				<ToggleSwitch isOn={theme === "dark"} handleToggle={toggleTheme} />
			</div>
		</div>
	);
};

export default Dashboard;
