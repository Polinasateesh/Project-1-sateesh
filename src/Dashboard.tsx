
import Card from "@mui/joy/Card"
import { Button } from '@mui/material'
import bootstrap from './assets/bootstrap.png'
import css3 from './assets/css3.png'
import html5 from './assets/html5.png'
import javascript from './assets/javascript.png'
import materialui from './assets/materialui.png'
import redux from './assets/redux.png'
import typescript from './assets/typescript.png'
import react from './assets/react.png'

const Dashboard = () => {

  return (
    <Card className='card-container'>
      <div className='container-fluid'>
        <h1 className="fw-600">
          Hello, <br /> I&apos;m{" "}
          <span className="greenText">Sateesh Polina</span>.<br />
          I&apos;m a <span className="greenText">Frontend</span> Web Developer.
        </h1>
        <div className="images-container">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src={html5} alt={html5} className="images" /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src={css3} alt={css3} className="images" /></a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src={javascript} alt={javascript} className="images" /></a>
          <a href="https://legacy.reactjs.org/" target="_blank"><img src={react} alt={react} className="images" /></a>
          <a href="https://www.typescriptlang.org/" target="_blank"><img src={typescript} alt={typescript} className="images" /></a>
          <a href="https://redux.js.org/" target="_blank"><img src={redux} alt={redux} className="images" /></a>
          <a href="https://getbootstrap.com/" target="_blank"><img src={bootstrap} alt={bootstrap} className="images" /></a>
          <a href="https://mui.com/" target="_blank"><img src={materialui} alt={materialui} className="images" /></a>
        </div>
        <div>
          <Button variant="contained" size="large"href="https://github.com/Polinasateesh?tab=repositories" target="_blank">check my code on Github</Button>
        </div>
      </div>
    </Card>
  )
}


export default Dashboard