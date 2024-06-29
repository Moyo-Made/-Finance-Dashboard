"use client";

import React from "react";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

const Page = () => {
	return (
		<div className={`flex w-full h-full border-[20px] border-white rounded-lg`}>
			<Sidebar />
			<div>
				<SearchBar />
			<div className="mt-20">
				<IncomeExpenseChart />
			</div>
			</div>
		</div>
	);
};

export default Page;
