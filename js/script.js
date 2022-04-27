function sendMail() {    
    var zprava = document.getElementById("mailm").value;
    var podpis = document.getElementById("mailn").value;
    var predmet = document.getElementById("mails").value;

    window.location.replace(`mailto:zsystem@email.cz?body=${zprava}%0d%0a%0d%0a${podpis}&subject=${predmet}`);    
}

function displayOpen() {
    document.getElementById("pupupdiv").style.visibility = "visible";
    document.getElementById("pupupdiv").style.opacity = "1";
}

function displayClose() {
    document.getElementById("pupupdiv").style.visibility = "hidden";
    document.getElementById("pupupdiv").style.opacity = "0";
    document.getElementById("cctv").style.display = "none";
    document.getElementById("ezs").style.display = "none";
    document.getElementById("navrh").style.display = "none";
    
    for (var i = 0; i < 20; i++) document.getElementById(`pupupdiv`).removeChild(document.getElementById(`cctvtext`));
}

function displayCCTV() {
    document.getElementById("cctv").style.display = "block";

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));
    $(`<img class="cctvimage" id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Potřebujete do vašeho domu, firmy nebo jakéhokoli objektu nainstalovat kvalitní a cennově přístupný kamerový systém? Firma Security System Záleský s.r.o. je tu právě pro Vás! Nabízíme profesionální montáž kamerových systémů pro klienty po celé ČR. Samozřejmostí je vypracování nabídky, možnost servisní smlouvy a návrh kamerového systému na míru, přesně podle Vašich požadavků a potřeb.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Naše firma instaluje domovní kamery a kamerové systémy v po celé České republice.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Vytváříme inteligentní kamerové systémy na míru, které Vám ušetří peníze. Kamerový systém po instalaci nadále sledujeme pro lepší nastavení s ohledem na denní a noční světlo.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("K montáži kamerových systémů využíváme prvky od ověřených výrobců. Nejčastěji montujeme ověřeného dodavatele Hikvision.").appendTo(document.getElementById(`pupupdiv`));

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));

    $(`<h2 class="cctvtextfat" id="cctvtext"/>`).text("JAK POSTUPOVAT V PŘÍPADĚ ZÁJMU O MONTÁŽ KAMEROVÉHO SYSTÉMU?").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Kontaktujte nás a podrobně popište o jaký druh služby budete mít zájem.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("V domluvený čas se k Vám přijedeme podívat. Vyhodnotíme současný stav objektu, doporučíme optimální řešení v poměru cena/efektivita s ohledem na požadovanou náročnost obsluhy a další požadované parametry.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Připravíme Vám návrh včetně kalkulace ceny").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Pokud se rozhodnete s námi spolupracovat, zajistíme pro Vás kompletní realizaci nového kamerového systému včetně jeho výchozí revize a odborného zaškolení obsluhy.").appendTo(document.getElementById(`pupupdiv`));
}

function displayEZS() {
    document.getElementById("ezs").style.display = "block";

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));
    $(`<img class="senzorimage" id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));   
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Přemýšlíte jaký elektronický zabezpečovací systém do Vašeho domu, bytu a nebo komerčního objektu? Kontaktujte nás!").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Kvalitně zabezpečíme Váš dům, byt, kancelář a nebo halu.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Postaráme se o kompletní realizaci od návrhu až přes vypracování, montáž a dlouhodobý servis.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Naše firma využívá k zabezpečení domu, bytu či jiných objektů produkty od ověřených a spolehlivých značek: EZS Jablotron, Satel či Ajax. Montáže zabezpečovacích systémů provádíme po celé České republice.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Našim klientům nabízíme drátový i bezdrátový zabezpečovací systém PZTS.").appendTo(document.getElementById(`pupupdiv`));

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));

    $(`<h2 class="cctvtextfat" id="cctvtext"/>`).text("Nejpoužívanější prvky bezpečnostních systémů k zabezpečení rodinného domu či jiného objektu jsou následující komponenty:").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Prostorové detektory").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Snímače otevření a rozbití skla – magnetické kontakty příložné, závrtné, audiodetektory").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Prostředky osobní a předmětové ochrany – tísňové hlásiče, otřesové detektory, kouřové hlásiče, výstupní prvky – vnitřní a venkovní sirény, GSM komunikátory, napojení na pult centralizované ochrany (PCO)").appendTo(document.getElementById(`pupupdiv`));
}

function displaySP() {
    document.getElementById("navrh").style.display = "block";

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));
    $(`<img class="siteimage" id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Slaboproudé systémy dělají ze starých budov moderní domy, ve kterých se pohodlně žije i pracuje a bezpečnost je tu kladena na první místo.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Svěřte montáž slaboproudu do našich rukou. Pracujeme s moderními technologiemi nové generace.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtext" id="cctvtext"/>`).text("Jsou bezpečné, spolehlivé, intuitivně ovládané, úsporné a vždy nabízejí možnost individuálního využití. Ať už samostatně nebo propojením s ostatními systémy.").appendTo(document.getElementById(`pupupdiv`));

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));

    $(`<h2 class="cctvtextfat" id="cctvtext"/>`).text("Sítě LAN").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Nabízíme systém strukturované kabeláže datových sítí LAN na míru vašich potřeb.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Kvalitní, bezpečný a rychlý přístup k internetu počítačových sítí.").appendTo(document.getElementById(`pupupdiv`));

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));

    $(`<h2 class="cctvtextfat" id="cctvtext"/>`).text("Satelitní technika").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Zajistíme pro vás instalaci antény pro příjem digitálního pozemního signálu (DVB-T/T2), která patří mezi nejčastěji užívané televizní antény.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Anténu vám namontujeme na novostavbu, ale také nabízíme řešení, pokud se chystáte modernizovat stávající systém, potřebujete vyměnit kabeláž a další potřebné úpravy. Montáže antén pro vás zařídíme od začátku až do konce – od výběru až po vyladění signálu.").appendTo(document.getElementById(`pupupdiv`));

    $(`<br id="cctvtext"/>`).appendTo(document.getElementById(`pupupdiv`));

    $(`<h2 class="cctvtextfat" id="cctvtext"/>`).text("Revize").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Pravidelnou revizí slaboproudých elektroinstalací společně předejdeme případným poruchám a škodám.").appendTo(document.getElementById(`pupupdiv`));
    $(`<p class="cctvtextodp" id="cctvtext"/>`).text("Vše pečlivě zkontrolujeme, změříme a odzkoušíme.").appendTo(document.getElementById(`pupupdiv`));
}