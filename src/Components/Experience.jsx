import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import javascript from '../assets/skills/javascript.png';
import react from '../assets/skills/react.png';
import node from '../assets/skills/node.png';
import mongo from '../assets/skills/mongo.png';
import tailwind from '../assets/skills/tailwind.png';
import express from '../assets/skills/express.png';
import git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';
import netlify from '../assets/skills/netlify.png';
import vercel from '../assets/skills/vercel.png';
import redux from '../assets/skills/redux.png';
import mongoose from '../assets/skills/mongoose.png';
import Anim from './Anim';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  const skills = [
    {
      id: 1,
      src: html,
      title: 'Html',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'Css',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-400',
    },
    {
      id: 5,
      src: node,
      title: 'Node Js',
      style: 'shadow-green-500',
    },
    {
      id: 6,
      src: express,
      title: 'Express Js',
      style: 'shadow-white',
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 8,
      src: mongo,
      title: 'Mongo DB',
      style: 'shadow-green-400',
    },
    {
      id: 9,
      src: git,
      title: 'Git',
      style: 'shadow-red-500',
    },
    {
      id: 10,
      src: github,
      title: 'Github',
      style: 'shadow-white',
    },
    {
      id: 11,
      src: netlify,
      title: 'Netlify',
      style: 'shadow-sky-400',
    },
    {
      id: 12,
      src: vercel,
      title: 'Vercel',
      style: 'shadow-white',
    },
    {
      id: 13,
      src: redux,
      title: 'Redux',
      style: 'shadow-purple-400',
    },
    {
      id: 14,
      src: mongoose,
      title: 'Mongoose',
      style: 'shadow-red-800',
    },
  ];

  return (
    <div
      id='experience'
      ref={ref}
      className='bg-[#000000] w-full min-h-screen md:h-full  md:pt-20 xl:pt-10 md:px-10 lg:px-24 xl:py-40  '
    >
      <div className='max-w-screen-lg flex flex-col justify-center w-full h-full mx-auto '>
        <div className='mt-10  flex justify-center'>
          <p className='text-4xl text-white font-bold border-b-4 border-gray-500 p-2 inline mb-10'>
           Skills & Experience
          </p>
          
          
        </div>
        <div className='md:-mt-24'> <Anim /></div>
       
        <motion.div
          className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-10 md:px-5 lg:px-10 xl:px-6'>
          {skills.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md duration-500 transform py-2 rounded-lg  ${style}`}
              initial={{ opacity: 0, x: 200 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              whileHover={{ scale: 1.1,duration:0.2 }}>
              <img src={src} alt={title} className='w-14 h-14 mx-auto  ' />
              <p className='text-white mt-5'>{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
