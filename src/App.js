import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/lists/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContextProvider } from "./context route/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import LoginFirst from "./pages/loginFirst/LoginFirst";
import Test from "./pages/test/Test";
import Profile from "./pages/profile/Profile";
import About from "./pages/FooterPages/about/About";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privacy from "./pages/FooterPages/privacy/Privacy";
import Gallery from "./pages/FooterPages/gallery/Gallery";
import ContactUs from "./pages/FooterPages/contact-us/ContactUs";
import Careers from "./pages/FooterPages/careers/Careers";
import Corporate from "./pages/FooterPages/corporate/Corporate";
import Payments from "./pages/FooterPages/payments/Payments";
import Offers from "./pages/FooterPages/offers/Offers";
import Tenures from "./pages/FooterPages/tenures/Tenures";
import Faq from "./pages/FooterPages/faq/Faq.tsx";
import Report from "./pages/FooterPages/report/Report";
import Security from "./pages/FooterPages/security/Security";
import Sitemap from "./pages/FooterPages/sitemap/Sitemap";
import Epr from "./pages/FooterPages/epr/Epr";
import Plans from "./pages/FooterPages/plans/Plans";
import Faqs from "./pages/FooterPages/faqs/Faqs";
import Platinum from "./pages/plans/Platinum";
import Diamond from "./pages/plans/Diamond";
import Gold from "./pages/plans/Gold";
import Silver from "./pages/plans/Silver";

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
     <AuthContextProvider>
     <ToastContainer/>
     <Routes>
        
        <Route path="/" element = {<Login  setIsAuth={setIsAuth} />}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/loginfirst" element = {<LoginFirst/>}/>
        <Route path="/test" element = {<Test/>} />        
       
        <Route path="/home" element = {<ProtectedRoute> <Home/> </ProtectedRoute> }/>
        <Route path="/hotels" element = {<ProtectedRoute> <List/> </ProtectedRoute>}/>
        <Route path="/hotels/:id" element = {<ProtectedRoute> <Hotel/> </ProtectedRoute>}/>
        <Route path="/about" element = {<ProtectedRoute> <About/> </ProtectedRoute>} />
        <Route path="/privacy-policy" element = {<ProtectedRoute> <Privacy/> </ProtectedRoute>} />
        <Route path="/gallery" element = {<ProtectedRoute> <Gallery/> </ProtectedRoute>} />
        <Route path="/contact-us" element = {<ProtectedRoute> <ContactUs/></ProtectedRoute>} />
        <Route path="/careers" element = {<ProtectedRoute><Careers/> </ProtectedRoute>} />
        <Route path="/corporate" element = {<ProtectedRoute> <Corporate/> </ProtectedRoute>} />
        <Route path="/payments" element = {<ProtectedRoute> <Payments/> </ProtectedRoute>} />
        <Route path="/offers" element = {<ProtectedRoute> <Offers/> </ProtectedRoute>} />
        <Route path="/tenures" element = {<ProtectedRoute><Tenures/> </ProtectedRoute>} />
        <Route path="/faq" element = {<ProtectedRoute> <Faq/> </ProtectedRoute>} />
        <Route path="/FAQs" element = {<ProtectedRoute> <Faqs/> </ProtectedRoute>} />
        <Route path="/report-infringement" element = {<ProtectedRoute> <Report/></ProtectedRoute>} />
        <Route path="/holiday-plans" element = {<ProtectedRoute> <Plans/></ProtectedRoute>} />
        <Route path="/security" element = {<ProtectedRoute> <Security/> </ProtectedRoute>} />
        <Route path="/sitemap" element = {<ProtectedRoute> <Sitemap/> </ProtectedRoute>} />
        <Route path="/epr-compliance" element = {<ProtectedRoute> <Epr/> </ProtectedRoute>} />
        <Route path="/profile" element = {<ProtectedRoute> <Profile/> </ProtectedRoute>} />
        <Route path="/holiday-plans/weekend-gateways" element = {<ProtectedRoute> <Platinum /> </ProtectedRoute>} />
        <Route path="/holiday-plans/lions-club" element = {<ProtectedRoute> <Diamond /> </ProtectedRoute>} />
        <Route path="/holiday-plans/panthers-club" element = {<ProtectedRoute> <Gold /> </ProtectedRoute>} />
        <Route path="/holiday-plans/long-holidays" element = {<ProtectedRoute> <Silver /> </ProtectedRoute>} />

    </Routes>
     </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;