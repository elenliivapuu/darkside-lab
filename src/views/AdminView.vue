<template>
    <main>
        <div class="container" style="color: white;">
            <p>Admin</p>
            <p>All bookings:</p>
            <ul>
                <li v-for="event in events" :key="event._id" style="line-height: 1.0;">
                    <p>Date: {{ event.startDate }}</p>
                    <p>Name: {{ event.name }}</p>
                    <p>Phone: {{ event.phone }}</p>
                    <p>Email: {{ event.email }}</p>
                    <p>Comment: {{ event.comment }}</p>
                    <p>Registered: {{ event.createdAt }}</p>
                    <button @click="deleteBooking(event._id)">Delete Booking</button>
                    <hr>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
	export default {
		data: function() {
			return { 
                events: []
            }
		},
		methods: {
            async loadBookings() {
                try {
                    const response = await fetch('/api/bookings?adminKey=YmVwaXNiZXN0');
                    if (!response.ok) throw new Error('Failed to fetch bookings');
                    const data = await response.json();
                    this.events = data;
                } catch (error) {
                    console.error('Error loading bookings:', error);
                }
            },

            async deleteBooking(eid) {
                const response = await fetch('/api/bookings?adminKey=YmVwaXNiZXN0', {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            bookingId: eid
                        })
                    });

                if (!response.ok) 
                    throw new Error('Failed to delete booking', eid);

                console.log(response.json())

                this.loadBookings();
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