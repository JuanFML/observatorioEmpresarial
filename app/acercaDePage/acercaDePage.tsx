import { NavBar } from "~/components/NavBar";
import fondoAcercaDe from "../assets/images/quienes_somos.jpg";

export function AcercaDePage() {
  return (
    <>
      <NavBar />
      <div
        className="flex-col content-center"
        style={{
          backgroundImage: `url(${fondoAcercaDe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "fit",
          height: "400px",
        }}
      >
        <div
          className="h-fit rounded-r-xl  p-6 w-1/2"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <h1 className="text-2xl text-blue-700 ">
            Buscamos proporcionar información actualizada sobre el panorama
            empresarial y económico del noreste de México, basado en análisis de
            datos para impulsar el crecimiento de las empresas de la región
          </h1>
        </div>
      </div>
      <div className="w-screen flex justify-center">
        <div className="pt-10 w-3/5">
          <h2 className="pb-6 text-3xl font-semibold text-blue-700">
            Acerca de Nosotros
          </h2>
          <p className="text-lg pb-4">
            El Observatorio Empresarial del CIDESIE tiene como propósito
            principal ser un centro de referencia para la recopilación, análisis
            y difusión de datos empresariales y económicos. Ayudamos a las
            empresas a identificar oportunidades de mejora, a fortalecer sus
            procesos internos, y a mantenerse competitivas en un entorno global.
          </p>
          <h3 className="pb-4 text-2xl font-semibold">Misión</h3>
          <p className="text-lg pb-4">
            Proveer información estratégica y herramientas de análisis que
            faciliten la toma de decisiones en las empresas, impulsando la
            innovación y el desarrollo sostenible en nuestra región.
          </p>
          <h3 className="pb-4 text-2xl font-semibold">Visión</h3>
          <p className="text-lg pb-4">
            Ser un observatorio de excelencia reconocido nacional e
            internacionalmente, generando impacto positivo en la economía
            regional y contribuyendo al crecimiento de las empresas con datos
            confiables y análisis de calidad.
          </p>
          <h3 className="pb-4 text-2xl font-semibold">Valores</h3>
          <ul className="list-disc text-md pb-4 ml-6">
            <li>Compromiso con la excelencia</li>
            <li>Transparencia en el manejo de datos</li>
            <li>Innovación como motor de cambio</li>
            <li>Sostenibilidad en todas nuestras acciones</li>
            <li>Colaboración con todos los sectores</li>
          </ul>
          <h3 className="pb-4 text-2xl font-semibold">Objetivos</h3>
          <p className="text-lg pb-2">
            Nuestro observatorio tiene como objetivos:
          </p>
          <ul className="list-disc text-md pb-4 ml-6">
            <li>
              Recopilar datos relevantes sobre el entorno empresarial y
              económico.
            </li>
            <li>
              Proveer herramientas de autodiagnóstico y evaluación para
              empresas.
            </li>
            <li>
              Desarrollar investigaciones aplicadas para la mejora de procesos
              empresariales.
            </li>
            <li>
              Fomentar la colaboración entre el sector académico y empresarial.
            </li>
            <li>
              Promover el uso de datos para la toma de decisiones estratégicas.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
