import { create } from 'zustand'

interface State {
	sidebarOpen: boolean;
	setSidebarOpen: ( value: boolean ) => void;
}

export const useUIStore = create<State>()( ( set ) => ( {
	sidebarOpen: false,

	setSidebarOpen: ( value: boolean ) => {
		set( { sidebarOpen: value }
		)
	},
} ) )