# Eduardo Henrique — Landing Page

Site oficial desenvolvido para o artista brasileiro Eduardo Henrique, com foco em música, identidade visual, apresentações, vídeos, agenda e contratação de shows.

O projeto foi pensado para transmitir a identidade do artista através de uma experiência visual editorial, cinematográfica e responsiva, priorizando fotografia, tipografia, movimento e uma navegação simples.

---

## 📌 Sobre o projeto

A landing page apresenta o universo artístico de Eduardo Henrique através de uma navegação vertical composta por:

- **Hero / Apresentação**
- **Música em Destaque**
- **Sobre o Artista**
- **Vídeos**
- **Galeria**
- **Agenda**
- **Contratação**
- **Redes Sociais**
- **Footer Institucional**

### Direção Visual
A direção visual utiliza uma linguagem editorial com:
- Tipografia de grande escala
- Fotografia como elemento principal
- Composição assimétrica
- Contraste de fundo claro e escuro em tons neutros com acentos em terracota
- Linhas e elementos gráficos discretos
- Animações de entrada durante o scroll (scroll reveal)
- Layout responsivo adaptado para diferentes telas

---

## 🛠️ Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Git](https://git-scm.com/) & [GitHub](https://github.com/)
- [Vercel](https://vercel.com/) (Hospedagem)

---

## 📁 Estrutura do Projeto

```text
landing-eduardo-henrique/
│
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-img.jpg
│   │   │   ├── heroimg-celular.png
│   │   │   ├── compondo.png
│   │   │   ├── deboa.png
│   │   │   ├── imgabout.jpg
│   │   │   └── tocandoviolão.png
│   │   │
│   │   └── videos/
│   │       ├── videoaovivo.mp4
│   │       ├── somaisumpagode.mp4
│   │       └── videoacustico.mp4
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   ├── FeaturedMusic/
│   │   ├── About/
│   │   ├── Videos/
│   │   ├── Gallery/
│   │   ├── Agenda/
│   │   ├── Booking/
│   │   └── Socials/
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
