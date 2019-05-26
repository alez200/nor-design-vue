
import Router from 'vue-router';
import HomePage from '../Pages/HomePage';
import Collection from '../Pages/Collection';
import Line from '../Pages/Line';


export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/collezione',
            name: 'Collection',
            component: Collection
        },
        {
            path: '/linea',
            name: 'Line',
            component: Line
        }
    ]
})