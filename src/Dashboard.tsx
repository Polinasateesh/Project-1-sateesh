
import Card from "@mui/joy/Card"
import { Button } from '@mui/material'
import bootstrap from './assets/bootstrap.png'
import css3 from './assets/css3.png'
import html5 from './assets/html5.png'
import javascript from './assets/javascript.png'
import materialui from './assets/materialui.png'
import redux from './assets/redux.png'
import typescript from './assets/typescript.png'

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
           <img src={bootstrap} alt={bootstrap} className="images"/>
           <img src={css3}  alt={css3} className="images"/>
           <img src={html5}  alt={html5} className="images"/>
           <img src={javascript}  alt={javascript} className="images"/>
           <img src={materialui}  alt={materialui} className="images"/>
           <img src={redux}  alt={redux} className="images"/>
           <img src={typescript}  alt={typescript} className="images"/>
        </div>
          <div>
            <Button variant="contained" href="https://github.com/Polinasateesh?tab=repositories" target="_blank">check my code on Github</Button>
          </div>
      </div>
    </Card>
  )
}


export default Dashboard