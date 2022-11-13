import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "./plugins/axios";
import { vue3Debounce } from 'vue-debounce'

const app = createApp(App)
app.use(axios, {
    baseUrl: 'https://www.omdbapi.com/',
    apiKey: 'YOUR_API_KEY_HERE'
}).directive('debounce', vue3Debounce({ lock: true }))
app.mount('#app')