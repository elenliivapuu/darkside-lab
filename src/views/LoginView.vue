<template>
    <main>
        <div class="container" style="color: white;">
            <p>Login</p>
        
            <form @submit.prevent="submitForm" method="post">
                <input v-model.trim="formData.username" placeholder="Username" />
                <input type="password" v-model.trim="formData.password" placeholder="Password" />
                <div>
                <input type="checkbox" id="remember_me" v-model="formData.remember_me" />
                <label style="padding-left: 0.5rem" for="remember_me">Remember Me</label>
                </div>

                <button>Log In</button>
            </form>
        </div>
    </main>
</template>

<script>
import router from '../router'

	export default {
		data: function() {
			return { 
                formData: {
                    username: "",
                    password: "",
                    remember_me: false
                },
            }
		},
		methods: {
            async submitForm() {
                try {
                    const form = new FormData()
                    form.append('username', this.formData.username)
                    form.append('password', this.formData.password)

                    const response = await fetch('http://127.0.0.1:5000/api/login', {
                        method: 'POST',
                        credentials: 'include',
                        body: form
                    });
                    if (!response.ok) throw new Error('Failed to log in');
                    const data = await response.json();
                    if (data.redirect == '/admin') {
                        router.push(data.redirect);
                    }
                } catch (error) {
                    console.error('Error logging in:', error);
                }
            },

        },
	}
</script>
<style scoped>
    .container {
        min-height: 80vh;
    }
</style>