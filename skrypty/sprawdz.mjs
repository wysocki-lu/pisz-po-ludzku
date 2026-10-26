#!/usr/bin/env node
// Kontrola tekstu wg reguł skilla pisz-po-ludzku. Zero zależności.
//
// Użycie:
//   node skrypty/sprawdz.mjs plik.txt [plik2.txt ...]
//   cat tekst.txt | node skrypty/sprawdz.mjs
//
// Wynik: BŁĄD (twarde naruszenie reguł) i UWAGA (do ręcznej oceny).
// Kod wyjścia 1, gdy jest przynajmniej jeden BŁĄD.

import fs from 'node:fs';

const FRAZY_TWARDE = [
  'warto zauważyć', 'warto pamiętać', 'warto wspomnieć', 'warto zaznaczyć',
  'warto podkreślić', 'warto dodać', 'należy podkreślić', 'należy zaznaczyć',
  'należy pamiętać', 'trzeba pamiętać', 'trzeba przyznać', 'kluczowe jest',
  'co warto podkreślić', 'co ciekawe', 'co istotne', 'tak naprawdę',
  'innymi słowy', 'jak wiadomo', 'z pewnością', 'bez wątpienia',
  'bez dwóch zdań', 'niewątpliwie', 'w dzisiejszych czasach',
  'w obecnych realiach', 'w dzisiejszym cyfrowym świecie', 'w dobie ',
  'w erze ', 'w świecie, gdzie', 'w dalszej części', 'jak już wspomnieliśmy',
  'jak wspomnieliśmy', 'wracając do tematu', 'podsumowując', 'reasumując',
  'na zakończenie', 'na koniec warto', 'co więcej', 'ponadto',
  'niemniej jednak', 'tym niemniej', 'oto propozycja', 'oto kilka',
  'oto komentarz', 'oto krótki', 'oto przykład', 'mam nadzieję, że',
  'upewnij się', 'klucz do sukcesu', 'co przekłada się na', 'świadczy o',
  'dlaczego warto', 'znaczący wzrost', 'znaczące konsekwencje',
  'szczególnie cieszy', 'coraz więcej firm', 'w tym artykule',
  'implikacje są', 'odkryj świat', 'wkrocz w świat', 'warto zwrócić uwagę',
  'należy uznać', 'e-mail znajdzie', 'mail zastaje', 'kompleksowe usługi',
];

const FRAZESY_MARKETINGOWE = [
  'pasja do', 'z pasją', 'pasjonaci', 'nasza przygoda zaczęła',
  'indywidualne podejście', 'indywidualnego podejścia', 'indywidualnym podejściem',
  'wychodzimy naprzeciw', 'wychodząc naprzeciw', 'najwyższa jakość',
  'najwyższej jakości', 'szeroki wybór', 'szeroka gama', 'bogata oferta',
  'kompleksowa obsługa', 'kompleksową obsługę', 'gwarancja satysfakcji',
  'dla każdego coś', 'spełniamy marzenia', 'witajcie kochani', 'witaj w',
  'witajcie w', 'traktujemy jak własne', 'nie boimy się wyzwań',
  'innowacyjne rozwiązania', 'innowacyjnych rozwiązań', 'wizualne historie',
  'kim jesteśmy?', 'co nas wyróżnia', 'czas odnowy', 'coś wyjątkowego',
];

// Kalki z angielskiego, styl urzędniczy, artefakty czatu, puste zakończenia i coachingowa nowomowa
// (references/kalki-i-urzedniczy.md, frazy.md, struktury.md 17-19; źródła w README).
const KALKI_I_URZEDNICZY = [
  'w oparciu o', 'dedykowany dla', 'dedykowana dla', 'dedykowane dla', 'zaadres',
  'wydaje się być', 'robi różnicę', 'robić różnicę', 'robi sens', 'na ten moment', 'na dzień dzisiejszy',
  'w dniu dzisiejszym', 'dokonać zakupu', 'dokonania zakupu', 'dokonać zgłoszenia', 'dokonać wyboru',
  'posiadać możliwość', 'posiada możliwość', 'ulec poprawie', 'uległ poprawie', 'uległa poprawie',
  'przeprowadzić analizę', 'w miesiącu ', 'odgrywa kluczową rolę', 'odgrywają kluczową rolę',
  'odgrywać kluczową rolę', 'kluczowy interesariusz', 'zagłębmy się', 'odblokować potencjał',
  'dostarczać wartość', 'dostarcza wartość', 'może poszczycić się',
];

const ARTEFAKTY_I_PUSTE = [
  'świetne pytanie', 'masz absolutną rację', 'chętnie pomogę', 'daj znać, jeśli', 'mam nadzieję, że to pomoże',
  'według mojej wiedzy', 'czas pokaże', 'krok w dobrym kierunku', 'ma ogromny potencjał',
  'będzie odgrywać coraz większą rolę', 'przyszłość należy do', 'uwolnij swój potencjał',
  'wejdź na wyższy poziom', 'wyjdź ze strefy komfortu', 'oto czego nikt', 'i szczerze?',
  'prawdziwy problem polega na tym', 'game changer',
];

const FRAZY_MIEKKIE = [
  'po prostu', 'rzeczywiście', 'zdecydowanie', 'absolutnie', 'praktycznie',
  'dosłownie', 'zasadniczo', 'definitywnie', 'dodatkowo', 'z drugiej strony',
  'biorąc pod uwagę', 'pod kątem', 'nie tylko', 'w związku z tym',
  'tym samym', 'kluczow', 'wyjątkow', 'cele biznesowe', 'profesjonalizm',
  'stanowi ', 'stanowią ', 'pełni funkcję', 'charakteryzuje się', 'w ramach', 'w zakresie', 'w celu ',
  'jednakże', 'albowiem', 'aczkolwiek', 'tudzież', 'zarówno', 'eksperci twierdzą', 'badania pokazują',
  'jak wskazują', 'od podstaw po', 'finalnie', 'generalnie',
];

const ZLA_ODMIANA_MIESIECY = [
  'w styczeń ', 'w luty ', 'w marzec ', 'w kwiecień ', 'w czerwiec ',
  'w lipiec ', 'w sierpień ', 'w wrzesień ', 'w październik ', 'w listopad ',
  'w grudzień ',
];

const ZNAKI = [
  { re: /—/g, nazwa: 'em-dash (—)' },
  { re: /–/g, nazwa: 'en-dash (–)' },
  // Polskie „…” to norma (zmiana 26.10.2026). Śladem modelu są proste "…" i angielskie “…” w polskim tekście.
  { re: /"[^"\n]*\p{L}[^"\n]*"/gu, nazwa: 'proste cudzysłowy "…" (pisz „…”)' },
  { re: /“/g, nazwa: 'angielski cudzysłów “ (pisz „…”)' },
  { re: /[‘’]/g, nazwa: 'apostrof typograficzny' },
  { re: /…/g, nazwa: 'wielokropek Unicode (…)' },
  { re: /[   ]/g, nazwa: 'twarda spacja' },
  { re: /[​‌‍﻿]/g, nazwa: 'znak zero-width' },
];

// Wyrażenia przyimkowe, w których musi stać nazwa czynności, a nie nazwa rzeczy.
// Odkryte na miniaturze wpisu z napisem „Jak AI próbowano użyć przy broni”: zdanie brzmi jak urwane,
// bo brakuje rzeczownika odsłownego („przy budowie broni”, „przy produkcji broni”). Gramatycznie
// brakuje członu nadrzędnego wyrażenia przyimkowego, a nazwa rzeczy zostaje bez tego, do czego należy.
const PRZYIMKI_CZYNNOSCI = /\b(przy|podczas|w trakcie|w toku|w czasie)\s+((?:\p{Ll}+\s+){0,2}\p{Ll}+)/giu;
// Formy nazw czynności: rzeczowniki odsłowne i typowe nazwy procesów w miejscowniku oraz dopełniaczu
const KONCOWKI_CZYNNOSCI = /(aniu|eniu|ęciu|ciu|ania|enia|ęcia|cia|acji|acja|ucji|icji|ażu|aż|unku|unek|ury|ura|bie|by|wie|wy|cy|acht|ach|ów|aniach|eniach)$/u;
const SLOWNIK_CZYNNOSCI = /^(prac|prace|pracy|pracach|prób|próbie|próbach|testach|testów|badaniach|badań|kontroli|obsłudze|analizie|zakupie|zakupach|zakupów|sprzedaży|naprawie|napraw|montażu|budowie|budowy|produkcji|projekcie|wdrożeniu|wdrożeń|starcie|okazji|rozmowie|rozmowach|rozmów|spotkaniu|spotkań|szkoleniu|szkoleń|awarii|remoncie|remontów|przeglądzie|przeglądów|audycie|audytu|kampanii|wojny|wojnie|lekcji)$/u;
// zaimki i określenia odsyłające: „przy tym”, „przy każdej z nich” nie nazywają rzeczy, tylko wracają do wcześniejszej myśli
const ZAIMKI = /^(tym|tej|tych|temu|to|nim|niej|nich|niego|czym|każdej|każdym|każdego|wszystkim|wszystkich|jednym|jednej|drugim|drugiej|takiej|takim|swojej|swoim|naszej|naszym|której|którym|niektórych|innych|innym)$/u;

function maNazweCzynnosci(slowa) {
  return slowa.some((w) => KONCOWKI_CZYNNOSCI.test(w) || SLOWNIK_CZYNNOSCI.test(w));
}

function sprawdzWyrazeniaPrzyimkowe(tekst) {
  const twarde = [];
  const miekkie = [];
  for (const [, przyimek, reszta] of tekst.matchAll(PRZYIMKI_CZYNNOSCI)) {
    const slowa = reszta.split(/\s+/).filter(Boolean);
    if (maNazweCzynnosci(slowa) || ZAIMKI.test(slowa[0])) continue;
    const fraza = `${przyimek} ${slowa[0]}`;
    // „podczas”, „w trakcie”, „w toku” i „w czasie” zapowiadają zdarzenie, więc nazwa rzeczy to błąd;
    // „przy” bywa poprawne w znaczeniu miejsca („przy stole”), dlatego tam tylko zwracamy uwagę
    if (przyimek.toLowerCase() === 'przy') miekkie.push(fraza);
    else twarde.push(fraza);
  }
  return { twarde, miekkie };
}

function znajdzFrazy(tekst, frazy) {
  const dol = tekst.toLowerCase();
  const wyniki = [];
  for (const fraza of frazy) {
    let idx = 0;
    let ile = 0;
    while ((idx = dol.indexOf(fraza, idx)) !== -1) {
      ile += 1;
      idx += fraza.length;
    }
    if (ile > 0) wyniki.push({ fraza: fraza.trim(), ile });
  }
  return wyniki;
}

function sprawdzTitleCase(tekst) {
  const linie = tekst.split('\n').map((l) => l.trim()).filter(Boolean);
  const trafienia = [];
  for (const linia of linie) {
    if (linia.length > 90) continue;
    const slowa = linia.replace(/[*#"'0-9:,.!?()-]/g, ' ').split(/\s+/).filter((w) => w.length > 2);
    if (slowa.length < 4) continue;
    const wielkie = slowa.filter((w) => /^[A-ZĄĆĘŁŃÓŚŹŻ]/.test(w)).length;
    if (wielkie / slowa.length >= 0.75) trafienia.push(linia.slice(0, 60));
  }
  return trafienia;
}

// Po polsku po okoliczniku na początku zdania nie ma przecinka („Dodatkowo warto…”). Modele dopisują go z angielskiego.
const PRZECINEK_PO_OKOLICZNIKU = /(?:^|[.!?]\s+)(Dodatkowo|Jednakże|Ponadto|Natomiast|Niemniej|Oczywiście|Szczerze|Finalnie|Generalnie|Co więcej|Przede wszystkim|Na szczęście|Ostatecznie),/gu;
const KROPKA_DZIESIETNA = /\b\d+\.\d+\s?(%|zł|proc|mln|tys)/gu;
// Doczepka z imiesłowem na „-ąc” po przecinku na końcu zdania („…, podkreślając wyjątkowy charakter miasta.”)
const DOCZEPKA = /,\s+(\p{Ll}+ąc)\b[^.!?\n]{0,120}[.!?]/gu;
const TWOJ = /\b(twój|twoja|twoje|twojego|twojej|twoim|twoją|twoich|twoimi)\b/giu;
/** Ile zdań musi mieć tekst, żeby liczyć monotonię długości. */
const MIN_ZDAN_DO_METRYK = 8;
/** Współczynnik zmienności długości zdań poniżej tej wartości: zdania o podobnej długości jak metronom. */
const PROG_MONOTONII = 0.3;

/** Tekst bez cytatów „…”: cytatów i fraz, o których tekst mówi, nie poprawiamy (SKILL.md, zasady ochronne). */
const bezCytatow = (tekst) => tekst.replace(/„[^”\n]*”/g, ' ');

function zdania(tekst) {
  return tekst
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+(?=\p{Lu})/u)
    .map((z) => z.trim())
    .filter((z) => z.split(' ').length >= 3);
}

function metryki(tekst) {
  const uwagi = [];
  const lista = zdania(tekst);
  if (lista.length >= MIN_ZDAN_DO_METRYK) {
    const dlugosci = lista.map((z) => z.split(' ').length);
    const srednia = dlugosci.reduce((a, b) => a + b, 0) / dlugosci.length;
    const odchylenie = Math.sqrt(dlugosci.reduce((a, d) => a + (d - srednia) ** 2, 0) / dlugosci.length);
    const cv = odchylenie / srednia;
    if (cv < PROG_MONOTONII) uwagi.push(`zdania o podobnej długości (zmienność ${cv.toFixed(2)}, średnio ${srednia.toFixed(0)} słów): przełam rytm`);
  }
  // Seria co najmniej trzech zdań zaczynających się tym samym słowem
  let seria = 1;
  for (let i = 1; i < lista.length; i++) {
    const a = lista[i - 1].split(' ')[0].toLowerCase();
    const b = lista[i].split(' ')[0].toLowerCase();
    seria = a === b ? seria + 1 : 1;
    if (seria === 3) uwagi.push(`trzy zdania z rzędu zaczynają się od „${lista[i].split(' ')[0]}”`);
  }
  return uwagi;
}

function sprawdz(tekst, nazwa) {
  const bledy = [];
  const uwagi = [];

  for (const { re, nazwa: n } of ZNAKI) {
    const ile = (tekst.match(re) ?? []).length;
    if (ile > 0) bledy.push(`${n}: ${ile}x`);
  }

  const bold = (tekst.match(/\*\*[^*\n]+\*\*/g) ?? []).length;
  if (bold > 0) bledy.push(`markdown bold w tekście: ${bold}x`);

  if (/^\s*(\*\*)?oto\s/i.test(tekst)) bledy.push('asystencka preambuła "Oto..." na starcie');

  const bezCyt = bezCytatow(tekst);
  for (const [, slowo] of bezCyt.matchAll(PRZECINEK_PO_OKOLICZNIKU)) bledy.push(`zbędny przecinek po „${slowo}” na początku zdania`);
  for (const [liczba] of tekst.matchAll(KROPKA_DZIESIETNA)) bledy.push(`kropka dziesiętna w „${liczba}” (pisz przecinkiem)`);
  for (const { fraza, ile } of znajdzFrazy(bezCyt, KALKI_I_URZEDNICZY)) bledy.push(`kalka albo styl urzędniczy "${fraza}": ${ile}x`);
  for (const { fraza, ile } of znajdzFrazy(bezCyt, ARTEFAKTY_I_PUSTE)) bledy.push(`artefakt czatu albo puste zdanie "${fraza}": ${ile}x`);
  for (const [, imieslow] of bezCyt.matchAll(DOCZEPKA)) uwagi.push(`doczepka z imiesłowem „${imieslow}” na końcu zdania: utnij albo zrób osobne zdanie`);
  const slowa = tekst.split(/\s+/).filter(Boolean).length;
  const twoj = (tekst.match(TWOJ) ?? []).length;
  if (twoj >= 4 && twoj / Math.max(slowa, 1) > 1 / 150) uwagi.push(`dużo „Twój/Twoje”: ${twoj}x na ${slowa} słów (kalka z angielskiego „your”)`);
  uwagi.push(...metryki(bezCyt));

  for (const { fraza, ile } of znajdzFrazy(bezCyt, FRAZY_TWARDE)) {
    bledy.push(`zakazana fraza "${fraza}": ${ile}x`);
  }
  for (const { fraza, ile } of znajdzFrazy(bezCyt, FRAZESY_MARKETINGOWE)) {
    bledy.push(`frazes marketingowy "${fraza}": ${ile}x`);
  }

  const emoji = (tekst.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/gu) ?? []).length;
  if (emoji >= 4) uwagi.push(`duża liczba emoji: ${emoji} (emoji nie zastępują treści)`);

  const hashtagi = (tekst.match(/#[A-ZĄĆĘŁŃÓŚŹŻ][a-ządęłńóśźż]+[A-ZĄĆĘŁŃÓŚŹŻ]/g) ?? []).length;
  if (hashtagi >= 3) uwagi.push(`generyczne hasztagi CamelCase: ${hashtagi}`);
  for (const { fraza, ile } of znajdzFrazy(tekst, ZLA_ODMIANA_MIESIECY)) {
    bledy.push(`zła odmiana miesiąca "${fraza}" (miejscownik!): ${ile}x`);
  }
  for (const { fraza, ile } of znajdzFrazy(bezCyt, FRAZY_MIEKKIE)) {
    uwagi.push(`fraza do oceny "${fraza}": ${ile}x`);
  }

  for (const linia of sprawdzTitleCase(tekst)) {
    bledy.push(`nagłówek Title Case: "${linia}"`);
  }

  const przyimkowe = sprawdzWyrazeniaPrzyimkowe(tekst);
  for (const fraza of przyimkowe.twarde) {
    bledy.push(`brak nazwy czynności w "${fraza}" (dopisz rzeczownik odsłowny, np. podczas budowy)`);
  }
  for (const fraza of przyimkowe.miekkie) {
    uwagi.push(`"${fraza}" bez nazwy czynności: jeśli chodzi o czynność, dopisz ją (np. przy budowie), jeśli o miejsce, zostaw`);
  }

  const maPanstwo = /państw/i.test(tekst);
  const maTy = /\b(twoja|twoje|twój|twoich|tobie|ciebie)\b/i.test(tekst);
  if (maPanstwo && maTy) uwagi.push('mieszany rejestr: "Państwo" i "ty" w jednym tekście');

  return { nazwa, bledy, uwagi };
}

const pliki = process.argv.slice(2);
const wejscia = pliki.length
  ? pliki.map((p) => ({ nazwa: p, tekst: fs.readFileSync(p, 'utf8') }))
  : [{ nazwa: '(stdin)', tekst: fs.readFileSync(0, 'utf8') }];

let sumaBledow = 0;
for (const { nazwa, tekst } of wejscia) {
  const { bledy, uwagi } = sprawdz(tekst, nazwa);
  sumaBledow += bledy.length;
  const status = bledy.length === 0 ? 'OK' : `BŁĘDY: ${bledy.length}`;
  console.log(`\n=== ${nazwa} [${status}] ===`);
  for (const b of bledy) console.log(`  BŁĄD  ${b}`);
  for (const u of uwagi) console.log(`  UWAGA ${u}`);
}
process.exit(sumaBledow > 0 ? 1 : 0);
