import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import upArrow from '../src/assets/arrowup.png';
import '../src/pages/Homepage.css';
import SideDrawer from "./components/SideDrawer";
import { AVATAR_IMAGE, MOBILE } from './constant';
import './index.css';
import './appjs.css';
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Homepage from "./pages/Homepage";
import JobOpenings from "./pages/JobOpenings";
import AndroidNewPage from "./pages/Mobile/AndroidNewPage";
import Flutter from "./pages/Mobile/Flutter";
import Ios from "./pages/Mobile/Ios";
import ReactNative from "./pages/Mobile/ReactNative";
import HireDevelopers from "./pages/Services";
import BulkMailer from "./pages/ServicesSideBar/Services/BulkMailer";
import TermsAndCondition from "./pages/TermsConditions";
import Test from "./pages/Test";
import DotNet from "./pages/backend/DotNet";
import GraphQL from "./pages/backend/Graphql";
import Java from "./pages/backend/Java";
import Php from "./pages/backend/Php";
import Python from "./pages/backend/Python";
import Aws from "./pages/devops/Aws";
import Azure from "./pages/devops/Azure";
import Cybersecurity from "./pages/devops/Cybersecurity";
import Gcp from "./pages/devops/Gcp";
import DigitalMarketing from "./pages/digital/Digital";
import Seo from "./pages/digital/Seo";
import Drupal from "./pages/ecommerce/Drupal";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Magento from "./pages/ecommerce/Meginto";
import Shopify from "./pages/ecommerce/Shopify";
import Woocommerce from "./pages/ecommerce/Woocommerce";
import AngularFrontend from "./pages/frontend/Angular";
import Htmlcss from "./pages/frontend/Htmlcss";
import NodeFrontend from "./pages/frontend/Nodejs";
import ReactFrontend from "./pages/frontend/React";
import VueFrontend from "./pages/frontend/Vuejs";
import LandingLayout from "./pages/landingpage/LandingLayout";
import LaravelPage from "./pages/web/Laravel";
import Wordpress from "./pages/web/Wordpress";
import useBottomBar from "./utils/useBottomBar";

function App() {
  const { state } = useBottomBar()
 

  return (
    <>
      <div className='upArrow' style={{ left: '0px', bottom: '30px', display: 'block', position: 'fixed', cursor: 'pointer', zIndex: state.drawer_opened ? -1 : 9999 }}>
        <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth", }) }} src={upArrow} alt="pic" style={{ width: '100px', height: '100px', borderRadius: '100%' }} />
      </div >
      <FloatingWhatsApp
        accountName="Tutor Room"
        buttonClassName="whatsappButton"
        avatar={AVATAR_IMAGE}
        phoneNumber={`${MOBILE}`}
        statusMessage="Typically replies within 1 hour"
        chatMessage={`Hello there! 🤝 How can we help?`}
        darkMode={false}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />


      <Router>
        <SideDrawer />
        <Routes>

          <Route exact path="/" element={<Homepage />} />
          <Route exact path="contact" element={<ContactUs />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="itservices" element={<HireDevelopers />} />
          <Route exact path="jobopenings" element={<JobOpenings />} />
          <Route exact path="terms" element={<TermsAndCondition />} />
          <Route exact path="test" element={<Test />} />
          {/* backend */}
          <Route exact path="dotnet" element={<DotNet />} />
          <Route exact path="php" element={<Php />} />
          <Route exact path="python" element={<Python />} />
          <Route exact path="java" element={<Java />} />
          <Route exact path="graphql" element={<GraphQL />} />
          {/* frontend */}
          <Route exact path="react" element={<ReactFrontend />} />
          <Route exact path="nodejs" element={<NodeFrontend />} />
          <Route exact path="angular" element={<AngularFrontend />} />
          <Route exact path="htmlcss" element={<Htmlcss />} />
          <Route exact path="vuejs" element={<VueFrontend />} />
          <Route exact path="/test" element={<Test />} />
          {/* devops*/}
          <Route exact path="aws" element={<Aws />} />
          <Route exact path="azure" element={<Azure />} />
          <Route exact path="gcp" element={<Gcp />} />
          <Route exact path="cybersecurity" element={<Cybersecurity />} />
          {/* mobile*/}
          <Route exact path="mobile" element={<AndroidNewPage />} />
          <Route exact path="android" element={<AndroidNewPage/>} />
          <Route exact path="ios" element={<Ios />} />
          <Route exact path="reactnative" element={<ReactNative />} />
          <Route exact path="flutter" element={<Flutter />} />
          {/* ecommerce*/}
          <Route exact path="ecommerce" element={<Ecommerce />} />
          <Route exact path="shopify" element={<Shopify />} />
          <Route exact path="drupal" element={<Drupal />} />
          <Route exact path="magento" element={<Magento />} />
          <Route exact path="woocommerce" element={<Woocommerce />} />
          {/* web*/}
          <Route exact path="wordpress" element={<Wordpress />} />
          <Route exact path="laravel" element={<LaravelPage />} />
          {/* digital */}
          <Route exact path="digital" element={<DigitalMarketing />} />
          <Route exact path="seo" element={<Seo />} />
          {/* landing page */}
          <Route exact path="welcome" element={<LandingLayout />} />
          {/* services of sidebar */}
          <Route exact path="bulkmailer" element={<BulkMailer />} />
        


         

        </Routes>
      </Router>
    </>
  );
}

export default App;
