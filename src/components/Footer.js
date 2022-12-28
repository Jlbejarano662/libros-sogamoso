import React from 'react';
// icons
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp, BsFillTelephoneFill, BsGeoAltFill } from 'react-icons/bs'

const Footer = () => {
  return <div className='bg-primary py-12 text-secondary'>
    <div className='container mx-auto flex flex-wrap justify-between content-center'>
      <div className='w-full md:w-[50%]'>
        <div className='font-bold text-xl'>Social</div>
        <a href='https://www.instagram.com/librossogamoso/' className='flex my-2 items-baseline text-lg'>
          <BsInstagram className='mr-2 text-xl' />
          Instragram
        </a>
        <a href='https://www.facebook.com/profile.php?id=100063623405752&mibextid=ZbWKwL' className='flex my-2 items-baseline text-lg'>
          <BsFacebook className='mr-2 text-xl' />
          Facebook
        </a>
        <a href='https://twitter.com/librossogamoso?s=11&t=6AYgsBQu6rRUUneVuZdpJg'
          className='flex my-2 items-baseline text-lg'>
          <BsTwitter className='mr-2 text-xl' />
          Twitter
        </a>
        <a href='' className='flex my-2 items-baseline text-lg'>
          <BsWhatsapp className='mr-2 text-xl' />
          3242236489
        </a>
      </div>
      <div className='w-full md:w-[50%] mt-2 md:my-0'>
        <div className='font-bold text-xl'>Contacto</div>
        <div className='flex  my-2 items-baseline text-lg'>
          <BsGeoAltFill className='mr-2 text-xl' />
          <p className='w-[90%]'>
            Estamos ubicados cerca de la Uptc en la Cra 13B # 2B - 39 Sur, Sogamoso - Boyacá
          </p>

        </div>
        <div className='flex my-2 items-baseline text-lg'>
          <BsFillTelephoneFill className='mr-2 text-xl' />
          3242236489
        </div>
      </div>

    </div>
  </div>;
};

export default Footer;
