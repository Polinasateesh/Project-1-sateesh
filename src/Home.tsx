import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from "react";
const Contact = lazy(() => import("./Contact"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));
const NavBar = lazy(() => import("./NavBar"));
const Dashboard = lazy(() => import("./Dashboard"));
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </div>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="Contact"
            element={
              <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="About"
            element={
              <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="Projects"
            element={
              <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
              </div>}>
                <Projects />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <div style={{ position: 'absolute', bottom: 0, backgroundColor: 'ButtonShadow', width: '100%', height: '50px', padding: '10px' }}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
