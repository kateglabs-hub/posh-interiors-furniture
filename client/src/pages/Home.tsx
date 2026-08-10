/* Contemporary African Atelier: an editorial journey through warm materials, quiet luxury, and easy human-scale conversion. */
import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Menu, MoveUpRight, Phone, X } from "lucide-react";

const WHATSAPP = "https://wa.me/254722699131?text=Hello%20Posh%20Interiors%20%26%20Furniture%2C%20I%20would%20like%20to%20discuss%20a%20project.";

const services = [
  ["01", "Interior Design", "Complete interior design solutions tailored to residential and commercial spaces.", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"],
  ["02", "Space Planning", "Intelligent layouts that balance flow, function, comfort, and visual calm.", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],
  ["03", "Furniture", "Premium furniture selected or sourced to complement your interior concept.", "/manus-storage/posh-furniture_66a3670d.jpg"],
  ["04", "Décor & Accessories", "Curated décor, artwork, soft furnishings, and finishing touches.", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"],
  ["05", "Fittings", "Lighting, cabinetry, hardware, wall treatments, and architectural details.", "/manus-storage/posh-details_b44e1594.jpg"],
  ["06", "Turnkey Interiors", "From initial concept and mood boards to sourcing, installation, and final styling.", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"],
];

const products = [
  { name: "The Kipepeo Lounge Chair", category: "Armchairs", image: "/manus-storage/posh-furniture_66a3670d.jpg" },
  { name: "Mara Travertine Table", category: "Coffee Tables", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=85" },
  { name: "The Nia Console", category: "Console Tables", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85" },
];

const projects = [
  { title: "Kilimani Residence", meta: "Nairobi · Residential", image: "/manus-storage/posh-project-villa_7d0052e1.jpg", number: "01" },
  { title: "The Westlands Apartment", meta: "Nairobi · Apartment", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85", number: "02" },
  { title: "Nairobi Executive Office", meta: "Nairobi · Commercial", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85", number: "03" },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return <a href="#top" className="flex items-center gap-3" aria-label="Posh Interiors & Furniture home">
    <span className="posh-mark" aria-hidden="true"><span className="posh-mark__left" /><span className="posh-mark__right" /></span>
    {!compact && <span className="hidden sm:block text-[11px] font-extrabold tracking-[.18em] leading-[1.15]">POSH<br />INTERIORS & FURNITURE</span>}
  </a>;
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="flex items-center gap-4"><span className="eyebrow">{number}</span><span className="fine-rule w-16" /><span className="text-[10px] font-bold tracking-[.18em] uppercase text-[#786c5c]">{children}</span></div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All pieces");
  const categories = ["All pieces", "Sofas", "Tables", "Armchairs", "Beds", "Outdoor"];

  return <div id="top" className="min-h-screen overflow-x-hidden bg-[#f5f1e9] text-[#29251f]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-[#29251f]/90 text-[#fbf7ef] backdrop-blur-md">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {[['Interior Design','#services'],['Furniture','#furniture'],['Décor','#details'],['Projects','#projects'],['About','#about']].map(([label, href]) => <a key={label} href={href} className="text-[10px] font-bold uppercase tracking-[.16em] text-white/75 transition-colors hover:text-[#d5b681]">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:0722699131" className="text-[10px] font-bold uppercase tracking-[.13em] text-white/75 hover:text-[#d5b681]">0722 699 131</a>
          <a href="#contact" className="border border-[#b08b57] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#f5dfbd] transition-colors hover:bg-[#b08b57] hover:text-[#29251f]">Request a Quote</a>
        </div>
        <button className="lg:hidden" onClick={() => setMenu(!menu)} aria-label={menu ? "Close menu" : "Open menu"}>{menu ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {menu && <div className="border-t border-white/10 bg-[#29251f] px-5 py-7 lg:hidden"><div className="flex flex-col gap-6">{[['Interior Design','#services'],['Furniture','#furniture'],['Décor','#details'],['Projects','#projects'],['About','#about'],['Contact','#contact']].map(([label, href]) => <a onClick={() => setMenu(false)} key={label} href={href} className="text-sm font-bold uppercase tracking-[.14em] text-white/80">{label}</a>)}<a href={WHATSAPP} className="inline-flex w-fit items-center gap-2 bg-[#b08b57] px-5 py-3 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#29251f]">WhatsApp Us <ArrowRight size={14} /></a></div></div>}
    </header>

    <main>
      <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#302a23] pt-24 text-[#fffaf2] md:min-h-[820px]">
        <img src="/manus-storage/posh-hero_aa8d05cf.jpg" alt="Sunlit contemporary living room designed by Posh Interiors" className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201d19]/85 via-[#201d19]/35 to-transparent" />
        <div className="container relative z-10 pb-20 md:pb-24">
          <div className="max-w-[760px]">
            <p className="eyebrow mb-7 text-[#d5b681]">Interior design · furniture · fittings</p>
            <h1 className="display max-w-4xl text-[clamp(4rem,9vw,8.5rem)] leading-[.78]">Transforming spaces<br /><em className="font-normal text-[#d5b681]">into timeless</em><br />experiences.</h1>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"><a href="#projects" className="inline-flex w-fit items-center gap-5 bg-[#f5f1e9] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#29251f] transition-colors hover:bg-[#d5b681]">Explore our work <ArrowDownRight size={15} /></a><a href="#contact" className="text-link text-[#fffaf2]">Request a consultation <ArrowRight size={15} /></a></div>
          </div>
          <div className="mt-20 flex items-end justify-between border-t border-white/30 pt-5"><p className="max-w-[235px] text-xs leading-6 text-white/70">Premium interior design, décor, furniture and fittings for exceptional spaces across Kenya.</p><a href={WHATSAPP} className="hidden items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.15em] text-[#d5b681] sm:flex"><span className="h-2 w-2 rounded-full bg-[#b08b57]" /> Chat with us on WhatsApp</a><span className="text-[10px] uppercase tracking-[.14em] text-white/60">Nairobi · Kenya</span></div>
        </div>
      </section>

      <section id="about" className="container grid gap-12 py-24 md:grid-cols-[.75fr_1.25fr] md:py-36">
        <div><SectionLabel number="01" children="The studio" /><p className="mt-10 max-w-[220px] text-sm leading-7 text-[#756b5d]">Thoughtful interiors for the way you live, work, gather, and rest.</p></div>
        <div><h2 className="display max-w-[760px] text-5xl leading-[.9] md:text-7xl">Designed for the<br /><em className="text-[#b08b57]">way you live.</em></h2><p className="mt-9 max-w-[650px] text-base leading-8 text-[#655c50]">At Posh Interiors & Furniture, we believe exceptional interiors are more than beautiful spaces. They are an expression of personality, lifestyle and purpose. From concept to completion, we bring together thoughtful design, premium furniture, refined décor and quality fittings to create spaces that feel distinctly yours.</p><a href="#services" className="text-link mt-10">Discover Posh Interiors <ArrowRight size={15} /></a></div>
      </section>

      <section id="services" className="bg-[#eae3d7] py-20 md:py-28"><div className="container"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel number="02" children="What we do" /><h2 className="display mt-7 max-w-xl text-5xl leading-[.9] md:text-7xl">A considered<br /><em className="text-[#b08b57]">approach to space.</em></h2></div><p className="max-w-[260px] text-sm leading-7 text-[#756b5d]">Every layer, from the first sketch to the last cushion, is chosen with intention.</p></div><div className="grid gap-px bg-[#cfc3b2] md:grid-cols-2 lg:grid-cols-3">{services.map(([num, title, copy, image]) => <article key={title} className="group bg-[#eae3d7] p-6 md:p-8"><div className="image-frame aspect-[4/3]"><img src={image} alt={title} /><span className="absolute left-4 top-4 bg-[#f5f1e9] px-2 py-1 text-[9px] font-extrabold tracking-[.16em] text-[#b08b57]">{num}</span></div><div className="flex items-start justify-between gap-5 pt-6"><div><h3 className="display text-3xl">{title}</h3><p className="mt-3 max-w-[260px] text-sm leading-6 text-[#756b5d]">{copy}</p></div><ArrowUpRight size={18} className="mt-1 shrink-0 text-[#b08b57] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></article>)}</div></div></section>

      <section className="container grid gap-14 py-24 md:grid-cols-[1fr_1fr] md:py-36"><div className="md:sticky md:top-32 md:self-start"><SectionLabel number="03" children="The process" /><h2 className="display mt-8 text-5xl leading-[.9] md:text-7xl">From vision<br /><em className="text-[#b08b57]">to space.</em></h2><p className="mt-8 max-w-[300px] text-sm leading-7 text-[#756b5d]">A clear, collaborative process designed to make beautiful spaces feel effortless.</p><a href="#contact" className="text-link mt-9">Start your project <ArrowRight size={15} /></a></div><div className="divide-y divide-[#cfc3b2]">{[['01','Consultation','We understand your lifestyle, requirements, taste, and budget.'],['02','Concept','We develop a design direction, mood boards, materials, and colour palette.'],['03','Space planning','We optimise the layout for functionality, flow, and aesthetics.'],['04','Selection','We curate furniture, fabrics, finishes, lighting, décor, and fittings.'],['05','Execution','We coordinate implementation, sourcing, and installation.'],['06','Final styling','We add the finishing details that bring the space together.']].map(([number, title, copy]) => <div key={number} className="grid grid-cols-[50px_1fr] gap-6 py-7 md:grid-cols-[70px_180px_1fr]"><span className="text-xs font-bold tracking-[.16em] text-[#b08b57]">{number}</span><h3 className="display text-3xl">{title}</h3><p className="col-start-2 text-sm leading-6 text-[#756b5d] md:col-start-3">{copy}</p></div>)}</div></section>

      <section id="furniture" className="bg-[#29251f] py-24 text-[#f5f1e9] md:py-32"><div className="container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel number="04" children="The collection" /><h2 className="display mt-7 max-w-2xl text-5xl leading-[.88] md:text-8xl">Furniture that<br /><em className="text-[#d5b681]">makes a statement.</em></h2></div><a href={WHATSAPP} className="text-link text-[#f5f1e9]">Enquire about a piece <ArrowRight size={15} /></a></div><div className="mt-14 flex flex-wrap gap-2 border-y border-white/15 py-4">{categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] transition-colors ${activeCategory === category ? 'bg-[#b08b57] text-[#29251f]' : 'text-white/55 hover:text-[#d5b681]'}`}>{category}</button>)}</div><div className="mt-10 grid gap-5 md:grid-cols-3">{products.map(product => <article key={product.name} className="group"><div className="image-frame aspect-[4/5] bg-[#40382e]"><img src={product.image} alt={product.name} /><a href={`${WHATSAPP}%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`} className="absolute bottom-4 left-4 right-4 translate-y-2 bg-[#f5f1e9] px-4 py-3 text-center text-[10px] font-extrabold uppercase tracking-[.14em] text-[#29251f] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">WhatsApp enquire</a></div><div className="flex justify-between gap-5 pt-5"><div><h3 className="display text-3xl">{product.name}</h3><p className="mt-1 text-[10px] font-bold uppercase tracking-[.15em] text-[#b08b57]">{product.category}</p></div><span className="text-xs text-white/50">Request price</span></div></article>)}</div></div></section>

      <section id="details" className="container grid gap-10 py-24 md:grid-cols-[1fr_.8fr] md:py-36"><div className="image-frame arch-frame min-h-[420px] md:min-h-[620px]"><img src="/manus-storage/posh-details_b44e1594.jpg" alt="Close-up of premium brass, timber, stone and linen materials" /></div><div className="flex flex-col justify-center md:pl-12"><SectionLabel number="05" children="The finishing touch" /><h2 className="display mt-8 text-5xl leading-[.9] md:text-7xl">Details that<br /><em className="text-[#b08b57]">define the space.</em></h2><p className="mt-8 text-base leading-8 text-[#655c50]">The right finish changes how a room feels. Explore a considered selection of lighting, cabinetry, hardware, wall treatments, soft furnishings, and objects that complete the story.</p><div className="mt-9 grid grid-cols-2 gap-y-3 text-xs font-bold uppercase tracking-[.12em] text-[#756b5d]">{['Lighting','Window treatments','Wall panels','Cabinet hardware','Mirrors','Table décor'].map(item => <span key={item} className="flex items-center gap-2"><Check size={14} className="text-[#b08b57]" />{item}</span>)}</div><a href="#contact" className="text-link mt-11">Build your palette <ArrowRight size={15} /></a></div></section>

      <section id="projects" className="bg-[#eae3d7] py-24 md:py-32"><div className="container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel number="06" children="Selected work" /><h2 className="display mt-7 text-5xl leading-[.9] md:text-7xl">Spaces with<br /><em className="text-[#b08b57]">a point of view.</em></h2></div><p className="max-w-[270px] text-sm leading-7 text-[#756b5d]">A selection of residential and commercial interiors shaped in close collaboration with our clients.</p></div><div className="mt-14 grid gap-6 md:grid-cols-12">{projects.map((project, index) => <article key={project.title} className={`${index === 0 ? 'md:col-span-7' : index === 1 ? 'md:col-span-5 md:mt-20' : 'md:col-span-7 md:col-start-4'}`}><div className="image-frame aspect-[4/3]"><img src={project.image} alt={project.title} /><span className="absolute left-5 top-5 text-xs font-bold tracking-[.18em] text-white">{project.number}</span></div><div className="flex items-end justify-between border-b border-[#cfc3b2] py-5"><div><h3 className="display text-3xl md:text-4xl">{project.title}</h3><p className="mt-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#b08b57]">{project.meta}</p></div><MoveUpRight size={19} className="text-[#b08b57]" /></div></article>)}</div></div></section>

      <section id="contact" className="relative overflow-hidden bg-[#b08b57] py-24 md:py-32"><div className="container grid gap-14 md:grid-cols-[1fr_.85fr] md:items-end"><div><SectionLabel number="07" children="Begin here" /><h2 className="display mt-8 max-w-[760px] text-6xl leading-[.82] text-[#29251f] md:text-8xl">A considered interior begins with a <em>better conversation.</em></h2></div><div className="md:pl-10"><p className="max-w-[360px] text-base leading-7 text-[#4d3b27]">Tell us what you’re imagining. We’ll shape the next step, together — from Nairobi residences to considered commercial spaces.</p><div className="mt-9 flex flex-col items-start gap-4"><a href={WHATSAPP} className="inline-flex items-center gap-4 bg-[#29251f] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#f5f1e9]">Chat with us on WhatsApp <ArrowRight size={15} /></a><a href="tel:0722699131" className="inline-flex items-center gap-3 text-sm font-bold text-[#29251f]"><Phone size={16} /> 0722 699 131</a></div></div></div></section>
    </main>

    <footer className="bg-[#29251f] py-14 text-[#f5f1e9]"><div className="container"><div className="grid gap-12 md:grid-cols-[1.2fr_.8fr_.8fr] md:gap-20"><div><Logo compact /><p className="mt-7 max-w-[250px] text-sm leading-7 text-white/55">Luxury spaces. Exceptional living. Premium interiors and furniture for Kenya.</p></div><div><p className="eyebrow">Explore</p><div className="mt-6 flex flex-col gap-3 text-sm text-white/60"><a href="#services" className="hover:text-[#d5b681]">Interior Design</a><a href="#furniture" className="hover:text-[#d5b681]">Furniture</a><a href="#details" className="hover:text-[#d5b681]">Décor & Fittings</a><a href="#projects" className="hover:text-[#d5b681]">Projects</a></div></div><div><p className="eyebrow">Get in touch</p><div className="mt-6 flex flex-col gap-3 text-sm text-white/60"><a href="tel:0722699131" className="hover:text-[#d5b681]">0722 699 131</a><a href={WHATSAPP} className="hover:text-[#d5b681]">WhatsApp us</a><span>Nairobi, Kenya</span></div></div></div><div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 text-[10px] uppercase tracking-[.15em] text-white/35 sm:flex-row"><span>© 2026 Posh Interiors & Furniture</span><span>Designed for the way you live.</span></div></div></footer>

    <a href={WHATSAPP} aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#b08b57] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#29251f] shadow-lg transition-transform hover:-translate-y-1"><span className="h-2 w-2 rounded-full bg-[#29251f]" /> WhatsApp</a>
  </div>;
}
