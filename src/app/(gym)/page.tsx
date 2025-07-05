"use client";

import { redirect, usePathname } from "next/navigation";

export default function HomePage() {

	const pathname = usePathname();

	if( pathname === "/" ) {
		redirect("/home")
	}
}
