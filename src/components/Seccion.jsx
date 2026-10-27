import Reveal from "@/components/Reveal"

export default function Seccion({ id, numero, titulo, completa = false, children }) {
  return (
    <section
      id={id}
      className={"scroll-mt-12 px-6 py-24 " + (completa ? "flex min-h-screen items-center pt-16 pb-8" : "py-10")}
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
        </p>
        {/* El hero (completa) escalona sus propios elementos */}
        {completa ? children : <Reveal>{children}</Reveal>}
      </div>
    </section>
  )
}