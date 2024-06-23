"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import { User } from "lucide-react";

const Dashboard: React.FC = () => {
	const [user, setUser] = useState<{ username: string } | null>(null);

	return (
		<div className="flex w-full h-full bg-[#f7f7f7] border-[20px] border-white rounded-lg">
			{user && (
					<div className="flex items-center p-4 bg-white rounded-md shadow-md">
					<User className="text-4xl text-gray-700 mr-4" />
					<div>
						<p className="text-lg font-medium">Welcome, {user.username}!</p>
					</div>
				</div>
			)}
			<Sidebar />
			<SearchBar />
		</div>
	);
};

export default Dashboard;
