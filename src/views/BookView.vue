<template>
    <main>
        <h2 class="page-title">Broneeri</h2>
        
        <section class="two-grid container">
            <div>
                <h3>Vali aeg</h3>

                <div id="calendar">
                    <CalendarView
                        :show-date="showDate"
                        :startingDayOfWeek = 1
                        :locale="et"
                        @click-date="onDayClick"
                        class="theme-gcal locale-et">
                        <template #header="{ headerProps }" :locale="et">
                            <div class="cv-header locale-et">
                                <nav class="cv-header-nav">
                                    <button class="previousPeriod" @click="setShowDate(headerProps.previousPeriod)">&lt;</button>
                                    <button class="nextPeriod" @click="setShowDate(headerProps.nextPeriod)">&gt;</button>
                                    <button class="currentPeriod" @click="setShowDate(headerProps.currentPeriod)">Täna</button>
                                </nav>
                                <p class="periodLabel" style="margin: 0; padding: 0; min-height: 0;">{{ headerProps.monthNames[headerProps.periodStart.getMonth()] }}</p>
                            </div>
                       </template>
                    </CalendarView>
                </div>
            </div>

            <div>
                <h3>Aja broneerimine</h3>

                <div v-if="showSidebar" class="sidebar">
                <div class="sidebar-content">
                    <h4>{{ selectedDate.toLocaleDateString() }}</h4>

                    <select id="timeSlot" v-model="selectedTime" @change="emitSelectedTime" v-if="bookedHours.length>0">
                        <option value="" disabled>Kellaaeg</option>

                        <option v-for="time in bookedHours" :key="time" :value="time">
                            {{ time }}:00
                        </option>
                        
                    </select>
                    <div v-else>
                        <p>Vabad ajad puuduvad selleks kuupaevaks!</p>
                    </div>

                    <br><br>
                </div>
                </div>
                
                <div v-if="successMsg" class="alert success">{{ successMsg }}</div>
                <div v-if="errorMsg" class="alert error">{{ errorMsg }}</div>
                <form @submit.prevent="submitForm" method="post" class="contact-form">
                    <label for="name">Nimi:</label>   
                    <input type="text" id="name" v-model="formData.name" required>
                    <br>

                    <label for="phone">Telefon:</label>  
                    <input type="text" id="phone" v-model="formData.phone" required>
                    <br>
                    <label for="email">E-post:</label>    
                    <input type="email" id="email" v-model="formData.email" required>

                    <br><br>
                    <button type="submit" id="confirm" :disabled="!isFormValid">Broneeri</button>
                </form>
            </div>
        </section>

        

    </main>
</template>

<script>
    import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"

    import "../../node_modules/vue-simple-calendar/dist/style.css"
    import "../../node_modules/vue-simple-calendar/dist/css/gcal.css"
    import "../assets/calendar.css"


	export default {
		data() {
			return { 
                showDate: new Date(),
                selectedDate: null,
                showSidebar: false,
                bookedHours: [],
                selectedTime: "",
                events: [],
                formData: {
                    name: "",
                    phone: "",
                    email: ""
                },
                errorMsg: "",
                successMsg: ""
            };
        },
        computed: {
            isFormValid() {
                return this.formData.name && this.formData.phone && this.formData.email && this.selectedTime;
            }
        },
		components: {
			CalendarView,
            CalendarViewHeader
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
            },
            onDayClick(date) {
                this.selectedDate = date;
                this.showSidebar = true;

                // Example list of available dates
                this.bookedHours = [8, 10, 12, 14, 16];
                
                // Get bookings for the selected date
                let dayBookings = this.events
                    .filter(event => new Date(event.startDate).toDateString() === date.toDateString())
                    .map(event => new Date(event.startDate).getUTCHours());

                this.bookedHours = this.bookedHours.filter(h => !dayBookings.includes(h));
            },
            emitSelectedTime(e) {
                this.selectedDate.setHours(e.target.value);
            },
            async loadBookings() {
                try {
                    const response = await fetch('/api/bookings');
                    if (!response.ok) throw new Error('Failed to fetch bookings');
                    const data = await response.json();
                    this.events = data;
                } catch (error) {
                    console.error('Error loading bookings:', error);
                }
            },
            async submitForm() {
                try{
                    let cd = this.selectedDate;
                    const response = await fetch('/api/bookings', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.formData.name,
                            phone: this.formData.phone,
                            email: this.formData.email,
                            startDate: new Date(Date.UTC(cd.getFullYear(), cd.getMonth(), cd.getDate(), cd.getHours(), 0)),
                            time: this.selectedTime
                        })
                    });

                    if (!response.ok) {
                        response.json().then(res => {
                            this.errorMsg = "Failed to save booking: " + res.error;
                        });
                        throw new Error('Failed to save booking');
                    }
                    
                    const result = await response.json();
                    console.log("Booking saved:", result);

                    this.successMsg = "Booking saved successfully!";
                    this.errorMsg = "";

                    // Reset form after submission
                    this.formData = { name: "", phone: "", email: "" };
                    this.selectedTime = "";
                    this.showSidebar = false;
                    this.loadBookings();
                } catch (error) {
                    console.log("Failed to save booking:", error);
                    this.errorMsg = "Failed to save booking. Please try again.";
                    this.successMsg = "";
                }
            }
        },
        mounted() {
            this.loadBookings();
        }
	};
</script>

<style scoped>
main {
    background-color: #333;
}

.two-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;
    row-gap: 1em;
    color: white;
    padding-bottom: 2em;
}

#calendar {
    display: flex;
    flex-direction: column;
    background-color: #fff;
}

/* Sidebar styling */
.sidebar {
    background-color: #333;
    color: #fff;
}

.sidebar-content h4 {
    color: #ffdd00;
}

.sidebar-content ul {
    list-style: none;
    padding: 0;
}

.sidebar-content ul li {
    padding: 0.5em 0;
}

.sidebar-content button {
    background-color: #f39c12;
    color: #fff;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.sidebar-content button:hover {
    background-color: #e67e22;
}

select {
  padding: 0.5em;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #333;
  color: #fff;
}

select:focus {
  border-color: #ffdd00;
  outline: none;
  box-shadow: 0 0 5px rgba(255, 221, 0, 0.5);
}
.alert {
    padding: 0.5em;
    margin-bottom: 1em;
    border-radius: 4px;
    font-weight: bold;
}

.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}
</style>
