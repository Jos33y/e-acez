import React from 'react';


const Footer = () => {
    return ( 
        <div className="site-footer">
            <h4 className="text-center">
                E-acez
            </h4>
            <p className="text-center">Follow us on social media</p>
            <div className="footer-social-links">
                <ul className="social-links-list">

                <li>
                    <a 
                         href="https://www.facebook.com" 
                         target="_blank" 
                         rel="noopener noreferrer"                    
                         className="instagram">
                    <i className="fa fa-instagram fa-2x" />
                    </a> 
                    </li>
                    
                    <li>
                    <a 
                         href="https://www.facebook.com" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="facebook">
                    <i className="fa fa-facebook-f fa-2x" />
                    </a> 
                    </li>

                    <li>
                    <a 
                         href="https://www.facebook.com" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="twitter">
                    <i className="fa fa-twitter fa-2x" />
                    </a> 
                    </li>

                    <li>
                    <a 
                         href="https://www.facebook.com" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="linkedin">
                    <i className="fa fa-linkedin fa-2x" />
                    </a> 
                    </li>

                </ul>
                <p>&copy; 2020 Lagbalu Joseph </p>
            </div>

        </div>
     );
}
 
export default Footer;