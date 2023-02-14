
import LogInPage from './modules/LoginPage.js';
import HomePage from './modules/HomePage.js';
import ErrorPage from './modules/ErrorPage.js';

const { createApp } = Vue;
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  //location bar in the browser
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', name: 'login', component: LogInPage },
    { path: '/home', name: 'home', component: HomePage },
    { path: '/:pathMach(.*)*', name: 'error', component: ErrorPage }
  ]
})

// 5. Create and mount the root instance.
const app = Vue.createApp({

  methods: {
    tryRouterPus(){
    this.$router.push({name: "home"})
  }}

})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')


