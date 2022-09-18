import React from 'react';
import RightUp from './RightUp';
import RightDown from './RightDown';

function Right() {
  return (
    <div className='right flex'>
      <div className='top'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7FFha25u_w-azPq1hq2Ya1rChxrVWlX2a3sZFv0&s' alt="image1"/>
        <img src='https://media.istockphoto.com/photos/young-smiling-handsome-man-in-casual-clothes-posing-isolated-on-blue-picture-id1249420269?k=20&m=1249420269&s=612x612&w=0&h=taSQreK8i8J_nt-NQR0SBGVhXXtNWAtJuXiBnHBNW0g=' alt="img"/>
      </div>
      <RightUp/>
      <RightDown/>
    </div>
  )
  }
export default Right;
