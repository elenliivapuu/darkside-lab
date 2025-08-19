<template>
    <main>
        <div class="container" style="color: white;">
            <p>Register</p>
        
            <form @submit.prevent="submitForm" method="post">
                <input v-model.trim="formData.username" placeholder="Username" />
                <input type="email" v-model.trim="formData.email" placeholder="Email" />
                <input type="password" v-model.trim="formData.password" placeholder="Password" />
                <input type="password" v-model.trim="formData.password2" placeholder="Password (again)" />
                <button>Sign Up</button>
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
                    email: "",
                    password: "",
                    password2: "",
                },
            }
		},
		methods: {
            async submitForm() {
                try {
                     if (this.formData.password !== this.formData.password2) {
                        throw new Error('Passwords do not match!');
                     }

                
                    const form = new FormData()
                    form.append('username', this.formData.username)
                    form.append('email', this.formData.email)
                    form.append('password', this.formData.password)
                    form.append('password2', this.formData.password2)

                    const response = await fetch('http://127.0.0.1:5000/api/register', {
                        method: 'POST',
                        credentials: 'include',
                        body: form
                    });
                    if (!response.ok) throw new Error('Failed to sign up');
                    const data = await response.json();
                    if (data.redirect) {
                        router.push(data.redirect);
                    }
                } catch (error) {
                    console.error('Error signing up:', error);
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