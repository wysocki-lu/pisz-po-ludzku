# Typografia

Znaki i układ, po których czytelnik natychmiast poznaje tekst generowany albo gubi się w hierarchii.

## Znaki zakazane w tekście user-facing

| Znak | Kod | Zamiast tego |
|---|---|---|
| — (em-dash) | U+2014 | kropka, przecinek, dwukropek, zwykły dywiz "-" ze spacjami |
| – (en-dash) | U+2013 | jak wyżej |
| „ " " (smart quotes) | U+201E/201C/201D | proste cudzysłowy " " |
| ' ' (apostrofy typograficzne) | U+2018/2019 | prosty apostrof ' |
| … (wielokropek Unicode) | U+2026 | trzy kropki ... |
| twarda spacja | U+00A0, U+202F | zwykła spacja |
| znaki zero-width | U+200B/200C/200D/FEFF | usuń całkowicie |

Em-dash to najbardziej rozpoznawalny AI-tell w polskich tekstach. Polszczyzna codzienna (mail, post, raport w plain-texcie) używa zwykłego dywizu ze spacjami albo interpunkcji.

## Markdown w plain-texcie

Zakaz `**pogrubień**` i `# nagłówków` markdown w tekstach, które nie renderują markdown (e-mail, post social, pole formularza, SMS). Gwiazdki i krzyżyki wyświetlą się dosłownie. Modele nadużywają pogrubień nagminnie: w testowym korpusie 60 tekstów Bielika padło 489 pogrubień.

## Hierarchia nagłówków (UI, dokumenty, landing)

Ranga komunikowana wielkością i wagą, od największego do najmniejszego:

| Poziom | Rozmiar (desktop) | Waga |
|---|---|---|
| H1 | 24-28 px | Semibold |
| H2 | 16-18 px | Semibold (NIE uppercase) |
| H3 | 13-14 px | Medium |
| body | 13-14 px | Regular |
| hint | 11-12 px | Regular, obniżona opacity |

Zasady:

- H1 > H2 > H3 > body, między poziomami minimum 3-4 px różnicy plus zmiana wagi lub opacity.
- Zakaz odwróconej hierarchii: tytuł sekcji 12 px uppercase nad treścią 14 px czyta się jak odwrócona ważność.
- Zakaz eyebrow microcaps: małych UPPERCASE letter-spaced labelek ("PERSONALIZACJA", "SEKCJA 2") nad nagłówkiem. Jeśli sekcja potrzebuje numeru, wbuduj go w nagłówek ("Krok 3: ..."), nie w osobną mikrolabelkę.
- Zakaz duplikowania rangi: nie dawaj nad H2 dodatkowego podpisu o tej samej funkcji.

## Nagłówki tekstowe

- Sentence case, nie Title Case (szczegóły w [gramatyka.md](gramatyka.md)).
- Bez emoji w nagłówkach dokumentów i raportów. W postach social emoji tylko, jeśli głos marki tego wymaga, i nigdy jako punktory listy.
