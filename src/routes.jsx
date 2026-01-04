import Dashboard from './pages/dashboard/Dashboard';
import Orders from './pages/orders/Order';
import Products from './pages/products/Products';
import Sales from './pages/sales/Sales';
import Users from './pages/users/Users';

const routes = [
 {path:'/' , element:<Dashboard></Dashboard>},
 {path:'/orders' , element:<Orders></Orders>},
 {path:'/products' , element:<Products></Products>},
 {path:'/sales' , element:<Sales></Sales>},
 {path:'/users' , element:<Users></Users>},
]
export default routes;