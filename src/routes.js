import Landing from './components/Landing.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Account from './components/Account.vue';

export default [
    { path: '/', component: Landing}, 
    { path: '/register', component: Register}, 
    { path: '/login', component: Login}, 
    { path: '/account', component: Account } 
]

