import { useEffect, useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react"

export default function ProyectoModal({ proyecto, onClose }) {
  const [actual, setActual] = useState(0)
  const imgs = proyecto.imagenes || []

  const anterior = () => setActual((i) => (i - 1 + imgs.length) % imgs.length)
  const siguiente = () => setActual((i) => (i + 1) % imgs.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
      if (imgs.length > 1 && e.key === "ArrowLeft") setActual((i) => (i - 1 + imgs.length) % imgs.length)
      if (imgs.length > 1 && e.key === "ArrowRight") setActual((i) => (i + 1) % imgs.length)
    }
    document.addEventListener("keydown", onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
    }
  }, [imgs.length, onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={proyecto.titulo}
    >
      <div
        className="relative flex h-[min(calc(100vh-2rem),52rem)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <X className="size-4" />
        </button>

        {/* Carrusel */}
        <div className="relative min-h-0 flex-1 overflow-hidden bg-black">
          {imgs.length ? (
            <>
              {/* fondo difuminado: rellena los lados sin recortar la imagen */}
              <img src={imgs[actual]} alt="" aria-hidden="true" className="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-2xl" />
              <img src={imgs[actual]} alt={`${proyecto.titulo} ${actual + 1}`} className="absolute inset-0 size-full object-contain" />
            </>
          ) : (
            <div className="flex size-full items-center justify-center text-muted-foreground">
              <ImageIcon className="size-10" />
            </div>
          )}

          {imgs.length > 1 && (
            <>
              <button
                onClick={anterior}
                aria-label="Imagen anterior"
                className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={siguiente}
                aria-label="Imagen siguiente"
                className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <ChevronRight className="size-5" />
              </button>
              <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                {imgs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActual(i)}
                    aria-label={`Ir a la imagen ${i + 1}`}
                    className={"size-2 rounded-full transition-colors " + (i === actual ? "bg-white" : "bg-white/40")}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Contenido */}
        <div className="max-h-[40vh] shrink-0 overflow-y-auto p-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight">{proyecto.titulo}</h3>
            {proyecto.fecha && <span className="font-mono text-xs text-muted-foreground">{proyecto.fecha}</span>}
          </div>

          <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
            {proyecto.descripcionCompleta || proyecto.descripcion}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {proyecto.etiquetas?.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 font-mono text-xs text-muted-foreground">
                {t}
              </span>
            ))}
            {proyecto.enlace && (
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1 rounded-lg bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                Ver proyecto <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}