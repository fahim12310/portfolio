import React from 'react';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'

import { BsArrowUpRight } from 'react-icons/bs';

import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiJavascript, SiMysql, SiFlutter } from 'react-icons/si';
import { FaYoutube, FaHtml5, FaCss3, FaReact, FaPython, FaJava } from 'react-icons/fa';
// import { DiJavascript } from 'react-icons/di';



const services = [
  {
    name: 'Adobe Applications',
    icon: [
      <SiAdobephotoshop />,
      <SiAdobepremierepro />,
      <SiAdobeaftereffects />
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing quia quo expedita accusamus illum ducimus tempore rep harum aperiam.',
    link: 'Learn more',
  },
  {
    name: 'Web Development',
    icon: [
      <FaHtml5 />,
      <FaCss3 />,
      <SiJavascript />,
      <FaReact />,
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing quia quo expedita accusamus illum ducimus tempore rep harum aperiam.',
    link: 'Learn more',
  },
  {
    name: 'Programming Languages',
    icon: [
      <FaPython />,
      <FaJava />,
      <SiMysql />,
      <SiFlutter />,
    ],
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing quia quo expedita accusamus illum ducimus tempore rep harum aperiam.',
    link: 'Learn more',
  },
  {
    name: 'YouTube',
    icon: [
      <FaYoutube />
    ],
    description: 'I have been doing YouTube since 2021 of a channel called CFCFahim. This is a channel where I discuss football on a weekly basis mostly on Chelsea Football CLub. Football is a sport I enjoy and doing YouTube has been a hobby of mine. I do have experience on how the YouTube metrics work so if you need assistance, you know here I am!',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten
               mb-12 1g:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                const icon = service.icon;
                return (
                  // <div className='border-b border-white/20 h-[146px] mb-[38px]
                  // flex' key={index}>
                  <div className='border-b border-white/20 flex mb-4 pb-4' key={index}>

                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        <span className='flex items-center'>
                          {name}
                          {icon && icon.map((icon, iconIndex) => (
                            <span key={iconIndex} className='ml-2'>{icon}</span>
                          ))}
                        </span></h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link} </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
