<template>
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
                console.log(eid)
                // fetch DELETE? to apj bookings
                // request: id

                // wait for OK response
                // bad response if ID does not exist etc
            }
        },
        mounted() {
            this.loadBookings();
        }
	}
</script>