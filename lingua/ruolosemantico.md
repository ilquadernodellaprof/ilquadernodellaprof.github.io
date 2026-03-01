---
title: Ruolo semantico e funzione sintattica
---
<style>
.ruoli-tabella {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin: 2rem 0;
}

.ruolo-card {
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}

.ruolo-titolo {
  background-color: #f0f0f0;
  font-weight: bold;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.ruolo-funzioni {
  display: grid;
  grid-template-columns: 1fr;
}

.ruolo-cella {
  padding: 0.5rem 1rem;
  border-top: 1px solid #e0e0e0;
}

.ruolo-cella .etichetta {
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 0.2rem;
}

.ruolo-cella.vuoto {
  color: #aaa;
  font-style: italic;
}

@media (min-width: 600px) {
  .ruolo-funzioni {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .ruolo-cella {
    border-top: none;
    border-left: 1px solid #e0e0e0;
  }

  .ruolo-cella:first-child {
    border-left: none;
  }
}
details {
  margin: 1rem 0;
}

details summary {
  display: inline-block;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.4rem 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  list-style: none;
}

details summary::-webkit-details-marker {
  display: none;
}

details summary::before {
  content: "▶ ";
  font-size: 0.75rem;
}

details[open] summary::before {
  content: "▼ ";
}

details[open] summary {
  margin-bottom: 0.8rem;
}
</style>

Leggiamo questa breve storia assurda.

>### Il pacco crudele
>Giada è una giovane donna che ha parcheggiato l'auto vicino casa. Un giorno esce per guidare e  scopre che l'auto è stata rubata dai ladri. Al posto dell'auto Giada trova un pacco sottile sul quale c'è scritta una dedica crudele. "Giada, ci hai rubato il cuore: ricambiamo il favore". Giada trema, aprendo il pacco, che contiene una grande lastra di vetro. A Giada il vetro proprio non piace: lei lo odia. Giada dà un colpo violento al vetro. Il vetro è rotto da Giada. Il vetro si rompe per colpa di Giada. Ma tutti pensano che, in fondo, la colpa sia solo dei ladri, perché loro hanno rubato l'auto di Giada e le hanno lasciato un pacco crudele.

Tralasciando il fatto che questa storiella non è scritta bene (ci sono davvero troppe ripetizioni), possiamo fare qualche osservazione.

>Giada rompe il vetro.
>
>Il vetro è rotto da Giada.
>
>Il vetro si è rotto per colpa di Giada.
>
>Giada causa la rottura del vetro.

In queste quattro frasi, chi è che compie l'azione? Chi è che la subisce?
Ora fai lo schema a raggi delle quattro frasi. Fai attenzione, perché le ultime due non sono frasi nucleari (le espressioni "_per colpa di Giada_" e "_del vetro_" non sono necessari per capire la frase).

<details>
		<summary>Clicca qui per la soluzione.</summary>
	![soluzione delle frasi](urlimmagine.png)
</details>


Come vedi, Giada è sempre colei che compie l'azione, ma non è sempre il soggetto delle frasi. Giada è **agente**. Il vetro subisce sempre l'azione, anche quando è soggetto di una frase passiva: è **paziente**.

Mentre soggetto e oggetto (diretto o indiretto) sono **funzioni sintattiche**, agente e paziente sono **ruoli semantici**.

Lo stesso vale per i due esempi in cui Giada e il vetro sono circostanti (nei due esempi: _colpa **di Giada**_ e _rottura **del vetro**_).

Il **ruolo semantico** è scelto dal verbo sulla base del significato di tutta la frase. La funzione sintattica dipende invece dalla struttura valenziale del verbo (quanti e quali argomenti vuole).

Osserviamo queste frasi:

>Giada **odia** il vetro.
>
>A Giada non **piace** il vetro.

In entrambe le frasi Giada fa esperienza di un sentimento. Il ruolo di Giada è quello di **esperiente**.
Attenzione però! Il soggetto della seconda frase è il vetro!

**Ricorda**: un soggetto non può **mai** essere un gruppo del nome con preposizione (sintagma preposizionale). Ecco perché Giada non è soggetto!

Osserviamo queste tre frasi.

>**Giada** ha un'auto.
>
>I ladri rubano l'auto **a Giada**.
>
>I ladri rubano l'auto **di Giada**.

In tutte queste frasi Giada non compie un'azione, ma è quella che possiede l'auto. Il ruolo di Giada è quello di **possessore** (si dice al maschile, anche se è femmina).

Osserviamo queste ultime tre frasi.

>**Giada** riceve un pacco.
>
>I ladri inviano un pacco **a Giada**.
>
>Sulla strada c'è un pacco **per Giada**.

In tutte queste frasi Giada riceve un pacco. Il ruolo di Giada è quello di **destinatario**.
Attenzione: nella prima frase Giada non compie nessuna azione, ma è comunque soggetto. Il soggetto del verbo ricevere è un **destinatario**. 
Il destinatario coincide con quello che la grammatica tradizionale chiama **termine**: ci dice dove finisce l'azione di qualcun altro (in questa storia, i ladri).

<div class="ruoli-tabella">

  <div class="ruolo-card">
    <div class="ruolo-titolo">Agente</div>
    <div class="ruolo-funzioni">
      <div class="ruolo-cella">
        <div class="etichetta">Soggetto</div>
        <strong>Giada</strong> rompe il vetro.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Oggetto indiretto</div>
        Il vetro è rotto <strong>da Giada</strong>.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Circostante</div>
        Il vetro si è rotto per colpa <strong>di Giada</strong>.
      </div>
    </div>
  </div>

  <div class="ruolo-card">
    <div class="ruolo-titolo">Paziente</div>
    <div class="ruolo-funzioni">
      <div class="ruolo-cella">
        <div class="etichetta">Soggetto</div>
        <strong>Il vetro</strong> è rotto da Giada.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Oggetto diretto</div>
        Giada rompe <strong>il vetro</strong>.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Circostante</div>
        Giada causa la rottura <strong>del vetro</strong>.
      </div>
    </div>
  </div>

  <div class="ruolo-card">
    <div class="ruolo-titolo">Esperiente</div>
    <div class="ruolo-funzioni">
      <div class="ruolo-cella">
        <div class="etichetta">Soggetto</div>
        <strong>Giada</strong> odia il vetro.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Oggetto indiretto</div>
        <strong>A Giada</strong> non piace il vetro.
      </div>
      <div class="ruolo-cella vuoto">
        <div class="etichetta">Circostante</div>
        —
      </div>
    </div>
  </div>

  <div class="ruolo-card">
    <div class="ruolo-titolo">Possessore</div>
    <div class="ruolo-funzioni">
      <div class="ruolo-cella">
        <div class="etichetta">Soggetto</div>
        <strong>Giada</strong> ha un'auto.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Oggetto indiretto</div>
        I ladri rubano l'auto <strong>a Giada</strong>.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Circostante</div>
        I ladri rubano l'auto <strong>di Giada</strong>.
      </div>
    </div>
  </div>

  <div class="ruolo-card">
    <div class="ruolo-titolo">Destinatario</div>
    <div class="ruolo-funzioni">
      <div class="ruolo-cella">
        <div class="etichetta">Soggetto</div>
        <strong>Giada</strong> riceve un pacco.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Oggetto indiretto</div>
        I ladri inviano un pacco <strong>a Giada</strong>.
      </div>
      <div class="ruolo-cella">
        <div class="etichetta">Circostante</div>
        Sulla strada c'è un pacco <strong>per Giada</strong>.
      </div>
    </div>
  </div>

</div>
