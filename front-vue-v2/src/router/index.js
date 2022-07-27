import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/pages/create-employee/CreateEmployeeComponent.vue'),
  },
  {
    path: '/list-employee',
    name: 'List Employees',
    component: () => import('../components/pages/list-employee/ListEmployeeComponent.vue'),
  },
  {
    path: '/edit-employee/:id',
    name: 'Update Employee',
    component: () => import('../components/pages/edit-employee/EditEmployeeComponent.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Quando houver carregamento de uma pagina, ele vai carregar
    NProgress.start();
  } 
  next();
});

router.afterEach((to, from) => {
  // Completando a animação do Nprogress
  NProgress.done();
});

export default router;
