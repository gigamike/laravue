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
                <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
            </div>
        </footer>
    </div>
</template>
<style>
body {
    padding-top: 50px;
}

</style>
