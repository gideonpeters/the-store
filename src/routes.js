import AllProducts from './components/AllProducts';
import Product from './components/Product';
import Cart from './components/Cart';
import Hello from './components/Hello';

export const routes = [
    {
        name: 'home',
        path: '',
        component: Hello,
    },
    {
        name: 'product.all',
        path: '/product',
        component: AllProducts,
    },
    {
        name: 'product.books',
        path: '/notebooks',
        component: Product,
    },
    {
        name: 'product.phones',
        path: '/smartphones',
        component: Product,
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart,
    }
];