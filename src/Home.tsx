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
  const routes = [{
    path: '/',
    element: <Dashboard />
  }, {
    path: 'Contact',
    element: <Contact />
  }, {
    path: 'About',
    element: <About />
  }, {
    path: 'Projects',
    element: <Projects />
  }]
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routes.map((eachRoute) => (
            <Route key={eachRoute.path} path={eachRoute.path} element={<Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>}>
              {eachRoute.element}
            </Suspense>} />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Home;
