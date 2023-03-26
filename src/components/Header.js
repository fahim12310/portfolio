import React from 'react';
import Logo from '../assets/Fahim.png';
import { Link } from 'react-scroll';

const CV = 'http://localhost:3000/Fahim Ibn Islam Resume.pdf';

// const downloadCV = () => {
//   fetch(CV).then(response => response.blob()).then(blob => {
//     const blobURL = window.URL.createObjectURL(new Blob([blob]));
//     const aTag = document.createElement("a");
//     aTag.href = blobURL;
//     aTag.setAttribute("download", 'Fahim_Ibn_Islam_Resume.pdf');
//     document.body.appendChild(aTag);
//     aTag.click();
//     aTag.remove();
//   });
// };

const Header = () => {
  return (
    <header className='py-3'>
      <div className='container mx-auto '>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <h1 className='text-accent text-[40px] font-bold'>Fahim</h1>
          <a href='#'>
            <img src={Logo} alt='' width={120} />
          </a>

          {/* <button onClick={() => downloadCV()} className='btn btn-sm'>Download CV</button> */}
          <div>

            <Link to='contact'
              activeClass='active'
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] items-center justify-center'>
              <button className='btn btn-lg'>Contact me</button>

            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
