"use client";

import React from "react";
import { AppProps } from "next/app";
import Dashboard from "./dashboard/page";
import { ThemeProvider } from "./components/ThemeContext";

const page: React.FC<AppProps> = ({ pageProps }) => {
	return (
		<ThemeProvider>
			<Dashboard {...pageProps} />
		</ThemeProvider>
	);
};

export default page;
