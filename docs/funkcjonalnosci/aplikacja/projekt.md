---
title: Projekt
sidebarDepth: 2
---

# Projekt
## Diagramy przypadków użycia

### Projekt
@startuml
actor Admin

Admin -- (Dodanie projektu)
(Dodanie projektu) --> (Wyświetlenie formularza z tworzeniem repozytorium) : include
Admin -- (Usunięcie projektu)
(Usunięcie projektu) <-- (Wyświetlenie pytania \nczy usunąć repozytorium) : exclude
Admin -- (Edycja projektu)
@enduml

### Dodanie projektu
#### Diagram aktywności
@startuml
  (*)--> "Wyświetlenie formularza dodania projektu"
if "Stwrzoyć repozytorium ?" then
  --> [Tak] Stworzenia repozytorium
    if Wypełniono pole "Nazwa repozytorium" then
      --> [Tak] "Ustawienie nazwy na podaną przez użytkownika"
      --> (*)
    else
    --> [Nie] "Ustawienie nazwy na nazwe projektu"
    --> (*)
    endif
else
  --> [Nie] Stworzenie projektu bez repozytorium
  --> (*)
endif

@enduml