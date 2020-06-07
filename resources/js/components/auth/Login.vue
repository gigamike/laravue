<template>
    <div class="contact">
        <!-- Page Content -->
        <b-container>
            <!-- Page Heading/Breadcrumbs -->
            <h1 class="mt-4 mb-3">Login
                <small>Subheading</small>
            </h1>
            <b-breadcrumb>
                <b-breadcrumb-item :to="{name: 'Home'}">
                    Home
                </b-breadcrumb-item>
                <b-breadcrumb-item active>Login</b-breadcrumb-item>
            </b-breadcrumb>
            <!-- Content Row -->
            <b-row>
                <b-col cols=8 lg="8" clas="mb-4">
                    <h3>Welcome Back</h3>
                    <b-form @submit="onSubmit" name="sentMessage" id="contactForm" novalidate>
                        <b-form-group id="input-group-1" label="Email Address:" label-for="email">
                            <b-form-input id="email" v-model="form.email" type="email" required data-validation-required-message="Please enter your email address."></b-form-input>
                            <b-form-invalid-feedback :state="errorFor('email')">
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Password" label-for="password">
                            <b-form-input id="password" v-model="form.password" type="password" required data-validation-required-message="Please enter your password."></b-form-input>
                            <b-form-invalid-feedback :state="errorFor('password')">
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <div id="success"></div>
                        <!-- For success/fail messages -->
                        <b-form-group>
                            <b-button type="submit" variant="primary" id="loginButton">Submit</b-button>
                        </b-form-group>
                        <div class="text-center">
                            <router-link :to="{ name: 'home'}" class="small">Forgot Password?</router-link>
                        </div>
                        <div class="text-center">
                            <router-link :to="{ name: 'home'}" class="small">Create an Account!</router-link>
                        </div>
                    </b-form>
                </b-col>
                <b-col cols=4 lg="4" clas="mb-4">
                    <h3>What is Lorem Ipsum?</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </b-col>
            </b-row>
            <!-- /.row -->
            <!-- Contact Form -->
            <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
            <b-row>
                <b-col cols=8 lg="8" clas="mb-4">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import { logIn } from "../../shared/utils/auth";

export default {
    data() {
        return {
            loading: false,
            errors: null,
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        errorFor(field) {
            return null !== this.errors && this.errors[field] ? false : true;
        },
        onSubmit(evt) {
            evt.preventDefault()
            // alert(JSON.stringify(this.form))
            this.login();
        },
        async login() {
            try {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/login', {
                    email: this.form.email,
                    password: this.form.password
                });

                logIn();
                this.$store.dispatch("loadUser");
                this.$router.push({ name: "home" });
            } catch (error) {
                this.errors = error.response && error.response.data.errors;
            }

            this.loading = true;
        }
    }
}

</script>
