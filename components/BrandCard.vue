<template>
	<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
		<div class="flex-shrink-0">
			<img
				class="h-48 w-full object-cover"
				src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
				alt=""
			/>
		</div>
		<div class="flex-1 bg-white p-6 flex flex-col justify-between">
			<div class="flex-1">
				<a href="#" class="block mt-2">
					<p class="text-xl font-semibold text-gray-900">
						{{ brand.name }}
					</p>
					<p class="mt-3 text-base text-gray-500">
						{{ brand.description }}
					</p>
				</a>
			</div>
			<div class="mt-6 flex items-center">
				<div class="flex-shrink-0">
					<nuxt-link
						:to="`/brands/${brand.slug}`"
						type="submit"
						class="w-full bg-green-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
					>
						View More
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["brand"],
};
</script>

<style lang="scss" scoped>
</style>