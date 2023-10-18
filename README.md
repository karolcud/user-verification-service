# user-verification-service
This is a training exercise from set of "Karoż's Exercises for Martha" called - zad_k_1.js


Zadanie ma kilka etapów i podetapów. Należy je realizować etap po etapie z codereview i testami manualnymi (moimi) między etapami. Jeśli czas pozwoli to stworzę też dodatkowo testy automatyczne pod to zadanie (analogicznie jak na codewarsach).

Celem zadania jest stworzenie losowego generatora identyfikatorów użytkowników aplikacji zgodnie z podanymi wytycznymi oraz obsługa weryfikacji podanego identyfikatora polegająca na sprawdzeniu, czy dany identyfikator znajduje się w bazie danych (przyjmujemy, że naszą bazą danych będzie tablica obiektów).



Etap 1)

a) Stwórz funkcję generateId() : string, która będzie zwracała ciąg 10 losowych cyfr (np. 4932300217).

b) Zrefaktoruj powyższą funkcję tak, by generator zwracał nie tylko cyfry, ale też literki (np. 34ab011xp5).

c) Wprowadź zmianę w formacie zwracanego id. Od teraz ma to być string zwrócony w formie: 5znaków_10znaków (np. 45abc_345pik001x)



Etap 2)

a) obiekt użytkownika ma formę: {.name: string, id: string } (np. {name: ‚Martita’, id: ‚45abc_345pik001x’}).

b) stwórz globalną tablicę z 5 przykładowymi użytkownikami



Etap 3)

a) stwórz funkcję userVerification(user) : boolean, która jako parametr przyjmuje obiekt użytkownika, który chce zostać zweryfikowany (np. podczas logowania)

b) funkcja w pierwotnej wersji ma sprawdzić czy przekazany user znajduje się w bazie danych i czy jego id jest poprawne

c) następnie należy wprowadzić modyfikację polegającą na tym, że najpierw porównujemy pierwszą część tego id czyli pierwsze 5 znaków. Jeśli się „matchuje” to sprawdzamy kolejne 10 znaków, a jeśli nie to bez dalszego sprawdzania zwracamy false.
