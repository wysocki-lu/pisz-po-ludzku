---
name: pisz-po-ludzku
description: Poprawna, naturalna polszczyzna bez manier AI. Używaj przy pisaniu lub redagowaniu KAŻDEGO polskiego tekstu (artykuł, e-mail, post social, raport, oferta, UI copy, komunikat): usuwa AI-tells frazowe, strukturalne i typograficzne, pilnuje rejestru grzecznościowego, odmiany i konkretów zamiast waty.
metadata:
  author: Grzegorz Wysocki / emedia (emedia.pl)
  language: pl
---

# Pisz po ludzku

Tekst po polsku ma brzmieć jak napisany przez konkretnego człowieka, nie przez model. Ten skill zbiera reguły wypracowane w codziennej produkcji treści polskiej agencji marketingowej (blogi, raporty dla klientów, e-maile, posty, oferty) oraz zweryfikowane empirycznie na korpusie tekstów polskiego modelu Bielik 11B.

Kolejność ważności: najpierw reguły główne (sekcje 1-5), potem maniery Bielika (materiał uzupełniający).

## 1. Konkret zamiast waty

- Fakt + liczba. "Wzrost o 28%" zamiast "znaczący wzrost". "CPA 18 zł" zamiast "bardzo konkurencyjny koszt".
- Każda rekomendacja musi mieć liczbę jako uzasadnienie. Bez liczby nie rekomendujesz.
- Zero koloryzowania: "imponujący", "solidny", "świetny" nie zastępują danych.
- Opisujesz to, co było. Bez spekulacji ("wynik byłby lepszy gdyby"), bez prognoz bez podstawy ("maj powinien przynieść więcej"), bez psychologizowania odbiorców ("klienci wybierają, bo...").
- Szczegóły i przykłady: [references/liczby-i-fakty.md](references/liczby-i-fakty.md)

## 2. Zakazane frazy

Openery ("Warto zauważyć, że..."), protezy emfazy ("Bez wątpienia"), puste przysłówki ("rzeczywiście", "po prostu"), fillery czasowe ("W dzisiejszych czasach", "W dobie..."), meta-komentarze ("Jak już wspomnieliśmy"), sztampowe przejścia ("Podsumowując", "Co więcej", "Ponadto").

Pełna lista wg kategorii + co NIE jest slopem (grzeczność biznesowa, terminologia branżowa, czasowniki CTA): [references/frazy.md](references/frazy.md)

## 3. Zakazane struktury

14 wzorców zdradzających AI: binarne kontrasty ("Nie X, lecz Y"), negatywne listowanie, dramatyczna fragmentacja, retoryczne setupy, fałszywa sprawczość ("raport pokazuje"), strona bierna, Wh-startery, staccato trójki, magiczne kwantyfikatory ("zawsze", "każdy"), vague declaratives ("implikacje są znaczące"), meta-joinery, narrator z dystansu.

Pełna lista z korektami: [references/struktury.md](references/struktury.md)

## 4. Gramatyka i rejestr

- Miejscownik po "w": "w kwietniu", nigdy "w kwiecień". Pełna tabela miesięcy w referencji.
- Po "przy", "podczas", "w trakcie" i "w czasie" musi stać nazwa czynności, czyli rzeczownik odsłowny: "przy budowie broni", nie "przy broni". Brakuje wtedy członu nadrzędnego wyrażenia przyimkowego, a sama nazwa rzeczy zostaje przydawką bez nadrzędnika.
- Poprawna odmiana "Państwa" (nie istnieją formy "Państwymi", "Państwego").
- Rejestr: do klienta biznesowego per "Pan / Pani / Państwo". Forma "Ty" tylko, gdy tak stanowi głos marki.
- Perspektywa: "my" (nadawca, np. agencja) + "Państwo" (odbiorca). Nie mieszaj.
- Szczegóły: [references/gramatyka.md](references/gramatyka.md)

## 5. Typografia

- Zakaz em-dash (—) i en-dash (–). Zamiast: kropka, przecinek, dwukropek, zwykły dywiz ze spacjami.
- Cudzysłowy polskie „…”. Zakaz prostych "…" i angielskich “…” w polskim tekście (poza kodem i polami, które wymagają prostego znaku).
- Zakaz wielokropka Unicode (…), NBSP, znaków zero-width.
- Przecinek dziesiętny („3,5%”), bez przecinka po „Dodatkowo”, „Jednakże” na początku zdania.
- Zakaz **pogrubień markdown** w plain-texcie (mail, post, formularz: gwiazdki wyświetlą się dosłownie).
- Zakaz Title Case w polskich nagłówkach ("Dlaczego Audyt SEO To Pierwszy Krok" to kalka z angielskiego).
- Hierarchia nagłówków: H1 > H2 > H3 > body, minimum 3-4 px różnicy + zmiana wagi. Zakaz eyebrow microcaps (małych UPPERCASE labelek nad nagłówkami).
- Szczegóły ze skalą pikselową: [references/typografia.md](references/typografia.md)

## 6. Kalki i styl urzędniczy

„dokonać zakupu” zamiast „kupić”, „stanowi” i „odgrywa kluczową rolę” zamiast „jest”, „w oparciu o”, „dedykowany dla”, „zaadresować”, imiesłowowe doczepki („…, podkreślając wyjątkowy charakter”), nadmiar „Twój”, posiekane zdania. Osobne przejście po tekście: [references/kalki-i-urzedniczy.md](references/kalki-i-urzedniczy.md)

## 7. Zasady ochronne

Redakcja nie może zmienić treści. Po poprawkach porównaj tekst z oryginałem:

- Liczby, daty, kwoty, nazwy własne i numery przepisów bez zmian.
- Modalność bez zmian: „może”, „powinien” i „musi” to trzy różne treści. Kwantyfikator też: „część” to nie „większość”.
- Warunki i wyjątki zostają („chyba że”, „z wyjątkiem”). Najczęściej znikają przy skracaniu.
- Łącząc zdania, nie dopisuj „bo” ani „więc”, jeśli związku przyczynowego nie było.
- Nie poprawiaj cytatów ani fraz, o których tekst mówi (np. przykładów złych zwrotów w poradniku).
- Liczy się skupisko sygnałów. Pojedyncze „ponadto” w długim tekście to nie powód do przepisywania całości.
- Gdy poprawka zmienia sens, zostaw brzmienie oryginału.

## Kontrolka końcowa

Przed oddaniem KAŻDEGO tekstu sprawdź:

1. Jest gdzieś "—" albo "–"? Zamień na kropkę, przecinek lub zwykły dywiz.
2. Pierwsze zdanie to filler ("W dzisiejszych czasach...") albo preambuła ("Oto propozycja...")? Wytnij, zacznij od konkretu.
3. Każdy przymiotnik oceniający ("znaczący", "imponujący") ma obok liczbę? Jak nie ma liczby, usuń przymiotnik albo zdobądź liczbę.
4. Zdania zaczynają się 3 razy z rzędu tak samo albo mają tę samą długość? Zróżnicuj rytm.
5. Do klienta biznesowego piszesz per "Ty"? Zmień na Pan/Pani/Państwo.
6. Miesiące po "w" w miejscowniku? ("w kwietniu", nie "w kwiecień")
7. Nagłówek Title Case albo eyebrow microcaps nad nagłówkiem? Popraw na sentence case, usuń eyebrow.
8. Pogrubienia markdown w tekście, który nie renderuje markdown? Usuń gwiazdki.
9. Ta sama liczba powtórzona w dwóch miejscach? Za drugim razem zaimek albo nic.
10. Zdanie brzmi jak typowy output AI? Przepisz je inaczej.
11. „stanowi”, „odgrywa rolę”, „dokonać”, „w oparciu o”, „dedykowany”? Zamień na zwykły czasownik i polskie słowo.
12. Liczba bez źródła? Usuń albo napisz skromniej. Nie zmyślaj.
13. Po redakcji: liczby, „może/musi”, warunki i wyjątki takie same jak w oryginale?

## Automat kontrolny

Po napisaniu tekstu możesz go przepuścić przez dołączony skrypt (zero zależności, wymaga node):

```bash
node skrypty/sprawdz.mjs tekst.txt
```

Skrypt zgłasza BŁĄD (znaki zakazane, frazy, frazesy marketingowe, preambuły "Oto...", Title Case, zła odmiana miesięcy) i UWAGA (frazy do ręcznej oceny, mieszany rejestr, nadmiar emoji). Automat nie zastępuje kontrolki: rytm zdań, rejestr i konkrety oceniasz sam.

## Materiał uzupełniający

- Maniery Bielika 11B (empirycznie, korpus 60 tekstów): [references/maniery-bielika.md](references/maniery-bielika.md)
- Przykłady before/after: [references/przyklady.md](references/przyklady.md)
