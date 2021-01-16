---
sidebar: auto
---
# Projekt zaliczeniowy na studia - PIO
# Effective combine

## Czym jest projekt ?

### Ogólnie
Effective combine będzie to aplikacja, która ma pomóc w codziennej pracy, jego podstawą będzie coś na wzór PM (project management). Jak w każdym project managerze możemy dodawać projekty, którymi będziemy zarządzać, tutaj warto dodać, że tylko admini lub użytkownicy z konkretnymi uprawnieniami będą mogli taki stworzyć.
Aby móc sprawniej i efektywniej pracować przy pomocy Effective combine zalecam podpięcie aplikacji kontroli wersji np. bitbucket czy github, jakie są tego plusy ?
Po stworzeniu nowego projektu, na dodanym koncie, ujrzymy nowo utworzone dedykowane repozytorium o nazwie tej samej co projekt lub o nazwie wpisanej w pole w wyświetlonym formularzu dodawania projektu.
::: tip Przykład
Admin podpiął jakiś system kontroli wersji i chce dodać nowy projekt. Klika na przycisk Nowy Projekt ukazuje mu się formularz i uzupełnia pole "Nazwa projektu" -> EffectiveCombineProject, a w polu "Nazwa repozytorium" (domyślnie będzie to ta sama nazwa co wpisana w "Nazwa projektu") wpisuje EffectiveCombineRepository. Efektem tego będzie utworzenie projektu o nazwie EffectiveCombineProjekt i repozytorium EffectiveCombineRepository.
:::

### Projekty
W każdym projekcie można będzie stworzyć kolumny na taski do zrobienia, do przetestowania, testowane czy zrobione. Każdą z kolumn będzie można podpiąć pod zewnętrzne oprogramowanie, np. w momencie dodania taska do kolumny do zrobienia, na repozytorium podpiętym pod aplikacje, stworzy nam się branch o nazwie taska lub jeżeli wypełnimy odpowiednie pole przy tworzeniu otrzyma on inną nazwe dodatkowo task dostanie prefix zależny od rodzaju taska np. jeżeli zadanie ma coś naprawić to będzie to "fix".

### Taski
Każdy projekt ma taski, a każdy task powinien być dokładnie opisany, aby każdy kto dopiero dołącza do projektu i dostał zadanie, mógł się odnaleźć.
W tym celu przy tworzeniu taska dodaliśmy rozbudowany formularz z takimi podstawowymi polami jak nazwa i opis taska, deadline czy rodzaj, ale są też pola, które np. przyjmują wartość nicku (najczęście będzie to imię i nazwisko) osoby zgłaszającej zadanie, dzięki któremu w momencie gdy coś jest niejasne, możemy sprawdzić kto dodał zadanie i zwrócić się do niego o więcej informacji.

### Aplikacje dodane na starcie
Najważniejsze aplikacje które zostaną zintegorwane z EffectiveCombine na starcie:
- aplikacje do kontroli wersji (bitbucket / github) do automatycznego tworzenia branchy z odpowiedmin prefixem zależnym od typu taska, zamykanie ich gdy task zostanie przeniesiony do kolumny done oraz.
- aplikacje "przypominające" (google calendar / slack) do wysyłania powiadomień o deadlinie taska.
- aplikacje mierzące czas w pracy np. clockit


## Odpowiedzi na podstawowe pytania

### Dlaczego coś takiego powstaje?
Aplikacje powstaje po to aby dać każdemu więcej swobody i więcej opcji customizacji, chcemy, aby użytkownicy, całe zespoły bez problemu mogli zintegrować swoje ulubione aplikacje, które pomagają im w codziennej pracy.

### Co trzeba zrobić?
Trzeba stworzyć ankietę i rozesłać ją po różnych grupach w celu zbadania jakich aplikacji najczęsciej ludzie korzystają w pracy. Następnie sprawdzić ich API i dostępne możliwości, zalety i wady i wszelkie ryzyka.

### Na kiedy trzeba zrobić?
Aplikacje planujemy wypuścić w przyszłym roku na jesień.

### Kto jest odpowiedzialny za poszczególne funkcje produktu?
Za całość będzie odpowiedzialny Bartosz Burdalski.

### Gdzie znajdują się ludzie związani z projektem?
Aktualnie we Wrocławiu, jeżeli ktoś dojdzie do projektu to jego miejsce pracy nie jest istotne, ważny jest dobry dostęp do internetu i terminowość.

### Jak powstanie produkt i jak będą przebiegać prace?
Na potrzeby pracy nad aplikacją zostanie utworzone repozytorium. Na branchu master będą znajdowały się wszystkie funkcjonalności, które przeszły pomyślnie wszystkie testy i nie potrzebują już żadnych poprawek. Branch dev będzie "środowiskiem" na którym będą sprawdzane nowe funkcjonalności i czy wcześniej zaakceptowane zmiany nie zostały zepsute przez aktualnie sprawdzane.
Prace będą przebiegać by najszybciej jak to możliwe dostaczyć produkt MVP (Minimum Viable Product).
Na samym początku zostanie dodany panel logowania i tworzeniem projektów. Następnym krokiem będzie dodawanie tasków do projektów.

### Ile zasobów trzeba będzie poświecić?
