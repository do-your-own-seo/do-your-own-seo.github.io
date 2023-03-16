---
layout: post
i18n-link: manga
lang: ru
locale: ru 

 
date: 2020-02-09T18:02:00Z
last_modified_at: 2022-08-20T20:00:00Z

title: "SVG иконки из PNG комикса: создаем кастомный шрифт из манги"
tags: [Images, SVG, Content, JavaScript, SEO]
description: "Контент &#8211; король, а оформление &#8211; свита! Создаем SVG-иконки из PNG и применяем CSS-эффекты &#10004; Генерируем Веб-шрифт и SVG-спрайт &#10004; Статья с кастомными иконками убедительнее простыни текста!"
keywords: "пользовательский svg шрифт из png"
schema: HowTo 
styles: /assets/post-on-icons/manga.css
code_amount: 2

h1: "Необычный иконочный шрифт &#8211; легко! Переводим PNG в мини-SVG и создаем веб-шрифт (или SVG-спрайт, на выбор)"
snippet_header: "Иконочный шрифт ручной работы: обновляем поблекшие от времени статьи"

snippet: "Как конвертировать цветной PNG в SVG иконку, никогда не работав с векторной графикой. Как собрать из иконок веб-шрифт, стилизовать с помощью CSS и использовать на сайте"

image: "how-to-create-manga-icon-font.jpg"
---
<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">SVG-иконка из PNG за 9 шагов</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Иконочный шрифт из SVG: стоит ли?</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2.1">&bullet;&ensp;Чем генерировать: Fontello vs IcoMoon</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3">Как применять иконки из шрифта и SVG-спрайта</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3.1">&bullet;&ensp;CSS-стилизация иконок&nbsp;<span class="red">&#42;интерактив</span></a></li>
</ul>
<div>
<p>Зачем нужен свой иконочный шрифт, когда их и так достаточно? Для создания уникального интерфейса и придания колорита контенту. К примеру, дизай&#173;нерский алфавит можно исполь&#173;зовать для <b>буквиц</b>, выделяя ими начало раздела. Пиктограммы с маскотом (талисманом сайта) могут провести пользователя к целевой странице. Наконец, с помощью темати&#173;ческих иконок легко привлечь внимание к ключевым пунктам статьи.</p>
<p class="txt-center"><img src="/images/posts/celtic-and-slavic-initial-letters.jpg" alt="Кельтская и древнеславянская буквицы" loading="lazy" width="510" height="270"><br>
<small>Кельтская (слева) и славянская буквицы</small></p>
<p></p> 
<p>В сегодняшнем посте мы создадим коллек&#173;цию черно-белых SVG-символов и научимся стили&#173;зовать их в CSS. При этом материал будет полезен и тем, кому нужны красочные векторные иконки. Всё потому, что исполь&#173;зуемые здесь инструменты работают и с цветными PNG/SVG.</p>
<blockquote>Усилия будут вознаграждены. Ведь шансы, что юзер <strong>задержится на странице</strong> и <strong>кликнет</strong> необычную иконку, возрастают. 
  А с ними и <strong>SEO характеристики веб-сессии</strong>, и, вероятнее всего, ваше положение в поисковой выдаче  (<a href="{{site.url}}/kak-rabotajut-algoritmy-google">больше о факторах ранжирования тут</a>).</blockquote> 
</div>
<div>
<h2 id="1" itemprop="name">Как создать SVG-иконку из PNG</h2>
<meta itemprop="image" content="{{site.url}}/assets/post-on-icons/result-thumbnail.svg" >
<p itemprop="description">Задача &#8211; конвертировать PNG в одно&#173;цвет&#173;ный, но выразительный SVG малого веса. К счастью, для ее выпол&#173;нения не обя&#173;за&#173;телен опыт работы с векторной графикой.</p>
<p>В общих чертах, логика простая. Чем контра&#173;стнее переходы цвета, чем чётче и плавнее контуры PNG, тем лучше получится SVG. Но мы не ищем легких путей: мы будем делать иконки с персонажами манги!</p>
<blockquote>Кто не в курсе, <b>манга</b> – это рисованные истории: типа комиксов, но не обяза&#173;тельно смешные. Бывают грустные, трога&#173;тельные, жестокие – какие угодно. Роди&#173;лась манга в Японии, но сейчас ее рисуют повсюду; по мотивам популярных серий пишут романы и выпускают аниме.</blockquote>
<p>Условимся пользоваться только <span class="under">бесплат&#173;ными инст&#173;рументами</span> (варианты будут пред&#173;ложены по ходу действия):</p>
<ul>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">редактор PNG</span></span> с поддержкой прозрачного фона;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">конвертер PNG в SVG</span></span>;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">оптимизатор SVG</span></span> для уменьшения веса файла.</li>
</ul>
<p>&#171;Иконизировать&#187; для примера будем сразу две картинки:</p>
<p class="txt-center"><img loading="lazy" src="/images/posts/before_1.png" alt="PNG-исходник №1" width="400" height="400"> &thinsp; <img loading="lazy" src="/images/posts/before_2.png" alt="PNG-исходник №2" width="400" height="400"></p>
<p>Эти и другие исходники были скачаны с бесплатных сайтов <b>hiclipart.com</b>, <b>imgbin.com</b>, <b>pngocean.com</b>, <b>pngguru.com</b>. Но в сети есть и другие ресурсы, так что выбор велик.</p>
<p>У вас уже есть <span itemprop="supply" itemtype="http://schema.org/HowToSupply" itemscope><span itemprop="name">подходящий PNG</span></span>? Тогда дей&#173;ствуем по плану. Можно сразу перейти к <a href="{{ site.url }}{{ page.url }}#p_5">пункту&nbsp;5</a>, но для наилучшего результата желательно немного пора&#173;ботать с рисунком.</p>
<ol class="emphasis">
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Откройте PNG в онлайн-редакторе изо&#173;бражений (<a href="https://pixlr.com/editor/">pixlr.com</a>, <a href="https://www7.lunapic.com/editor/">lunapic.&#173;com</a> и др.) или на компьютере.</span>
    <ol type="A">
      <li><span>Кадрируйте картинку в отношении 1:1.</span></li>
      <li><span>Повысьте контрастность.</span></li>
      <li><span>Избавьтесь от мелких деталей.</span></li>
    </ol>
    <meta itemprop="name" content="Подготовка и кадрирование PNG" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Выделите светлые области, которые дол&#173;жны быть белыми на SVG, и очистите их: они должны стать пустыми (возможно, где-то придется дори&#173;совать границу). Это поз&#173;волит добиться большей четкости конту&#173;ров на SVG.</span>
    <meta itemprop="name" content="Обработка светлых участков" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Взгляните на темные области: если внутри имеются более светлые фрагменты, конвертер может решить, что они «белые». Лучше закрасить их темным вручную, причем красота не особо важна: главное, чтобы контуры не пострадали. Сохраните полученный PNG. Он будет выглядеть при&#173;мерно так:</span>
    <ul class="nobullets oneline txt-center"><li><img loading="lazy" src="/images/posts/after-the-3rd-step_1.jpg" alt="Png №1 после 3-го шага" width="400" height="400"> &thinsp; </li><li><img loading="lazy" src="/images/posts/after-the-3rd-step_2.jpg" alt="Png №2 после 3-го шага" width="400" height="400"></li></ul>
    <meta itemprop="name" content="Проверка темных участков" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Уменьшьте картинку до 200x200px: для нашего способа это обеспечит разумный баланс между детализацией и весом SVG-файла. Снова повысьте контрастность и сохраните файл <span class="u">под именем 200x200</span>.png.</span>
    <meta itemprop="name" content="Ресайз PNG для конвертации" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text" id="p_5">Перейдите на сайт PNG &#10132; SVG конвер&#173;тера. Рекомендую бесплатный сервис <a href="https://www.pngtosvg.com">pngtosvg.&#173;com</a>: он не требует настроек и выдает SVG-файл с чистым кодом. Но мож&#173;но выбрать и другой конвертер, если есть предпочтения.</span>
    <meta itemprop="name" content="Выбор конвертера PNG в SVG" >
    <meta itemprop="url" content="{{site.url}}{{page.url}}#p_5" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">На pngtosvg.com сократите палитру до 1 цвета (по умолчанию их 5), загрузите свой файл и сгенерируйте SVG.</span>
    <meta itemprop="name" content="Настройка конвертера" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Если не устраивает качество, подредак&#173;тируйте 200x200.png (будет видно, что улуч&#173;шать) или соз&#173;дайте из большого PNG файл 300x300.png и заново пройдите п.&#8201;6. Новый SVG будет аккуратнее, но и тяжелее.</span>
    <meta itemprop="name" content="Что делать, если качество не устраивает" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Остается поблагодарить сайт-конвертер и сохра&#173;нить результат конверти&#173;рования. Но расслаб&#173;ляться рано: размер файла мож&#173;но существенно уменьшить!</span>
    <meta itemprop="name" content="Финальная конвертация PNG" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Идем на сайт <a href="https://jakearchibald.github.io/svgomg/" rel="noopener" target="_blank">оптимизатора SVGOMG</a>. Загружаем свой файл, в настройках устана&#173;вливаем нулевую точность (Precision&thinsp;=&thinsp;0) и снимаем галочку с Remove&thinsp;viewBox. Боль&#173;ше ничего не делаем: резуль&#173;тат появится авто&#173;мати&#173;чески. Всё: пригодный для иконки черно-белый SVG готов!</span>
    <ul class="nobullets oneline txt-center">
      <li><svg width="210" height="210" role="img" aria-label="Результат после 9 шагов: иконка с кошкой"><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat2"/></svg> &emsp; </li> 
      <li><svg width="210" height="210" role="img" aria-label="SVG весом менее 3 кб: лицо мальчика"><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero1"/></svg></li>
    </ul>
    <meta itemprop="name" content="Оптимизация полученного SVG" >
  </li>
</ol>
<p>Вот что у нас получилось: вес файлов <span class="under">– 2,05&thinsp;КБ и 2,75&thinsp;КБ </span>(будет еще меньше, если вклю&#173;чить GZIP-сжатие для SVG). До оптимизации было 7,6&thinsp;КБ и 10,3&thinsp;КБ, то есть оба файла похудели <span class="under">примерно в 3.7 раза</span>!</p>
<p>А вот <a href="/assets/post-on-icons/improper_1.svg" rel="nofollow">что вышло бы</a>, если бы мы скон&#173;вертировали котофея в SVG без подготовки и не обработали бы результат: лишние 20&thinsp;КБ + очевидная непригод&#173;ность к использова&#173;нию. Исходник с мальчиком контра&#173;стнее, поэтому и SVG из него <a href="/assets/post-on-icons/improper_2.svg" rel="nofollow">получился бы</a> более отчет&#173;ливым, но тоже перегруженным деталями.</p>
</div>
<div>
<h2 id="2">Веб-шрифт из SVG иконок: соби&#173;раем, взвешиваем За и Против</h2>
<p>У меня готовы 11 манга-иконок в формате SVG: <a href="https://github.com/do-your-own-seo/icons">вот они</a>. Почему бы не собрать из них люби&#173;тельский веб-шрифт? К слову, в ком&#173;ментах поощряются ссыл&#173;ки на другие кол&#173;лекции SVG в бесплатном доступе.</p> 
<blockquote>Шрифт – не единственный вариант испо&#173;льзова&#173;ния иконок: SVG можно подклю&#173;чить из файла или &#171;вшить&#187; в код HTML. Допустимо также применять <a href="{{ site.url }}{{ page.url }}#3">SVG-спрайты</a>. То есть способов много, но каждый имеет недостатки.</blockquote>
<p>Что можно сказать в защиту веб-шрифта?</p>
<ul class="featured plus">
  <li>Не засоряет разметку. Чтобы внутри &lt;span&gt; появилась иконка, достаточно присвоить тегу нужный класс.</li>
  <li>Легко дополнить самодельными SVG, к при&#173;меру, Font Awesome и сгенерировать расширен&#173;ный шрифт.</li>
  <li>К иконкам применимы те же CSS-эффек&#173;ты, что к окружающему тексту (тень, гради&#173;ент цвета и пр.).</li>
</ul>
<p>Что против?</p>
<ul class="featured minus">
<li>Загрузка веб-шрифта может снижать произ&#173;во&#173;дительность сайта и задерживать вывод текста.</li>
<li>Иконочные шрифты не отображаются в браузере Opera Mini (встречается реже, чем на 2% устройств).</li>
</ul>
<p>Однако в нашем случае главный недостаток не так страшен. Кастомный шрифт будет разме&#173;щен на том же серве&#173;ре, что и весь сайт: тогда браузеру клиента не придется допол&#173;нительно устанавливать соеди&#173;нение с CDN. К тому же более&#160;80% браузеров <a href="https://caniuse.com/#search=preload">поддержи&#173;вают preload</a> – пред&#173;загрузку кешируемых ресурсов, в том числе шрифтов.</p>
<p>Итак, если для организации иконок выбран шрифт, продол&#173;жаем. В ином случае <a href="{{ site.url }}{{ page.url }}#3">прыгаем через раздел</a>.</p>
<h3 id="2.1">Генераторы шрифтов в работе: IcoMoon App против Fontello</h3>
<p>Вот два простых в применении, но почти магических приложения для генерации шри&#173;фтов: <b><a href="https://icomoon.io/app/">IcoMoon</a></b> и <b><a href="https://fontello.com">Fontello</a></b>.</p>
<table class="txt-center"><caption><small><em>Таблица-сравнение генераторов веб-шрифтов Fontello и IcoMoon App</em></small></caption>
   <tr><th><img src="/assets/post-on-icons/icomoon-logo.jpg" alt="IcoMoon App logo" loading="lazy" width="133" height="48"></th><th><img src="/assets/post-on-icons/fontello-logo.jpg" alt="Fontello logo" loading="lazy" width="81" height="48"></th></tr>
  <tbody>
    <tr><td>Платная и бесплатная версии</td><td>Бесплатный, Open source</td></tr>
    <tr><td colspan="2">Для скачивания шрифта не нужна регистрация</td></tr>
    <tr><td colspan="2">Можно комбинировать готовые иконки и собственные SVG в одном шрифте</td></tr>
    <tr><td>Базовое редакти&#173;рование иконок</td><td>------</td></tr>
    <tr><td>------</td><td>Иногда &#171;не видит&#187; SVG, пока не обратишь path <b>:(</b></td></tr>
    <tr><td>------</td><td>API для разработчиков</td></tr>
    <tr><td>Возможность ска&#173;чать иконки в PNG</td><td>------</td></tr>
    <tr><td>WOFF2 только в платной версии</td><td>Поддержка WOFF2</td></tr>
  </tbody>
</table>
<p>А вот ссылки на оригинальные руководства по созданию шрифтов: <a href="https://icomoon.io/#docs/importing">IcoMoon docs</a> и <a href="https://github.com/fontello/fontello/wiki/How-to-create-my-own-font">Fontello wiki</a> (оба на англ.). Я намечу лишь основные этапы для тех, кто не намерен углубляться в детали.</p>
<ol start="10" class="emphasis">
  <li><span>Выбираем приложение и заходим на сайт. Присматриваемся к готовым бесплат&#173;ным иконкам: возможно, какие-то из них приго&#173;дятся. Выделяем нужные.</span></li>
  <li><span><strong class="u">Для Fontello</strong>: перетаскиваем SVG-файлы в &#171;приемник&#187; в разделе  <em>Custom Icons</em>. <strong class="u">Для IcoMoon</strong>: на панели навигации находим кнопку <em>Import Icons</em> и загружаем SVG. Выделяем новые иконки.</span></li>
  <li><span><strong class="u">Для Fontello</strong>: слева от кнопки <em>Download</em> вводим название шрифта и проверяем на&#173;стройки. Если иконки должны заменить буквы или другие стан&#173;дартные символы, во вкладке <em>Customize Codes</em> ука&#173;зываем нужные кодовые позиции (U-codepoint). <strong class="u">Для Ico&#173;Moon</strong>: нажав на карандаш в верх&#173;ней панели, оказы&#173;ваемся в окне редактора иконок. Наиг&#173;рав&#173;шись, жмем <em>Generate Font</em> и запол&#173;няем <em>Pre&#173;ferences</em>. Если нужно, меняем codepoints.</span>
    <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/navbars.jpg" alt="Панели навигации приложений" width="758" height="183"></li><li><small>&#171;Шапка&#187; приложений Fontello (вверху) и IcoMoon</small></li></ul>
  </li>
  <li><span>Если все устраивает, жмем <em>Download</em>. В архиве будет папка со шрифтами (.eot, .svg, .ttf, .woff + .<span class="u">woff2 у Fontello</span>), JSON с инфор&#173;мацией о выде&#173;ленных иконках, CSS-файлы и demo.html с приме&#173;рами использования.</span>
  <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/icomoon-vs-fontello.jpg" alt="Содержимое архивов, генерируемых fontello и icomoon" width="410" height="280"></li><li><small>Разница в весе шрифтов, сгенерированных Fontello и IcoMoon: .eot и .ttf меньше у IcoMoon, .svg – у Fontello</small></li></ul>
  </li>
  <li><span>Предпочтительный формат шрифта для совре&#173;менных браузеров ­– .woff2. Если вы восполь&#173;зовались бес&#173;платной версией Ico&#173;Moon, придется поискать WOFF &#10132; WOFF2 конвертер. <a href="https://everythingfonts.com/woff-to-woff2">Вот этот</a> – работа&#173;ет. Сохраняем .woff2 в папку с другими фор&#173;матами и все, шрифт можно подклю&#173;чать!</span></li>
</ol>
<p>Оба шрифта выложены на GitHub, архивы можно скачать по ссылкам <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-icomoon.zip">icomoon-Manga</a></b> и <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-fontello.zip">fontello-Manga</a></b>.</p>
</div>
<div>
<h2 id="3">HTML + CSS для иконок из SVG-спрайтов и веб-шрифтов</h2>
<p>Пришло время продемонстрировать упомя&#173;нутые манга-иконки. Они собраны в <strong>спрайте</strong> – едином SVG-файле в тегах <code>&lt;symbol&#8201;id="icon-name"&#8201;viewBox="_"&gt;&lt;/symbol&gt;</code>, а на странице выве&#173;дены как</p>
{%- highlight html -%}<svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-name"/></svg>{% endhighlight %}
<div id="svgs" class="iconset flex-wrap flex-center" data-size="52" title="Увеличить/Уменьшить" role="img" aria-label="Иконки с котами и персонажами манги">
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
<p>Пусть это не самый кроссбраузерный способ (см. <a href="https://caniuse.com/#feat=mdn-svg_elements_use_external_uri" rel="nofollow">browser support</a>), зато не раздут объем документа. Впрочем, если картинки нужны для единственной статьи и их не слишком много, содер&#173;жимое спрайта можно вклю&#173;чить в тело &lt;html&gt;. Тогда ссылки на отдельные иконки сократятся до <code>&lt;svg&gt;&lt;use&thinsp;xlink:href=&#173;"#icon-name"/&gt;&lt;/svg&gt;</code>.</p>
<p class="danger"><b>NB!</b> Не могу ручаться, что сайты, с которых взяты PNG, щепетильны в отношении авторских прав. Если правооб&#173;ладатель картинки узнает ее в одном из SVG и будет против его распро&#173;странения, вот <a href="https://contact.do/44CB" rel="nofollow">форма для обращений</a>.</p>
<p>Следом стоило бы вывести те же иконки как элементы web-шрифта, но мне жаль нагру&#173;жать страницу. Пусть моде&#173;лью послужит иконочный шрифт, который использу&#173;ется на сайте: по его примеру легко подклю&#173;чить манга-шрифт.</p>
<div class="iconset flex-wrap flex-center" role="img" aria-label="Иконки стандартного веб-шрифта">
  <i class="icon icon-pencil"></i><i class="icon icon-menu"></i><i class="icon icon-key"></i><i class="icon icon-envelop"></i><i class="icon icon-attachment"></i><i class="icon icon-bubbles4"></i><i class="icon icon-mobile"></i><i class="icon icon-search"></i><i class="icon icon-twitter"></i><i class="icon icon-github"></i><i class="icon icon-facebook"></i>
</div>
<p>Каждый элемент здесь представляет собой <code>&lt;i&nbsp;class="icon icon-name"/&gt;&lt;i&gt;</code>, для кото&#173;рого в стилях прописано:</p>
{%- highlight CSS -%} {%- raw -%}
@font-face {font-family:"fontName"; src:url(__) format(__)}
.icon {font-family:"fontName"; font-style:normal}
.icon-name::before {content:"__"} /* Hex for Unicode */{% endraw %}{% endhighlight %}
<p>Из списка классов <code>&lt;i&nbsp;class=".."/&gt;&lt;i&gt;</code> при желании можно удалить icon: тогда CSS-селектор <code>.icon</code>&thinsp; заменится на</p>
<p class="txt-center"><code>[class^="icon-"],[class*=" icon-"]</code>.</p> 
<blockquote>Поскольку иконки не содержат текста, нужно позаботиться об адекватном их <strong>прочтении скрин&#173;ридерами</strong>.</blockquote>
<p>Если значок имеет смысло&#173;вую нагрузку, придется снабдить его ролью (role) и описа&#173;нием (aria-label). Декоратив&#173;ные иконки доста&#173;точно скрыть от ассис&#173;тивных уст&#173;ройств посредством атрибута aria-hidden.</p> {% highlight html %}
<svg role="img" aria-label="Описание">...</svg>
<i class="icon-name" role="button" aria-label="Действие"></i>
<i class="icon-name" aria-hidden="true"></i>{% endhighlight %}
<p>Если же новый шрифт – это просто алфавит, кото&#173;рый используется для буквиц, то <code>.icon</code> в CSS стоит заменить селектором 
<code>p:first-of-type::first-letter</code> (загла&#173;вная буква перво&#173;го абзаца раздела). Значение <code>::before</code>&thinsp; при этом задавать не нужно.</p>
<h3 id="3.1" class="red">Стилизация иконок: применяем CSS-эффекты</h3>
<p>Для редактирования можно выбрать любую из иконок manga: для этого введите ее имя вместо <code>icon-cat</code>. Картинка будет преобра&#173;жаться при изме&#173;нении CSS-свойств.</p>
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
        <div id="hide-palette" class="red"><b title="Скрыть палитру" class="option">Close</b><b class="option hidden">Palette</b></div>
      </div>
      <div class="option"><label>Цвет тени <input type="text" value="rgba(0,0,0,.3)" name="shadowColor"></label></div>
    </div>
    <div class="flex-wrap flex-center">
      <input type="text" value="icon-cat3" class="txt-center" id="select-icon" title="Icon">
      <div id="flip">
        <label class="switch"> <input type="checkbox" title="Flip"> <span class="slider"></span> </label>
      </div>
      <div>
        <label>Размер иконки <input type="range" id="size-slider" name="size" min="50" max="200" value="200"></label>
      </div>
    </div>
    <div>
      <label for="shadow-1" class="txt-center">&nbsp;Тень:&nbsp; смещение по X,&nbsp; смещение по Y,&nbsp; радиус размытия</label>
      <div class="flex-wrap flex-center">
        <input type="range" id="shadow-1" value="0" step="0.5" min="-10" max="10" class="shadow-slider" title="X">
        <input type="range" id="shadow-2" value="0" step="0.5" min="-10" max="10" class="shadow-slider" title="Y">
        <input type="range" id="shadow-3" value="0" min="0" max="10" class="shadow-slider" title="Blur">
      </div>
    </div>
  </div>
</div>
<p>При редактировании в текстовых областях ниже будет обнов&#173;ляться CSS-код.</p>
<div class="flex-wrap flex-center">
<div class="css"><label for="svg-info">CSS для отдельной SVG иконки</label>
<textarea wrap="hard" cols="36" spellcheck="false" id="svg-info">.icon-cat3 {
  fill: #272822;
  width: 200px; height: 200px;
}</textarea>
</div>
<div class="css"><label for="icon-info">CSS для символа шрифта</label>
<textarea wrap="hard" cols="36" spellcheck="false" id="icon-info">.icon-cat3 {
  color: #272822;
  font-size: 200px;
}</textarea>
</div>
</div>
<p>Идея онлайн-декоратора иконок не нова: похожий функционал впервые встретился мне <a href="https://css-tricks.com/examples/IconFont/">на CSS Tricks</a>. В отличие от предшест&#173;венника, здешний декоратор применяет стили к SVG и работает без JQuery. Заме&#173;ченные баги поста&#173;раюсь исправить, так что не колеблясь перечисляйте их в комментах.</p>
<p>Надеюсь, что-то из сказанного читателю приго&#173;дится. Буду рада встрече на других страницах!</p>
</div>
<script src="/assets/post-on-icons/iconDecorator.min.js" defer></script>