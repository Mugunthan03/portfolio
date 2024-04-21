import React from 'react'
import ProjectCard from './ProjectCard'
import udemy from '../assets/project/udemy.png'
import nostra from '../assets/project/nostra.png'
import todo from '../assets/project/todo.png'
import green from '../assets/project/green.png'
import trip from '../assets/project/trip.png'
import rock from '../assets/project/rock.png'
import guess from '../assets/project/guess.png'
import calc from '../assets/project/calc.png'
import clock from '../assets/project/clock.png'

const Projects = [
    {
        id:1,
        title:'Udemy-clone',
        desc : 'React | Html | Css',
        image: udemy,
        github:'https://github.com/Mugunthan03/Udemy-React',
        live:'https://udemyclonereact.vercel.app/'  
    },
    {
        id:2,
        title:'Nostra online clothing',
        desc : 'Js | Html | Css',
        image: nostra,
        github:'https://github.com/Mugunthan03/nostra',
        live:'https://nostra-gamma.vercel.app/'   
    },
    {
        id:3,
        title:'Todo-List ',
        desc : 'React | Tailwind',
        image: todo,
        github:'https://github.com/Mugunthan03/Todo-list',
        live:'https://todo-list-nine-tan.vercel.app/' 
    },
    {
        id:4,
        title:'Green Den Flower Seller ',
        desc : 'Js | Tailwind',
        image: green,
        github:'https://github.com/Mugunthan03/greenden',
        live:'https://greenden.vercel.app/' 
    },
    {
        id:5,
        title:'Trip-Advisor Clone',
        desc : 'Html | Css',
        image: trip,
        github:'https://github.com/Mugunthan03/Trip-advisor-clone',
        live:'https://trip-advisor-clone-beta.vercel.app/' 
    },
    {
        id:6,
        title:'Rock-Paper-Scissors Game',
        desc : 'Js | Html | Css',
        image: rock,
        github:'https://github.com/Mugunthan03/Rock-paper-scissors',
        live:'https://simple-js-rock-paper-scissor.netlify.app/' 
    },
    {
        id:7,
        title:'Guess Number Game',
        desc : 'Js | Html | Css',
        image: guess,
        github:'https://github.com/Mugunthan03/Guess-num-js',
        live:'https://guess-randomnumber.netlify.app/' 
    },
    {
        id:8,
        title:'Calculator',
        desc : 'Js | Html | Css',
        image: calc,
        github:'https://github.com/Mugunthan03/calculator-js',
        live:'https://simplecalculatorjs00.netlify.app/' 
    },
    {
        id:9,
        title:'Digital Clock',
        desc : 'Js | Html | Css',
        image: clock,
        github:'https://github.com/Mugunthan03/digital-clock-js',
        live:'https://digital-clock-js00.netlify.app/' 
    },

]

const ProjectSection = () => {
  return (

    <>
    <div id='projects' className='bg-[#141413] pb-5 xl:pb-20 lg:pb-10 md:p-10 lg:p-0'>
    <h2 className='md:text-center text-4xl font-bold p-10 text-white flex justify-center '>
       <span className='border-b-4 border-gray-500 mb-2'> My Projects</span></h2>
   <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-10 gap-8 md:gap-12 px-10 lg:px-24 xl:px-52'>
    {
        Projects.map((project)=><ProjectCard key={project.id} title={project.title} desc={project.desc} 
        imgUrl={project.image} tags={project} github={project.github} live={project.live} />)
    }
    </div>
   </div>
   </>
    
  )
}

export default ProjectSection