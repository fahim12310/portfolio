import React from 'react';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div> */}
          <motion.div variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Freelance Developer AND an Editor with bundles of experience.
            </h3>

            <p className='mb-6'>
              A Computing Science student at the University of Aberdeen. Born and raised in Aberdeen, Scotland.
              Driven by my huge passion for technology. Pursuing a career in the tech industry.
              I occasionally freelance work as a developer, video editor or a photoshop editor.I have a strong
              foundation in programming languages such as Python, Java, JavaScript, HTML, CSS, SQL Server (phpMyAdmin),
              and Flutter, as well as Adobe applications such as Photoshop, Premiere Pro, and After Effects.
            </p>
            <p className='mb-6'>
              During my time at the University of Aberdeen, I've taken courses in Python OOP,
              Human-Computer Interaction, Algorithms and Data Structures, Mathematics for Computing Science,
              Computer Systems and Architecture, Database Management, and Software Programming.
              I'm also proficient in communication, problem-solving, flexibility, and teamwork.
            </p>
            {/* 
            <div>
              <p >In terms of web development, I have experience in:</p>
              <ul className='mb-6'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </div> */}


            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={2} duration={3} />nd
                </div>

                <div className='font-primary text-sm tracking-[2px]'>
                  Year Student of  <br />Computing Science

                </div>

              </div><div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {/* {
                  inView ?
                    <CountUp start={0} end={13} duration={3} /> : null} */}
                  <CountUp start={0} end={19} duration={3} />
                </div>

                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  age
                </div>

              </div>
              <div>

                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={3} duration={3} />
                </div>

                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>

              </div>


            </div>

            <div className='flex gap-x-8 items-center'>
              <div>

                <Link to='contact'
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='cursor-pointer w-[60px] h-[60px] items-center justify-center'>
                  <button className='btn btn-lg'>Contact me</button>

                </Link>
              </div>
              <a href="#" className='text-gradient btn-link'>
                My Portfolio
              </a>


            </div>
          </motion.div>
        </div>

      </div>

    </section >
  );
};

export default About;
