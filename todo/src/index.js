import { loadCalendar } from './loadCalendar.js';
// apply stylesheet
import './style.css'

// once dom loads run this function
document.addEventListener('DOMContentLoaded', () => {
    // initialize calendar
    loadCalendar();
});
