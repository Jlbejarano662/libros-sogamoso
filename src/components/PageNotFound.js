import React from "react";

// displays a 404 error message and redirects the user to the home page
const PageNotFound = () => {
    // HTML
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center bg-secondary">
            <h1 className="text-9xl font-extrabold text-white tracking-wide">¡Oops!</h1>
            <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
                Algo salió mal
            </div>
            <button className="mt-5" onClick={() => window.location.replace("/")}>
                <a
                    className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-primary text-secondary text-lg rounded font-bold">
                        Regresar
                    </span>
                </a>
            </button>
        </section>
    );
};

export default PageNotFound;
