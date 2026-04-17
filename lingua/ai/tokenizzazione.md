---
title: la tokenizzazione
---

Un LLM (Large Language Model) è un tipo di intelligenza artificiale che ha imparato a lavorare con il linguaggio leggendo enormi quantità di testi. Il suo obiettivo è capire e produrre frasi in modo coerente, un po’ come farebbe una persona. Non conosce davvero il mondo, ma riconosce schemi: ad esempio quali parole possono funzionare come soggetto, quale verbo richiede certi argomenti, e quali combinazioni hanno senso dal punto di vista sintattico e semantico.

Per riuscire a lavorare con le frasi, però, un LLM deve prima dividerle in unità più piccole e gestibili. Questo primo passaggio è fondamentale perché prepara il testo per tutte le operazioni successive. Si chiama tokenizzazione, ed è il modo in cui l’A.I. “spezza” il linguaggio.

Quando un sistema di A.I. legge una frase, non la vede come noi, cioè come una sequenza “naturale” di parole con significato. Prima deve spezzarla in pezzi più piccoli chiamati *token*.

Un token può essere una parola intera (“gatto”), ma anche una parte di parola (“gio-”, “-care”) o perfino un segno di punteggiatura. Ad esempio, la frase:
“Il gatto mangia il pesce”
può diventare: [“Il”, “gatto”, “mangia”, “il”, “pesce”].

Perché farlo? Perché l’A.I. lavora meglio con unità semplici e standard. È un po’ come analizzare una frase in sintagmi: invece di considerare tutto insieme, dividiamo per capire le relazioni tra soggetto, verbo e argomento oggetto.

Un esempio concreto: pensa alla parola “andiamocene”. Un umano capisce subito che contiene verbo + informazioni grammaticali. L’A.I., invece, potrebbe dividerla in più token per gestire meglio le parti che si ripetono in parole diverse (come le desinenze del verbo).

La tokenizzazione è fondamentale perché è il primo passo: se sbagliamo qui, diventano più difficili anche i passaggi successivi, come riconoscere le relazioni sintattiche tra le parole o coglierne il significato. 
È come costruire una frase: se sbagli i pezzi, il significato non funziona più.

Gli LLM sono strumenti molto potenti perché sono stati allenati su quantità enormi di testi, come se avessero letto una biblioteca grande quanto una città. Però non capiscono davvero ciò che leggono: lavorano riconoscendo schemi.

Per esempio, quando dividono il testo in token, non “sanno” cosa significa una frase: la spezzano solo in unità utili per lavorarci sopra.

Quando generano un testo, scelgono ogni parola come la più probabile dopo le precedenti, a partire dal prompt (cioè dalla richiesta dell’utente). È un sistema di previsione, non di comprensione.

Anche questa scheda è stata prodotta con l’aiuto dell’A.I., ma il risultato dipende sempre dalle scelte della persona. Per questo è importante usare questi strumenti in modo consapevole e verificare sempre ciò che producono.
