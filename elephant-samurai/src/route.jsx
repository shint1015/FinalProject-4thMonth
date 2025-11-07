import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
    HeadContent,
} from '@tanstack/react-router'
import Layout from './Layout.jsx'
import ShowPage from './pages/ShowPage.jsx'
const rootRoute = createRootRoute({
    component: () => (
        <Layout>
            <HeadContent />
            <Outlet />
        </Layout>
    ),
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <div class='text-white'>Index Page</div>,
})

const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/test',
    component: () => <div class='text-white'>Test Page</div>,
})

const showRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/shows',
    component: () => <ShowPage />,
})

const routeTree = rootRoute.addChildren([indexRoute, testRoute, showRoute])

export const router = createRouter({
    routeTree,
})

export default router

// declare module '@tanstack/react-router' {
//     interface Register {
//         router: typeof router
//     }
// }
