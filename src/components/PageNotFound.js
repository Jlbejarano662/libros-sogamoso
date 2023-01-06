import React from "react";

// displays a 404 error message and redirects the user to the home page
const PageNotFound = () => {
    // HTML
    return (
        <section class="h-screen w-full flex flex-col justify-center items-center bg-secondary">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div class="bg-primary px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button class="mt-5" onClick={() => window.location.replace("/")}>
                <a
                    class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span class="relative block px-8 py-3 bg-primary text-secondary text-lg rounded font-bold">
                        Regresar
                    </span>
                </a>
            </button>
        </section>
    );
};

export default PageNotFound;
