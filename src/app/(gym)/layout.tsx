import { SidebarMenu, TopMenu } from "@/components";

export default function HomeLayout( { children }: Readonly<{ children: React.ReactNode; }> ) {

	return (
		<div className={ "bg-gradient-to-b bg-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col" }>
			<SidebarMenu />

			<div className={ "w-full flex flex-col flex-grow h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" }>

				<TopMenu />

				{/*<div className={"z-20 fixed w-full h-[280px] rounded-b-4xl bg-blue-500/20"}></div>*/}
				{/*<main className={ "z-30 flex-1 px-2 sm:px-4 lg:px-6 xl:px-32 2xl:px-38 pb-5" }>*/}
				<main className={ "pb-5" }>
					{children}
				</main>

				{/*<footer className={ "bg-gray-900" }>*/}
				{/*	<div className={ "w-full px-6 lg:px-8 py-2 md:flex md:items-center md:justify-between" }>*/}
				{/*		<p className={ "mt-2 md:mt-0 text-center font-bold text-sm md:text-sm text-indigo-100 md:order-1" }>*/}
				{/*			&copy; 2024 Your Company, Inc. All rights reserved.*/}
				{/*		</p>*/}
				{/*	</div>*/}
				{/*</footer>*/}
			</div>
		</div>
	)
}