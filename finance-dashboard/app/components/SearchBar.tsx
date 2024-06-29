"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";

const SearchBar: React.FC = () => {
	const [notifications, setNotifications] = useState<number>(3);
	const [mail, setMail] = useState<number>(1);
	const [query, setQuery] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform the search action with the query
		console.log("Searching for:", query);
		// You can implement your search logic here, e.g., call an API
	};

	return (
		<div className="flex ml-10 mt-4">
			<form
				onSubmit={handleSearch}
				className="flex items-start w-[300px] h-10 bg-gray-200 rounded-full"
			>
				<Search className="text-gray-500 ml-2 mt-1 pt-2" />
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					placeholder="Search"
					className="flex-grow p-2 bg-transparent outline-none text-sm items-center mt-[2px]"
				/>
			</form>

			<div className="flex gap-3 ml-72 mt-2">
				<div className="relative">
					<Bell className="text-3xl text-blue-700" />
					{notifications > 0 && (
						<div className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 bg-red-600 text-white text-[10px] font-bold rounded-full">
							{notifications}
						</div>
					)}
				</div>
				|{" "}
				<div className="relative">
					<Mail className="text-3xl text-blue-700 " />
					{mail > 0 && (
						<div className="absolute top-0 right-0 flex items-center justify-center w-3 h-3 bg-red-600 text-white text-[10px] font-bold rounded-full">
							{mail}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
