import React from 'react'
const Home = React.lazy(
    () => import('./../pages/Home/home'),
)

const Preloader = React.lazy(
    () => import('./../components/preloader'),
)

var mainRoutes = [
    { path: '/', name: 'Homepage', component: <Home /> },
    { path: '/preloader', name: 'Preloader', component: <Preloader /> },
]

export default mainRoutes