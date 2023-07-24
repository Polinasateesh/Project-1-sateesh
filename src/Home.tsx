import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Loader";
const Contact = lazy(() => import("./Contact"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const NavBar = lazy(() => import("./NavBar"));
const Dashboard = lazy(() => import("./Dashboard"));
import  Footer  from "./Footer";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="Contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="About"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="Projects"
            element={
              <Suspense fallback={<Loader />}>
                <Projects />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <div style={{position:'absolute',bottom:0,backgroundColor:'ButtonShadow',width:'100%',height:'60px',padding:'10px'}}>
        <Footer />
      </div>  
    </>
  );
};

export default Home;
