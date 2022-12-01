Composizione gruppo:
- Filippo Saracco
- Giulio James Forlani

Documentazione:
Comunicazione tra client (drone) e server tramite protocollo HTTP al fine di comprendere le criticità del protocollo.
Il drone comunica ogni secondo al server le proprie informazioni (altitudine, latitudine, longitudine, velocità, carica residua) in formato json.
Il server si occupa quindi di leggere tali dati e inserirli in un db postgres.
