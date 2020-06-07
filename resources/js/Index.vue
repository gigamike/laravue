<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
                <b-container>
                    <b-navbar-brand :to="{name: 'home'}">BootstrapVue</b-navbar-brand>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                        </b-navbar-nav>
                        <b-navbar-nav>
                            <b-nav-item v-if="!isLoggedIn" :to="{name: 'register'}">Register</b-nav-item>
                            <b-nav-item v-if="!isLoggedIn" :to="{name: 'login'}">Login</b-nav-item>
                            <b-nav-item v-if="isLoggedIn" @click.prevent="logout">Logout</b-nav-item>
                            <b-nav-item :to="{name: 'about'}">About</b-nav-item>
                            <b-nav-item :to="{name: 'contact'}">Contact</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-container>
            </b-navbar>
        </div>
        <router-view></router-view>
        <footer class="py-5 bg-dark">
            <div class="container">
                <p class="m-0 text-center text-white">Copyright &copy; Gigamike.net 2020</p>
            </div>
        </footer>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            isLoggedIn: "isLoggedIn"
        })
    },
    methods: {
        async logout() {
            try {
                axios.post("/logout");
                this.$store.dispatch("logout");
            } catch (error) {
                this.$store.dispatch("logout");
            }
        }
    }
}

</script>
<style>
body {
    padding-top: 50px;
}

</style>
