<template>
    <main>
        <div class="container" style="color: white;">
            <p>Admin</p>
            <div>
                <button class="logout-btn" @click="logOut">Log Out</button>
            </div>
            <p>All bookings:</p>
            <ul>
                <li v-for="event in events" :key="event.id" style="line-height: 1.0;">
                    <p>Date: {{ event.startDate }}</p>
                    <p>Name: {{ event.name }}</p>
                    <p>Phone: {{ event.phone }}</p>
                    <p>Email: {{ event.email }}</p>
                    <p>Comment: {{ event.comment }}</p>
                    <p>Registered: {{ event.createdAt }}</p>
                    <button @click="deleteBooking(event.id)">Delete Booking</button>
                    <hr>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import router from '../router'

	export default {
		data: function() {
			return { 
                events: []
            }
		},
		methods: {
            async loadBookings() {
                try {
                    const response = await fetch('http://127.0.0.1:5000/api/bookings', {
                        method: 'GET',
                        credentials: 'include',
                        body: null,
                    });
                    if (!response.ok) throw new Error('Failed to fetch bookings');
                    const data = await response.json();
                    this.events = data.bookings;
                } catch (error) {
                    console.error('Error loading bookings:', error);
                }
            },

            async deleteBooking(eid) {
                const response = await fetch(`http://127.0.0.1:5000/api/bookings/${eid}`, {
                        method: 'DELETE',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: null
                    });

                if (!response.ok) 
                    throw new Error('Failed to delete booking', eid);

                this.loadBookings();
            },
            async logOut() {
                const res = await fetch(`http://127.0.0.1:5000/api/logout`, {
                    method: 'GET',
                    credentials: 'include',
                })

                const data = await res.json()
                if (res.ok && data.redirect) {
                    router.push(data.redirect)
                } else {
                    console.log(res, data)
                }
            }
        },
        mounted() {
            this.loadBookings();
        }
	}
</script>
<style scoped>
    .container {
        min-height: 80vh;
    }
</style>