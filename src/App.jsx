import Navbar from "@/components/Navbar"
import Sobre from "@/sections/Sobre"
import Educacion from "@/sections/Educacion"
import Proyectos from "@/sections/Proyectos"
import Software from "@/sections/Software"
import Logros from "@/sections/Logros"
import Contacto from "@/sections/Contacto"

export default function App() {
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
