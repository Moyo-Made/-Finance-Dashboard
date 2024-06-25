import React, { useState, useEffect } from "react";
import { fetchUserData } from "@/services/api";
import RecentTransactions from "./RecentTransactions";

const Balance = () => {
	const [userData, setUserData] = useState<any>(null);
	const [showFullAccountNumber, setShowFullAccountNumber] =
		useState<boolean>(false);

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

	const accountNumber = String(userData.accountNumber);

	const formatAccountNumber = (number: string) => {
		// Add spaces between every 4 digits
		return number.replace(/(.{4})/g, "$1 ").trim();
	};

	const displayAccountNumber = showFullAccountNumber
		? formatAccountNumber(accountNumber)
		: formatAccountNumber(accountNumber.replace(/.(?=.{4})/g, "*"));

	const toggleAccountNumberVisibility = () => {
		setShowFullAccountNumber(!showFullAccountNumber);
	};
	return (
		<div>
			<p className="font-medium mt-[4.5rem] text-[#000000af]">My Account</p>
			<div className="w-52 h-32 bg-[#222121f6] text-white rounded-lg mt-1">
				{" "}
				<div className="pl-5 pt-5">
					<p className="text-sm font-lighter">Balance</p>
					<span className="text-[20px]"> ${userData.balance}</span>
				</div>
				<div className="pt-5 pl-5">
					<span
						onClick={toggleAccountNumberVisibility}
						className="cursor-pointer text-sm"
					>
						{displayAccountNumber}
					</span>
				</div>
			</div>

			<RecentTransactions />
		</div>
	);
};

export default Balance;
