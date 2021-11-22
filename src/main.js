import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';

const app = createApp(App);

//Глобальная регистрация
components.forEach(component => {
    app.component(component.name, component);
})

app.mount('#app')
