import { createFileRoute } from "@tanstack/react-router";
import heroChicken from "@/assets/hero-chicken.jpg";
import dishBrasa from "@/assets/dish-brasa.jpg";
import dishBroaster from "@/assets/dish-broaster.jpg";
import dishCombo from "@/assets/dish-combo.jpg";
import dishDrinks from "@/assets/dish-drinks.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import logo from "@/assets/logo.png";
import { WhatsAppFloat, WHATSAPP_URL } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valentinos Chicken — El mejor pollo a la brasa en Baños del Inca" },
      { name: "description", content: "Pollo a la brasa, broaster y combos familiares en Baños del Inca, Cajamarca. Sabor auténtico, ingredientes frescos y delivery rápido. Pide por WhatsApp." },
      { property: "og:title", content: "Valentinos Chicken — Pollo a la brasa en Baños del Inca" },
      { property: "og:description", content: "El auténtico sabor del pollo a la brasa en Cajamarca. Combos familiares, broaster y delivery." },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Valentinos Chicken",
        servesCuisine: "Pollo a la brasa peruana",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Túpac Yupanqui 313",
          addressLocality: "Baños del Inca",
          addressRegion: "Cajamarca",
          addressCountry: "PE",
        },
      }),
    }],
  }),
  component: Index,
});

const specialties = [
  { title: "Pollo a la Brasa", desc: "Marinado 24 horas, asado al carbón hasta lograr una piel dorada y crocante.", img: dishBrasa },
  { title: "Broaster", desc: "Presas jugosas con un empanizado crujiente preparado al instante.", img: dishBroaster },
  { title: "Combos Familiares", desc: "Comparte el sabor con porciones generosas para toda la familia.", img: dishCombo },
  { title: "Bebidas", desc: "Chicha morada de la casa, gaseosas heladas y refrescos naturales.", img: dishDrinks },
];

const reasons = [
  { icon: "🌿", title: "Ingredientes frescos", desc: "Seleccionados cada día de productores locales de Cajamarca." },
  { icon: "⚡", title: "Atención rápida", desc: "Tu pedido listo en minutos, sin perder calidad." },
  { icon: "🛵", title: "Delivery a tiempo", desc: "Llevamos el sabor caliente hasta tu puerta." },
  { icon: "🏡", title: "Ambiente familiar", desc: "Un espacio acogedor pensado para compartir." },
  { icon: "🔥", title: "Sabor auténtico", desc: "Receta de la casa, asado al carbón verdadero." },
  { icon: "⭐", title: "Calidad premium", desc: "Procesos cuidados desde la marinada hasta la mesa." },
];

const reviews = [
  { name: "Lucía R.", text: "El mejor pollo a la brasa que he probado en Cajamarca. La piel queda perfecta y el sabor es inigualable.", rating: 5 },
  { name: "Carlos M.", text: "Pedí un combo familiar para el cumpleaños de mi hijo. Todos quedamos encantados. ¡Volveremos!", rating: 5 },
  { name: "Andrea P.", text: "Delivery rápido, presentación impecable y un sabor que enamora. Mi nuevo favorito.", rating: 5 },
];

const gallery = [
  { src: gallery1, h: "row-span-2" },
  { src: gallery2, h: "" },
  { src: gallery3, h: "" },
  { src: gallery4, h: "row-span-2" },
  { src: dishBrasa, h: "" },
  { src: dishCombo, h: "" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto mt-4 max-w-7xl px-4">
          <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
            <a href="#hero" className="flex items-center gap-2">
              <img src={logo} alt="Valentinos Chicken" className="h-9 w-9" width={36} height={36} />
              <span className="font-display text-lg font-bold tracking-tight">
                Valentinos <span className="text-gradient-gold">Chicken</span>
              </span>
            </a>
            <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
              <li><a href="#especialidad" className="hover:text-foreground transition">Especialidad</a></li>
              <li><a href="#galeria" className="hover:text-foreground transition">Galería</a></li>
              <li><a href="#nosotros" className="hover:text-foreground transition">Nosotros</a></li>
              <li><a href="#ubicacion" className="hover:text-foreground transition">Ubicación</a></li>
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
               className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-[oklch(0.15_0.02_25)] shadow-gold hover:scale-[1.03] transition">
              Pedir ahora
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen bg-hero pt-32 pb-20">
        <div className="absolute inset-0 -z-0 opacity-30 [background:radial-gradient(circle_at_20%_10%,oklch(0.82_0.15_82/.18),transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" /> Baños del Inca · Cajamarca
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.02]">
              El mejor sabor de <span className="text-gradient-gold">Baños del Inca</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Pollo a la brasa preparado con ingredientes frescos y el auténtico sabor que encanta a nuestros clientes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-7 py-4 font-semibold text-white shadow-glow transition-all hover:scale-[1.04] hover:shadow-2xl">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.08a10 10 0 0 0 14.32-12.6 9.93 9.93 0 0 0-2-3.41Z"/></svg>
                Pedir por WhatsApp
              </a>
              <a href="#especialidad" className="text-sm font-medium text-[var(--gold-soft)] hover:text-[var(--gold)] transition underline-offset-8 hover:underline">
                Ver carta →
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div><div className="font-display text-3xl text-foreground">10+</div>años de sabor</div>
              <div className="h-10 w-px bg-border" />
              <div><div className="font-display text-3xl text-foreground">5.0★</div>clientes felices</div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block"><div className="font-display text-3xl text-foreground">30'</div>delivery</div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.22_30/.45),transparent_70%)] blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] glass shadow-glow animate-float-slow">
              <img src={heroChicken} alt="Pollo a la brasa Valentinos Chicken" className="h-full w-full object-cover" width={1920} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-gold rounded-xl px-3 py-2 font-display font-bold text-[oklch(0.15_0.02_25)]">★ 5.0</div>
                <div>
                  <div className="text-sm font-semibold">Pollo entero + papas + ensalada</div>
                  <div className="text-xs text-muted-foreground">Desde S/ 55 · Para 4 personas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDAD */}
      <section id="especialidad" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Nuestra carta</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Nuestra <span className="text-gradient-gold">especialidad</span></h2>
            <p className="mt-4 text-muted-foreground">Cada plato es preparado con dedicación, usando las mejores recetas y los ingredientes más frescos de Cajamarca.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s) => (
              <article key={s.title} className="group relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="aspect-square overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024}
                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.desc}</p>
                  <div className="mt-4 h-px w-12 bg-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="relative py-24 sm:py-32 bg-[oklch(0.1_0.015_25)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Galería</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Sabores que <span className="text-gradient-gold">enamoran</span></h2>
            </div>
            <p className="max-w-md text-muted-foreground">Una pequeña muestra de lo que servimos cada día en Valentinos Chicken.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
            {gallery.map((g, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl ${g.h}`}>
                <img src={g.src} alt={`Plato ${i + 1}`} loading="lazy" width={1024} height={1024}
                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section id="nosotros" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Por qué elegirnos</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Tradición, calidad y <span className="text-gradient-gold">amor por el sabor</span></h2>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="glass rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-gold">
                <div className="text-3xl">{r.icon}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section className="relative py-24 sm:py-32 bg-[oklch(0.1_0.015_25)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Opiniones</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Lo que dicen <span className="text-gradient-gold">nuestros clientes</span></h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="glass rounded-3xl p-8 flex flex-col">
                <div className="text-[var(--gold)] text-lg">{"★".repeat(r.rating)}</div>
                <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center font-display font-bold text-[oklch(0.15_0.02_25)]">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Cliente verificado</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Visítanos</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Te esperamos en <span className="text-gradient-gold">Baños del Inca</span></h2>
            <p className="mt-4 text-muted-foreground max-w-md">Ven a vivir la experiencia Valentinos. Ambiente acogedor, atención cálida y el mejor pollo a la brasa de Cajamarca.</p>
            <div className="mt-8 space-y-4">
              <div className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="font-semibold">Dirección</div>
                  <div className="text-sm text-muted-foreground">Túpac Yupanqui 313, Baños del Inca, Cajamarca</div>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="text-2xl">🕒</div>
                <div>
                  <div className="font-semibold">Horario de atención</div>
                  <div className="text-sm text-muted-foreground">Lunes a Domingo · 11:00 a.m. – 10:30 p.m.</div>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <div className="font-semibold">Contacto</div>
                  <div className="text-sm text-muted-foreground">WhatsApp: +51 999 999 999</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border min-h-[420px]">
            <iframe
              title="Ubicación Valentinos Chicken"
              src="https://www.google.com/maps?q=Tupac+Yupanqui+313+Banos+del+Inca+Cajamarca&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border bg-[oklch(0.08_0.01_25)] py-14">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-10 w-10" width={40} height={40} />
              <span className="font-display text-xl font-bold">Valentinos <span className="text-gradient-gold">Chicken</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">El auténtico sabor del pollo a la brasa en el corazón de Baños del Inca.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold">Enlaces</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#especialidad" className="hover:text-[var(--gold)] transition">Carta</a></li>
              <li><a href="#galeria" className="hover:text-[var(--gold)] transition">Galería</a></li>
              <li><a href="#ubicacion" className="hover:text-[var(--gold)] transition">Ubicación</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold">Síguenos</h4>
            <div className="mt-4 flex gap-3">
              {["Facebook", "Instagram", "TikTok"].map((s) => (
                <a key={s} href="#" className="glass rounded-full px-4 py-2 text-xs hover:text-[var(--gold)] transition">{s}</a>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
               className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-white">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Valentinos Chicken · Baños del Inca, Cajamarca · Todos los derechos reservados
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
