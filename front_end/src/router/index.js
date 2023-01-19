import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home'
import Contact from '@/views/contact/Contact'
import AllPosts from '@/views/blog/AllPosts'
import SinglePost from '@/views/blog/components/SinglePost'
import Dashboard from '@/views/dashboad/Dashboard'
import Compte from '@/views/compte/components/Compte'
import UserReg from '@/views/compte/components/UserReg'
import UserCnx from '@/views/compte/components/UserCnx'
import Gnambo from '@/views/compte/Gnambo'
import NotFound from '@/components/base/NotFound'
import EditPost from '@/views/blog/components/EditPost'

const routes = [
  {
    path: '/randomeguy',
    name: 'Gnambo',
    component: Gnambo,
  
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/posts',
    name: 'Posts',
    component: AllPosts
  },
  {
    path: '/compte',
    name: 'Compte',
    component: Compte,
    children:[
      {
        path: '/login',
        name: 'UserCnx',
        component: UserCnx
      },
      {
        path: '/register',
        name: 'UserReg',
        component: UserReg
      },
    ]
  },

  {
    path: '/posts/:id',
    name: 'SinglePost',
    component: SinglePost,
    props:true,
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost,
    props:true,
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  
  },

  // Catch all 404 page
  {
    path: '/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// **************** GLOBALS ROUTER GUARDS
// router.beforeEach((to)=>{
//   if(to.name !== 'Home'){
//     return '/'
//   }
    
// })

// router.beforeResolve((to, from)=>{
//   console.log('User authenticated');
//   console.log('User coming from :', from.path);
//   console.log('User going to :', to.path);
    
// })

// router.afterEach((to, from)=>{
//   console.log('After Navigation');
  
// })
export default router
