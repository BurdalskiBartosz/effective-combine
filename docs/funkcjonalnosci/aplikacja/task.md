---
title: Task
sidebarDepth: 2
---

# Task
## Diagramy przypadków użycia

### Task
@startuml
actor Użytkownik

Użytkownik -- (Dodanie taska)
(Dodanie taska) <-- (Wyświetlenie formularza) : exclude
(Wyświetlenie formularza) --> (Wybór rodzaju taska) : include
Użytkownik -- (Usunięcie taska)
(Usunięcie taska) --> (Wyświetlenie pytania \nczy usunąć branch) : include
Użytkownik -- (Edycja taska)
@enduml

### Dodanie taska
#### Diagram aktywności
@startuml
  (*)--> "Wyświetlenie formularza dodania taska"
     --> "Projekt posiada repozytorium"
if "Posiada" then
  --> [Tak] Stworzenia brancha na repozytorium
    if Wypełniono pole "Nazwa brancha" then
      --> [Tak] "Ustawienie nazwy na podaną przez użytkownika"
      --> Rodzaj taska
    else
    --> [Nie] "Ustawienie nazwy na nazwe taska"
    --> Rodzaj taska
        if Ustawiono then
        --> [Tak] Dodanie prefixu na początku nazwy brancha
        --> (*)
      else
        --> [Nie] Utworzenie brancha bez dodawania prefixu
        --> (*)
      endif
    endif
else
  --> [Nie] Dodanie taska bez stworzenia brancha
  --> (*)
endif

@enduml
#### Diagram sekwencji
@startuml
autonumber
actor Użytkownik
participant Przeglądarka
participant Serwer

Przeglądarka -> Użytkownik: Wyświetl formularz z dodaniem taska
loop
  Użytkownik -> Przeglądarka : Wypełnienie formularza
  alt nie wypełniono wymaganych pól
      Przeglądarka -> Użytkownik : Wyświetlenie informacji o brakujących polach
  else wypełniono wszystkie wymagane pola
      Przeglądarka -> Serwer  : Get: /project/:id
  end
end loop
  alt projekt nie posiada repozytorium
    Serwer -> Przeglądarka : { alias: NOT_FOUND }
    Przeglądarka -> Użytkownik : Informacja o dodaniu taska bez tworzenia brancha
  else projekt posiada repozytorium
    Serwer -> Serwer : Podano nazwe brancha
  end
  alt nie podano nazwy brancha
    Serwer -> Serwer : Podano rodzaj taska
    alt nie podano rodzaju taska
      Serwer -> Przeglądarka : { alias: NO_NAMED_BRANCH_NO_PREFIX }
      Przeglądarka -> Użytkownik : Informacja o dodaniu taska z branchem o tej samej nazwie bez prefixu
    else podano rodzaju taska
      Serwer -> Przeglądarka : { alias: NO_NAMED_BRANCH_WITH_PREFIX }
      Przeglądarka -> Użytkownik : Informacja o dodaniu taska z branchem o tej samej nazwie z prefixem
    end
  else podano nazwę brancha
    alt nie podano rodzaju taska
      Serwer -> Przeglądarka : { alias: NAMED_BRANCH_NO_PREFIX }
      Przeglądarka -> Użytkownik : Informacja o dodaniu taska z branchem o podanej nazwie bez prefixu
    else podano rodzaju taska
      Serwer -> Przeglądarka : { alias: NAMED_BRANCH_WITH_PREFIX }
      Przeglądarka -> Użytkownik : Informacja o dodaniu taska z branchem o podanej nazwie z prefixem
    end
  end


@enduml
### Usuniecie taska
#### Diagram aktywności
@startuml
(*) --> "Sprawdzenie czy task posiada branch"
if "Posiada" then
    --> [Tak] Wyświetlenie pytania o usunięcie brancha
    if "Usunąć" then
      --> [Tak] Usuń task i branch
      --> (*)
    else
      --> [Nie] Usuń task
      --> (*)
    endif
else
  --> [Nie] Usunięcie taska
  --> (*)
endif

@enduml
#### Diagram sekwencji
@startuml
autonumber
actor Użytkownik
participant Przeglądarka
participant Serwer

Użytkownik -> Przeglądarka : Wybranie taska
Przeglądarka -> Serwer : Get: /project/:id/branch
  alt task nie posiada brancha
    Serwer -> Przeglądarka : { alias: NO_BRANCH }
    Przeglądarka -> Użytkownik : Wyświetlenie informacji o usunięciu taska
  else task posiada branch
    Przeglądarka -> Użytkownik : Wyświetlenie pytania o usunięcie brancha
    alt nie usuwać brancha
      Serwer -> Przeglądarka : { alias: KEEP_BRANCH }
      Przeglądarka -> Użytkownik : Wyświetlenie informacji o usunięciu taska
    else usunąć branch
      Serwer -> Przeglądarka : { alias: DELETE_BRANCH }
      Przeglądarka -> Użytkownik : Wyświetlenie informacji o usunięciu taska razem z branchem
    end
  end
@enduml

## Diagram klas
### Panel administratora
@startuml
class SignInPage <extends Page> {
    
}
class SignInForm extends Form {
    emailInput: TextInput
    passwordInput: PasswordInput
}
SignInForm -- SignInPage 


class User {
    email: String
    password: String
}

class AuthentificationMiddleware {
    
}
@enduml