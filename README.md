Componenti gruppo:
- Giulio James Forlani
- Filippo Saracco

# Documentazione
Il drone (client) comunica ogni secondo al broker (localhost) i propri dati (altitudine, latitudine, longitudine, velocit� e carica residua)
Il prefisso del topic � iot2022test/ e per l'ascolto (subscribe) dei comandi inviati dal broker � stata aggiunta una funzione con il medesimo
nome nel file Mqtt.cs .
