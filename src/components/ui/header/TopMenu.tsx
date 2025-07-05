import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import { NavigationTopMenu } from "@/components/ui/header/NavigationTopMenu";
import { ButtonModeDark } from "@/components";
import { ButtonOpenSideBar } from "@/components/ui/header/ui/ButtonOpenSideBar";
import { Link } from "@/components/ui/catalyst/link";

const userNavigation = [
	{ name: 'Perfil', href: '#' },
	{ name: 'Configuración', href: '#' },
	{ name: 'Sign out', href: '#' },
]

export const TopMenu = () => {

	return (
		<div className={ "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-blue-950 px-4 sm:gap-x-6 sm:px-6 lg:px-8" }>
			<ButtonOpenSideBar/>

			<div className={ "flex flex-1 gap-x-4 self-stretch lg:gap-x-6" }>
				<div className={ "py-4 hidden lg:flex" }>
					<Image
						height={ 20 }
						width={ 20 }
						alt={ "Your Company" }
						src={ "./logo.svg" }
						className={ "h-8 w-auto" }
					/>
				</div>
				<div className={ "flex flex-1  justify-center items-center" }>
					<NavigationTopMenu/>
				</div>
				<div className={ "flex items-center gap-x-4 lg:gap-x-6" }>
					<ButtonModeDark/>

					{/* Profile dropdown */ }
					<Menu as={ "div" } className={ "relative" }>
						<MenuButton className={ "-m-1.5 flex items-center p-1.5 cursor-pointer" }>
							<img
								alt=""
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								className="size-8 rounded-full bg-gray-50"
							/>
						</MenuButton>
						<MenuItems
							transition
							className={ "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in" }
						>
							{ userNavigation.map( ( item ) => (
								<MenuItem key={ item.name }>
									<Link
										href={ item.href }
										className={ "block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden" }
									>
										{ item.name }
									</Link>
								</MenuItem>
							) ) }
						</MenuItems>
					</Menu>
				</div>
			</div>
		</div>
	)
}
