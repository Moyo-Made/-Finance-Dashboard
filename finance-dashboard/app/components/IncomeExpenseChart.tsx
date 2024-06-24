import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";

const IncomeExpenseChart = () => {
	return (
		<div className="w-[37rem] h-[280px] bg-[#000000] text-white text-lg p-[10px] rounded-lg mt-5 ml-10">
			<Chart />
		</div>
	);
};

export default IncomeExpenseChart;
