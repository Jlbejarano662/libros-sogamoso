import React from 'react';
// social network icons
import { BsInstagram, BsFacebook, BsTwitter, BsWhatsapp, BsFillTelephoneFill, BsGeoAltFill } from 'react-icons/bs'

const Footer = () => {
  //HTML
  return <div className='bg-primary py-12 text-secondary'>
    <div className='container mx-auto flex flex-wrap justify-between content-center'>
      {/* social networks section */}
      <section className='w-full md:w-[50%]'>
        <div className='font-bold text-xl'>Social</div>
         {/* Link to Instagram*/}
        <a href='https://www.instagram.com/librossogamoso/' className='flex my-2 items-baseline text-lg' target="_blank">
          {/* Instagram icon */}
          <BsInstagram className='mr-2 text-xl' />
          Instragram
        </a>
        {/* Link to Facebook*/}
        <a href='https://www.facebook.com/profile.php?id=100063623405752&mibextid=ZbWKwL' className='flex my-2 items-baseline text-lg' target="_blank">
          <BsFacebook className='mr-2 text-xl' />
          {/* Facebook icon */}
          Facebook
        </a>
        {/* Link to Twitter*/}
        <a href='https://twitter.com/librossogamoso?s=11&t=6AYgsBQu6rRUUneVuZdpJg'
          className='flex my-2 items-baseline text-lg' target="_blank">
            {/* Twitter icon*/}
          <BsTwitter className='mr-2 text-xl' />
          Twitter
        </a>
        {/* WhatsApp contact*/}
        <a href='https://wa.me/573242236489' className='flex my-2 items-baseline text-lg' target="_blank">
          {/* WhatsApp icon */}
          <BsWhatsapp className='mr-2 text-xl' />
          WhatsApp
        </a>
      </section>
      {/* contact section */}
      <section className='w-full md:w-[50%] mt-2 md:my-0'>
        <div className='font-bold text-xl'>Contacto</div>
        <div className='flex  my-2 items-baseline text-lg'>
          <BsGeoAltFill className='mr-2 text-xl' />
          {/* location */}
          <p className='w-[90%]'>
            Estamos ubicados cerca de la Uptc en la Cra 13B # 2B - 39 Sur, Sogamoso - Boyacá
          </p>

        </div>
        {/* cell phone */}
        <div className='flex my-2 items-baseline text-lg'>
          <BsFillTelephoneFill className='mr-2 text-xl' />
          3242236489
        </div>
      </section>

    </div>
  </div>;
};

export default Footer;
