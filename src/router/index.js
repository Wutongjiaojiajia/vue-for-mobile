import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routeCheck';

Vue.use(VueRouter)


const router = new VueRouter({
  routes
})

// 路由切换更改标题
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router
