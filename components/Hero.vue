<template>
	<section class="py-8 px-4 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gradient-to-r from-green-600 to-green-900">
		<div
			class="relative mx-auto"
		>
			<div
				class="hidden sm:block sm:absolute sm:inset-0"
				aria-hidden="true"
			></div>
			<div class="mt-12 mx-auto grid gap-9 lg:grid-cols-2 lg:max-w-none">
				<article 					
					v-for="(article, index) in articles" 
					:key="index"
				>	
					<h1
						class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-5xl"
					>
						<span class="md:block">{{article.name}}</span>								
					</h1>
					<div class="mt-3 sm:mt-5 flex items-center">
						<p
							class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl text-ellipsis overflow-hidden w-3/5"
						>
							{{article.description}}
						</p>
						<div class="pl-2">
							<img
								class="h-48 w-full object-cover rounded-lg shadow-lg overflow-hidden"
								src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
								alt=""
							/>
						</div>
					</div>					
				</article>
			</div>		
		</div>
	</section>
	
</template>

<script>
export default {
	props: ['articles'],
	data: () => ({
		responsiveNav: false,
	}),	
};
</script>

<style lang="scss" scoped>
</style>