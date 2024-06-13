"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBuilding, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import NumberAnimation from './numbersAnimation';


function Features() {
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
  return (
    <div>
        <div id='features' className='Features px-52 bg-sky-500 flex justify-between items-center w-full h-60'> 
        <div>
          <div className='flex justify-center mb-4'>
            <img alt='palace' width={'60px'} src='https://i.postimg.cc/gnpBdK58/IMG-20240612-134143-removebg-preview.png'/>
          </div>
          <NumberAnimation from={0} to={15} duration={3} text="Villa" />
          </div>
        <div>
          <div className='flex justify-center mb-4'>
            <FontAwesomeIcon icon={faBuilding} style={{ fontSize: '40px' }} />
          </div>
          <NumberAnimation from={0} to={70} duration={3} text="Apartments" />
        </div>
        <div>
          <div className='flex justify-center mb-4'>
            <img alt='palace' width={'60px'} src='https://i.postimg.cc/4mdZsZjz/IMG-20240612-134143-removebg-preview.png'/>
          </div>
          <NumberAnimation from={0} to={10} duration={3} text="Farms" />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-1/2 p-10'>
          <motion.div ref={ref} initial="hidden" animate={controls} variants={FromLeft} className='p-4 pb-8 bg-black text-center rounded-lg'>
            <div className='flex justify-center items-center mb-4 w-full h-fit'>
              <FontAwesomeIcon icon={faBuilding} style={{ fontSize: '40px', color: '#0EA5E9' }} />
            </div>
            <h1 className='font-bold text-2xl mb-5 text-white'>Apartment</h1>
            <h1 className='font-semibold text-lg mb-5 text-white'>2 rooms + 1 kitchen + 1 bathroom</h1>
            <div className='flex justify-center mb-5 w-full h-fit'>
              <FontAwesomeIcon icon={faLocationDot} className='!self-start mr-1' style={{ fontSize: '20px', color: 'white' }} />      
              <h1 className='font-semibold text-lg text-white'>Abu Dhabi</h1>
            </div>
            <h1 className='font-semibold text-lg mb-8 text-white'>100.000 AED/Y</h1>
            <a href='#contact' className='text-lg font-bold p-4 text-white bg-sky-500 rounded-md'>interested</a>
          </motion.div>
        </div>
        <div className='w-1/2 p-10'>
        <motion.div ref={ref} initial="hidden" animate={controls} variants={FromRight} className='p-4 pb-8 bg-black text-center rounded-lg'>
            <div className='flex justify-center items-center mb-4 w-full h-fit'>
              <FontAwesomeIcon icon={faBuilding} style={{ fontSize: '40px', color: '#0EA5E9' }} />
            </div>
            <h1 className='font-bold text-2xl mb-5 text-white'>Apartment</h1>
            <h1 className='font-semibold text-lg mb-5 text-white'>4 rooms + 1 kitchen + 1 bathroom</h1>
            <div className='flex justify-center mb-5 w-full h-fit'>
              <FontAwesomeIcon icon={faLocationDot} className='!self-start mr-1' style={{ fontSize: '20px', color: 'white' }} />      
              <h1 className='font-semibold text-lg text-white'>Abu Dhabi</h1>
            </div>
            <h1 className='font-semibold text-lg mb-8 text-white'>128.000 AED/Y</h1>
            <a href='#contact' className='text-lg font-bold p-4 text-white bg-sky-500 rounded-md'>interested</a>
          </motion.div>
        </div>
        <div className='w-1/2 p-10'>
          <motion.div ref={ref} initial="hidden" animate={controls} variants={FromLeft} className='p-4 pb-8 bg-sky-500 text-center rounded-lg'>
            <div className='flex justify-center items-center mb-4 w-full h-fit'>
              <img alt='palace' width={'60px'} src='https://i.postimg.cc/4mdZsZjz/IMG-20240612-134143-removebg-preview.png'/>
            </div>
            <h1 className='font-bold text-2xl mb-5 text-white'>Farm</h1>
            <h1 className='font-semibold text-lg mb-5 text-white'>3 barns + 2 wells + 1 field</h1>
            <div className='flex justify-center mb-5 w-full h-fit'>
              <FontAwesomeIcon icon={faLocationDot} className='!self-start mr-1' style={{ fontSize: '20px', color: 'white' }} />      
              <h1 className='font-semibold text-lg text-white'>Abu Dhabi</h1>
            </div>
            <h1 className='font-semibold text-lg mb-8 text-white'>1.400.000 AED/Y</h1>
            <a href='#contact' className='text-lg font-bold p-4 text-white bg-black rounded-md'>interested</a>
          </motion.div>
        </div>
        <div className='w-1/2 p-10'>
          <motion.div ref={ref} initial="hidden" animate={controls} variants={FromRight} className='p-4 pb-8 bg-sky-500 text-center rounded-lg'>
            <div className='flex justify-center items-center mb-4 w-full h-fit'>
              <img alt='palace' width={'60px'} src='https://i.postimg.cc/gnpBdK58/IMG-20240612-134143-removebg-preview.png'/>
            </div>
            <h1 className='font-bold text-2xl mb-5 text-white'>Villa</h1>
            <h1 className='font-semibold text-lg mb-5 text-white'>16 rooms + 2 kitchen + 4 bathroom</h1>
            <div className='flex justify-center mb-5 w-full h-fit'>
              <FontAwesomeIcon icon={faLocationDot} className='!self-start mr-1' style={{ fontSize: '20px', color: 'white' }} />      
              <h1 className='font-semibold text-lg text-white'>Dubai</h1>
            </div>
            <h1 className='font-semibold text-lg mb-8 text-white'>1.100.000 AED/Y</h1>
            <a href='#contact' className='text-lg font-bold p-4 text-white bg-black rounded-md'>interested</a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Features