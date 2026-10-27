import { House, Compass } from "lucide-react"

const botonBase =
    "group inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.3)] active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"

const botonPrimario =
    botonBase + " border-foreground bg-foreground text-background"

const iconoClase =
    "size-4 transition-transform duration-300 group-hover:scale-110"

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16 text-foreground">
            {/* Decoración de fondo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_65%)]"
            />

            <div className="relative z-10 mx-auto w-full max-w-3xl">
                {/* Encabezado */}
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-foreground/40" />

                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">                    </span>
                </div>

                {/* Contenido principal */}
                <div className="mt-12">

                    <h1 className="mt-4 text-7xl font-semibold tracking-tighter sm:text-8xl md:text-9xl">
                        404<span className="text-muted-foreground">.</span>
                    </h1>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                        Esta página no existe.
                    </h2>

                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                        La dirección que intentaste visitar no se encuentra disponible.
                    </p>

                    {/* Botones */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href="/" className={botonPrimario}>
                            <House className={iconoClase} />
                            Regresar
                        </a>
                    </div>
                </div>

                {/* Pie de página */}
                <div className="mt-20 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="font-mono text-xs text-muted-foreground">
                            Página no encontrada
                        </span>

                        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                            <Compass className="size-3.5" />
                            Out of context
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}