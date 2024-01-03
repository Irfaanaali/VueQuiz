import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Quiz from '../components/Quiz.vue'
import QuizDetails from '../components/QuizDetails.vue'
import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path : '/quiz', component : Quiz},
    { path : '/quiz/:id', component : QuizDetails}
  ]
  
  const router = createRouter({
    
    history: createWebHistory(),
    routes, 
  })

  export default router