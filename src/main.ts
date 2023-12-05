import { createApp } from 'vue'
import App from './App.vue'
import ViewerPlugin from './ViewerPlugin'

// Assuming CountryData is the correct type for your countryData objects
interface CountryData {
  id: string
  value: number
}

const app = createApp(App)

app.use(ViewerPlugin)

app.mount('#app')
