---
title: Pagina di prova
---

Qui va inserita una breve frase introduttiva, se no la pagina non funziona bene in stampa.

<button class="btn-stampa" onclick="window.print()">
  Clicca qui se vuoi stampare questa pagina
</button>

<style>
@media print {
  /* 1. Nasconde Header, Footer originale e Bottone */
  [role="banner"], 
  .footer-col-wrapper, 
  .footer-heading, 
  .btn-stampa {
    display: none !important;
  }

  /* 2. Crea la riga di testo sintetica nel footer */
  .site-footer::after {
    content: "Contenuto curato da Lucia Capurri, distribuito con licenza CC-BY-NC a scopo didattico.";
    display: block;
    text-align: center;
    font-size: 10pt;
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding-top: 10px;
  }

  /* 3. Ottimizza i margini per la carta */
  body, .post-header, .wrapper {
    margin: 0 !important;
    padding: 0 !important;
  }
}

/* Stile del bottone visibile a schermo */
.btn-stampa {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #7a9e7e;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 15px 0;
  font-family: sans-serif;
}
</style>

<button class="btn-stampa" onclick="window.print()">
  Clicca qui per stampare la pagina
</button>

### Paragrafo

Testo del paragrafo.
