# Typografia

Znaki i układ, po których czytelnik natychmiast poznaje tekst generowany albo gubi się w hierarchii.

## Znaki zakazane w tekście user-facing

| Znak | Kod | Zamiast tego |
|---|---|---|
| — (em-dash) | U+2014 | kropka, przecinek, dwukropek, zwykły dywiz "-" ze spacjami |
| – (en-dash) | U+2013 | jak wyżej |
| " " (proste cudzysłowy w polskim tekście) | U+0022 | polskie cudzysłowy „ ” |
| “ ” (angielskie cudzysłowy) | U+201C/201D | polskie cudzysłowy „ ” |
| ' ' (apostrofy typograficzne) | U+2018/2019 | prosty apostrof ' |
| … (wielokropek Unicode) | U+2026 | trzy kropki ... |
| twarda spacja | U+00A0, U+202F | zwykła spacja |
| znaki zero-width | U+200B/200C/200D/FEFF | usuń całkowicie |

Polskie cudzysłowy „” (otwierający dolny, zamykający górny) to norma polszczyzny według PWN i taki zapis stosują wszystkie polskie zestawy reguł anty-AI. Śladem modelu są proste cudzysłowy "…" i angielskie “…” w polskim tekście (zmiana 26.10.2026, wcześniej skill zakazywał „”). Wyjątek: kod, JSON i pola, w których system wymaga prostego znaku.

Em-dash to najbardziej rozpoznawalny AI-tell w polskich tekstach. Polszczyzna codzienna (mail, post, raport w plain-texcie) używa zwykłego dywizu ze spacjami albo interpunkcji.

## Drobna typografia, po której widać tłumaczenie

- Przecinek dziesiętny: „3,5%”, „12,40 zł”, nie „3.5%”.
- Kropka po cudzysłowie, gdy cytat jest częścią zdania: Napisał, że „wróci jutro”. Kropka przed cudzysłowem tylko wtedy, gdy cytujesz całe zdanie od wielkiej litery.
- Mała litera po dwukropku w środku zdania („Wniosek: kampania działa”), chyba że po dwukropku zaczyna się cytat albo nazwa własna.
- Konsekwentna interpunkcja w listach: albo wszystkie punkty bez kropki, albo wszystkie pełnymi zdaniami z kropką.
- Bez przecinka po okoliczniku na początku zdania („Dodatkowo warto…”, nie „Dodatkowo, warto…”), patrz [kalki-i-urzedniczy.md](kalki-i-urzedniczy.md).

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
