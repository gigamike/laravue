<template>
    <div class="blog-home-1">
        <!-- Page Content -->
        <b-container>
            <!-- Page Heading/Breadcrumbs -->
            <h1 class="mt-4 mb-3">Blog Home One
                <small>Subheading</small>
            </h1>
            <b-breadcrumb>
                <b-breadcrumb-item :to="{name: 'home'}">
                    Home
                </b-breadcrumb-item>
                <b-breadcrumb-item active>Blog Home 1</b-breadcrumb-item>
            </b-breadcrumb>
            <b-row>
                <b-col cols="8" md="8" class="mt-1 mb-4">
                    <b-card no-body header-tag="header" footer-tag="footer" id="my-blog" v-for="post in posts" :key="post.id" :per-page="perPage" :current-page="currentPage" class="mb-4">
                        <router-link :to="{ name: 'post', params: { id: post.id }}">
                            <b-card-img src="http://placehold.it/750x300" alt="Image" top></b-card-img>
                        </router-link>
                        <b-card-body>
                            <router-link :to="{ name: 'post', params: { id: post.id }}">
                                <b-card-title>{{ post.title }}</b-card-title>
                            </router-link>
                            <b-card-text>{{ post.body }}</b-card-text>
                            <router-link :to="{ name: 'post', params: { id: post.id }}" class="btn btn-primary">Read More &rarr;</router-link>
                        </b-card-body>
                        <b-card-footer>
                            Posted on {{ post.created_at }} by
                            <a href="#">Start Bootstrap</a>
                        </b-card-footer>
                    </b-card>
                    <!-- Pagination -->
                    <div class="overflow-auto">
                        <b-pagination class="justify-content-center" v-model="currentPage" :total-rows="total" :per-page="perPage" aria-controls="my-blog"></b-pagination>
                    </div>
                </b-col>
                <!-- Sidebar Widgets Column -->
                <b-col cols="4" md="4" class="mt-1 mb-4">
                    <!-- Search Widget -->
                    <b-card header-tag="header">
                        <template v-slot:header>
                            <h5 class="mb-0">Search</h5>
                        </template>
                        <b-card-text>
                            <b-input-group>
                                <b-form-input type="text" placeholder="Search for..."></b-form-input>
                                <b-input-group-append>
                                    <b-button>Go!</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-card-text>
                    </b-card>
                    <!-- Categories Widget -->
                    <b-card header-tag="header" class="mt-4 mb-4">
                        <template v-slot:header>
                            <h5 class="mb-0">Categories</h5>
                        </template>
                        <b-card-text>
                            <b-row>
                                <b-col cols="6" lg="6">
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="#">HTML</a>
                                        </li>
                                        <li>
                                            <a href="#">Freebies</a>
                                        </li>
                                    </ul>
                                </b-col>
                                <b-col cols="6" lg="6">
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#">JavaScript</a>
                                        </li>
                                        <li>
                                            <a href="#">CSS</a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorials</a>
                                        </li>
                                    </ul>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </b-card>
                    <!-- Side Widget -->
                    <b-card header-tag="header" class="mt-4 mb-4">
                        <template v-slot:header>
                            <h5 class="mb-0">Side Widget</h5>
                        </template>
                        <b-card-text>
                            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
            <!-- /.row -->
        </b-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isLoading: true,
            perPage: 3,
            currentPage: 1,
            total: 0,
            posts: {}
        }
    },
    methods: {
        async getPosts() {
            axios.get('/api/posts?page=' + this.currentPage)
                .then((response) => {
                    console.log(response);
                    this.posts = response.data.data;
                    this.perPage = response.data.meta.per_page;
                    this.currentPage = response.data.meta.current_page;
                    this.total = response.data.meta.total;
                    this.loading = false;
                    this.scrollToTop();
                });
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
    created() {
        this.loading = true;
        this.getPosts();
    },
    watch: {
        currentPage: {
            handler: function(value) {
                this.getPosts().catch(error => {
                    console.error(error)
                })
            }
        }
    }
}

</script>
