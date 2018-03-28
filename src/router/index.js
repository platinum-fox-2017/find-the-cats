import Vue from 'vue'
import Router from 'vue-router'
// const Home = () => import('@/components/Home')
// const Post = () => import('@/components/Post')
// const Detail = () => import('@/components/Detail')
import Home from '@/components/Home'
import Post from '@/components/Post'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/detail/:id',
      props: true,
      name: 'Detail',
      component: Detail
    }
  ]
})
