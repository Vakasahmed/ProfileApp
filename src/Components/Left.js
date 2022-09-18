import React from 'react';

function Left() {
  return (
    <div className='left flex'>
    <div className='up flex'>
        <img className='img' src='https://media.istockphoto.com/photos/young-smiling-handsome-man-in-casual-clothes-posing-isolated-on-blue-picture-id1249420269?k=20&m=1249420269&s=612x612&w=0&h=taSQreK8i8J_nt-NQR0SBGVhXXtNWAtJuXiBnHBNW0g=' alt='img'/>
        <span>Shaikh Vakas Ahmed</span>
    </div>
    <div className='down'>
        <span>Home</span>
        <span>Deposits</span>
        <span>Others</span>
        <span>Payments</span>
        <span>Settings</span>
    </div>
    </div>
  )
}

export default Left;