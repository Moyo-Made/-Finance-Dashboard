"use client";

import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "./components/ThemeContext";
import Dashboard from "./dashboard/page";

const page: React.FC<AppProps> = ({ pageProps }) => {
	return (
		<ThemeProvider>
			<Dashboard {...pageProps} />
		</ThemeProvider>
	);
};

export default page;
