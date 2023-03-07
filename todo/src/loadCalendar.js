import { Calendar } from 'fullcalendar';

function loadCalendar() {
    const calendarEl = document.getElementById('calendar')
    const calendar = new Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        height: 'auto',
    })
    calendar.render()
}

export { loadCalendar };