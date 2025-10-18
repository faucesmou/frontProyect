
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer';
import OrangeBand from './components/OrangeBand';
import SeguroFormulario from './components/SeguroFormulario';

/*  */
export default function Home() {
  return (
    <div className="relative w-full min-h-screen">

      {/* Contenedor con imagen de fondo que solo cubre cierta altura */}
      <section className="relative w-full  overflow-hidden">
        {/* Imagen de fondo SOLO para esta sección */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/imgs/home_bg_caucionar.jpg"
            alt="Fondo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <Header />

        {/* Contenido inicial (dentro de la sección con fondo) */}
        <div className="pt-10 flex justify-center gap-45">
          <SeguroFormulario />
          <div className="bg-transparent bg-opacity-80 mx-2 max-w-lg text-center py-4 px-3 rounded-lg shadow-md">

            <p className=" text-[4.5vh] text-white-600">En solo pocos pasos podés gestionar completamente tu póliza de caución</p>

            <video
              controls
              className="mt-4 w-full rounded-md shadow-sm"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              
            </video>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-10">
          <Image
            src="/imgs/logo_original_caucionar.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
      </section>
      {/* Formulario  */}

      {/* Banda naranja */}
      <OrangeBand />

      {/* Sección de fondo blanco (ejemplo) */}
      <div className="bg-white w-full pt-0 pb-10 px-6">

        {/* PRIMER GRID CON BACKGROUND IMAGE */}
        <div
          style={{
            backgroundImage: "url('https://caucionar.com/bg_caucionar.0c01af56a451141f6875.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-full py-3 px-4 pb-8"
        >
          {/* Título centrado */}
          <div className="pb-15 pt-6 ">
            <p className="text-[1.2rem] font-normal text-center text-gray-800 font-dosis">Tu caución con las principales aseguradoras del mercado</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-4">
            <Image
              src="/imgs/Chubb-Logos-PNG-Vector_caucionar.png"
              alt="Logo 1"
              width={180}
              height={90}
              className="mx-auto"
            />
            <Image
              src="/imgs/logo-sura-acg_caucionar.png"
              alt="Logo 2"
              width={170}
              height={90}
              className="mx-auto"
            />
            <Image
              src="/imgs/credito-y-caucion_caucionar.png"
              alt="Logo 3"
              width={180}
              height={90}
              className="mx-auto"
            />
          </div>
        </div>

        {/* SEGUNDO GRID CON FONDO BLANCO */}
        <div className="w-full bg-white px-4 pt-10 pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Image
              src="/imgs/cap2_caucionar.png"
              alt="Logo 4"
              width={160}
              height={80}
              className="mx-auto"
            />
            <Image
              src="/imgs/cap3_caucionar.png"
              alt="Logo 5"
              width={160}
              height={80}
              className="mx-auto"
            />
            <Image
              src="/imgs/ssn_caucionar.png"
              alt="Logo 6"
              width={260}
              height={130}
              className="mx-auto"
            />
          </div>
        </div>


      </div>



      <Footer />
    </div>
  );
}
