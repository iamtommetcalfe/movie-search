import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "./plugins/axios";
import { vueDebounce } from 'vue-debounce'

const app = createApp(App)
app.use(axios, {
    baseUrl: 'https://www.omdbapi.com/',
    apiKey: import.meta.env.VITE_OMDB_API_KEY
}).directive('debounce', vueDebounce({ lock: true }))
app.mount('#app')