<template>
	<div>
		<ul>
			<li v-for="product in reviews" :key="product.id">
				<nuxt-link :to="`reviews/${product.slug}`">
					{{ product.product_name }}
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const reviews = await $content("reviews").fetch();
		return {
			reviews,
		};
	},
};
</script>

<style lang="scss" scoped>
</style>