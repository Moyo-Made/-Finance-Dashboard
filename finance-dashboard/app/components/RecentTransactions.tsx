import React, { useState, useEffect } from "react";
import { fetchUserData } from "@/services/api";
import * as Icons from "lucide-react";

const RecentTransactions = () => {
	const [userData, setUserData] = useState<any>(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchUserData();
				setUserData(data);
			} catch (error) {
				console.error("Failed to fetch user data", error);
			}
		};

		getData();
	}, []);
	if (!userData) return <p>No data available</p>;

	// Get today's and yesterday's dates in "YYYY-MM-DD" format
	const today = new Date().toISOString().split("T")[0];
	const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

	const getIconComponent = (iconName: string) => {
		const IconComponent = (Icons as any)[iconName];
		return IconComponent ? <IconComponent size={25} /> : null;
	};

	return (
		<div>
			<h2 className="font-medium mt-3 text-[#000000af]">Recent Transactions</h2>
			<ul className="w-60 h-[21rem] bg-[#0f0f0f] text-white rounded-lg mt-1">
				{/* Render today's transactions */}
				{userData.recentTransactions.some(
					(transaction: any) => transaction.date === today
				) && (
					<>
						<h3 className="text-md font-normal text-gray-300 ml-2 pt-2">
							Today
						</h3>
						{userData.recentTransactions
							.filter((transaction: any) => transaction.date === today)
							.map((transaction: any) => (
								<li key={transaction.id}>
									<div className="flex justify-between mt-3">
										<div>
											<div className="flex">
												<span className="bg-[#f7f7f7] text-black pl-1 pt-1 rounded-md w-8 h-8 ml-2">
													{getIconComponent(transaction.icon)}
												</span>{" "}
												<p className="text-sm font-normal ml-2">
													{transaction.description}
												</p>
											</div>
											<div className="text-[12px] text-gray-300 text-lighter ml-12 -mt-3">
												<span>{transaction.date}</span>
											</div>
										</div>
										<span className="mr-4">${transaction.amount}</span>{" "}
									</div>
								</li>
							))}
					</>
				)}
				{/* Render yesterday's transactions */}
				{userData.recentTransactions.some(
					(transaction: any) => transaction.date === yesterday
				) && (
					<>
						<h3 className="text-md font-normal text-gray-300 ml-2 pt-4">
							Yesterday
						</h3>
						{userData.recentTransactions
							.filter((transaction: any) => transaction.date === yesterday)
							.map((transaction: any) => (
								<li key={transaction.id}>
									<div className="flex justify-between mt-3">
										<div>
											<div className="flex">
												<span className="bg-[#f7f7f7] text-black pl-1 pt-1 rounded-md w-8 h-8 ml-2">
													{getIconComponent(transaction.icon)}
												</span>{" "}
												<p className="text-sm font-normal ml-2">
													{transaction.description}
												</p>
											</div>
											<div className="text-[12px] text-gray-300 text-lighter ml-12 -mt-3">
												<span>{transaction.date}</span>
											</div>
										</div>
										<span className="mr-4">${transaction.amount}</span>{" "}
									</div>
								</li>
							))}
					</>
				)}
			</ul>
		</div>
	);
};

export default RecentTransactions;
