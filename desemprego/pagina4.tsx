import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fisica")({
  head: () => ({
    meta: [
      { title: "Física — O Futuro do Trabalho" },
      {
        name: "description",
        content:
          "Página de pesquisa de Física do projeto O Futuro do Trabalho: introdução, principais pesquisas e conclusão.",
      },
      { property: "og:title", content: "Física — O Futuro do Trabalho" },
      {
        property: "og:description",
        content:
          "Página de pesquisa de Física do projeto O Futuro do Trabalho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FisicaPage,
});

function FisicaPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <span className="tag">PROJETO DE FÍSICA • 2026</span>
          <h1>
            Física <em>e o futuro do trabalho.</em>
          </h1>
          <p>
            Nesta página ficam as pesquisas de Física ligadas ao tema do
            projeto: como a tecnologia e as máquinas transformam o trabalho
            das pessoas.
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
              Espaço reservado para a imagem da página de Física
            </div>
          </div>
          <div className="floating-card">
            <strong>FÍSICA</strong>
            <span>ESPAÇO DE PESQUISA</span>
          </div>
        </div>
      </section>

      <section className="section" id="introducao">
        <div className="section-title">
          <span>01 — INTRODUÇÃO</span>
          <h2>
            Sobre a <em>pesquisa de Física.</em>
          </h2>
        </div>
        <div className="two-columns">
          <div>
            <div className="placeholder-box">
              <strong>Espaço para o texto de introdução</strong>
              Escreva aqui a introdução da pesquisa de Física: o que será
              estudado e por que esse tema foi escolhido.
            </div>
          </div>
          <div>
            <div className="placeholder-box">
              <strong>Espaço para o contexto</strong>
              Escreva aqui o contexto da pesquisa: conceitos de Física
              envolvidos, exemplos e dados que você encontrar.
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
          <article className="info-card card-purple">
            <div className="card-number">01</div>
            <h3>Pesquisa 01</h3>
            <p>
              Espaço reservado para o texto da primeira pesquisa de Física.
              Substitua este texto pelo resumo do tema estudado.