import { ContainerCustom, Text, TextTitleHeaderSection } from "@/components";

interface Props {
	title: string;
	subtitle: string;
}

export const HeaderSection = ( { title, subtitle }: Props ) => {
	return (
		<div className={ "pt-2 relative" }>
			<div className={ "sm:rounded-b-[40px] absolute w-full h-10/12 bg-blue-950 -translate-y-2" }></div>

			<ContainerCustom>
				<div className={ "shadow shadow-blue-100 dark:shadow-none rounded-t-2xl bg-white dark:bg-gray-800 px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative z-10" }>
					<div className={ "mx-auto max-w-2xl text-center" }>
						<TextTitleHeaderSection>
							{ title }
						</TextTitleHeaderSection>

						<Text className={ "mt-8 !text-lg sm:!text-xl/8" }>
							{ subtitle }
						</Text>
					</div>
				</div>
			</ContainerCustom>
		</div>
	)
}