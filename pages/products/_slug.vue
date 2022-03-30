<template>
	<div>
		<h1 class="text-h1">{{ review.product_name }}</h1>

		Rating:
		<v-rating
			length="5"
			:value="review.rating"
			half-increments
			readonly
			color="yellow"
		></v-rating>

		<v-btn color="success" :href="review.affiliate_link" target="_blank"
			>Buy Now</v-btn
		>
		<v-img :src="review.hero" />
	</div>
</template>


<script>
export default {
	async asyncData({ $content, params }) {
		const review = await $content(`reviews/${params.slug}`)
			.where({ active: true })
			.fetch();
		return { review };
	},
};
</script>

<style lang="scss" scoped>
</style>