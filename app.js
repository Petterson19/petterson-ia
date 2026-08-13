const translations = {
  pt:{
    "nav.about":"Sobre","nav.experience":"Experiência","nav.skills":"Skills","nav.projects":"Projetos","nav.contact":"Contato","private":"Área pessoal","labels.education":"FORMAÇÃO & IDIOMAS","education.title":"Formação","edu1.title":"Bacharelado em Libras","edu2.title":"Análise e Desenvolvimento de Sistemas","languages.title":"Idiomas",
    "hero.status":"Disponível para novos projetos","hero.title":"Petterson Cavalheiro","hero.subtitle":"Profissional remoto com experiência em avaliação de conteúdo, qualidade de dados, transcrição e projetos relacionados a inteligência artificial e linguagem.","hero.contact":"Vamos conversar","hero.download":"Baixar CV",
    "about.title":"Tecnologia com foco em qualidade, precisão e aprendizado contínuo.","about.text":"Minha atuação combina trabalho remoto, análise de conteúdo, qualidade de dados, linguagem e ferramentas digitais. Tenho interesse especial por inteligência artificial, LLMs e pela construção de soluções simples que resolvem problemas reais.","about.fact1":"Projetos e avaliação","about.fact2":"Precisão e guidelines","about.fact3":"Experiência distribuída","about.fact4":"Web e automação",
    "experience.title":"Experiência profissional","experience.note":"Remote · Freelance · AI/Data","exp1.period":"ATUAL","exp1.title":"AI / Data / Content Quality","exp1.text":"Avaliação, QA, anotação e análise de conteúdo para projetos digitais e de inteligência artificial, seguindo guidelines e critérios de qualidade.","exp2.period":"PROJETOS","exp2.title":"Transcription & Language Data","exp2.text":"Transcrição, revisão, alinhamento entre áudio e texto e controle de qualidade de dados linguísticos em projetos remotos.","exp3.period":"FREELANCE","exp3.title":"Remote Project Operations","exp3.text":"Execução de projetos distribuídos com foco em produtividade, precisão, documentação e adaptação a diferentes ferramentas e processos.",
    "skills.title":"Ferramentas e competências","skills.ai":"Avaliação de outputs, qualidade de dados e fluxos com IA.","skills.qa":"Análise criteriosa, guidelines, consistência e revisão.","skills.web":"HTML, CSS, JavaScript, GitHub e aplicações web.","skills.data":"Anotação, transcrição, alinhamento e organização de dados.",
    "projects.title":"Projetos e laboratório","projects.note":"Selected work","project1.text":"Site pessoal com currículo bilíngue, área privada e arquitetura preparada para serviços Cloudflare.","project2.text":"Aplicação para organização financeira com persistência local, importação de dados e categorização.","project3.text":"Exploração de ferramentas para transcrição, processamento de linguagem, QA e automação de tarefas.",
    "contact.title":"Tem um projeto em mente?","contact.text":"Estou aberto a oportunidades remotas, projetos de tecnologia e trabalhos relacionados a IA, dados e qualidade.","contact.cv":"CV em inglês","footer.private":"Área pessoal ↗"
  },
  en:{
    "nav.about":"About","nav.experience":"Experience","nav.skills":"Skills","nav.projects":"Projects","nav.contact":"Contact","private":"Private area","labels.education":"EDUCATION & LANGUAGES","education.title":"Education","edu1.title":"Bachelor's Degree in Brazilian Sign Language (Libras)","edu2.title":"Systems Analysis and Development","languages.title":"Languages",
    "hero.status":"Available for new projects","hero.title":"Petterson Cavalheiro","hero.subtitle":"Remote professional with experience in content evaluation, data quality, transcription and projects related to artificial intelligence and language.","hero.contact":"Let's talk","hero.download":"Download CV",
    "about.title":"Technology with a focus on quality, precision and continuous learning.","about.text":"My work combines remote operations, content analysis, data quality, language and digital tools. I am especially interested in artificial intelligence, LLMs and building simple solutions for real-world problems.","about.fact1":"Projects & evaluation","about.fact2":"Accuracy & guidelines","about.fact3":"Distributed work","about.fact4":"Web & automation",
    "experience.title":"Professional experience","experience.note":"Remote · Freelance · AI/Data","exp1.period":"CURRENT","exp1.title":"AI / Data / Content Quality","exp1.text":"Evaluation, QA, annotation and content analysis for digital and artificial intelligence projects, following guidelines and quality criteria.","exp2.period":"PROJECTS","exp2.title":"Transcription & Language Data","exp2.text":"Transcription, review, audio-to-text alignment and language-data quality control in remote projects.","exp3.period":"FREELANCE","exp3.title":"Remote Project Operations","exp3.text":"Distributed project execution focused on productivity, accuracy, documentation and adapting to different tools and processes.",
    "skills.title":"Tools & skills","skills.ai":"Output evaluation, data quality and AI workflows.","skills.qa":"Detailed analysis, guidelines, consistency and review.","skills.web":"HTML, CSS, JavaScript, GitHub and web applications.","skills.data":"Annotation, transcription, alignment and data organization.",
    "projects.title":"Projects & lab","projects.note":"Selected work","project1.text":"Personal site with bilingual résumé, private area and an architecture prepared for Cloudflare services.","project2.text":"Finance organization app with local persistence, data import and categorization.","project3.text":"Exploration of tools for transcription, language processing, QA and task automation.",
    "contact.title":"Have a project in mind?","contact.text":"I am open to remote opportunities, technology projects and work involving AI, data and quality.","contact.cv":"English CV","footer.private":"Private area ↗"
  }
};

const icon = (name) => {
  const icons = {
    sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
    moon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z"/></svg>`,
    download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16"/></svg>`
  };
  return icons[name] || "";
};

const root = document.documentElement;
const themeButton = document.getElementById("themeToggle");
const applyThemeIcon = () => {
  themeButton.querySelector(".icon").innerHTML = icon(root.classList.contains("light") ? "moon" : "sun");
};
const storedTheme = localStorage.getItem("petterson-theme");
if (storedTheme === "light") root.classList.add("light");
applyThemeIcon();
themeButton.addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem("petterson-theme", root.classList.contains("light") ? "light" : "dark");
  applyThemeIcon();
});

let lang = localStorage.getItem("petterson-lang") || "pt";
const langButton = document.getElementById("langToggle");
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  langButton.textContent = lang === "pt" ? "EN" : "PT";
  localStorage.setItem("petterson-lang", lang);
}
setLanguage(lang);
langButton.addEventListener("click", () => setLanguage(lang === "pt" ? "en" : "pt"));

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
}, {passive:true});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
