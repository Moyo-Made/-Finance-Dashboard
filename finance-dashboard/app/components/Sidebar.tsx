"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/images/logo.png";
import navLinks from "@/data";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
	const [activeNav, setActiveNav] = useState(null);
	const [isCollapsed, setIsCollapsed] = useState(false);

	const handleNavClick = (navName: any) => {
		setActiveNav(navName);
	};

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div
			className={`bg-[#000000f6] border-4 border-[#e7e7e7f8] h-[650px] rounded-lg text-[#ffff]
			 transition-all duration-300 ${isCollapsed ? "w-[80px]" : "w-[250px]"}`}
		>
			<div className="text-center pt-5">
				<div className="flex justify-start items-start">
					{isCollapsed ? (
						<Image src={Logo} alt="Logo" width={250} height={250} />
					) : (
						<Image
							src={Logo}
							alt="Logo"
							width={150}
							height={150}
							className="ml-7"
						/>
					)}
				</div>

				<div onClick={toggleSidebar} className="cursor-pointer">
					{isCollapsed ? (
						<CircleChevronRight className="ml-10 w-8 h-8" />
					) : (
						<CircleChevronLeft className="ml-52 w-8 h-8" />
					)}
				</div>

				{/* Sidebar Icons */}
				
				<div className="grid gap-8 mt-7 cursor-pointer">
  {navLinks.map((link) => (
    <Link href={link.path} key={link.name}> {/* Wrap the clickable area with Link */}
      <div
        className={`flex items-center cursor-pointer ${
          activeNav === link.name ? "bg-[#414141f8] text-white " : ""
        } ${
          isCollapsed
            ? "justify-center w-12 h-12 rounded-md ml-2"
            : "w-[175px] h-[40px] rounded-md ml-8"
        }
        `}
        onClick={() => handleNavClick(link.name)}
      >
        <span className="pl-3">{link.icon}</span>
        {!isCollapsed && (
          <p className="text-[14px] text-start mt-[2px] ml-2">
            {link.label}
          </p>
        )}
      </div>
    </Link>
  ))}
</div>
</div>
</div>
)}

export default Sidebar;
