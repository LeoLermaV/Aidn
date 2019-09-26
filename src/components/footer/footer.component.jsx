import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { selectCartHidden  } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';



import './footer.styles.scss';


const Footer = ({ currentUser, hidden }) => (
  <div className='footer'>
     
      <div className= 'footer-text' >
        <span className='bold'>Aidn Clothing Company</span><br/>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> 
            Labore modi veniam, iusto eligendi optio soluta atque <br/>
            voluptatibus inventore consequuntur <br/>
        </span>
      </div>
      
    
    
      <div className= 'footer-text'>
        <span  className='bold' >FOLLOW US</span><br/>
        <span>Facebook</span><br/>
        <span>Instagram</span><br/>
        <span>LinkedIn</span><br/>
        <span>Github</span><br/>
      </div>
    
    
      <div className= 'footer-text'>
        <span className='bold'>Customer</span><br/>
        <span>SignIn</span><br/>
        <span>FAQ</span><br/>
        <span>Contact</span><br/>
        <span>Paypal</span><br/>
      </div>
    
    
      <div className= 'footer-text' >
        <span className='bold'>Company</span><br/>
        <span>About Us</span><br/>
        <span>Terms and Conditions</span><br/>
        <span>Privacy</span><br/>
        <span>Cookies</span><br/>
      </div >
    
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect (mapStateToProps)(Footer);