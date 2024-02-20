"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IUser {
  username: string;
  password: string;
};

export default function Login() {
	const [user, setUser] = useState<IUser>({
		username: "",
		password: "",
	})
	return (
		<main className="flex gap-8 min-h-screen flex-col items-center p-20 text-[#dadada]">
			<div className="flex flex-col sm:max-w-[350px] w-[80vw] bg-[#010101] gap-8 items-center sm:justify-between border-2 border-[#404040] px-6 py-4 shadow-[4px_4px_#252525]">
				<h1 className="text-2xl font-mono mt-[36px] mb-[12px] font-bold">frienso</h1>
				<div className="flex w-full flex-col gap-6">
					<div className="flex flex-col gap-1">
						<input 
							type="text" 
							className="bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 placeholder:text-sm placeholder:font-mono" 
							id="username"
							value={user.username}
							placeholder="username"
							onChange={(e) => setUser({ ...user, username: e.target.value })} />
					</div>
					<div className="flex flex-col gap-1">
						<input 
							type="password" 
							className="bg-[#181818] w-full rounded-md p-1.5 border-2 border-[#252525] focus:outline-none focus:outline focus:outline-2 focus:outline-gray-700 placeholder:text-sm placeholder:font-mono" 
							id="password"
							value={user.password}
							placeholder="password"
							onChange={(e) => setUser({ ...user, password: e.target.value })} />
					</div>
				</div>
				<button className="w-full active:scale-95 rounded-md p-2 font-mono border-2 border-[#252525]">login</button>
			</div>
			<div className="flex flex-col gap-4 w-[80vw] font-mono items-center justify-center border-2 border-[#404040] sm:max-w-[350px] p-4 shadow-[4px_4px_#252525]">
				<h3 className="text-sm font-medium">Don&apos;t have an account? <Link className="text-sky-500 underline underline-offset-2" href="/signup">signup</Link></h3>
			</div>
		</main>
	)
}