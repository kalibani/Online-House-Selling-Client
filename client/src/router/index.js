import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Gallery from '@/components/Gallery'
import HouseDetail from '@/components/HouseDetail'
import AddAdvertisement from '@/components/AddAdvertisement'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/gallery/:id',
      name: 'HouseDetail',
      component: HouseDetail
    },
    {
      path: '/add',
      name: 'AddAdvertisement',
      component: AddAdvertisement
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    }
  ],
  mode : 'history'
})
