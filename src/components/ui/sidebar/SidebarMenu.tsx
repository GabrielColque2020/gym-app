import { DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import Image from "next/image";
import { ButtonOpenSidebar } from "@/components/ui/sidebar/ui/ButtonOpenSidebar";
import { ContentSidebar } from "@/components/ui/sidebar/ui/ContentSidebar";
import { NavigationSidebar } from "@/components/ui/sidebar/NavigationSidebar";

export const SidebarMenu = () => {
	return (
		<ContentSidebar>
			<DialogBackdrop
				transition
				className={ "fixed inset-0 bg-gray-700/80 transition-opacity duration-300 ease-linear data-closed:opacity-0" }
			/>

			<div className={ "fixed inset-0 flex" }>
				<DialogPanel
					transition
					className={ "relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full" }
				>
					<TransitionChild>
						<div className={ " absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0" }>
							<ButtonOpenSidebar/>
						</div>
					</TransitionChild>
					{/* SidebarMenu component, swap this element with another sidebar if you like */ }
					<div className={ "flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10" }>
						<div className={ "flex h-16 shrink-0 items-center" }>
							<Image
								height={ 20 }
								width={ 20 }
								alt={ "Your Company" }
								src={ "./logo.svg" }
								className={ "h-8 w-auto" }
							/>
						</div>

						<NavigationSidebar/>
					</div>
				</DialogPanel>
			</div>
		</ContentSidebar>
	)
}
