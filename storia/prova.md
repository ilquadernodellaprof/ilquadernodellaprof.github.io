---
Title: Pagina di prova
---

Qui va inserita una breve frase introduttiva, se no la pagina non funziona bene in stampa.

<style>
@media print {
  /* Nasconde l'header e il bottone */
  [role="banner"], .btn-stampa {
    display: none !important;
  }
  
  /* Rimuove spazi bianchi eccessivi in alto */
  body {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }
}

/* Stile estetico per il bottone (opzionale) */
.btn-stampa {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #7a9e7e;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>

<button class="btn-stampa" onclick="window.print()">
  Clicca qui se vuoi stampare questa pagina
</button>

#### paragrafo

Testo del paragrafo.
### Paragrafo 1

Testo convincente.
