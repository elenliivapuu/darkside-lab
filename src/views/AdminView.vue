<template>
    <main>
        <div class="container">
            <h2>Admin</h2>

            <!-- Logout button for the admin -->
            <div class="logout-wrapper">
                <button class="logout-btn" @click="logOut">Log Out</button>
            </div>

            <p class="section-title">All bookings:</p>

            <!-- Render each booking in a card -->
            <div class="bookings-list">
                <div v-for="event in events" :key="event.id" class="booking-card">
                    <div class="booking-field">
                        <span class="label">Date:</span>
                        <span class="value">{{ event.startDate }}</span>
                    </div>
                    <div class="booking-field">
                        <span class="label">Name:</span>
                        <span class="value">{{ event.name }}</span>
                    </div>
                    <div class="booking-field">
                        <span class="label">Phone:</span>
                        <span class="value">{{ event.phone }}</span>
                    </div>
                    <div class="booking-field">
                        <span class="label">Email:</span>
                        <span class="value">{{ event.email }}</span>
                    </div>
                    <div class="booking-field">
                        <span class="label">Comment:</span>
                        <span class="value">{{ event.comment || '—' }}</span>
                    </div>
                    <div class="booking-field">
                        <span class="label">Registered:</span>
                        <span class="value">{{ event.createdAt }}</span>
                    </div>

                    <!-- Action to delete booking -->
                    <button class="delete-btn" @click="deleteBooking(event.id)">
                        Delete Booking
                    </button>
                </div>
            </div>
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
            // Load all bookings from the backend
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

            // Delete booking by ID and reload list
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
            // Logout request + redirect to login
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
        // Load bookings on mount
        mounted() {
            this.loadBookings();
        }
	}
</script>

<style scoped>
main {
  min-height: 100vh;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 1em;
  color: white;
}

.container {
  background: rgba(228, 228, 228, 0.1);
  padding: 2.5em 2em;
  border-radius: 12px;
  width: 800px;
  max-width: 95vw;
  box-shadow: 0 0 10px rgba(255, 255, 0, 0.2);
}

h2 {
  font-size: 2em;
  text-align: center;
  color: var(--color-yellow);
  margin-bottom: 1.2em;
}

.section-title {
  font-size: 1.6em;
  color: var(--color-yellow);
  margin-bottom: 1.5em;
  text-align: center;
}

.logout-wrapper {
  text-align: right;
  margin-bottom: 1em;
}

.logout-btn {
  background-color: var(--color-light-grey);
  color: var(--color-dark-grey);
  padding: 0.6em 1em;
  border: none;
  border-radius: 5px;
  font-size: 0.95em;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}

.logout-btn:hover {
  background-color: darkred;
}

.bookings-list {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.booking-card {
  background-color: #1e1e1e;
  padding: 1.2em 1.5em;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(255, 255, 0, 0.1);
}

.booking-field {
  display: flex;
  justify-content: space-between;
  padding: 0.3em 0;
  font-size: 0.95em;
}

.label {
  color: #aaa;
  width: 35%;
  font-weight: 600;
}

.value {
  width: 65%;
  text-align: right;
  color: var(--color-white);
  word-break: break-word;
}

.delete-btn {
  margin-top: 1.2em;
  width: 100%;
  background-color: var(--color-yellow);
  color: var(--color-black);
  font-weight: bold;
  padding: 0.6em;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  text-transform: uppercase;
}

.delete-btn:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}

@media (max-width: 600px) {
  .booking-field {
    flex-direction: column;
    align-items: flex-start;
  }

  .label,
  .value {
    width: 100%;
    text-align: left;
  }

  .label {
    margin-bottom: 0.2em;
  }
}
</style>