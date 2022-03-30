<template>
	<div class="px-4 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
		<article class="max-w-full mx-auto my-16 prose md:prose-lg lg:prose-xl">
			<div class="font-bold text-5xl mb-8">{{ page.name }}</div>
			<nuxt-content :document="page" class="prose-lg" />
		</article>
	</div>
</template>

<script>
export default {
	async asyncData({ params, $axios, route, store, $content }) {
		const page = await $content("articles", params.slug).fetch();
		return { page };
	},
};
</script>

<style lang="scss" scoped>
</style>