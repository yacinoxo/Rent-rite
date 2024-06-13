"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBuilding, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Features from './Features';

function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref,{once: true})
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const FromLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const FromRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const FromBottom = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div>
      <div className='Hero !h-[100vh]'>
        <nav className='flex justify-between px-14 pt-6 mb-36'>
            <img src="https://i.ibb.co/hLyGp6n/logo-png-removebg-preview.png" className='w-32' alt='logo' />
            <div className='link flex gap-10'>
              <a href='/' className='font-semibold text-xl hover:text-sky-500 hover:cursor-pointer'>Home</a>
              <a href='#about' className='font-semibold text-xl hover:text-sky-500 hover:cursor-pointer'>About</a>
              <a href='#contact' className='font-semibold text-xl hover:text-sky-500 hover:cursor-pointer'>Contact</a>
            </div>
          </nav>
        <div className='flex justify-between px-14 mb-20'>
          <div>
            <motion.div ref={ref} initial="hidden" animate={controls} variants={FromLeft} className='text-5xl mb-8 font-semibold'>Your Perfect Home Awaits</motion.div>
            <motion.p ref={ref} initial="hidden" animate={controls} variants={FromLeft} className='w-[30rem] text-xl mb-8 leading-8 font-medium'>Discover the best rental properties in your desired location, offering a wide range of options from cozy apartments to spacious family homes, all carefully selected to meet your highest standards and provide the perfect fit for your lifestyle.</motion.p>
            <motion.a ref={ref} initial="hidden" animate={controls} variants={FromBottom} href='#contact' className='text-lg font-bold p-4 text-white bg-sky-500 rounded-md'>Contact US</motion.a>
          </div>
          <motion.img ref={ref} initial="hidden" animate={controls} variants={FromRight} alt='hero-img' className='w-[30rem] h-64 rounded-full' src='https://wp.en.aleteia.org/wp-content/uploads/sites/2/2018/09/web3-happy-people-outside-smile-sun-nature-eduardo-dutra-620857-unsplash.jpg?w=640&q=75' />
        </div>
        <motion.div ref={ref} initial="hidden" animate={controls} variants={FromBottom} className='flex justify-center'>
          <a href='#features'>
            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} style={{ fontSize: '40px' }} />
          </a>
        </motion.div>
      </div>
      <Features></Features>
      <div id='about' className='About pt-8 h-[100vh]'>
        <div className='flex justify-between px-24'>
          <div>
            <h1 className='font-bold text-4xl mb-6'>Meet the Team</h1>
            <img alt='About' width={"480"} className='rounded-md' src='https://media.licdn.com/dms/image/D4E22AQHnkfMRd8MneQ/feedshare-shrink_800/0/1702651497662?e=2147483647&v=beta&t=DVRqZXzgbQ8Zx90ERjM9cIBZeFaq3jQCHqrfKN0PxuE'/>
          </div>
          <div className='w-96'>
            <div className='mb-12'>
              <h1 className='font-bold text-4xl mb-4'>Welcome to RentRite</h1>
              <p className='leading-8'>We are a dedicated team of real estate professionals committed to helping you find the perfect rental property.</p>
            </div>
            <div className='mb-12'>
              <h1 className='font-bold text-4xl mb-4'>Our Mission</h1>
              <p className='leading-8'>Our mission is to provide a seamless and stress-free rental experience by offering a wide range of quality properties and exceptional customer service.</p>
            </div>
            <div className='mb-8'>
              <h1 className='font-bold text-4xl mb-4'>Our Values</h1>
              <p className='leading-8'>Integrity, Customer Satisfaction, Innovation, Excellence.</p>
            </div>
            <a href='#contact' className='text-lg font-bold p-4 mb-10 text-white bg-sky-500 rounded-md'>Contact US</a>
          </div>
        </div>
        <div className='w-full h-fit p-10 pb-0 flex justify-center items-center'>
          <div className='text-center w-[36rem]'>
            <h1 className='font-bold text-black text-4xl mb-8'>Our Story</h1>
            <p className='leading-8 font-medium text-lg'>Once upon a time in a bustling city, there existed a company known as Rentrite. Rentrite specialized in connecting people with their dream rental properties.<br/><br/> With a team dedicated to excellence, they made the daunting task of finding the perfect home a seamless experience for everyone.<br/><br/> Their commitment to quality and customer satisfaction earned them a reputation as the go-to destination for those seeking comfort and convenience in their living arrangements.<br/><br/> In the heart of the urban landscape, Rentrite stood as a beacon of reliability, guiding countless individuals towards the homes they truly deserved.</p>
          </div>
        </div>
        <div id='contact' className='Contact flex mt-12 h-[100vh] justify-center items-center'>
          <div className='shadow-2xl p-10 w-[26rem] rounded-md'>
            <h1 className='text-center font-bold text-3xl mb-4'>Get in touch</h1>
            <form method='post' action='/'>
              <label htmlFor='name' className='font-semibold text-lg text-black'>Name :</label><br></br>
              <input type='text' className='font-medium mb-6 bg-sky-500 text-white mt-2 text-lg px-2 py-2 placeholder-white rounded w-full' placeholder='name...' name='name' /><br></br>
              <label htmlFor='email' className='font-semibold text-lg text-black'>Email :</label><br></br>
              <input type='email' className='font-medium mb-6 bg-sky-500 text-white mt-2 text-lg px-2 py-2 placeholder-white rounded w-full' placeholder='email...' name='email' required/><br></br>
              <label htmlFor='message' className='font-semibold text-lg text-black'>Message :</label><br></br>
              <textarea type='text' placeholder='message...' name='message' className='font-medium min-h-24 max-h-40 mb-6 mt-2 text-lg px-2 py-2 rounded w-full placeholder-white bg-sky-500 text-white' required/><br></br>
              <button type='submit'className='text-lg font-bold p-4 text-white bg-sky-500 rounded-md'>Send Message</button>
            </form>
          </div>
        </div>
        <div className='Footer flex justify-center items-center h-36 bg-black'>
          <div>
            <h1 className='text-white font-bold text-lg'>Copyright 2024 © all rights reserved by <a href='/' className='text-xl text-sky-500'>RentRite</a></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
