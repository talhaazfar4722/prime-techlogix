import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Header from './components/Header'
import FooterComp from './components/Footercomp'
import Signin from './pages/SignIn'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Contact from './pages/Contact'
import Hire from './pages/Hire'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import UploadProject from './pages/UploadProject'
import ProjectPage from './pages/ProjectPage'
import Services from './pages/Services'


export default function App() {
  return (
   
    <BrowserRouter>
    <ScrollToTop />
    <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/hire-us' element={<Hire/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path='/terms-and-conditions' element={<Terms/>}/>
        <Route path='/search' element={<Search />} />
        <Route path='/services' element={<Services />} />
        {/* for admin only */}
        <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<DashBoard/>}/>
        </Route>
        {/* for only admin use */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route
           path='/create-post' element={<CreatePost />} />
           <Route path='/upload-project' element={<UploadProject />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        <Route path='/projects' element={<Projects/>}/>
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path='/project/:projectSlug' element={<ProjectPage />} />
       </Routes>
     <FooterComp/>  
      </BrowserRouter>
   
  )
}
