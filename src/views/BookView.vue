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
                        @click-date="onDayClick"
                        class="theme-default">
                       <CalendarViewHeader @input="setShowDate" />
                    </CalendarView>
                </div>

                <span>Month</span>
                <button>&lt;</button>
                <button>&gt;</button>

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

    import "../../node_modules/vue-simple-calendar/dist/style.css"
    import "../../node_modules/vue-simple-calendar/dist/css/default.css"


	export default {
		data: function() {
			return { 
                showDate: new Date(),
                selectedDate: null,
                showPopup: false,
                events: [
                    {
                        title: 'Broneeritud', 
                        startDate: '2024-10-26', 
                        endDate: '2024-10-26'
                    },
                    {
                        title: 'Broneeritud',
                        startDate: '2024-10-30',
                        endDate: '2024-10-30'
                    }
                ]
            }
		},
		components: {
			CalendarView,
			CalendarViewHeader,
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
            }
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