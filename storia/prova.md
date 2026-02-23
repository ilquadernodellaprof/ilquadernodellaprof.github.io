---
title: Pagina di prova
---

Qui va inserita una breve frase introduttiva, se no la pagina non funziona bene in stampa.

<button class="btn-stampa" onclick="window.print()">
  Clicca qui se vuoi stampare questa pagina
</button>

<style>
@media print {
  /* Nasconde l'header e il bottone */
  [role="banner"], .btn-stampa {
    display: none !important;
  }
  
  /* Rimuove spazi bianchi in alto */
  body, .post-header {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
}

.btn-stampa {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #7a9e7e;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
}
</style>

#### paragrafo

Testo del paragrafo
