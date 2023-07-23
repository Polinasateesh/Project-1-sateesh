

import instaLogo from './assets/instagram.png'
import facebookLogo from './assets/facebook.png'
import twiterLogo from './assets/twitter.png'
import linkedinLogo from './assets/linkedin.png'
import gmailLogo from './assets/logo-gmail-9952.png'

export const Footer = () => {
    const date= new Date().getFullYear()
    console.log(date)
    return (
        
      <footer style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <p>&copy; {date} Sateesh Polina. All rights reserved.</p>
        </div>
        <div>
        <a href="https://www.instagram.com/mr_unlucke/" title="instagram" target='_blank'><img src={instaLogo} width={'26px'} style={{marginRight:'20px'}}/></a> 
         <a href="https://www.facebook.com/sateesh.chowdhary.5" target='_blank' title='Facebook'><img src={facebookLogo} width={'26px'} style={{marginRight:'20px'}}/></a> 
          <a href="https://www.linkedin.com/in/sateesh-polina/"title="Linkedin" target='_blank'><img src={linkedinLogo} width={'26px'} style={{marginRight:'20px'}}/></a> 
         <a href="/contact"><img src={twiterLogo} width={'26px'} style={{marginRight:'20px'}}/></a> 
         <a href="mailto:polinasateesh111@gmail.com"title="Gmail" ><img src={gmailLogo} width={'26px'} style={{marginRight:'20px'}}/></a> 

        </div>
      </footer>
    );
  };
  

export default Footer