import React from 'react';
import '../css/footer.css';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='footer-content'>
      <div className="text-center">Copyright &copy; {year} Ichiban, Inc. All Rights Reserved - Developed by Cheng Vue</div>
    </div>
  )
}

export default Footer