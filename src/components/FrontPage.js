import React, { useContext } from 'react';
// import link
import { Link } from "react-router-dom";
// import image
import whoWeAre from '../img/who_we_are.png'
import whatDoWeDo from '../img/what_do_we_do.png'
//import product context
import { ProductContext } from '../contexts/ProductContext'
// import components
import Product from "../components/Product";

const FrontPage = () => {
  // get products from product context
  const { categories, products } = useContext(ProductContext);


  //HTML
  return <div>
    {/* Banner */}
    <section className='container mx-auto h-[100vh] bg-hero bg-no-repeat bg-cover bg-center mt-[3rem]'>
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
    {/* Who we are? */}
    <section className="container mx-auto  my-10">
      {/* title */}
      <h1 className="w-full text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-tertiary mb-8">
        ¿Quiénes somos?
      </h1>
      {/* content */}
      <div className='flex flex-col lg:flex-row items-center justify-start'>
        <div className="text-justify  text-xl lg:text-2xl text-secondary mb-8 lg:px-10 lg:my-0 ">
          {/* text */}
          <p>
            Somos una librería virtual conformada por dos estudiantes de Ingeniería de la Universidad Pedagógica y Tecnológica de Colombia, amantes de la lectura, que viendo el auge principalmente de dos cosas; la pérdida del hábito de la lectura en la juventud y, el crecimiento de la lectura en digital por precios poco asequibles, decidieron ir de puerta en puerta, tienda en tienda ofreciendo libros.
          </p>
          <br></br>
          <p>
            Por eso en LibrosSogamoso además de libros originales tenemos libros replica de muy buena calidad, ofreciendo además diferentes promociones mes a mes.
          </p>
        </div>
        {/* image */}
        <div className="flex flex-1 justify-center items-center  mb-8 lg:px-10 lg:my-0 ">
          <img src={whoWeAre} className="max-w-[100%] lg:max-w-xs"></img>
        </div>
      </div>
    </section>
    {/* What do we do? */}
    <section className="container mx-auto py-10 bg-space bg-no-repeat bg-cover bg-center">
      {/* title */}
      <h1 className="w-full text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary mb-8">
        ¿Qué hacemos?
      </h1>
      {/* conten */}
      <div className='flex flex-col lg:flex-row items-center justify-start'>
        <div className="flex flex-1 justify-center items-center  mb-8 lg:px-10 lg:my-0 ">
          {/* image */}
          <img src={whatDoWeDo} className="max-w-[100%] lg:max-w-xs"></img>
        </div>
        {/* text */}
        <div className="text-justify  text-xl lg:text-2xl text-white lg:px-10 lg:my-0 mb-8 -order-1 lg:order-none">
          <p>
            Fomentamos el hábito de la lectura, a través de resúmenes y recomendaciones de los libros más leidos o bestsellers. Creamos contenido de valor en cuanto a los beneficios de la lectura y como ser más eficientes a la hora de leer. Realizamos pequeñas donaciones cada bimestre a personas en condición de calle.
          </p>
        </div>
      </div>
    </section>
    {/* Categories */}
    <section className="container mx-auto py-10">
      {/* title */}
      <h1 className="w-full text-center font-extrabold text-3xl md:text-4xl lg:text-5xl text-tertiary mb-8">
        Categorías
      </h1>
      {/* content */}
      <div className='container mx-auto lg:flex items-start'>
        {/* products */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]  max-w-sm mx-auto md:max-w-none md:mx-0 mb-8">
          {
            categories.map((product) => {
              return (
                <div>
                  <h3 className="w-full font-extrabold text-xl text-tertiary my-4 first-letter:uppercase lowercase">
                    {product.category.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g).join(" ")
                    }
                  </h3>
                  <Product product={product} key={product.id} /></div>);
            })
          }
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <Link to={"/categories"}>
          <button className="bg-[#FBD111] text-[#403E41] px-4 py-2 rounded-sm w-48 text-2xl">Ver mas</button>
        </Link>
      </div>
    </section>
    {/* phrase */}
    <section className="container mx-auto py-40 md:py-20 bg-space bg-no-repeat bg-cover bg-center">
      {/* text */}
      <div className="text-center md:w-[70%] lg:w-[50%] mx-auto">
        <h1 className='text-white  text-4xl md:text-6xl mb-8'>
          “Sé el cambio que quieres ver en el mundo”
        </h1>
        <p className='text-primary'>MAHATMA GANDHI</p>
      </div>
    </section>
  </div>;
};

export default FrontPage;
