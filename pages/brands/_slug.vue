<template>
	<div>
		<PageTitle :title="brand.name" />
		<v-btn color="success" :href="brand.url" target="_blank"
			>View Website</v-btn
		>
		<v-img :src="brand.image" />
	</div>
</template>


<script>
export default {
	async asyncData({ $content, params }) {
		const brand = await $content(`brands/${params.slug}`)
			// .where({ active: true })
			.fetch();
		return { brand };
	},
};
</script>

<style lang="scss" scoped>
</style>