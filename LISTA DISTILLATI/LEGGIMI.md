# Menù Bar Museo · Istruzioni

## Struttura cartella

* `menu.html` — il file principale
* `logo.jpg` — il logo del bar (già incluso)
* `immagini/` — cartella dove caricare le foto dei distillati

## Come modificare i distillati

Per ogni distillato, all'interno del file `menu.html`, sostituisci:

1. **Immagine**: cambia

```html
   <div class="placeholder">Immagine</div>
   ```

   con

   ```html
   <img src="immagini/nome-bottiglia.jpg" alt="Nome Distillato">
   ```

2. **Titolo**: modifica il testo dentro `<h3>...</h3>`
3. **Origine**: modifica il testo dentro `<div class="origin">...</div>`
4. **Descrizione**: modifica il testo dentro `<p class="description">...</p>`
5. **Prezzo**: modifica il testo dentro `<div class="price">€ 0,00</div>`

   ## Aggiungere/togliere distillati

   Per **aggiungere** un distillato in più, copia un intero blocco `<article class="item">...</article>` e incollalo dove desideri.
Per **toglierne** uno, cancella un blocco `<article class="item">...</article>` completo.

