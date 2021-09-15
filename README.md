## Moment 2 - NodeJS och automatisering med Gulp
### Vad är syftet med automatiseringsprocessen?
Det finns många fördelar med att automatisera arbetsflödet, några exempel är:
* Man kan spara massor av tid genom att automatisera tidskrävande arbeten.
* Med automatisering kan man bättre optimera dina webbsidor snabbt genom att automatiskt komprimera de olika filerna inom din webbsida.
* Bättre struktur och organisation inom dina arbetsfiler eftersom man kan automatiskt lägga ihop flera filer av samma typ till en fil.
### Verktygen och paketen som jag har använt
* gulp-clean-css - Minifierar CSS-filer
* gulp-concat - Konkatenerar filer, i mitt fall användes paketet till CSS och JS-filer
* gulp-uglify-es - Minifierar JS-filer
* Browsersync - Möjliggör live-reload genom Gulp
Och om det inte märktes redan så använde jag Gulp för att möjliggöra denna automatisering.
### Hur använder man mitt system?
* Först skapade jag en projektmapp och startar ett nytt npm-projekt i denna mapp.
* Sedan installerar jag alla npm-paket som behövs.
* Efter detta skapar jag grundstrukturen för min webbplats, alltså mappar, filer, bilder osv.
* Alla dessa filer och mappar läggs i en annan mapp som jag kallar src. Samtidigt skapar jag en fil som kallas pub (filen där mina filer som är redo för publicering ska finnas).
* Sedan implementerar jag alla paket i min gulpfile.js och skapar en .gitignore fil för att ignorera node_modules mappen.
* Sist av sakerna jag gör innan jag pushar allt skapar jag README.md-filen där jag lägger till informationen som behövs.
* Och sist men inte minst pushar jag allt som har skapats inom projektmappen till GitHub.