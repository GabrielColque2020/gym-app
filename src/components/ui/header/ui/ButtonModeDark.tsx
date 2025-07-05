"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ButtonModeDark = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<button
			type={ "button" }
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={ "text-indigo-200 hover:text-indigo-100 cursor-pointer hover:bg-gray-600 rounded-2xl p-1" }
			aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
		>
			{isDark ? (
				<SunIcon className={ "block size-7" } />
			) : (
				<MoonIcon className={ "block size-7" } />
			)}
		</button>
	);
};