export const ContainerCustom = ( { children }: Readonly<{ children: React.ReactNode; }> ) => {
	return (
		<div className={"px-2 sm:px-4 lg:px-6 xl:px-32 2xl:px-40"}>
			{ children }
		</div>
	)
}