---
title: Architektura
sidebarDepth: 2
---
@startuml
left to right direction

cloud Aplikacja {
    component "Effective combine" as App
}

package Host {
    component Serwer 
}
package BazaDanych {
    component Baza
}

actor Użytkownik
actor Admin
Użytkownik <-- Admin

Użytkownik --> App
Admin --> Baza

App ---> Serwer
Serwer ---> App
Serwer <---> Baza
@enduml
