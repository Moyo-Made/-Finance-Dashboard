import {
	MdSpaceDashboard,
	MdOutlineFavorite,
	MdAccountCircle,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoSettingsSharp } from "react-icons/io5";

const navLinks = [
	{
		name: "dashboard",
		label: "Dashboard",
		icon: <MdSpaceDashboard className="text-2xl ml-3" />,
	},
	{
		name: "calender",
		label: "Calender",
		icon: <SlCalender className="text-2xl ml-3" />,
	},
	{
		name: "settings",
		label: "Settings",
		icon: <IoSettingsSharp className="text-2xl ml-3" />,
	},
	{
		name: "favorite",
		label: "Favorite",
		icon: <MdOutlineFavorite className="text-2xl ml-3" />,
	},
	{
		name: "account",
		label: "Account",
		icon: <MdAccountCircle className="text-2xl ml-3" />,
	},
];

export default navLinks;
