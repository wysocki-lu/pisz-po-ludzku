# Maniery Bielika 11B (materiał uzupełniający)

Wnioski z sondy empirycznej: 60 tekstów wygenerowanych modelem Bielik 11B v3 (SpeakLeash), jedynym dużym modelem trenowanym natywnie na polszczyźnie. Tematy branżowe (SEO, Google Ads, Meta Ads, e-commerce, strony www) x 6 formatów (blog, raport, social, e-mail, landing, poradnik) x 2 temperatury. Prompty bez żadnych instrukcji stylistycznych, więc korpus pokazuje naturalną manierę modelu.

Kluczowy wniosek: polski model ma własny slop, w dużej mierze inny niż kalki z angielskiego. Z 75 fraz zakazanych rodem z list anglojęzycznych trafiło tylko 7. Poniższe maniery to specyfika polskiego generowania.

## Asystenckie preambuły "Oto..." (25/60 tekstów)

Najczęstsza maniera: model zapowiada dostarczenie zamiast dostarczyć.

- "Oto propozycja artykułu:", "Oto komentarz specjalisty:", "Oto kilka powodów:", "Oto krótki poradnik:", "Oto dlaczego..."

Tekst zaczyna się od treści. Preambułę zawsze wytnij.

## Frazy potwierdzone empirycznie

| Fraza | Częstość w korpusie | Charakter |
|---|---|---|
| pod kątem | 11/60 | wytrych składniowy ("pod kątem SEO, pod kątem urządzeń...") |
| nie tylko..., ale | 8/60 | binarny kontrast |
| co przekłada się na | 7/60 | pseudo-biznesowy łącznik |
| dlaczego warto | 7/60 | klisza nagłówkowa |
| (co) świadczy o | 7/60 | slop raportowy ("świadczy o skutecznym dotarciu") |
| mam nadzieję, że | 6/60 | wata mailowa |
| upewnij się, że | 6/60 | kalka z "make sure" |
| to kluczowy / klucz do sukcesu | 6/60 | nadużycie "kluczowy" |
| znaczący wzrost | 4/60 | przymiotnik zamiast liczby |
| szczególnie cieszy | 4/60 | koloryzowanie raportowe |
| coraz więcej | 4/60 | pusta teza o trendzie |
| w tym artykule | 4/60 | meta-joiner |

Potwierdzone z list klasycznych: "Biorąc pod uwagę" (4x), "Warto podkreślić", "Podsumowując", "W dzisiejszych czasach" i wariant "W dzisiejszym cyfrowym świecie".

## Maniery strukturalne i typograficzne

- **Pogrubienia markdown: 489 wystąpień** w 60 tekstach. Model pogrubia etykiety, śródtytuły i "ważne" frazy nawet w mailach i postach.
- **Nagłówki Title Case**: 7/60 tekstów ("Dlaczego Audyt SEO To Pierwszy Krok...").
- **Rejestr "Ty" w mailu biznesowym**: model domyślnie pisze do klienta firmowego per "Ty" ("Twojego biznesu", "u Ciebie w porządku").
- **Emoji**: 38 sztuk w 13/60 tekstach, głównie social.
- **En-dash**: 15 wystąpień w 8/60 tekstach; klasycznego em-dasha prawie brak (0). Długi myślnik to maniera modeli anglojęzycznych, Bielik zdradza się czym innym.
- **Koloryzowanie raportowe**: "bardzo dobre rezultaty", "imponująca liczba", "solidny wynik", "mocny wynik" zamiast pozostawienia liczb samym sobie.

## Co Bielik robi dobrze (wzorce pozytywne)

- Bezbłędna fleksja, także w trudnych złożeniach ("na rynku meblarskim", "strategii content marketingowej"). Problem polskiego AI to maniera, nie gramatyka.
- Poprawne formy grzecznościowe, gdy już ich użyje: "Dzień dobry", "Szanowni Państwo", prawidłowa odmiana "Państwa + rzeczownik".
- Poprawna arytmetyka wskaźników i naturalne wplatanie liczb w zdania.
