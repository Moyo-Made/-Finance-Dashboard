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
		path: "/dashboard",
	},
	{
		name: "calender",
		label: "Calender",
		icon: <SlCalender className="text-2xl ml-3" />,
		path: "/calender",
	},
	{
		name: "settings",
		label: "Settings",
		icon: <IoSettingsSharp className="text-2xl ml-3" />,
		path: "/calender",
	},
	{
		name: "favorite",
		label: "Favorite",
		icon: <MdOutlineFavorite className="text-2xl ml-3" />,
		path: "/calender",
	},
	{
		name: "account",
		label: "Account",
		icon: <MdAccountCircle className="text-2xl ml-3" />,
		path: "/calender",
	},
];

export default navLinks;
