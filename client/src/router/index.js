import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Cart from '@/views/Cart'
import Detail from '@/views/Detail';

// Admin Components
import Index from '@/views/admin/Index'
import New from '@/views/admin/New'
import Products from '@/views/admin/Products'
import Edit from '@/views/admin/Edit'
import Manufacturers from '@/views/admin/Manufacturers'
import NewManufacturers from '@/views/admin/NewManufacturers';
import EditManufacturers from '@/views/admin/EditManufacturers';

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
      {
        path: 'manufacturers',
        name: 'Manufacturers',
        component: Manufacturers,
      },
      {
        path: 'manufacturers/new',
        name: 'NewManufacturers',
        component: NewManufacturers,
      },
      {
        path: 'manufacturers/edit/:id',
        name: 'EditManufacturers',
        component: EditManufacturers,
      },
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
]

const router = new Router({
  routes
})

export default router
