---
title: Wymaganie funkcjonalne
sidebarDepth: 2
---

#### Wymaganie funkcjonalne
@startuml
  class DodanieProjektu {
    Administrator musi mieć możliwość \ndodania nowego projektu
  }
  class DodanieTaska {
      Użytkownik musi mieć \nmożliwość dodania nowego taska
  }
  class DodawanieUżytkowników  {
    Administrator ma dostęp \ndo dodawania nowych użytkowników
  }
  class PodłączenieUsługZewnętrznych {
      Administrator może podłączyć różne usługi zewnętrzne
  }

@enduml