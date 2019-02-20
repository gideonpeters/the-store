import AllProducts from './components/AllProducts';
import ProductPhone from './components/ProductPhone';
import ProductNotebook from './components/ProductNotebook';
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
        component: ProductNotebook,
    },
    {
        name: 'product.phones',
        path: '/smartphones',
        component: ProductPhone,
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart,
    }
];