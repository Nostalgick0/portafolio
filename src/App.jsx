import Navbar from "@/components/Navbar"
import Sobre from "@/sections/Sobre"
import Educacion from "@/sections/Educacion"
import Proyectos from "@/sections/Proyectos"
import Software from "@/sections/Software"
import Logros from "@/sections/Logros"
import Contacto from "@/sections/Contacto"

import NotFound from "@/pages/NotFound"

export default function App() {
  const path = window.location.pathname

  // Mostrar la página 404 si la ruta no es la principal
  if (path !== "/") {
    return <NotFound />
  }

  return (
    <>
      <Navbar />

      <main>
        <Sobre />
        <Educacion />
        <Proyectos />
        <Software />
        <Logros />
        <Contacto />
      </main>
    </>
  )
}