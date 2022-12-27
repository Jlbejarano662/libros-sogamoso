import React from 'react';
// import link
import { Link} from "react-router-dom";


const FrontPage = () => {
  return <div>
    {/* Banner */}
    <section className='h-[100vh] bg-hero bg-no-repeat bg-cover bg-center mt-[3rem]'>
      <div className='h-full w-full flex flex-col justify-center items-center  align-middle text-white font-bold text-center'>
        {/* text */}
        <div className='container mx-auto  text-5xl my-4 md:text-6xl md:w-[70%] lg:text-7xl lg:w-[60%] xl:text-8xl xl:w-[50%]'>Bienvenido a Libros Sogamoso</div>
        <div className='container mx-auto text-2xl my-4 md:text-3xl md:w-[50%] lg:w-[30%] lg:text-4xl xl:text-5xl'>Comparte felicidad y compra un libro...</div>
        {/* button */}
        <div className="w-full flex justify-center my-4">
          <Link to={"/categories"}>
            <button className="bg-[#FBD111] text-[#403E41] px-4 py-2 rounded-sm w-48 text-2xl">Ver mas</button>
          </Link>
        </div>
      </div>
    </section>
    FrontPage
  </div>;
};

export default FrontPage;
