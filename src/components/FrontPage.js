import React from 'react';
// import link
import { Link } from "react-router-dom";
// import image
import whoWeAre from '../img/who_we_are.png'
import whatDoWeDo from '../img/what_do_we_do.png'


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
    <section className="container mx-auto  my-10">
      <h1 className="w-full text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-tertiary mb-8">
        ¿Quiénes somos?
      </h1>
      <div className='flex flex-col lg:flex-row items-center justify-start'>
        <div className="text-justify  text-xl lg:text-2xl text-secondary mb-8 lg:px-10 lg:my-0 ">

          <p>
            Somos una librería virtual conformada por dos estudiantes de Ingeniería de la Universidad Pedagógica y Tecnológica de Colombia, amantes de la lectura, que viendo el auge principalmente de dos cosas; la pérdida del hábito de la lectura en la juventud y, el crecimiento de la lectura en digital por precios poco asequibles, decidieron ir de puerta en puerta, tienda en tienda ofreciendo libros.
          </p>
          <br></br>
          <p>
            Por eso en LibrosSogamoso además de libros originales tenemos libros replica de muy buena calidad, ofreciendo además diferentes promociones mes a mes.
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center  mb-8 lg:px-10 lg:my-0 ">
          <img src={whoWeAre} className="max-w-[100%] lg:max-w-xs"></img>
        </div>
      </div>
    </section>
    <section className="container mx-auto py-10 bg-space bg-no-repeat bg-cover bg-center">
      <h1 className="w-full text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary mb-8">
        ¿Qué hacemos?
      </h1>
      <div className='flex flex-col lg:flex-row items-center justify-start'>
        <div className="flex flex-1 justify-center items-center  mb-8 lg:px-10 lg:my-0 ">
          <img src={whatDoWeDo} className="max-w-[100%] lg:max-w-xs"></img>
        </div>
        <div className="text-justify  text-xl lg:text-2xl text-white lg:px-10 lg:my-0 mb-8 -order-1 lg:order-none">
          <p>
            Fomentamos el hábito de la lectura, a través de resúmenes y recomendaciones de los libros más leidos o bestsellers. Creamos contenido de valor en cuanto a los beneficios de la lectura y como ser más eficientes a la hora de leer. Realizamos pequeñas donaciones cada bimestre a personas en condición de calle.
          </p>
        </div>
      </div>
    </section>
    FrontPage
  </div>;
};

export default FrontPage;
