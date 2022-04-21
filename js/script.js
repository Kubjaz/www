function displayOpen() {
    document.getElementById("pupupdiv").style.visibility = "visible";
    document.getElementById("pupupdiv").style.opacity = "1";
}

function displayClose() {
    document.getElementById("pupupdiv").style.visibility = "hidden";
    document.getElementById("pupupdiv").style.opacity = "0";
    document.getElementById("cctvtext").remove();
}

function displayCCTV() {
    document.getElementById("cctv").style.display = "block";

    $(`<br/>`).appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Potřebujete do vašeho domu, firmy nebo jakéhokoli objektu nainstalovat kvalitní a cennově přístupný kamerový systém? Firma Security System Záleský s.r.o. je tu právě pro Vás! Nabízíme profesionální montáž kamerových systémů pro klienty po celé ČR. Samozřejmostí je vypracování nabídky, možnost servisní smlouvy a návrh kamerového systému na míru, přesně podle Vašich požadavků a potřeb.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Naše firma instaluje domovní kamery a kamerové systémy v po celé České republice.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Vytváříme inteligentní kamerové systémy na míru, které Vám ušetří peníze. Kamerový systém po instalaci nadále sledujeme pro lepší nastavení s ohledem na denní a noční světlo.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("K montáži kamerových systémů využíváme prvky od ověřených výrobců. Nejčastěji montujeme ověřeného dodavatele Hikvision.").appendTo(document.getElementById(`pupupdiv`));

    $(`<br/>`).appendTo(document.getElementById(`pupupdiv`));

    $(`<h2 class="cctvtextfat" id="cctvtext"/>`).text("JAK POSTUPOVAT V PŘÍPADĚ ZÁJMU O MONTÁŽ KAMEROVÉHO SYSTÉMU?").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Kontaktujte nás a podrobně popište o jaký druh služby budete mít zájem.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("V domluvený čas se k Vám přijedeme podívat. Vyhodnotíme současný stav objektu, doporučíme optimální řešení v poměru cena/efektivita s ohledem na požadovanou náročnost obsluhy a další požadované parametry.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Připravíme Vám návrh včetně kalkulace ceny").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Pokud se rozhodnete s námi spolupracovat, zajistíme pro Vás kompletní realizaci nového kamerového systému včetně jeho výchozí revize a odborného zaškolení obsluhy.").appendTo(document.getElementById(`pupupdiv`));
}