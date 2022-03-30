<template>
	<div>
		<Hero :articles = "hero_articles"/>
		<Features :articles = "feature_articles"/>
	</div>
</template>

<script>
export default {
	layout: "homepage",
	head() {
		return {
			title: this.homepage.seo.title,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.homepage.seo.description,
				},
				{
					hid: "keywords",
					name: "keywords",
					content: this.homepage.seo.keywords,
				},
			],
		};
	},
	data: () => {
		return {};
	},
	async asyncData({ $content, params }) {
		const homepage = await $content("homepage").fetch();

		const feature_articles = await $content('articles')			
			.sortBy('date', 'desc')
			.limit(3)
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Page not found' })
			});

		const hero_articles = await $content('articles')			
			.sortBy('date', 'desc')
			.limit(2)
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Page not found' })
			})
		return { feature_articles, homepage, hero_articles };
	},

	methods: {},
};
</script>
