# Atelier Lumi — Loja de Roupas (HTML/CSS/JS)

Site estático pronto para subir no GitHub Pages e anunciar no TikTok Ads.

## Estrutura
```
loja-roupas/
├── index.html
├── style.css
├── script.js
└── images/
    ├── hero.jpg
    ├── blusa-branca.jpg
    ├── saia-jeans.jpg
    └── calca-preta.jpg
```

## Como funciona
Cada botão **"Comprar na Shopee"** abre uma nova aba pesquisando o produto na Shopee:
`https://shopee.com.br/search?keyword=blusa+branca+feminina`

O termo é definido pelo atributo `data-query` em cada botão no `index.html` — edite ali para mudar o que será pesquisado.

## Publicar no GitHub Pages
1. Crie um repositório e faça upload dos arquivos (mantendo a pasta `images/`).
2. Em **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)`.
3. Aguarde 1-2 minutos e use a URL gerada no TikTok Ads.

## TikTok Ads — diretrizes já aplicadas
✅ Site com domínio próprio (via GitHub Pages)  
✅ Política clara: rodapé avisa que direciona a parceiros  
✅ Página "Sobre" e "Contato" presentes  
✅ HTTPS nativo do GitHub Pages  
✅ Responsivo (mobile-first — maioria do tráfego TikTok)  
✅ Carregamento rápido (imagens com `loading="lazy"` e `preload` do hero)  
✅ Meta tags Open Graph para preview bonito  

### TikTok Pixel (opcional)
Adicione no `<head>` do `index.html` para rastrear conversões:
```html
<script>
!function (w, d, t) { /* ...código do pixel do TikTok... */ }(window, document, 'ttq');
</script>
```
O `script.js` já dispara `ttq.track('ClickButton', {...})` quando alguém clica em comprar.

## Personalização rápida
- **Nome da loja**: altere `Atelier Lumi` no `index.html`
- **Cores**: edite `#b5835a` (dourado) e `#ee4d2d` (laranja Shopee) no `style.css`
- **Produtos**: duplique um bloco `<article class="card">` para adicionar mais peças
