Deze repo dient als boilerplate voor het opzetten van de LCBieb componenten a.d.h.v. het gemaakte design.

Voor het opstarten van het project dien je allereerst de git repo binnen te halen.
Ook ga ik er vanuit dat je de volgende dingen al geinstalleerd hebt op je device;

Angular CLI: 14.x.x (controleer je versie door in je terminal te typen: "ng version")

Node: 14.xx.x (controleer je versie door in je terminal te typen: "node -v")

Package Manager: npm 8.x.x (controleer je versie door in je terminal te typen: "npm -v")


> **!! De versies hoeven niet precies overeen te komen. Als je een iets nieuwere of oudere versie hebt is dat niet erg.!!**

Vervolgens is het van belang dat je in je terminal met npm/yarn de juiste node_modules/dependencies binnen haalt.

dit doe je door in je terminal te navigeren naar de "Portal" map. dat doe je door bijvoorbeeld ( cd ../kheibar/projecten/LCBieb/Portal) te typen in je terminal.

Zodra je in de juiste map zit haal je de juiste dependencies/node_modules binnen door in je terminal te typen;

`npm i`

> Als je errors krijgt dat je geen rechten hebt zet er dan sudo voor op mac, op windows moet je je terminal als administrator openen

Nadat de dependencies zijn geïnstalleerd kun je het project lanceren door de volgende command te typen; 

`ng serve --open`

> Let op! zorg dat je in de Portal map zit terwijl je deze command uitvoert. Dit werkt niet in de hoofdmap of submappen.

Nu kun je in je editor aanpassingen maken die meteen zichtbaar zijn in het project. In de boilerplate kom je in eerste instantie terecht op de homepage. Deze is te vinden onder Portal/src/app/@features/homepage.

Elke pagina in het project bestaat uit een standaard layout die overal wordt toegepast. Deze standaard layout is te vinden onder Portal/src/app/@core/components. Hier zie je een Header (zichtbaar en in dit geval Statisch op elke pagina), Layout (waar alle content van de paginas in komt) & Footer (niet statisch maar staat wel op alle paginas, mogelijk halen we de footer in zijn geheel weg omdat deze ook niet in het design terugkomt.)

