import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Cart from '@/views/Cart'

// Admin Components
import Index from '@/views/admin/Index'
import New from '@/views/admin/New'
import Products from '@/views/admin/Products'
import Edit from '@/views/admin/Edit'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Index,
    children: [
      {
        path: '',
        name: 'Products',
        component: Products,
      },
      {
        path: 'new',
        name: 'New',
        component: New,
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: Edit,
      },
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
]

const router = new Router({
  routes
})

export default router
