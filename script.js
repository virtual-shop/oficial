// Atelier Lumi — redireciona a busca para a Shopee com o termo do produto
(function () {
  const SHOPEE_BASE = 'https://shopee.com.br/search?keyword=';

  document.querySelectorAll('.btn-buy').forEach((btn) => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query') || '';
      const url = SHOPEE_BASE + encodeURIComponent(query);

      // Evento para TikTok Pixel (se estiver instalado)
      if (window.ttq && typeof window.ttq.track === 'function') {
        window.ttq.track('ClickButton', { content_name: query });
      }

      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });

  // Ano dinâmico no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
