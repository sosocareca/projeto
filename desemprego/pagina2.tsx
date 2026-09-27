import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/geografia")({
  head: () => ({
    meta: [
      { title: "Geografia — O Futuro do Trabalho" },
      {
        name: "description",
        content:
          "Página de pesquisa de Geografia do projeto O Futuro do Trabalho: introdução, principais pesquisas e conclusão.",
      },
      { property: "og:title", content: "Geografia — O Futuro do Trabalho" },
      {
        property: "og:description",
        content:
          "Página de pesquisa de Geografia do projeto O Futuro do Trabalho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GeografiaPage,
});

function GeografiaPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <span className="tag">PROJETO DE GEOGRAFIA • 2026</span>
          <h1>
            Geografia <em>e o futuro do trabalho.</em>
          </h1>
          <p>
            Nesta página ficam as pesquisas de Geografia ligadas ao tema do
            projeto: onde os empregos mudam, por que mudam e como isso afeta
            cada região.
          </p>
          <div className="hero-buttons">
            <a href="#pesquisas" className="button primary">
              VER PESQUISAS ↓
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-card">
            <div className="image-placeholder">
              Espaço reservado para a imagem da página de Geografia
            </div>
          </div>
          <div className="floating-card">
            <strong>GEOGRAFIA</strong>
            <span>ESPAÇO DE PESQUISA</span>
          </div>
        </div>
      </section>

      <section className="section" id="introducao">
        <div className="section-title">
          <span>01 — INTRODUÇÃO</span>
          <h2>
            Sobre a <em>pesquisa de Geografia.</em>
          </h2>
        </div>
        <div className="two-columns">
          <div>
            <div className="placeholder-box">
              <strong>Espaço para o texto de introdução</strong>
              Escreva aqui a introdução da pesquisa de Geografia: o que será
              estudado e por que esse tema foi escolhido.
            </div>
          </div>
          <div>
            <div className="placeholder-box">
              <strong>Espaço para o contexto</strong>
              Escreva aqui o contexto da pesquisa: dados por região, tipos de
              desemprego e exemplos que você encontrar.
            </div>
            <div className="placeholder-box">
              <strong>Espaço para as fontes</strong>
              Liste aqui os sites, livros e materiais usados na pesquisa.
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section" id="pesquisas">
        <div className="section-title center">
          <span>02 — PESQUISAS</span>
          <h2>
            Principais <em>temas estudados.</em>
          </h2>
        </div>
        <div className="cards">
          <article className="info-card card-green">
            <div className="card-number">01</div>
            <h3>Pesquisa 01</h3>
            <p>
              Espaço reservado para o texto da primeira pesquisa de Geografia.
              Substitua este texto pelo resumo do tema estudado.