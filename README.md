Componenti gruppo:
- Giulio James Forlani
- Filippo Saracco

# Documentazione
Il drone (client) comunica ogni secondo al broker (localhost) i propri dati (altitudine, latitudine, longitudine, velocità e carica residua)
Il prefisso del topic è iot2022test/ e per l'ascolto (subscribe) dei comandi inviati dal broker è stata aggiunta una funzione con il medesimo
nome nel file Mqtt.cs .
