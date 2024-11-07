<template>
    <main>
        <h2 class="page-title">Broneeri</h2>
        
        <section class="two-grid container">
            <div class="calendar-parent">
                <h3>Vali päev:</h3>

                <div id="calendar" class="calendar">
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
                                    <button class="currentPeriod" @click="setTodayAsSelected">Täna</button>
                                </nav>
                                <p class="periodLabel" style="margin: 0; padding: 0; min-height: 0;">{{ headerProps.monthNames[headerProps.periodStart.getMonth()] }}</p>
                            </div>
                       </template>
                       <!-- <template #day="{ day }">
                            <div 
                                class="cv-day"
                                :class="{ 'clicked-day': isSelectedDay(day) }"
                                @click="onDayClick(day)">
                                {{ day.getDate() }}
                            </div>
                        </template> -->
                    </CalendarView>
                </div>
            </div>

            <div>
                <h3>Vali kellaaeg:</h3>

                <div v-if="showSidebar" class="sidebar">
                    <div class="sidebar-content">
                        <!-- <h4>{{ formattedSelectedDate }}</h4> -->
                        <!--<h4>{{ selectedDate?.toLocaleDateString() || 'Select a date' }}</h4> -->
                        <h4>{{ formattedSelectedDate }}</h4>
                        <!-- <h4>{{ selectedDate ? selectedDate.toLocaleDateString() : 'Select a date' }}</h4> -->

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
                
            </div>
        </section>
        <section class="contact-container container">
            <div class="contact-form">
                <h3>Sisesta andmed:</h3>
                <form @submit.prevent="submitForm" method="post" class="contact-form">
                    <label for="name">Nimi:</label>   
                    <input type="text" id="name" v-model="formData.name" required>

                    <label for="phone">Telefon:</label>  
                    <input type="text" id="phone" v-model="formData.phone" required>

                    <label for="email">E-post:</label>    
                    <input type="email" id="email" v-model="formData.email" required>
                    <br>
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
                previousSelectedElement: null,
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
            },
             isSelectedDay(day) {
                // Check if the provided day is the selected date
                return this.selectedDate && this.selectedDate.toDateString() === day.toDateString();
            },
            //only for showing date in the broneeri sidebar in dd.mm.yyyy format
            formattedSelectedDate() { 
                if (!this.selectedDate) return '';
                const day = String(this.selectedDate.getDate()).padStart(2, '0');
                const month = String(this.selectedDate.getMonth() + 1).padStart(2, '0');
                const year = this.selectedDate.getFullYear();
                return `${day}.${month}.${year}`;
    }
        },
		components: {
			CalendarView,
            CalendarViewHeader
		},
		methods: {
			setShowDate(d) {
                this.showDate = d;
                
                if (d.toDateString() === new Date().toDateString()) {
                    this.setTodayAsSelected();
                }
            },
            setTodayAsSelected() {
                // Clear previous selection
                if (this.previousSelectedElement) {
                    this.previousSelectedElement.classList.remove("clicked-day");
                    this.previousSelectedElement = null;
                }    
                    // Set today as the selected date
                this.selectedDate = new Date();
                this.setShowDate(this.selectedDate);
                this.showSidebar = true;
            },
            onDayClick(date, calendarItems, windowEvent) {
                this.selectedTime = "";
                // Remove `clicked-day` class from previously selected element
                if (this.previousSelectedElement) {
                    this.previousSelectedElement.parentNode.classList.remove("clicked-day");
                    this.previousSelectedElement.classList.remove("clicked-day");
                }
                console.log("Clicked date:", date);
                this.selectedDate = date;
                this.showSidebar = true;

                var dayElement = windowEvent.srcElement;
                if (dayElement.classList.contains("cv-day")) {
                    dayElement.classList.add("clicked-day");
                } else if (dayElement.classList.contains("cv-day-number")) {
                    dayElement.parentNode.classList.add("clicked-day");
                }
                this.previousSelectedElement = windowEvent.srcElement;

                // Example list of available dates
                this.bookedHours = [8, 10, 12, 14, 16];

                // Get bookings for the selected date
                let dayBookings = this.events
                    .filter(event => new Date(event.startDate).toDateString() === date.toDateString())
                    .map(event => new Date(event.startDate).getUTCHours());

                this.bookedHours = this.bookedHours.filter(h => !dayBookings.includes(h));
            },
            //onItemClick(date) {},
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
    ///////////////////////////////////////////////////////////////////
    /////////
</script>

<style>
main {
    background-color: #333;
}

.two-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 6em;
    row-gap: 1em;
    color: white;
    padding-bottom: 2em;
}
.calendar-parent {
    max-width: 100%;
    max-height: 100%;
}

.calendar {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 400px;
    border-radius: 4px;
}

.cv-wrapper {
    border-radius: 4px;
}


.periodLabel {
    display: grid;
    margin: 10px; 
    padding: 4px; 
    min-height: 0;
    /* locale: et; */
    
}

/* #calendar cv-wrapper locale-et {
    
} */

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
.theme-gcal .cv-day-number {
    margin: 0 auto; /*0 auto */
    padding: 0.5em 0.5em
}
.theme-gcal .cv-day.today .cv-day-number{
    background-color: gray;
}
#calendar .previousPeriod:hover, #calendar .nextPeriod:hover{
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 4px;
}
#calendar .currentPeriod:hover {
    cursor: pointer;
    background-color: #f0f0f0;
}
#calendar .currentPeriod:active {
    background-color: gray;
    transition: background-color 0.5s ease;
}
#calendar .cv-day {
    cursor: pointer; /* Show pointer cursor on hover */
    padding: 0.5em;
    transition: background-color 0.3s ease;
}

#calendar .cv-day-number {
    background-color: none;
}

#calendar .cv-day:hover {
    background-color: #f0f0f0; /* Light gray background on hover */
}

#calendar .clicked-day {
    background-color: #ffdd00 !important; 
    color: #333 !important; 
}

.contact-container {
    display: flex;
    column-gap: 0.5em;
    row-gap: 0.7em;
    margin-top: 1em;
    
}

.contact-form {
    width: 100%;
    max-width: 600px;

}

.contact-form form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    
}
.contact-form h3 {
    color: #fff;
}

.contact-form label {
    text-align: left;
    margin-bottom: 3px;
    color: white;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    padding: 10px;
    margin-bottom: 8px;
    border: none;
    border-radius: 4px;
    font-size: 0.9em;
    color: #000;
}
.contact-form button {
    padding: 15px;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
    background-color: yellow;
    color: #000;
    border: none;
    border-radius: 4px;
    font-size: 1.2em;
    cursor: pointer;
    font-weight: bold;

}

.contact-form button:hover {
    background-color: #000;
    color: #fff;
}

</style>
