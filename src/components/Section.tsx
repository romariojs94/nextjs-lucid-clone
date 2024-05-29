"use client";
import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

// Section component is a functional component that returns a div with the text "Section"
const Section: React.FC<{ 
  image: StaticImageData; 
  tag: string 
  title: string;
  description: string;
}> = ({ image, tag, title, description } ) => {

  const sectionRef = useRef(null);    
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0,1], ["-20%", "10%"]);

   return (
    <section ref={sectionRef} className='relative h-screen overflow-hidden'>
      <motion.div className='absolute w-full h-[120%] -z-10' style={{top: y}}>
        <div className='absolute inset-0 bg-black/30 z-10'></div>
        <Image src={image} alt={title} fill className='object-cover' />
      </motion.div>
      <div className='flex flex-col gap-4 p-12 sm:p-24'>
        <span>{tag}</span>
        <h2 className='font-serif text-4xl max-w-[25ch]'>{title}</h2>
        <p className='max-w-[50ch]'>{description}</p>
      </div>
    </section>
  )
}

export default Section