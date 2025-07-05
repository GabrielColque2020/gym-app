"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useUIStore } from "@/store";

export const ButtonOpenSidebar = () => {
	const setSidebarOpen = useUIStore( state => state.setSidebarOpen );

	const handleClick = () => {
		setSidebarOpen( false );
	};

	return (
		<button type={ "button" } onClick={ handleClick } className={ "cursor-pointer hover:bg-gray-800 hover:rounded-full -m-2.5 p-1" }>
			<XMarkIcon aria-hidden={ "true" } className={ "size-6 text-white" }/>
		</button>
	)
}
    