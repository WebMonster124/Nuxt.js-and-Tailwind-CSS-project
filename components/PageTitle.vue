<template>
	<div class="bg-white">
		<div
			class="max-w-7xl mx-auto py-4 px-4 sm:py-16 sm:px-6 lg:px-8 lg:flex lg:justify-between"
		>
			<div class="max-w-xl">
				<h2
					class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
				>
					{{ title }}
				</h2>
				<p class="mt-5 text-xl text-gray-500">
					{{ subtitle }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["title", "subtitle"],
};
</script>

<style lang="scss" scoped>
</style>