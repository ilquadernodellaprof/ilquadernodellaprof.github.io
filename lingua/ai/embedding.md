---
title: gli embeddings
---

Un LLM (Large Language Model) è un tipo di intelligenza artificiale che ha imparato a lavorare con il linguaggio leggendo enormi quantità di testi. Il suo obiettivo è capire e produrre frasi in modo coerente, un po’ come farebbe una persona. Non conosce davvero il mondo, ma riconosce schemi: ad esempio quali parole possono funzionare come soggetto, quale verbo richiede certi argomenti, e quali combinazioni hanno senso dal punto di vista sintattico e semantico.

Il primo passaggio nel funzionamento di un LLM è la divisione delle frasi in pezzi (tokenizzazione). Una volta divise le frasi in token, l’LLM deve trasformarle in qualcosa che il computer possa elaborare. Questo significa passare dalle parole ai numeri, mantenendo però le relazioni di significato. 

Questo processo si chiama **embedding**. In pratica, ogni parola (o token) diventa una lista di numeri, simili alle coordinate del gps per la "mappa" della frase. Solo che parliamo di migliaia di numeri diversi per ogni singolo token, perché ogni parola può trovarsi in tanti contesti diversi.

Perché numeri? Perché i computer lavorano con numeri, non con parole. Ma non è una traduzione casuale: parole con significati simili avranno numeri simili.

Esempio:
“cane” e “gatto” avranno embeddings più vicini tra loro rispetto a “cane” e “astronave”. Questo perché “cane” e “gatto” condividono caratteristiche semantiche (sono animali, possono essere soggetto di verbi come “correre”, “dormire”…).

Immagina uno spazio come una mappa: ogni parola occupa una posizione. Parole che possono comparire negli stessi sintagmi o con la stessa valenza del verbo stanno vicine.

Esempio concreto:
Nella frase “Il ragazzo mangia la mela”, “ragazzo” e “bambino” avranno posizioni simili perché possono entrambi avere la funzione sintattica di soggetto e svolgere il ruolo di agente.

Gli embeddings permettono all’A.I. di cogliere relazioni: non solo il significato di una parola, ma anche come si usa nelle frasi. È come dare al computer una “sensibilità grammaticale”, anche se fatta solo di numeri.

Gli LLM sono stati allenati su quantità enormi di testi, ma questo non significa che capiscano davvero il linguaggio. Non conoscono il significato delle parole: riconoscono solo schemi.

Lo si vede bene negli embeddings: le parole diventano numeri e vengono messe “vicine” se compaiono in contesti simili. Ma questa vicinanza non è vera comprensione, è una somiglianza statistica.

Quando il modello scrive, sceglie ogni parola come la più probabile dopo le precedenti, in base al prompt. Non decide cosa dire: prevede cosa viene dopo.

Anche questa scheda è stata costruita con l’aiuto dell’A.I., ma è la persona che la usa a dover controllare, correggere e dare senso al risultato.
