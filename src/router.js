import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('./views/LoginView.vue'), // Lazy loading
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./views/DashboardView.vue'), // Lazy loading
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('./views/OrdersView.vue'), // Lazy loading
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import('./views/ForgotPasswordView.vue'), // Lazy loading
  },
  {
    path: '/password-reset',
    name: 'passwordReset',
    component: () => import('./views/PasswordResetView.vue'), // Lazy loading
  },
  {
    path: '/password-reset-success',
    name: 'passwordResetSuccess',
    component: () => import('./views/PasswordResetSuccess.vue'), // Lazy loading
  },
  {
    path: '/otp-verification',
    name: 'otpVerification',
    component: () => import('./views/OtpVerificationView.vue'), // Lazy loading
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: () => import('./views/StocksView.vue'), // Lazy loading
  },
  {
    path: '/returns',
    name: 'returns',
    component: () => import('./views/ReturnsView.vue'), // Lazy loading
  },
  {
    path: '/add-new-product',
    name: 'addNewProduct',
    component: () => import('./views/AddNewProductView.vue'), // Lazy loading
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./views/ProfileView.vue'), // Lazy loading
  },
  {
    path: '/return-details',
    name:'returnDetails',
    component:() => import('./views/ReturnDetailsView.vue'),
  },
  {
    path: '/order-details',
    name: 'orderDetails',
    component: () => import('./views/OrderDetailsView.vue'), // Lazy loading
  }
];

export const createRouter = () =>
  _createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory("/")
      : createWebHistory("/"),
    routes,
  });

