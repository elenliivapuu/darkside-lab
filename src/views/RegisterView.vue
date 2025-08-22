<template>
    <main>
        <div class="register-container">
            <h2 class="register-title">Register</h2>
        
            <form @submit.prevent="submitForm" method="post">
                <input type="text" v-model.trim="formData.username" placeholder="Username" />
                <input type="email" v-model.trim="formData.email" placeholder="Email" />
                <input type="password" v-model.trim="formData.password" placeholder="Password" />
                <input type="password" v-model.trim="formData.password2" placeholder="Password (again)" />
                <button type="submit" class="reg-button">Sign Up</button>
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
main {
  min-height: 80vh;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.register-container {
  background: rgba(228, 228, 228, 0.226);
  padding: 2em;
  padding-right: 2.5em;
  border-radius: 10px;
  width: 340px;
  box-shadow: 0 0 10px rgba(255, 255, 0, 0.2);
}

.register-container h2 {
  font-size: 1.8em;
  margin-bottom: 1em;
  text-align: center;
  color: yellow;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.6em;
  margin-bottom: 1em;
  border: none;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: white;
  font-size: 1em;
}

input::placeholder {
  color: #bbb;
}

button {
  width: 50%;
  padding: 0.6em;
  margin-top: 1em;
  border: none;
  border-radius: 5px;
  background-color: yellow;
  color: black;
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
  text-transform: uppercase;
}

button:hover {
  background-color: black;
  color: white;
}
</style>


