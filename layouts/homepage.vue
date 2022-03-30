<template>
	<div class="min-h-screen">
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
    head: {
        title: "Coffee Alternative",
    },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
        };
    },
    components: { Header }
};
</script>
<style lang="css">
a {
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}
</style>