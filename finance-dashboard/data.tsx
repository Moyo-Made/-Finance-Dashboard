import {
	MdSpaceDashboard,
} from "react-icons/md";
import { BarChart4 } from 'lucide-react';
import { IoSettingsSharp } from "react-icons/io5";
import { BadgeDollarSign } from 'lucide-react';

const navLinks = [
	{
		name: "dashboard",
		label: "Dashboard",
		icon: <MdSpaceDashboard className="text-3xl ml-3" />,
		path: "/",
	},
	{
		name: "insights",
		label: "Insights",
		icon: <BarChart4 className="text-3xl ml-3" />,
		path: "/insights",
	},
	{
		name: "transactions",
		label: "Transactions",
		icon: <BadgeDollarSign className="text-3xl ml-3" />,
		path: "/transactions",
	},
];

export default navLinks;
