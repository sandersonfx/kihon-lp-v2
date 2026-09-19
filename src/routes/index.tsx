import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import ambiente from "../assets/ambiente.jpg";
import atendimento from "../assets/atendimento.jpg";
import cortes from "../assets/cortes.webp";
import hero from "../assets/hero.webp";
import horario from "../assets/horario.png";
import infantil from "../assets/infantil.jpg";
import logo from "../assets/logo.png";
import manicure from "../assets/manicure.jpg";
import masculino from "../assets/masculino.jpg";
import massagem from "../assets/massagem.jpg";
import mechas from "../assets/mechas.webp";
import produtos from "../assets/produtos.jpg";
import profissionais from "../assets/profissionais.jpeg";

const whatsappUrl = "https://api.whatsapp.com/send?phone=551123660490";

const services = [
  { title: "Cortes", detail: "Cacheado, oriental e curto", image: cortes },
  { title: "Mechas / Reflexo", detail: "Cor, brilho e personalidade", image: mechas },
  { title: "Massagem", detail: "Uma pausa para corpo e mente", image: massagem },
  { title: "Corte Masculino", detail: "Precisão e estilo", image: masculino },
  { title: "Corte Infantil", detail: "Cuidado leve e acolhedor", image: infantil },
  { title: "Manicure", detail: "Beleza em cada detalhe", image: manicure },
];

const reasons = [
  { title: "Ambiente", text: "Confortável e acolhedor", image: ambiente },
  { title: "Profissionais", text: "Experiência e cuidado", image: profissionais },
  { title: "Produtos", text: "Seleção de alta qualidade", image: produtos },
  { title: "Atendimento", text: "Próximo e personalizado", image: atendimento },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kihon Hair Studio | Salão de Beleza no Morumbi" },
      {
        name: "description",
        content:
          "Kihon Hair Studio no Morumbi: cortes, mechas, massagem, manicure e atendimento especializado. Agende seu horário pelo WhatsApp.",
      },
      { property: "og:title", content: "Kihon Hair Studio | Salão de Beleza no Morumbi" },
      {
        property: "og:description",
        content: "Seu cabelo em boas mãos. Conheça nossos serviços e agende seu horário.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Kihon Hair Studio",
          telephone: "+55 11 2366-0490",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida Jorge João Saad, 305",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "05618-000",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
});

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.56 7.47L3.5 20.5l1.35-4.3A8.5 8.5 0 1 1 20.5 11.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.2 7.75c.2-.46.4-.47.7-.48h.6c.16 0 .35.06.44.3l.72 1.75c.08.2.04.38-.07.55l-.5.64c-.13.16-.2.3-.08.52.52.91 1.2 1.67 2.14 2.18.18.1.31.08.44-.07l.7-.83c.17-.2.35-.23.56-.14l1.67.79c.24.12.4.17.45.3.05.13.05.76-.17 1.38-.2.57-1.14 1.1-1.64 1.16-.43.05-.98.08-2.72-.65-2.25-.95-3.72-3.27-3.83-3.42-.1-.15-.91-1.22-.91-2.32 0-.62.22-1.17.5-1.6Z" fill="currentColor" />
    </svg>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Olá, meu nome é ${name}. Gostaria de agendar um horário. Meu telefone é ${phone}.`;
    window.open(`${whatsappUrl}&text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10 lg:py-7">
          <a href="#inicio" aria-label="Kihon Hair Studio" className="relative z-50">
            <img src={logo} alt="Kihon Hair Studio" className="h-auto w-32 object-contain lg:w-40" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-hero-foreground lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#servicos">Serviços</a>
            <a className="nav-link" href="#sobre">Sobre</a>
            <a className="nav-link" href="#horarios">Horários</a>
            <a className="nav-link" href="#localizacao">Localização</a>
            <a className="button button-whatsapp button-small" href={`${whatsappUrl}&text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4" /> Agendar
            </a>
          </nav>

          <button className="icon-button lg:hidden" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          {menuOpen && (
            <nav className="mobile-menu lg:hidden" aria-label="Navegação móvel">
              <a href="#servicos" onClick={closeMenu}>Serviços</a>
              <a href="#sobre" onClick={closeMenu}>Sobre</a>
              <a href="#horarios" onClick={closeMenu}>Horários</a>
              <a href="#localizacao" onClick={closeMenu}>Localização</a>
              <a className="button button-whatsapp mt-3" href={`${whatsappUrl}&text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="size-5" /> Agendar agora
              </a>
            </nav>
          )}
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-glow" />
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-grid mx-auto grid min-h-[760px] max-w-7xl items-center px-5 pt-24 lg:min-h-[800px] lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pt-20">
          <div className="relative z-10 max-w-xl pt-14 text-hero-foreground lg:pt-0">
            <div className="eyebrow eyebrow-light"><Sparkles className="size-4" /> Cuidado, beleza e bem-estar</div>
            <h1 className="mt-6 text-5xl leading-[0.98] font-medium lg:text-7xl">Kihon Hair</h1>
            <p className="mt-3 text-2xl leading-tight font-light lg:text-4xl">O salão de beleza<br />do Morumbi</p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-hero-muted lg:text-lg">Seu cabelo em boas mãos, com uma equipe que entende de beleza, técnica e cuidado.</p>
            <a className="button button-whatsapp mt-8" href={`${whatsappUrl}&text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-5" /> Fale conosco no WhatsApp
            </a>
          </div>

          <div className="hero-portrait-wrap">
            <img src={hero} alt="Resultado de cabelo produzido no Kihon Hair" className="hero-portrait" />
          </div>
        </div>
        <a href="#servicos" className="hero-scroll" aria-label="Ver nossos serviços"><span /> Role para conhecer</a>
      </section>

      <section id="servicos" className="section-shell bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="section-heading">
            <div>
              <span className="eyebrow">O que fazemos</span>
              <h2>Nossos serviços</h2>
            </div>
            <p>Cuidados completos para realçar sua beleza, respeitando seu estilo e a identidade de cada fio.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-overlay" />
                <span className="service-number">0{index + 1}</span>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section-shell bg-soft">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A experiência Kihon</span>
              <h2>Por que escolher<br />o Kihon Hair?</h2>
            </div>
            <p>Do primeiro contato ao resultado final, cada detalhe foi pensado para que você se sinta bem cuidada.</p>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason) => (
              <article className="reason-item" key={reason.title}>
                <div className="reason-image"><img src={reason.image} alt={reason.title} loading="lazy" /></div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div><h3>{reason.title}</h3><p>{reason.text}</p></div>
                  <ArrowUpRight className="mt-1 size-5 text-accent-strong" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="horarios" className="hours-section">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="hours-image-wrap">
            <img src={horario} alt="Atendimento Kihon Hair" loading="lazy" />
          </div>
          <div className="hours-copy">
            <span className="eyebrow eyebrow-light"><Clock3 className="size-4" /> Horário de funcionamento</span>
            <h2>Seu momento<br />de cuidado.</h2>
            <div className="hours-list">
              <div><span>Terça a sexta</span><strong>09h — 19h</strong></div>
              <div><span>Sábado</span><strong>09h — 18h</strong></div>
              <div><span>Domingo e segunda</span><strong>Fechado</strong></div>
            </div>
            <a className="button button-light mt-8" href={`${whatsappUrl}&text=${encodeURIComponent("Olá! Gostaria de consultar um horário disponível.")}`} target="_blank" rel="noreferrer">
              Consultar disponibilidade <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="localizacao" className="location-section">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <span className="eyebrow"><MapPin className="size-4" /> Onde estamos</span>
            <h2>Como chegar<br />até nós</h2>
            <p className="mt-6 max-w-sm text-muted-foreground">Avenida Jorge João Saad, 305<br />Vila Progredior — Morumbi<br />São Paulo — SP</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-primary" href="https://www.google.com/maps/search/?api=1&query=Avenida+Jorge+Joao+Saad+305+Sao+Paulo" target="_blank" rel="noreferrer">Abrir no mapa <ArrowUpRight className="size-4" /></a>
              <a className="button button-outline" href="tel:+551123660490"><Phone className="size-4" /> (11) 2366-0490</a>
            </div>
          </div>
          <a className="map-panel" href="https://www.google.com/maps/search/?api=1&query=Avenida+Jorge+Joao+Saad+305+Sao+Paulo" target="_blank" rel="noreferrer" aria-label="Abrir localização do Kihon Hair no mapa">
            <div className="map-grid" aria-hidden="true" />
            <div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" />
            <div className="map-marker"><MapPin className="size-7" /><span>Kihon Hair</span></div>
          </a>
        </div>
      </section>

      <section id="agendamento" className="booking-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div className="booking-intro">
            <span className="eyebrow eyebrow-light">Vamos conversar</span>
            <h2>Agende seu<br />horário</h2>
            <p>Preencha seus dados e fale com uma de nossas recepcionistas pelo WhatsApp.</p>
          </div>
          <form className="booking-form" onSubmit={submitContact}>
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" placeholder="Como podemos te chamar?" value={name} onChange={(event) => setName(event.target.value)} required />
            <label htmlFor="phone">Telefone</label>
            <input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" value={phone} onChange={(event) => setPhone(event.target.value)} required />
            <button className="button button-whatsapp mt-3 w-full" type="submit">Entrar em contato <Send className="size-4" /></button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-10 md:flex-row lg:px-10">
          <img src={logo} alt="Kihon Hair Studio" className="w-32" />
          <p>© 2026 Kihon Hair Studio. Todos os direitos reservados.</p>
          <a href="https://www.instagram.com/kihonhair/" target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram"><Instagram className="size-5" /></a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={`${whatsappUrl}&text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`} target="_blank" rel="noreferrer" aria-label="Fale com o Kihon Hair no WhatsApp">
        <WhatsAppIcon className="size-7" />
      </a>
    </main>
  );
}