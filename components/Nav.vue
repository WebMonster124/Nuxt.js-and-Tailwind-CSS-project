<template>
	<div>
		<nav
			class="relative max-w-7xl mx-auto flex items-center justify-between"
			aria-label="Global"
		>
			<div class="flex items-center flex-1">
				<div class="flex items-center justify-between w-full md:w-auto">					
					<div class="-mr-2 flex items-center md:hidden">
						<button
							type="button"
							class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
							id="main-menu"
							aria-haspopup="true"
							@click="responsiveNav = !responsiveNav"
						>
							<span class="sr-only">Open main menu</span>
							<!-- Heroicon name: menu -->
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="hidden space-x-10 md:flex md:ml-10">
					<a href="/articles" class="font-medium text-white hover:text-gray-300"
						>Articles</a
					>

					<a href="/products" class="font-medium text-white hover:text-gray-300"
						>Products</a
					>

					<a href="/contacts" class="font-medium text-white hover:text-gray-300"
						>Contacts</a
					>
				</div>
			</div>
			<div class="hidden md:flex"></div>
		</nav>

		<!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
		<div
			class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
			v-if="responsiveNav == true"
		>
			<div
				class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
			>
				<div class="px-5 pt-4 flex items-center justify-between">
					<div>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
							alt=""
						/>
					</div>
					<div class="-mr-2">
						<button
							type="button"
							class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							@click="responsiveNav = !responsiveNav"
						>
							<span class="sr-only">Close menu</span>
							<!-- Heroicon name: x -->
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="main-menu"
				>
					<div class="px-2 pt-2 pb-3 space-y-1" role="none">
						<a
							href="/articles"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							role="menuitem"
							>Articles</a
						>

						<a
							href="/reviews"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							role="menuitem"
							>Reviews</a
						>

						<a
							href="/brands"
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
							role="menuitem"
							>Brands</a
						>
					</div>
					<div role="none"></div>
				</div>
			</div>
		</div>
	</div>
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