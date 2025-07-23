import { createApp } from 'vue';
import ViewUIPlus from 'view-ui-plus';
import App from './src/App.vue';

import 'view-ui-plus/dist/styles/viewuiplus.css';
import './main.css';

const app = createApp(App);

app.use(ViewUIPlus)
    .mount('#app');
