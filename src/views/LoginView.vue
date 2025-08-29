<template>
    <main>
        <div class="login-container">
            <h2 class="login-title">Logi sisse</h2>
        
            <form @submit.prevent="submitForm" method="post">
                <input type="text" v-model.trim="formData.username" placeholder="Username" />
                <input type="password" v-model.trim="formData.password" placeholder="Password" />

                <label class="checkbox">
                    <input type="checkbox" v-model="formData.remember_me" />
                    Remember Me
                </label>

                <button type="submit" class="login-button">Log In</button>
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

                    // const response = await fetch('http://127.0.0.1:5000/api/login', {

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
main {
  min-height: 80vh;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.login-container {
  background: rgba(228, 228, 228, 0.226);
  padding: 2em;
  padding-right: 2.5em;
  border-radius: 10px;
  width: 320px;
  box-shadow: 0 0 10px rgba(255, 255, 0, 0.2);
}

.login-title {
  font-size: 1.8em;
  margin-bottom: 1em;
  text-align: center;
  color: var(--color-yellow);
}

input[type="text"],
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

.checkbox {
  display: flex;
  align-items: center;
  font-size: 0.95em;
  margin-bottom: 1.5em;
}

.checkbox input {
  margin-right: 0.5em;
}

 button {
  background-color: var(--color-yellow);
  color: var(--color-black);
  font-weight: bold;
  padding: 0.6em;
  border: none;
  width: 50%;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 0.4em;
}

.login-button:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}
</style>