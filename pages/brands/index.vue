<template>		
	<div class="mx-auto my-16 px-4 sm:w-4/5 md:w-3/5 lg:w-2/5">		
		<div class="text-4xl font-bold mb-8">Contact Us!</div>
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit">
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
					Name
				</label>
				<input 
					v-model="form.name" 
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
					id="name" 
					name="name"
					type="text" 
					placeholder="Name"
					required
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="email">
					Email
				</label>
				<input 
					v-model="form.email" 
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
					id="email"
					name="email"
					type="email" 
					placeholder="Email"
					required
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
					Phone Number
				</label>
				<input 
					v-model="form.phone" 
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
					id="phone"
					name="phone"
					type="text" 
					placeholder="Phone Number"
					required
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="comments">
					Comments
				</label>
				<textarea 
					v-model="form.comments" 
					class="h-64 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
					id="comments"
					name="comments"
					type="text" 
					placeholder="Comments"
					required
				/>
			</div>
			
			<div class="flex items-center justify-end">
				<button 
					class="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
					type="submit"
				>
					Send
				</button>				
			</div>
		</form>
	</div>	
</template>

<script>

export default {
	name: 'ContactForm',
    data() {
      return {
        form: {
          name: "",
          email: "",
		  phone: "",
          comments: "",
        },
      };
    },	
	methods: {
		handleSubmit() {
			const formData = new FormData();

			for (let [key, value] of Object.entries(this.form)) {
				formData.append(key, value);
			}
			//console.log(this.form, '33333')
		}
    }
};
</script>
<style lang="scss" scoped>
</style>