---
sidebar: auto
---

#  Wypracowane standardy

## Praca ze stylami

W projekcie stosujemy zamiennie dwie jednostki:

- rem
- px

### Kiedy stosujemy jednostkę rem

Stosujemy ją gdy chcemy ustalić wielkości dla:

- odstępów pomiędzy sekcjami
- dla marginów oraz paddingów oprócz klass .container, .row, .col
- wielkości czcionek, ich odstępów oraz wysokości


### Kiedy stosujemy jednostkę px

Stosujemy ją gdy chcemy ustalić wielkości dla:

- wysokości, szerokości elementów, np. minimalną wysokość sekcji
- wysokości, szerokości zdjęć
- atrybutów stosowanych w box-shadow, grid, top, bottom, left, right


### Inne przypadki oraz wyjątki

W pozostałych przypadkach, które nie są zdeklerowane powyżej stosujemy jednostkę rem.

Plik normalize.scss jest wyłączony z powyższych zasad ponieważ definiuje jednolite style
dla wszystkich przeglądarek.


### Zapis kolorów

Kolory zapisujemy przy użyciu funkcji rgba($color, $opacity). Podając jako pierwszy argument
kolor w zapisie HEX oraz drugi argument definujący przezroczystość.

Wszystkie kolory, dla standardu, zapisujemy z małych liter tzn. #ffffff, #ef3ab3. Błędny zapis to np #A1D2A5.