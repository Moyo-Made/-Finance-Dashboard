// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const Login: React.FC = () => {
// 	const [username, setUsername] = useState<string>("");
// 	const [password, setPassword] = useState<string>("");
// 	const [user, setUser] = useState<{ username: string } | null>(null);

// 	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		// Replace with your actual authentication logic
// 		if (username && password) {
// 			setUser({ username });
// 			localStorage.setItem("user", JSON.stringify({ username }));
// 		}
// 	};

// 	return (
// 		<div className="min-h-screen flex flex-col items-center justify-center">
// 			{!user && (
// 				<form
// 					onSubmit={handleLogin}
// 					className="w-full max-w-sm p-4 bg-white rounded-md shadow-md"
// 				>
// 					<h2 className="text-xl font-bold mb-4">Login</h2>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="username"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Username
// 						</label>
// 						<input
// 							type="text"
// 							id="username"
// 							value={username}
// 							onChange={(e) => setUsername(e.target.value)}
// 							className="mt-1 p-2 w-full border rounded-md"
// 							required
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="password"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Password
// 						</label>
// 						<input
// 							type="password"
// 							id="password"
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							className="mt-1 p-2 w-full border rounded-md"
// 							required
// 						/>
// 					</div>

// 					<Link href={`/dashboard?username=${username}`}>
// 						<button
// 							type="submit"
// 							className="w-full py-2 bg-blue-600 text-white rounded-md"
// 						>
// 							Login
// 						</button>
// 					</Link>
// 				</form>
// 			)}
// 		</div>
// 	);
// };

// export default Login;
