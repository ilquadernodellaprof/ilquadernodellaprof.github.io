---
title: attention
---

Un LLM (Large Language Model) è un tipo di intelligenza artificiale che ha imparato a lavorare con il linguaggio leggendo enormi quantità di testi. Il suo obiettivo è capire e produrre frasi in modo coerente, un po’ come farebbe una persona. Non conosce davvero il mondo, ma riconosce schemi: ad esempio quali parole possono funzionare come soggetto, quale verbo richiede certi argomenti, e quali combinazioni hanno senso dal punto di vista sintattico e semantico.

Dopo aver trasformato le parole in numeri, l’LLM deve capire come sono collegate tra loro nella frase. Non tutte le parole hanno la stessa funzione sintattica (soggetto, verbo, oggetto) o lo stesso ruolo semantico (agente, paziente, esperiente, ecc.). Per fare questo utilizza un meccanismo chiamato attention.

L’**attention** è il meccanismo che permette all’A.I. di capire quali parole sono più importanti in una frase.

Quando leggiamo:
“La ragazza vede il cane con il binocolo”
noi capiamo che “con il binocolo” si collega al verbo “vede”. L’A.I. deve imparare a fare lo stesso: capire quali parole sono collegate tra loro.

L’attention funziona così: per ogni parola, il sistema guarda tutte le altre e decide a quali dare più “peso”. È come dire: “questa parola è più importante per capire il significato”.

Esempio:
Nella frase “Il gatto mangia il pesce”, il verbo “mangia” darà molta attenzione a “gatto” (soggetto) e “pesce” (argomento oggetto), perché sono essenziali per la sua valenza.

Un altro esempio:
“Marco ha visto Luca mentre correva”
Chi correva? Marco o Luca? L’attention aiuta a valutare le connessioni tra i sintagmi per interpretare meglio la frase.

In pratica, l’attention permette all’A.I. di non leggere in modo lineare, ma di costruire una rete di relazioni. Questo è fondamentale per cogliere sia la struttura sintattica di una frase che il suo significato, non solo le singole parole.

Gli LLM funzionano grazie a enormi quantità di testi, ma non capiscono davvero le frasi: riconoscono schemi e relazioni.

Il meccanismo di attention, per esempio, permette di collegare le parole tra loro e dare più “peso” a quelle importanti. Ma questo non significa capire: significa solo calcolare quali parole sono più rilevanti in base ai dati.

Quando generano un testo, scelgono ogni parola come la più probabile dopo le precedenti, a partire dal prompt. È una previsione, non una scelta consapevole.

Anche questa scheda è stata scritta con l’aiuto dell’A.I., ma la responsabilità del risultato è sempre della persona, che deve verificare e migliorare il testo.
