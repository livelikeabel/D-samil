import Main from './pages/Main';
import FirstFloor from './pages/FirstFloor';
import ThirdFloor from './pages/ThirdFloor';
import List from './pages/List';

const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
    },
    {
        path: '/first',
        component: FirstFloor,
    },
    {
        path: '/third',
        component: ThirdFloor,
    },
    {
        path: '/list',
        component: List,
    },
];

export default routes;