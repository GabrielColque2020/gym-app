import { ContainerCustom, HeaderSection, Text, TextTitle } from "@/components";

const posts = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
	}, {
		id: 2,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
	}, {
		id: 3,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
	}, {
		id: 4,
		title: 'Boost your conversion rate',
		href: '#',
		description:
			'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
		imageUrl:
			'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
	},
	// More posts...
]

export default function FootPlanPage() {
	return (
		<>
			<HeaderSection title={ "Plan Alimenticio" }
						   subtitle={ "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat." }/>

			<ContainerCustom>
				<div className={ "bg-white dark:bg-gray-800 mt-10 pt-8 rounded-xl mx-auto max-w-7xl px-6 lg:px-8" }>
					<div className={ " mx-auto pt-2 pb-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3" }>
						{ posts.map( ( post ) => (
							<article key={ post.id } className={ "flex flex-col items-start justify-between" }>
								<div className={ "relative w-full" }>
									<img
										alt=""
										src={ post.imageUrl }
										className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
									/>
									<div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"/>
								</div>
								<div className={ "max-w-xl" }>
									<div className={ "group relative mt-4 sm:mt-8 pl-2" }>
										<TextTitle>{ post.title }</TextTitle>
										<Text className={ "mt-2" }>{ post.description }</Text>
									</div>
								</div>
							</article>
						) ) }
					</div>
				</div>
			</ContainerCustom>
		</>
	)
}