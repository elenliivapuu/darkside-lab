<template>
    <div class="container" style="color: white;">
        <p>Admin</p>
        <p>All bookings:</p>
        <ul>
            <li v-for="event in events" :key="event._id">
                <p>Date: {{ event.startDate }}</p>
                <p>Name: {{ event.name }}</p>
                <p>Phone: {{ event.phone }}</p>
                <p>Email: {{ event.email }}</p>
                <p>Comment: {{ event.comment }}</p>
                <p>Registered: {{ event.createdAt }}</p>
                <hr>
                <button>Delete Booking</button>
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
                    const response = await fetch('/api/bookings');
                    if (!response.ok) throw new Error('Failed to fetch bookings');
                    const data = await response.json();
                    this.events = data;
                } catch (error) {
                    console.error('Error loading bookings:', error);
                }
            }
        },
        mounted() {
            this.loadBookings();
        }
	}
</script>