"use client";

import { useUIStore } from "@/store";
import { Dialog } from "@headlessui/react";

interface Props {
	children: React.ReactNode;
}

export const ContentSidebar = ( { children }: Props ) => {
	const setSidebarOpen = useUIStore( ( ( state ) => state.setSidebarOpen ) );
	const sidebarOpen = useUIStore( ( ( state ) => state.sidebarOpen ) );

	return (
		<Dialog open={ sidebarOpen } onClose={ () => setSidebarOpen( false ) } className={ "relative z-50 lg:hidden" }>
			{ children }
		</Dialog>
	)
}