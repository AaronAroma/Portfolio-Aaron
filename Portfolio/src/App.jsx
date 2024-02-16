import "./App.css";
import Porfile from "./assets/Mifoto.png";
import cv from "./assets/AaronCV.pdf";
import Project1 from "./assets/Proyecto1.png";
import Project2 from "./assets/Proyecto2.png";
import Project3 from "./assets/Proyecto3.png";
import Project4 from "./assets/Proyecto4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

const App = () => {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const handleDowload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", cv, true);
    xhr.responseType = "blob";

    xhr.onload = function () {
      const blob = new Blob([xhr.response], { type: "application/pdf" });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);

      link.download = "AaronCV.pdf";

      link.click();

      window.URL.revokeObjectURL(link.href);
    };

    xhr.send();
  };

  return (
    <div className="max-w-4xl m-auto relative">
      <header
        className={`${
          scrolling ? "border-b border-gray-900" : ""
        }  fixed left-0 right-0 top-0 z-20`}
        id="home"
      >
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Aaron Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Tecnologias
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Sobre mi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hola!, Me llamo Aaron,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">
                  Full Stack Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  En el mundo del desarrollo Full Stack, cada día es una nueva
                  lección
                </p>
                <button
                  className="px-8 shadow-gray-500 shadow-md py-5 mt-9 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  onClick={handleDowload}
                >
                  Descargar CV
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img
                  src={Porfile}
                  className="relative z-10 w-[280px] m-auto sm:w-[520px]"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Proyectos</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">GeoDatos</h3>
                <p className="text-gray-400 text-sm mt-2">
                  GeoDatos es una aplicación web que muestra datos de países en
                  un formato paginado. Permite a los usuarios filtrar por
                  continentes o actividades, ordenar los datos alfabéticamente o
                  por población, y buscar países por nombre.
                </p>
                <div className="flex mt-12 gap-2">
                  <a
                    href="https://github.com/AaronAroma/PI-Country-AaronAroma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 cursor-pointer text-center text-center text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Visitar Github
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">GetFit</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Es un sitio de comercio electrónico de suplementos
                  nutricionales y ropa deportiva. Ofrece una experiencia de
                  compra segura, optimización SEO en progreso y seguimiento con
                  Google Analytics. Proporciona soporte al cliente, incluyendo
                  cambios y devoluciones.
                </p>
                <div className="flex gap-2 mt-12">
                  <a
                    href="https://github.com/GetFitORG/GetFit-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 cursor-pointer text-center text-center text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Visitar GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Portfolio personal
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Portfolio personal responsive hecho con ReactJS, CSS y
                  Tailwind. Aca muestro mis proyectos, Tecnologias y
                  habilidades, y te cuento mas sobre mi.
                </p>
                <div className="flex gap-4 mt-12">
                  <a
                    href="https://github.com/AaronAroma/Portfolio-Aaron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 cursor-pointer text-center text-center text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Visitar GitHub
                  </a>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Rick and Morty</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Esta pagina es una aplicación web que muestra datos de Rick
                  and Morty en un formato paginado. Permite a los usuarios
                  ordenar los datos alfabéticamente, y buscar personajes por
                  nombre.
                </p>
                <div className="flex gap-4 mt-12">
                  <a
                    href="https://github.com/pi-rym/PI-AaronAroma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 cursor-pointer text-center text-center text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Visitar GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">tecnología</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Avanzado</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Tailwind</h2>
                  <p className="text-gray-500">Avanzado</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JavaScript</h2>
                  <p className="text-gray-500">Avanzado</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Avanzado</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PostgreSQL</h2>
                  <p className="text-gray-500">Intermedio</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Express</h2>
                  <p className="text-gray-500">Intermedio</p>
                </div>
                <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Vercel</h2>
                  <p className="text-gray-500">Intermedio</p>
                </div>
                <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">Soft Skills</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Github
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Compromiso
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Comunicación
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Resolución de problemas
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 ingles
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <p className="mt-12">
              Me llamo Aaron, tengo 19 años y nací en Estados Unidos, pero estoy
              viviendo en Argentina. Terminé mis estudios como Desarrollador
              Web. Me encanta enfocarme en la parte del rendimiento, para
              ofrecer la mejor experiencia al usuario.
            </p>
            <p className="mt-2">
              Cuento con experiencia desarrollando aplicaciones web responsivas,
              y he creado un proyecto mezclando mis dos pasiones: la
              programación y el deporte. Ayudando a la sociedad a acceder a una
              vida fitness.
            </p>
            <p className="mt-2">
              Planeo seguir expandiendo mis conocimientos en Desarrollo Web, con
              un enfoque particular al front end. Estoy emocionado por las
              oportunidades que vendrán y estoy comprometido a seguir creando
              soluciones digitales que impacten positivamente a la sociedad.
              Siempre estoy abierto a nuevos desafíos y a colaborar en proyectos
              que promuevan la innovación y el crecimiento.
            </p>
          </div>
        </section>
        <section>
          
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
};

export default App;
