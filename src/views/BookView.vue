<template>
    <main>
        <h2 class="page-title">Broneeri</h2>
        
        <section class="two-grid container">
            <div>
                <h3>Aja broneerimine</h3>

                <div id="calendar">
                    <CalendarView
                        :show-date="showDate"
                        :items="events"
                        :startingDayOfWeek = 1
                        @click-date="onDayClick"
                        class="theme-default">
                        <template #header="{ headerProps }">
                            <div class="cv-header">
                            <nav class="cv-header-nav">
                                <button class="previousPeriod" @click="setShowDate(headerProps.previousPeriod)">&lt;</button>
                            <button class="nextPeriod" @click="setShowDate(headerProps.nextPeriod)">&gt;</button>
                            <button class="currentPeriod" @click="setShowDate(headerProps.currentPeriod)">Today</button>
                            </nav>
                            <p class="periodLabel">{{ headerProps.monthNames[headerProps.periodStart.getMonth()] }}</p>
                            </div>
                       </template>
                    </CalendarView>
                </div>

                <div v-if="showPopup" class="popup">
                    <div class="popup-content">
                        <h3>Valitud aeg: {{ selectedDate.toLocaleString() }}</h3>
                        <button @click="closePopup">Cancel</button>
                    </div>
                </div>

            </div>

            <div>
                <p>Vali vaba aeg....</p>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quia eveniet maxime vero dignissimos eius, repudiandae, iusto fugiat dolorem impedit, aperiam quos atque accusantium nihil magnam natus odio accusamus eligendi.</p>

                <form action="#" method="post" class="contact-form">
                    <label for="name">Nimi:</label>
                    <br>    
                    <input type="text" id="name" name="name" required>

                    <br>
                    
                    <label for="name">Telefon:</label>
                    <br>    
                    <input type="text" id="name" name="name" required>

                    <br>

                    <label for="email">E-post:</label>
                    <br>    
                    <input type="email" id="email" name="email" required>

                    <br>    

                    <button type="submit" id="confirm">Broneeri</button>
                </form>

            </div>
        </section>

    </main>
</template>

<script>
    import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
    import CalendarHeader from "../components/CalendarHeader.vue"

    import "../assets/calendar.css"


	export default {
		data: function() {
			return { 
                showDate: new Date(),
                selectedDate: null,
                showPopup: false,
                events: []
            }
		},
		components: {
			CalendarView,
            CalendarViewHeader,
            CalendarHeader
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
            },
            onDayClick(date, calendarItems, windowEvent) {
                this.selectedDate = date;
                this.showPopup = true;
            },
            closePopup() {
                this.showPopup = false; 
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
            }
        },
        mounted() {
            this.loadBookings();
        }
	}
</script>

<style scoped>
main {
    background-color: #333;
}

.two-grid {
    display: grid;
    height: 100%;
    padding: 1em 3em 3em 3em;
    grid-template-columns: 1fr 1fr;
    column-gap: 3em;
    row-gap: 1em;
    color: white;
}

#calendar {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: black;
}

.booked-event {
  background-color: red;
  color: white;
  border-radius: 50%;
}
.available-event {
  background-color: green;
  color: white;
  border-radius: 50%;
}


@media (max-width: 768px) {
    .two-grid {
        grid-template-columns: 1fr;
    }
}
</style>