import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.scss'

// 引入自定义组件
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Pager from './components/Pager/Pager.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

const app = createApp(App)

// 注册自定义组件
app.component('Itmc-Icon', Icon)
app.component('Itmc-Button', Button)
app.component('Itmc-Card', Card)
app.component('Itmc-Dialog', Dialog)
app.component('Itmc-Pager', Pager)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
