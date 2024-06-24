import React, { useEffect, useState } from "react";
import { fetchUserData } from "@/services/api";
import CircularProgressBar from "./CircularProgressBar";

const Total = () => {
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
	});

	if (!userData) return <p>Loading...</p>;

	return (
		<div className="ml-10 mt-7">
			<div className="w-[37rem] h-36 bg-[#000000] text-white rounded-lg">
				{" "}
				<div className="flex gap-6 p-4">
					<div className="flex mt-5 gap-2">
						<div className="mt-3">
							<span className="text-sm font-lighter">Total Income</span>
							<p className="text-md font-medium"> ${userData.totalIncome}</p>
						</div>
						<CircularProgressBar percentage={58} />
					</div>

					<div className="flex mt-5 gap-2">
						<div className="mt-3">
							<span className="text-sm font-lighter">Total Expenses</span>
							<p className="text-md font-medium">${userData.totalExpenses}</p>
						</div>
							<CircularProgressBar percentage={35} />
					</div>

					<div className="flex mt-5 gap-2">
						<div className="mt-3">
							<span className="text-sm font-lighter">Total Bonus</span>
							<p className="text-md font-medium">${userData.totalBonus}</p>
						</div>
							<CircularProgressBar percentage={5} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Total;
