"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/images/logo.png";
import { MdSpaceDashboard, MdOutlineFavorite, MdAccountCircle } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoSettingsSharp } from "react-icons/io5";

const navLinks = [
	{ name: "dashboard", label: "Dashboard", icon: <MdSpaceDashboard className="text-2xl ml-3" /> },
	{ name: "calender", label: "Calender", icon: <SlCalender className="text-2xl ml-3" /> },
	{ name: "settings", label: "Settings", icon: <IoSettingsSharp className="text-2xl ml-3" /> },
	{ name: "favorite", label: "Favorite", icon: <MdOutlineFavorite className="text-2xl ml-3" /> },
	{ name: "account", label: "Account", icon: <MdAccountCircle className="text-2xl ml-3" /> },
];

const Sidebar = () => {
	const [activeNav, setActiveNav] = useState(null);

	const handleNavClick = (navName: any) => {
		setActiveNav(navName);
	};

	return (
		<div className="bg-[#000000] border-4 border-[#e7e7e7f8] w-[250px] h-[650px] rounded-lg text-[#ffff]">
			<div className="text-center pt-5">
				<div className="flex justify-start items-start ml-7">
					<Image src={Logo} alt="Logo" width={150} height={150} />
				</div>

				{/* Sidebar Icons */}
				<div className="grid gap-8 ml-8 mt-10 cursor-pointer">
					{navLinks.map((link) => (
						<div
							key={link.name}
							className={`flex items-center cursor-pointer ${
								activeNav === link.name
									? "bg-[#414141f8] text-white w-[175px] h-[40px] rounded-md"
									: ""
							}`}
							onClick={() => handleNavClick(link.name)}
						>
							{link.icon}
							<p className="text-[14px] text-start mt-[2px] ml-2">{link.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
