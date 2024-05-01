import { Link } from 'react-router-dom';

import illustrationIntro from '../assets/images/illustration-intro.svg';

const Hero = () => {
  return (
    <section id='hero' className='mx-20'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold md:text-5xl md:text-left'>
          The quiz maker that&apos;s easy, fun and customizable
          </h1>
          <p className='max-w-sm text-darkGrayishBlue md:text-left'>
          Create a quiz that engages students, generates leads or promotes your brand.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustrationIntro} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
