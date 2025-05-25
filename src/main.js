import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/main.scss'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

// Routes
import Home from './views/Home.vue'
import Transactions from './views/Transactions.vue'
import Reports from './views/Reports.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/transactions', component: Transactions },
  { path: '/reports', component: Reports }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#F5F5F5'
        }
      }
    }
  }
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')