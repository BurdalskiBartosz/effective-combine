---
title: Użytkownik
sidebarDepth: 2
---

# Użytkownik
## Diagramy przypadków użycia

### Logowanie
@startuml
actor Gość

Gość -- (Logowanie)
(Logowanie) --> (Sprawdzenie blokady na ip) : include
(Sprawdzenie blokady na ip) <-- (Wyświetlenie informacji o blokadzie IP) : extend
Gość -- (Przypomnienie hasła)
@enduml

### Zarządzanie użytkownikami

@startuml
actor Administrator

left to right direction

Administrator -- (Dodanie użytownika)
(Dodanie użytownika) --> (Wybór grup użytkownika) : include
Administrator -- (Usunięcie użytownika)
Administrator -- (Edycja użytownika)
(Edycja użytownika) --> (Zmiana grupy użytkownika) : include
Administrator -- (Wyświetlenia blokad IP)
(Wyświetlenia blokad IP) <-- (Odblokowanie adresu IP) : extend
Administrator -- (Wyświetlenie whitelist'y)
Administrator -- (Usunięcie adresu IP z whitelist'y)
Administrator -- (Dodanie adresów IP do whitelist'y)

@enduml

### Zarządzanie grupami użytkowników

@startuml
actor Administrator

Administrator -- (Dodanie grupy użytkowników)
(Dodanie grupy użytkowników) --> (Wybór uprawnień dla grupy) : include
Administrator -- (Usunięcie grupy użytkowników)
Administrator -- (Edycja grupy użytkowników)
@enduml

## Przypadki użycia 
### Logowanie
#### Diagram aktywności
@startuml
(*) --> "Sprawdzenie blokady na adres IP"
if "Adres zablokowany" then
    --> [Tak] "Wyświetlenie informacji o blokadzie IP"
    --> (*)
else
    --> [Nie] "Wyświetlenie formularza logowania"
endif
--> "Wpisanie adresu email\noraz hasła"
--> "Sprawdzenie poprawności danych"
if "Dane poprawne" then
    --> [Tak] "Przekierowanie na dashboard"
    --> (*)
else
    --> [Nie] "Zapisanie informacji o nieudanym logowaniu"
endif
--> "Sprawdzenie czy niepoprawne\nlogowanie nie wystąpiło\nzbyt wiele razy"
if "Przekroczono liczbę niepoprawnych prób zalogowania" then
    --> [Tak] "Dodanie informacji\no blokadzie IP do bazy"
    --> "Wyświetlenie informacji o blokadzie IP"
else 
    --> [Nie] "Wyświetlenie informacji o błędzie"
endif
--> (*)
@enduml


### Przypomnienie hasła
#### Diagram aktywności
@startuml
(*) --> "Sprawdzenie blokady na adres IP"
if "Adres zablokowany" then
    --> [Tak] "Wyświetlenie informacji o blokadzie IP"
    --> (*)
else
    --> [Nie] "Wyświetlenie formularza z \nprzypomnieniem hasła"
endif
--> "Wpisanie adresu email"
--> "Sprawdzenie czy adres email \nistenieje w bazie"
if "Istnieje" then
    --> [Tak] "Wysłanie emaila z adresem url do zmiany hasła"
    --> "Wyświetlenie informacji o wysłaniu \nna email linku z resetem hasła"
    --> "Przekierowanie na strone logowania"
    --> "Wejście na adres url z otrzymanego emaila"
    --> "Sprawdzenie czy link jest aktywny"
    if "Link jest aktywny" then
      --> [Tak] "Link jest prawidłowy"
      if "Link jest prawidłowy" then
        --> [Tak] "Wyświetlenie formularza ze zmianą hasła"
        --> "Wpisanie nowego hasła"
        --> "Wyświetlenie informacji o \npoprawnie zmienionym haśle"
        --> "Przejście na widok logowania"
        --> (*)
      else
        --> [Nie] "Wyświetlenie błędu o nieaktywnym linku"
      endif
    else
        --> [Nie] "Wyświetlenie błędu o nieaktywnym linku"
        --> "Wyświetlenie formularza z \nprzypomnieniem hasła"
    endif
else
    --> [Nie] "Wyświetlenie informacji o błędzie"
    --> "Wpisanie adresu email"
endif
@enduml
#### Diagram sekwencji
@startuml
autonumber
actor Użytkownik
participant Przeglądarka
participant Serwer

Przeglądarka -> Użytkownik: Wyświetl formularz z przypomnieniem hasła
loop
Użytkownik -> Przeglądarka : Wpisanie adresu email
Przeglądarka -> Serwer : POST: /remind-password-token
alt taki adres email nieistenieje
    Serwer -> Przeglądarka : 400: { alias: INCORRECT_DATA }
    Przeglądarka -> Użytkownik : Wyświetlenie informacji o błędzie
else adres email znajduje się w bazie
    Serwer -> Przeglądarka : 200
    Serwer -> Użytkownik : Wysłanie maila z linkiem do zmiany hasła
    Przeglądarka -> Użytkownik : Informacja o wysłaniu maila z linkiem do zmiany hasła
    Przeglądarka -> Użytkownik : Przekierowanie na widok logowania

end
end loop
    Użytkownik -> Przeglądarka : Wejście na adres url z otrzymanego maila
    Przeglądarka -> Serwer : GET /remind-password-token/:token
alt Link jest nieaktywny
    Serwer -> Przeglądarka : 404: { alias: NOT_FOUND }
    Przeglądarka -> Użytkownik : Wyświetlenie informacji o błędzie
else Link jest aktywny
    Serwer -> Przeglądarka : 200
end
  Użytkownik -> Przeglądarka : Wypełnienie formularza ze zmianą hasła
  Przeglądarka -> Serwer : POST: /remind-password-token/:token/_change-password
alt Wystąpił błąd
    Serwer -> Przeglądarka : 400: { alias: CANT_CHANGE_PASSWORD }
    Przeglądarka -> Użytkownik : Wyświetlenie informacji o błędzie
else Prawidłowo zmieniono hasło
    Serwer -> Przeglądarka : 200
    Przeglądarka -> Użytkownik : Wyświetlenie informacji o prawidłowej zmianie hasła
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