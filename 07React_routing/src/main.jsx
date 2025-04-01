
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './Components/About/about.jsx'
import Home from './Components/Home/home.jsx'
import Header from './Components/header/header.jsx'
import Footer from './Components/footer/footer.jsx'

import Contact from './Components/contact-us/contact.jsx'
import Github from './Components/github/hub.jsx'
import Layout from './layout.jsx'

// const router = createBrowserRouter([
 
//       {
//         path: "/",
//         element: <div> <Header/><Home/> <Footer/> </div>
//       },
//       {
//         path: "/about",
//         element: <div> <Header/><About/> <Footer/> </div>
//       },
//       {
//         path: "/github",
//         element: <div> <Header/><Github/> <Footer/> </div>
//       }, {
//         path: "/contact",
//         element: <div> <Header/><Contact/> <Footer/> </div>
//       },
      
//     ]
  
// )

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element = {<Layout />}>
  <Route path="" element = {<Home />} />
  <Route path="/about" element = {<About />} />
  <Route path="/github" element = {<Github/>} />
  </Route>
 )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
  
)
