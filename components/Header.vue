<template>
	<header
		class="relative mx-auto bg-gradient-to-r from-green-600 to-green-900 overflow-hidden flex items-center justify-between px-4 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4"
	>
		<div>
			<a href="/" class="font-black text-white text-2xl">
				Coffee Alternative
			</a>
		</div>		
		<div class="pt-6 pb-6">
			<Nav />
		</div>
	</header>
</template>

<script>
export default {
	data: () => ({
		responsiveNav: false,
	}),
};
</script>

<style lang="scss" scoped>
</style>