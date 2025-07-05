import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
	children: React.ReactNode;
}

export const ProvidersCustom = ( { children }: Props ) => {
	return (
		<NextThemesProvider
			attribute={ "class" }
			defaultTheme={ "light" }
			enableSystem={ false }
			disableTransitionOnChange
		>
			{ children }
		</NextThemesProvider>
	);
};