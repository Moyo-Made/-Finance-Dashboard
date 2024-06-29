"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import RecentTransactions from "../components/RecentTransactions";

const Page = () => {
	return (
		<div className={`flex h-full border-[20px] border-white rounded-lg`}>
			<Sidebar />
			<div>
				<SearchBar />
				<div className="mt-10 ml-20 ">
					<RecentTransactions />
				</div>
			</div>
		</div>
	);
};

export default Page;
