# pisz-po-ludzku

Skill dla Claude (Claude Code / claude.ai) pilnujący poprawnej, naturalnej polszczyzny w tekstach generowanych: bez manier AI, z właściwym rejestrem grzecznościowym, odmianą i konkretami zamiast waty.

## Dlaczego osobny skill dla polskiego

Anglojęzyczne poradniki anty-slop (np. stop-slop) łapią kalki z angielskiego, ale nie znają problemów, które istnieją tylko po polsku:

- **rejestr grzecznościowy**: modele piszą do klienta biznesowego per "Ty" zamiast Pan/Pani/Państwo
- **fleksja**: "w kwietniu" kontra "w kwiecień", odmiana "Państwa"
- **Title Case w nagłówkach**: kalka, której polska typografia nie zna
- **polski slop natywny**: "Oto propozycja...", "co przekłada się na", "świadczy o", inny niż slop tłumaczony

Ponadto anglojęzyczne listy każą wycinać "uprzejmości", a polska korespondencja biznesowa bez "Dzień dobry" i "Z poważaniem" jest po prostu niegrzeczna. Ten skill wie, co jest konwencją, a co watą.

## Podstawa empiryczna

Reguły pochodzą z dwóch źródeł:

1. **Praktyka produkcyjna**: guardrails wypracowane w polskiej agencji marketingowej ([emedia](https://emedia.pl)) na codziennej produkcji tekstów klient-facing (raporty, blogi, e-maile, posty, oferty).
2. **Sonda na Bielik 11B**: korpus 60 tekstów branżowych wygenerowanych jedynym dużym natywnie polskim LLM (SpeakLeash/Bielik 11B v3), bez instrukcji stylistycznych. Analiza częstości fraz, struktur i typografii. Wnioski w [references/maniery-bielika.md](references/maniery-bielika.md).

## Instalacja (Claude Code)

```bash
git clone https://github.com/wysocki-lu/pisz-po-ludzku ~/.claude/skills/pisz-po-ludzku
```

Skill aktywuje się przy pisaniu i redagowaniu polskich tekstów. Można też wywołać ręcznie: `/pisz-po-ludzku`.

## Testy

Skill przeszedł 14 scenariuszy testowych pisanych z perspektywy freelancerów i pracowników agencji (post FB, komentarz do raportu, mail ofertowy, opis produktu, odpowiedź na opinię 1 gwiazdka, bio LinkedIn i inne), każdy z pułapką prowokującą typową manierę AI. Wynik automatu kontrolnego: 0 twardych naruszeń w 14 tekstach ze skillem, przy 22 naruszeniach w 4 tekstach kontrolnych wygenerowanych surowym modelem. W zestawie jest też scenariusz odwrotny, który pilnuje, żeby skill nie zamieniał luźnego głosu marki w pismo urzędowe.

## Automat kontrolny

```bash
node skrypty/sprawdz.mjs tekst.txt
```

Zero zależności. Zgłasza twarde błędy (znaki AI, zakazane frazy, frazesy marketingowe, preambuły, Title Case, zła odmiana miesięcy) i miękkie uwagi do ręcznej oceny.

## Struktura

- `SKILL.md`: reguły główne + kontrolka końcowa
- `skrypty/sprawdz.mjs`: automat kontrolny
- `references/frazy.md`: zakazane frazy + co NIE jest slopem
- `references/struktury.md`: 14 zakazanych wzorców kompozycyjnych
- `references/gramatyka.md`: miejscownik, odmiana "Państwa", rejestr Pan/Ty
- `references/typografia.md`: znaki zakazane, hierarchia nagłówków
- `references/liczby-i-fakty.md`: teksty analityczne (fakt + liczba)
- `references/maniery-bielika.md`: wnioski z sondy empirycznej
- `references/przyklady.md`: before/after

## Podziękowania

Część reguł strukturalnych to port i rozszerzenie [stop-slop](https://github.com/hardikpandya/stop-slop) (Hardik Pandya, MIT) na realia polszczyzny.

## Licencja

MIT, (c) 2026 Grzegorz Wysocki / emedia
