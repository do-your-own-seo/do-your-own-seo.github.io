---
layout: post
i18n-link: manga
locale: ua
lang: uk
order: 2

date: 2020-02-09T18:02:00Z
last_modified_at: 2020-02-09T18:02:00Z

title: "SVG іконки з PNG: Створюємо власний шрифт з манги"
tags: [Content, власний шрифт, SVG icons, SEO]
description: "Контент &#8211; головне, проте оформлення важливе! Створюємо SVG-піктограми з PNG та застосовуємо до них CSS-ефекти &#10004; Акцентований символами текст переконує!"
keywords: "svg з png"
schema: HowTo
styles: /assets/post-on-icons/manga.css
code_amount: 2

h1: "Іконки з PNG? &#8211; Легко! Створюємо SVG і генеруємо свій шрифт"
snippet_header: "Графічний шрифт ручної роботи, або Як оновити пожовклі від часу статті"

snippet: "Як перетворити PNG на SVG-піктограму, якщо ніколи не працював з векторною графікою. Як створити з добірки SVG свій шрифт, стилізувати й використову&#173;вати його для акцентування тексту."

image: "how-to-create-manga-icon-font.jpg"
---
<ul class="toc">
  <li><a href="#1">SVG-піктограма з PNG за 9 кроків</a></li>
  <li><a href="#2">Кастомний шрифт з SVG: чи варто?</a></li>
  <li><a href="#2.1">&bullet;&ensp;Чим генерувати: Fontello VS IcoMoon</a></li>
  <li><a href="#3">Застосування веб-шрифтів та SVG-спрайтів</a></li>
  <li><a href="#3.1">&bullet;&ensp;CSS-стилізація іконок&nbsp;<span class="red">&#42;інтерактив</span></a></li>
</ul>
<div>
<p>Скажете, нащо потрібен свій шрифт, коли їх і без того вдосталь? Для стилізації інтерфейсу та надання унікального колориту контенту! При&#173;міром, дизай&#173;нерські абетки як вроди&#173;лися для <b>буквиць (ініціалів)</b>: ними познача&#173;ють початок кожного розділу.</p>
<p class="txt-center"><img src="/images/posts/celtic-and-slavic-initial-letters.jpg" alt="Кельтська і слов'янська буквиці" loading="lazy"><br>
<small>Кельтський і давньослов'янський ініціали</small></p>
<p>Піктограми з маскотом &#8211; живим талісманом сайту  &#8211; допоможуть користувачеві дістатися цільової сто&#173;рінки. Врешті, за допомогою тематичних піктограм легше акцентувати тези й привернути увагу до ключових пунктів статті.</p> 
<p>В цьому пості ми створимо колекцію одноколірних значків й навчимося стилі&#173;зувати їх засобами CSS. Втім, перший розділ стане у пригоді й тим, хто хоче мати різнобарвні векторні зображення. Адже всі інструменти, що використовуються, працю&#173;ють і з кольоровими SVG.</p>
</div>
<div>
<h2 id="1" itemprop="name">Як створити SVG-іконку з PNG</h2>
<meta itemprop="image" content="{{site.url}}/assets/post-on-icons/result-thumbnail.svg" />
<p itemprop="description">Задача &#8211; конвертувати PNG в одно&#173;колірний, проте виразистий SVG помірного розміру. На щастя, для її розв'язання не потрібен досвід роботи з векторною графікою.</p>
<p>Загалом, логіка проста. Що більш контраст&#173;ними будуть сусідні кольори, що більш чіткими й плав&#173;ними вдасться зробити контури PNG, то кращим вийде SVG. Проте ми не прагнемо легких звершень: наш задум &ndash; створити іконки з героями манги.</p>
<blockquote>Мабуть, всі в курсі: <b>манга</b> – це мальовані історії. На зразок коміксів, проте не завжди смішні: бувають сумні, зворушливі, жор&#173;сто&#173;кі – які завгодно. Народилася манга в Японії, але зараз її малю&#173;ють усюди. За мотивами популярних серій видають рома&#173;ни й створюють аніме.</blockquote>
<p>Умовимося користатися лише <span class="under">безплатними</span> ресур&#173;сами. Нам знадобляться:</p>
<ul>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">редактор PNG</span></span> з підтримкою прозорості;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">конвертер PNG у SVG</span></span>;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">оптимізатор SVG</span></span> для зменшення файлу.</li>
</ul>
<p>Перетворювати на графічні символи будемо одразу два малюнки:</p>
<p class="txt-center"><img loading="lazy" src="/images/posts/before_1.png" alt="PNG-джерело №1"> &thinsp; <img loading="lazy" src="/images/posts/before_2.png" alt="PNG-джерело №2"></p>
<p>Ці та інші PNG завантажено з сайтів <b>hiclipart.com</b>, <b>imgbin.com</b>, <b>pngocean.com</b>, <b>pngguru.&#173;com</b>. Але в мережі є й інші безкош&#173;товні ресурси з необмеженим асор&#173;тиментом.</p>
<p>Ви вже маєте годящий PNG? Тоді діємо за планом. Можна хоч зараз перейти до <a href="#p_5">пункту&nbsp;5</a>, але задля кращого результату бажано попра&#173;цювати з файлом.</p>
<ol class="emphasis">
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Відкрийте PNG в онлайн-редакторі зображень (<a href="https://pixlr.com/editor/">pixlr.com</a>, <a href="https://www.lunapic.com/editor/">lunapic.com</a> та ін.) або на комп'ютері.</span>
    <ol type="A">
      <li><span>Кадруйте малюнок у відношенні 1:1.</span></li>
      <li><span>Збільште контраст.</span></li>
      <li><span>Позбудьтеся незначних деталей.</span></li>
    </ol>
    <meta itemprop="name" content="Підготовка та кадрування PNG" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Виділіть світлі ділянки, яким призначено бути білими на SVG, і вилучіть їхній вміст: вони мають стати порожніми (можливо, десь дове&#173;деться дове&#173;сти границю). Цей хід має підвищити чіткість контурів SVG.</span>
    <meta itemprop="name" content="Обробка світлих ділянок" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Погляньте на темні ділянки: якщо вони містять світліші фрагменти, конвертер може вирішити, що вони «білі». Тож, краще зафар&#173;бувати їх темним, не прагнучи спеці&#173;альної краси: головне, аби контури не постраж&#173;дали. Збережіть отриманий PNG-файл. Він буде виглядати десь так:</span>
    <ul class="nobullets oneline txt-center"><li><img loading="lazy" src="/images/posts/after-the-3rd-step_1.jpg" alt="Png №1 після 3-го кроку"> &thinsp; </li><li><img loading="lazy" src="/images/posts/after-the-3rd-step_2.jpg" alt="Png №2 після 3-го кроку"></li></ul>
    <meta itemprop="name" content="Перевірка темних ділянок" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Пропорційно зменште зображення до 200x200px: це має забезпечити баланс між деталізацією та розміром SVG-файлу. Знову підтягніть контраст&#173;ність та збережіть файл <span class="u">під назвою 200x200</span>.png.</span>
    <meta itemprop="name" content="Ресайз PNG для конвертації" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text" id="p_5">Перейдіть на сайт PNG &#10132; SVG конвер&#173;тера. Рекомендую сервіс <a href="https://www.pngtosvg.com">pngtosvg.&#173;com</a>: він не потребує налашту&#173;вань і генерує SVG-файл з чистим кодом. Але можна обрати й інший ресурс, якщо є вподобання.</span>
    <meta itemprop="name" content="Вибір конвертера PNG у SVG" />
    <meta itemprop="url" content="{{site.url}}{{page.url}}#p_5" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">На pngtosvg.com залиште в палітрі 1 колір (усього їх 5), завантажте свій файл та натисніть &laquo;Генерувати&raquo;.</span>
    <meta itemprop="name" content="Налаштування конвертера" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Якщо якість не влаштовує, відредагуйте 200x200.png або створіть з більшого PNG файл 300x300.png і повторіть пункт&nbsp;6. Новий SVG буде охайні&#173;шим, але й заважить більше.</span>
    <meta itemprop="name" content="Що робити, якщо якість не влаштовує" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Лишилося подякувати конвертеру (там приймають дарунки) і стягнути собі SVG. Втім, розслабля&#173;тися зарано: вагу файлу можна суттєво врізати.</span>
    <meta itemprop="name" content="Фінальне конвертування PNG" />
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Йдемо на сайт <a href="https://jakearchibald.github.io/svgomg/">оптимізатора SVGOMG</a>. Відкриваємо свій файл через інтерфейс, в налаш&#173;туваннях задаємо нульову точність (Precision&thinsp;=&thinsp;0) і знімаємо вказівник з Remove&thinsp;viewBox. Результат з'являється тієї ж миті! Все: маємо придатну до викорис&#173;тання чорно-білу іконку з аніме.</span>
    <ul class="nobullets oneline txt-center">
      <li><svg width="210" height="210" role="img" aria-label="Кінцевий результат: SVG іконка-котик"><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat2"/></svg> &emsp; </li> 
      <li><svg width="210" height="210" role="img" aria-label="SVG вагою менше 3 кб: хлопчик-манга"><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero1"/></svg></li>
    </ul>
    <meta itemprop="name" content="Оптимізація отриманого SVG" />
  </li>
</ol>
<p>У підсумку: розмір файлів <span class="under">&ndash; 2,05 та 2,75&thinsp;КБ</span>; буде навіть менше, якщо для SVG ввімкнуте GZIP-стискання. Зазначу, що перед останнім кроком файли важили 7,6 та 10,3&thinsp;КБ відпо&#173;відно, тобто схудли вони <span class="under">майже в 3.7 раза</span>!</p>
<p>А ось <a href="/assets/post-on-icons/improper_1.svg" rel="nofollow">що вийшло б</a>, якби ми сконвертували кота в SVG без підготовки й полінувалися оптимізувати: зайві 20&thinsp;КБ та очевидна непридат&#173;ність до користування. Втім, оскіль&#173;ки PNG із хлопчиком був більш контрастним, <a href="/assets/post-on-icons/improper_2.svg" rel="nofollow">швидкий SVG</a> з нього вийшов вираз&#173;ним, але теж обтяженим дрібницями.</p>
</div>
<div>
<h2 id="2">Веб-шрифт з SVG: генеруємо, зважуємо переваги й недоліки</h2>
<p>Загалом в нас підготовано 11 манга-іконок у форматі SVG: <a href="https://github.com/do-your-own-seo/icons">ось вони</a>. Чому б не створити з них люби&#173;тельський веб-шрифт? До слова, в коментарях можна постити посилання на тематичні колекції SVG у вільному доступі.</p> 
<blockquote>Шрифт &ndash; лише один з варіантів викорис&#173;тання значків: SVG можна завантажити з файлу або просто &laquo;вшити&raquo; в код HTML. Також можна застосовувати <a href="#3">SVG-спрайти</a>. Отже, способів багато, і кожен має За і Проти.</blockquote>
<p>Що сказати на захист веб-шрифту?</p>
<ul class="featured plus">
  <li>Не засмічує HTML. Щоби всередині &lt;span&gt; з'яви&#173;лася іконка, достатньо додати тегу відповідний клас</li>
  <li>Неважко доповнити саморобними іконками Font Awesome та згенерувати розширений шрифт.</li>
  <li>До символів шрифту застосовні ті ж CSS-ефекти, що й до околишнього тексту (тінь, граді&#173;єнт кольору і т.ін.).</li>
</ul>
<p>Що проти?</p>
<ul class="featured minus">
<li>Завантаження шрифту може знизити експлуа&#173;таційні характеристики сайту та затримати виве&#173;дення тексту.</li>
<li>Веб-шрифти не працюють в браузері Opera Mini (зустрічається рідше, ніж на 2% пристроїв).</li>
</ul>
<p>Однак в нашому випадку головний недолік веб-шрифтів не настільки страшний. Кастом&#173;ний шрифт буде розміщено на сервері разом із сайтом: тоді браузеру клієнта не дове&#173;деться додатково встанов&#173;лювати з'єднання з CDN. До того ж >&nbsp;80% браузерів <a href="https://caniuse.com/#search=preload">підтримують preload</a> &ndash; передзавантаження кешова&#173;них ресурсів: коли гліфів у шрифті небагато, preload варто взяти на спробу.</p>
<p>Тож, якщо ви обрали шрифт як засіб впоряд&#173;кування іконок, продовжуємо. В іншому разі <a href="#3">стрибаємо</a> через розділ.</p>
<h3 id="2.1">Генератори шрифтів у дії: IcoMoon проти Fontello</h3>
<p>Ось двійко легких у застосуванні, але майже магічних web-додатків для створення шриф&#173;тів.</p>
<table class="txt-center"><caption><small><em>Таблиця-порівняння генераторів веб-шрифтів Fontello та IcoMoon App</em></small></caption>
  <tr>
    <th><a href="https://icomoon.io/app/"><img src="/assets/post-on-icons/icomoon-logo.jpg" alt="IcoMoon App logo" loading="lazy"></a></th>
    <th><a href="http://fontello.com"><img src="/assets/post-on-icons/fontello-logo.jpg" alt="Fontello logo" loading="lazy"></a></th></tr>
  <tbody>
    <tr><td>Платна та безплатна версії</td><td>Free, Open source</td></tr>
    <tr><td colspan="2">Для завантаження генерованого шрифту не потрібно реєструватися</td></tr>
    <tr><td colspan="2">Можна комбінувати готові піктограми з власними SVG в одному шрифті</td></tr>
    <tr><td>Базове редагування символів</td><td>------</td></tr>
    <tr><td>------</td><td>Іноді &laquo;не бачить&raquo; SVG, доки не обернеш path <b>:(</b></td></tr>
    <tr><td>------</td><td>Є API для розробників</td></tr>
    <tr><td>Можна завантажити готові значки як PNG</td><td>------</td></tr>
    <tr><td>WOFF2 тільки у преміум-версії</td><td>WOFF2 за замовчанням</td></tr>
  </tbody>
</table>
<p>А ось посилання на оригінальні посібники з використання: <a href="https://icomoon.io/#docs/importing">IcoMoon docs</a> і <a href="https://github.com/fontello/fontello/wiki/How-to-create-my-own-font">Fontello wiki</a> (обидва &ndash; англійською). Я лише зазначу основні етапи створення шрифтів для тих, хто не має наміру заглиблюватись у доку&#173;ментацію.</p>
<ol start="10" class="emphasis">
  <li><span>Обираємо додаток і відкриваємо сайт. Придивляємося до наявних іконок: мож&#173;ливо, деякі з них надобляться. Виділяємо потрібні.</span></li>
  <li><span><strong class="u">Для Fontello</strong>: вкидаємо свої SVG-файли у &laquo;приймач&raquo; в розділі <em>Custom Icons</em>. <strong class="u">Для IcoMoon</strong>: на панелі навігації знаходимо кнопку <em>Import Icons</em> і завантажуємо SVG. Нові іконки теж треба виділити.</span></li>
  <li><span><strong class="u">Для Fontello</strong>: ліворуч від кнопки <em>Download</em> вводимо назву шрифту та перевіряємо налаш&#173;тування. Якщо значки мають замінити алфавіт або інші стандартні символи, на вкладці <em>Customize Codes</em> вказуємо відповідні кодові позиції (U-codepoint). <strong class="u">Для Ico&#173;Moon</strong>: в навігації клікаємо на олівець і опиняємося в інтерфейсі редактора іконок. Награвшись, тиснемо <em>Generate Font</em> і заповнюємо <em>Pre&#173;ferences</em>. За потреби змінюємо U-codepoints.</span>
    <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/navbars.jpg" alt="Панелі навігації порівнюваних додатків"></li><li><small>Панелі навігації додатків Fontello (зверху) й IcoMoon</small></li></ul>
  </li>
  <li><span>Якщо все влаштовує, погоджуємося на <em>Download</em>. В архіві буде тека зі шрифтами (.eot, .svg, .ttf, .woff + .<span class="u">woff2 у Fontello</span>), JSON з інформацією про завантажені гліфи, CSS-файли та demo.html із прикладами.</span>
    <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/icomoon-vs-fontello.jpg" alt="Вміст архівів, завантажених з fontello та icomoon"></li><li><small>Відмінності у розмірі форматів шрифтів, згенерованих IcoMoon і Fontello: .eot та .ttf легше в IcoMoon, а от .svg &ndash; у Fontello</small></li></ul>
  </li>
  <li><span>Найбільш ефективний web-шрифт для сучасних браузерів ­– .woff2. Якщо ви скорис&#173;талися безкош&#173;товною версією IcoMoon, доведеться пошукати WOFF &#10132; WOFF2 кон&#173;вертер. <a href="https://everythingfonts.com/woff-to-woff2">Цей</a> &ndash; працює. Додамо .woff2 у теку з іншими форматами і все: шрифт можна підключати!</span></li>
</ol>
<p>Обидва шрифти є на Github, архіви заван&#173;тажуються за посиланнями <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-icomoon.zip">icomoon-Manga</a></b> та <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-fontello.zip">fontello-Manga</a></b>.</p>
</div>
<div>
<h2 id="3">HTML та CSS для застосування SVG-спрайтів та шрифтів</h2>
<p>Час продемонструвати згадувані манга-іконки. Усі 11 зібрано у <strong>спрайті</strong> &ndash; єдиному SVG-файлі в тегах <code>&lt;symbol&#8201;id="icon-name"&#8201;viewBox="0&#8201;0&#8201;X&#8201;X"&gt;&lt;/symbol&gt;</code>, а на сторінці виведено як</p>
{%- highlight html -%}<svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-name"/></svg>{% endhighlight %}
<div id="svgs" class="iconset flex-wrap flex-center" data-size="52" title="Збільшити/Зменшити" role="img" aria-label="Іконки з персонажами манги">
  <b class="arrow hidden">&#10237;</b>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat1"/></svg><div class="txt-center hidden"><code>icon-cat1</code></div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat2"/></svg><div class="txt-center hidden">icon-cat2</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat3"/></svg><div class="txt-center hidden">icon-cat3</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat4"/></svg><div class="txt-center hidden">icon-cat4</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero1"/></svg><div class="txt-center hidden">icon-hero1</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero2"/></svg><div class="txt-center hidden">icon-hero2</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero3"/></svg><div class="txt-center hidden">icon-hero3</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero4"/></svg><div class="txt-center hidden">icon-hero4</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero5"/></svg><div class="txt-center hidden">icon-hero5</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero6"/></svg><div class="txt-center hidden">icon-hero6</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero7"/></svg><div class="txt-center hidden">icon-hero7</div></div>
  <b class="arrow hidden">&#10238;</b>
</div>
<p>Хай це не найбільш кросбраузерний спосіб (див. <a href="https://caniuse.com/#feat=mdn-svg_elements_use_external_uri" rel="nofollow">browser support</a>), натомість не переван&#173;тажено HTML. Втім, якщо значки потрібні для єдиної статті і їх не надто багато, вміст спрайту можна включити в тіло &lt;html&gt;. Тоді посилання на окремі значки скоротяться до <code>&lt;svg&gt;&lt;use&thinsp;xlink:href=&#173;"#iconname"/&gt;&lt;/svg&gt;</code>.</p>
<p class="danger"><b>NB!</b> Не можу гарантувати, що всі сайти, на яких знайдено PNG, дбають про захист прав авторів. Якщо володар прав на малюнок впізнає його в якомусь із SVG і буде проти розповсюдження файлу, ось <a href="https://contact.do/44CB" rel="nofollow">форма для звернень</a>.</p>
<p>Тут варто було б вивести такі самі іконки, але вже як елементи web-шрифту. Проте... мені шкода наван&#173;тажувати сторінку:-(. Нехай мо&#173;деллю стане іcomoon-шрифт, який вже вико&#173;ристовується на сайті: за його прикладом легко підключити й манга-шрифт.</p>
<div class="iconset flex-wrap flex-center" role="img" aria-label="Піктограми з web-шрифту">
  <i class="icon icon-pencil"></i><i class="icon icon-menu"></i><i class="icon icon-question"></i><i class="icon icon-envelop"></i><i class="icon icon-attachment"></i><i class="icon icon-bubbles4"></i><i class="icon icon-mobile"></i><i class="icon icon-rss"></i><i class="icon icon-twitter"></i><i class="icon icon-github"></i><i class="icon icon-facebook"></i>
</div>
<p>Кожен елемент &ndash; це просто <code>&lt;i&nbsp;class="icon icon-name"/&gt;&lt;i&gt;</code>, а в стилях зафіксовано</p>
{%- highlight CSS -%} {%- raw -%}
@font-face {font-family:"fontName"; src:url(__) format(__)}
.icon {font-family:"fontName"; font-style:normal}
.icon-name::before {content:"__"} /* Hex for Unicode */{% endraw %}{% endhighlight %}
<p>З переліку класів <code>&lt;i&nbsp;class=".."/&gt;&lt;i&gt;</code> можна виклю&#173;чити icon: тоді CSS-селектор <code>.icon&thinsp;</code> заміниться на</p>
<p class="txt-center"><code>[class^="icon-"],[class*=" icon-"]</code>.</p> 
<blockquote>Оскільки значки не містять тексту, треба подбати про адекватне <strong>прочитання їх скрін&#173;рідерами</strong>.</blockquote> <p>Якщо іконка має відповідальну функцію, доведеться опорядити її роллю (role) й описом (aria-label). Суто декоративні іконки достатньо сховати від програм-асистентів за допомогою атрибуту aria-hidden.</p> {% highlight html %}
<svg role="img" aria-label="Опис">...</svg>
<i class="icon-name" role="button" aria-label="Дія"></i>
<i class="icon-name" aria-hidden="true"></i>{% endhighlight %}
<p>А от якщо новий шрифт &ndash; це алфавіт, призначений для ініціалів, то <code>.icon</code> у CSS варто замінити селектором 
<code>p:first-of-type::first-letter</code> (1-а літера 1-го абзацу розділу). Вказувати значення <code>::before</code> тоді не потрібно.</p>
<h3 id="3.1" class="red">Стилізація іконок: CSS-ефекти наживо</h3>
<p>Для редагування можна обрати будь-яку з manga icons: для цього треба ввести її ім'я замість <code>icon-cat3</code>.&thinsp; Обрана піктограмка буде миттєво реагувати на змінення значень CSS-властивостей.</p>
<div class="flex-wrap flex-center">
  <div class="box enlarged"><svg id="example-icon" role="img" aria-label = "Иконка для применения CSS-эффектов"><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat3"/></svg></div>
  <div class="editor">
    <div id="palette" class="flex-wrap flex-center">
      <div>
        <div class="option" data-color="#c62828"></div>
        <div class="option" data-color="#8c0032"></div>
        <div class="option" data-color="#8e24bb"></div>
        <div class="option" data-color="#5b068c"></div>
        <div class="option" data-color="#1d2788"></div>
        <div class="option" data-color="#2979ff"></div>
        <div class="option" data-color="#00838f"></div>
        <div class="option" data-color="#04805b"></div>
        <div class="option" data-color="#368026"></div>
        <div class="option" data-color="#7cad43"></div>
        <div class="option" data-color="#f5bc11"></div>
        <div class="option" data-color="#de730e"></div>
        <div class="option" data-color="#e24d1e"></div>
        <div class="option" data-color="#a05a16"></div>
        <div class="option" data-color="#795548"></div>
        <div class="option" data-color="#a26b6b"></div>
        <div id="hide-palette" class="red"><b title="Згорнути палітру" class="option">Close</b><b class="option hidden">Palette</b></div>
      </div>
      <div class="option"><label>Колір тіні <input type="text" value="rgba(0,0,0,.3)" name="shadowColor"></label></div>
    </div>
    <div class="flex-wrap flex-center">
      <input type="text" value="icon-cat3" class="txt-center" id="select-icon" title="Icon">
      <div id="flip">
        <label class="switch"> <input type="checkbox" title="Flip"> <span class="slider"></span> </label>
      </div>
      <div>
        <label>Розміри іконки <input type="range" id="size-slider" name="size" min="50" max="200" value="200"></label>
      </div>
    </div>
    <div>
      <label for="shadow-1" class="txt-center">&nbsp;Тінь:&nbsp; зміщення вздовж X,&nbsp; вздовж Y,&nbsp; радіус розмиття</label>
      <div class="flex-wrap flex-center">
        <input type="range" id="shadow-1" value="0" step="0.5" min="-10" max="10" class="shadow-slider" title="X">
        <input type="range" id="shadow-2" value="0" step="0.5" min="-10" max="10" class="shadow-slider" title="Y">
        <input type="range" id="shadow-3" value="0" min="0" max="10" class="shadow-slider" title="Blur">
      </div>
    </div>
  </div>
</div>
<p>В текстових полях нижче буде оновлюватися CSS-код.</p>
<div class="flex-wrap flex-center">
<div class="css"><label for="svg-info">CSS для SVG зі спрайту</label>
<textarea wrap="hard" cols="36" spellcheck="false" id="svg-info">.icon-cat3 {
  fill: #272822;
  width: 200px; height: 200px;
}</textarea>
</div>
<div class="css"><label for="icon-info">CSS для символа шрифту</label>
<textarea wrap="hard" cols="36" spellcheck="false" id="icon-info">.icon-cat3 {
  color: #272822;
  font-size: 200px;
}</textarea>
</div>
</div>
<p>Ідея створення онлайн-декоратора іконок не нова: подібний функціонал мені вперше зустрівся <a href="https://css-tricks.com/examples/IconFont/">на CSS Tricks</a>. На відміну від поперед&#173;ника, скрипт з цього посту засто&#173;совує стилі до SVG та працює без JQuery. Баги, на які буде вказано, спробую випра&#173;вити, тому без коливань перелічуйте їх у коментах.</p>
<p>Сподіваюся, щось зі сказаного стане читачеві у пригоді. Зустрінемося на інших сторінках!</p>
</div>
<script src="/assets/post-on-icons/iconDecorator.min.js" defer></script>