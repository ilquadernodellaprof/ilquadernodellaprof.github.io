---
title: Sandbox
---
Qui va inserita una breve frase introduttiva, se no la pagina non funziona bene in stampa.

<button class="btn-stampa" onclick="window.print()">
  Clicca qui per stampare la pagina
</button>

<div class="font-ctrl">
  <button onclick="cambiaFont(-1)" aria-label="Rimpicciolisci testo">A−</button>
  <button onclick="cambiaFont(1)" aria-label="Ingrandisci testo">A+</button>
</div>

<script>
  let dimensione = parseFloat(localStorage.getItem('fontSize')) || 18;
  document.body.style.fontSize = dimensione + 'px';

  function cambiaFont(delta) {
    dimensione = Math.min(Math.max(dimensione + delta * 2, 14), 28);
    document.body.style.fontSize = dimensione + 'px';
    localStorage.setItem('fontSize', dimensione);
  }
</script>

<style>
@media print {
  [role="banner"], 
  .footer-col-wrapper, 
  .footer-heading, 
  .btn-stampa,
  .font-ctrl {
    display: none !important;
  }
  .site-footer::after {
    content: "Contenuto curato da Lucia Capurri, distribuito con licenza CC-BY-NC a scopo didattico.";
    display: block;
    text-align: center;
    font-size: 10pt;
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding-top: 10px;
  }
  body, .post-header, .wrapper {
    margin: 0 !important;
    padding: 0 !important;
  }
}
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
.font-ctrl {
  display: flex;
  gap: 8px;
  margin: 10px 0;
}
.font-ctrl button {
  padding: 6px 14px;
  border: 2px solid #7a9e7e;
  border-radius: 8px;
  background: #fdfaf5;
  color: #2d2d2d;
  font-family: Georgia, serif;
  cursor: pointer;
}
.font-ctrl button:first-child { font-size: 0.85em; }
.font-ctrl button:last-child  { font-size: 1.1em; font-weight: bold; }
</style>

### Paragrafo
Testo del paragrafo.

<style>
@media print {
  .btn-torna { display: none !important; }
}
.btn-torna {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #a8c5a8;
  color: #2d2d2d;
  border-radius: 5px;
  margin: 15px 0;
  font-family: sans-serif;
  text-decoration: none;
}
</style>
<a href="javascript:history.back()" class="btn-torna">← Torna indietro</a>
