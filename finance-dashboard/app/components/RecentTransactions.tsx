import React, { useState, useEffect } from "react";
import { fetchUserData } from "@/services/api";
import * as Icons from "lucide-react";

const RecentTransactions = () => {
	const [userData, setUserData] = useState<any>(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchUserData();
				// Set today's and yesterday's dates to the transactions dynamically
				const today = new Date();
				const yesterday = new Date();
				yesterday.setDate(today.getDate() - 1);

				const formatDate = (date: Date) => {
					const year = date.getFullYear();
					const month = (date.getMonth() + 1).toString().padStart(2, "0");
					const day = date.getDate().toString().padStart(2, "0");
					return `${year}-${month}-${day}`;
				};

				const todayFormatted = formatDate(today);
				const yesterdayFormatted = formatDate(yesterday);

				const transactions = data.recentTransactions.map(
					(transaction: any, index: number) => {
						if (index % 2 === 0) {
							return { ...transaction, date: todayFormatted };
						} else {
							return { ...transaction, date: yesterdayFormatted };
						}
					}
				);

				setUserData({ ...data, recentTransactions: transactions });
			} catch (error) {
				console.error("Failed to fetch user data", error);
			}
		};

		getData();
	}, []);

	const getIconComponent = (iconName: string) => {
		const IconComponent = (Icons as any)[iconName];
		return IconComponent ? <IconComponent size={25} /> : null;
	};

	if (!userData) return <p>No data available</p>;

	const todayFormatted = userData.recentTransactions[0].date;
	const yesterdayFormatted = userData.recentTransactions[1].date;

	const todayTransactions = userData.recentTransactions.filter(
		(transaction: any) => transaction.date === todayFormatted
	);

	const yesterdayTransactions = userData.recentTransactions.filter(
		(transaction: any) => transaction.date === yesterdayFormatted
	);

	return (
		<div>
			<h2 className="font-medium mt-3 text-[#000000af]">Recent Transactions</h2>
			<ul className="w-56 h-[21rem] bg-[#222121f6] text-white rounded-lg mt-1">
				{/* Render today's transactions */}
				{todayTransactions.length > 0 && (
					<>
						<h3 className="text-md font-normal text-gray-300 ml-2 pt-2">
							Today
						</h3>
						{todayTransactions.map((transaction: any) => (
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
									<span className="mr-5 text-md">${transaction.amount}</span>{" "}
								</div>
							</li>
						))}
					</>
				)}
				{/* Render yesterday's transactions */}
				{yesterdayTransactions.length > 0 && (
					<>
						<h3 className="text-md font-normal text-gray-300 ml-2 pt-4">
							Yesterday
						</h3>
						{yesterdayTransactions.map((transaction: any) => (
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
									<span className="mr-4 text-md">${transaction.amount}</span>{" "}
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
