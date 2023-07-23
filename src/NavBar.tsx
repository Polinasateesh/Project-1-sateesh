import { Link } from "react-router-dom";
import './index.css'
import Logo from './assets/pngwing.com.png'


const NavBar = () => {
  const handleResumeDownload=()=>{
    alert('functionality not implemented')
  }


  const id=1


 
 



  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0) ',backgroundColor:'#327ba8'}}>
      <Link to="/"  style={{margin:'5px',fontSize:'18px',color:'#ffffff',textDecoration: 'none'}}><img src={Logo} height={'40px'} width={'40px'}/></Link>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Link to="/" style={{marginRight:'35px',fontSize:'18px',color:'#ffffff',textDecoration: 'none',fontFamily:'revert'}}>Home</Link>
        <Link to={`About/${id}`} style={{marginRight:'35px',fontSize:'18px',color:'#ffffff',textDecoration: 'none',fontFamily:'revert'}}>About</Link>
        <Link to="Projects"style={{marginRight:'35px',fontSize:'18px',color:'#ffffff',textDecoration: 'none',fontFamily:'revert'}}>Projects</Link>
        <Link to="Contact"style={{marginRight:'35px',fontSize:'18px',color:'#ffffff',textDecoration: 'none',fontFamily:'revert'}}> Contact </Link>
        <button type="button" className='btn btn-outline-info' style={{padding:'5px',marginRight:'35px',fontFamily:'revert',}}onClick={handleResumeDownload}>Resume</button>
      </div>
    </div>

  );
};
export default NavBar;
