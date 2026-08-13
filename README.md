# petterson.ia.br — v5 · versão frontend

Site pessoal/currículo bilíngue com foco em tecnologia, IA, dados e trabalho remoto.

## Stack

- HTML5 semântico
- CSS moderno e responsivo
- JavaScript vanilla
- Sem framework obrigatório
- Pronto para Cloudflare Pages
- Tema claro/escuro
- PT/EN persistente no navegador
- Menu mobile
- Scroll progress
- Reveal animations com IntersectionObserver
- Botões de CTA e download
- Estrutura preparada para área privada

## Arquivos

- `index.html`
- `assets/style.css`
- `assets/app.js`
- `assets/cv-petterson-pt.pdf` — adicionar o PDF final
- `assets/cv-petterson-en.pdf` — adicionar o PDF final

## Publicação no Cloudflare Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos deste projeto.
3. No Cloudflare, vá em Workers & Pages → Create → Pages → Connect to Git.
4. Selecione o repositório.
5. Para este site estático, não é necessário build command.
6. O output directory é a raiz do projeto.
7. Depois de publicado, adicione `petterson.ia.br` como Custom Domain.

## Próxima fase: área privada

Usar um subdomínio separado:

`privado.petterson.ia.br`

Arquitetura recomendada:
- Cloudflare Access para autenticação;
- Cloudflare Workers para a interface;
- Cloudflare R2 para armazenamento;
- nenhum arquivo pessoal dentro do diretório público do site.

## Observação

Os links de LinkedIn/GitHub estão como placeholders e devem ser substituídos pelos URLs definitivos antes da publicação.


## Foto profissional
A foto fornecida foi otimizada para web e incorporada como `assets/petterson-profile.jpg`, usada no hero do site.

## Cloudflare Workers Static Assets

This project is configured for Cloudflare Workers Static Assets using `wrangler.jsonc`.
The static asset directory is the project root (`.`). `.assetsignore` prevents deployment
of repository/config helper files as public assets.

Cloudflare dashboard:
- Build command: leave empty
- Deploy command: `npx wrangler deploy`
