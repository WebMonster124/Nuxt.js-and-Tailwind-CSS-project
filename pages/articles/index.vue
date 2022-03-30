<template>
	<section class="my-16 px-4 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">									
		<div class="relative mx-auto">
			<div class="text-4xl font-bold mb-8">Articles</div>
			<div
				class="mt-12 mx-auto grid gap-9 lg:grid-cols-3 lg:max-w-none"
			>
				<article
					v-for="(article, index) in articles"
					:key="index"
				>
					<div class="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
						<div class="flex-shrink-0">
							<img
								class="h-48 w-full object-cover"
								src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
								alt=""
							/>
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<p class="text-sm font-medium text-indigo-600">
									<a href="#" class="hover:underline"> Article </a>
								</p>								
								<p class="text-xl font-semibold text-gray-900 mt-2">
									<nuxt-link :to="`/articles/${article.slug}`">{{ article.name }}</nuxt-link>
								</p>
								<p class="mt-3 text-base text-gray-500">
									{{article.description}}
								</p>
							</div>
							<div class="mt-6 flex items-center">
								<div class="flex-shrink-0">
									<a href="#">
										<img
											class="h-10 w-10 rounded-full"
											:src="article.author.image"
											alt=""
										/>
									</a>
								</div>
								<div class="ml-3">
									<p class="text-sm font-medium text-gray-900">
										<a href="#" class="hover:underline"> {{article.author.name}} </a>
									</p>
									<div class="flex space-x-1 text-sm text-gray-500">
										<time datetime="2020-03-16"> {{ formatDate(article.updatedAt) }} </time>
										<span aria-hidden="true"> &middot; </span>
										<span> 6 min read </span>
									</div>
								</div>
							</div>
						</div>
					</div>						
				</article>
			</div>
		</div>
	</section>	
</template>

<script>
export default {
	async asyncData({ params, $axios, route, store, $content }) {
		const articles = await $content("articles").fetch();
		return { articles };
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('en', options)
		}
	}
};
</script>

<style lang="scss" scoped>
</style>