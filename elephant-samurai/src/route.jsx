import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
    HeadContent,
} from '@tanstack/react-router'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContactUS from './pages/ContactUs.jsx'
import LoginPage from '@/pages/LoginPage.jsx'
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
    component: () => <Home />,
})

const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/test',
    component: () => <div class='text-white'>Test Page</div>,
})
// add routing
const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => <About />,
})

const contactUsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contact',
    component: () => <ContactUS />,
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: () => <LoginPage />,
})
const routeTree = rootRoute.addChildren([
    indexRoute,
    testRoute,
    aboutRoute,
    contactUsRoute,
    loginRoute,
])

export const router = createRouter({
    routeTree,
})

export default router

// declare module '@tanstack/react-router' {
//     interface Register {
//         router: typeof router
//     }
// }
