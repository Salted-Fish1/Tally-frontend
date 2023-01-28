// router/index.js
import Index from '../page/Index'
import About from '../page/About'

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  }
];

export default routes