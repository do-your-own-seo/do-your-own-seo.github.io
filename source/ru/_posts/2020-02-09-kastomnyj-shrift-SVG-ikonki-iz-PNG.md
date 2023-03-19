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
<p>Зачем нужен свой иконочный шрифт, когда их и так достаточно? Для создания уникального интерфейса и придания колорита контенту. К примеру, дизайнерский алфавит можно использовать для <b>буквиц</b>, выделяя ими начало раздела. Пиктограммы с маскотом (талисманом сайта) могут провести пользователя к целевой странице. Наконец, с помощью тематических иконок легко привлечь внимание к ключевым пунктам статьи.</p>
<p class="txt-center"><img src="/images/posts/celtic-and-slavic-initial-letters.jpg" alt="Кельтская и древнеславянская буквицы" loading="lazy" width="510" height="270"><br>
<small>Кельтская (слева) и славянская буквицы</small></p>
<p></p> 
<p>В сегодняшнем посте мы создадим коллекцию черно-белых SVG-символов и научимся стилизовать их в CSS. При этом материал будет полезен и тем, кому нужны красочные векторные иконки. Всё потому, что используемые здесь инструменты работают и с цветными PNG/SVG.</p>
<blockquote>Усилия по созданию шрифта будут вознаграждены. Ведь шансы, что юзер <strong>задержится на странице</strong> и <strong>кликнет</strong> необычную иконку, возрастут. 
  А с ними и <strong>SEO характеристики веб-сессии</strong>, и, вероятно, ваше положение в поисковой выдаче  (<a href="{{site.url}}/kak-rabotajut-algoritmy-google">больше о факторах ранжирования тут</a>).</blockquote> 
</div>
<div>
<h2 id="1" itemprop="name">Как создать SVG-иконку из PNG</h2>
<meta itemprop="image" content="{{site.url}}/assets/post-on-icons/result-thumbnail.svg" >
<p itemprop="description">Задача &#8211; конвертировать PNG в одноцветный, но выразительный SVG малого веса. К счастью, для ее выполнения не нужен опыт работы с векторной графикой.</p>
<p>В общих чертах, логика простая. Чем контрастнее переходы цвета, чем чётче и плавнее контуры PNG, тем лучше получится SVG. Но мы не ищем легких путей: мы будем делать иконки из манги!</p>
<blockquote>Кто не в курсе, <b>манга</b> – это рисованные истории: типа комиксов, но не обязательно смешные. Бывают грустные, трогательные, жестокие – какие угодно. Родилась манга в Японии, но сейчас ее рисуют повсюду; по мотивам популярных серий пишут романы и выпускают аниме.</blockquote>
<p>Условимся пользоваться только <span class="under">бесплатными инструментами</span> (варианты будут предложены по ходу действия):</p>
<ul>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">редактор PNG</span></span> с поддержкой прозрачного фона;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">конвертер PNG в SVG</span></span>;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">оптимизатор SVG</span></span> для уменьшения веса файла.</li>
</ul>
<p>&#171;Иконизировать&#187; для примера будем сразу две картинки:</p>
<p class="txt-center"><img loading="lazy" src="/images/posts/before_1.png" alt="PNG-исходник №1" width="400" height="400"> &thinsp; <img loading="lazy" src="/images/posts/before_2.png" alt="PNG-исходник №2" width="400" height="400"></p>
<p>Эти и другие исходники были скачаны с бесплатных сайтов <b>hiclipart.com</b>, <b>imgbin.com</b>, <b>pngocean.com</b>, <b>pngguru.com</b>. Но в сети есть и другие ресурсы, так что выбор велик.</p>
<p>У вас уже есть <span itemprop="supply" itemtype="http://schema.org/HowToSupply" itemscope><span itemprop="name">подходящий PNG</span></span>? Тогда действуем по плану. Можно сразу перейти к <a href="{{ site.url }}{{ page.url }}#p_5">пункту&nbsp;5</a>, но для наилучшего результата желательно немного поработать с рисунком.</p>
<ol class="emphasis">
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Откройте PNG в онлайн-редакторе изображений (<a href="https://pixlr.com/editor/">pixlr.com</a>, <a href="https://www7.lunapic.com/editor/">lunapic.com</a> и др.) или на компьютере.</span>
    <ol type="A">
      <li><span>Кадрируйте картинку в отношении 1:1.</span></li>
      <li><span>Повысьте контрастность.</span></li>
      <li><span>Избавьтесь от мелких деталей.</span></li>
    </ol>
    <meta itemprop="name" content="Подготовка и кадрирование PNG" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Выделите светлые области, которые должны быть белыми на SVG, и очистите их: они должны стать пустыми (возможно, где-то придется дорисовать границу). Это позволит добиться большей четкости контуров на SVG.</span>
    <meta itemprop="name" content="Обработка светлых участков" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Взгляните на темные области: если внутри имеются более светлые фрагменты, конвертер может решить, что они «белые». Лучше закрасить их темным вручную, причем красота не особо важна: главное, чтобы контуры не пострадали. Сохраните полученный PNG. Он будет выглядеть примерно так:</span>
    <ul class="nobullets oneline txt-center"><li><img loading="lazy" src="/images/posts/after-the-3rd-step_1.jpg" alt="Png №1 после 3-го шага" width="400" height="400"> &thinsp; </li><li><img loading="lazy" src="/images/posts/after-the-3rd-step_2.jpg" alt="Png №2 после 3-го шага" width="400" height="400"></li></ul>
    <meta itemprop="name" content="Проверка темных участков" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Уменьшьте картинку до 200x200px: для нашего способа это обеспечит разумный баланс между детализацией и весом SVG-файла. Снова повысьте контрастность и сохраните файл <span class="u">под именем 200x200</span>.png.</span>
    <meta itemprop="name" content="Ресайз PNG для конвертации" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text" id="p_5">Перейдите на сайт PNG &#10132; SVG конвертера. Рекомендую бесплатный сервис <a href="https://www.pngtosvg.com">pngtosvg.com</a>: он не требует настроек и выдает SVG-файл с чистым кодом. Но можно выбрать и другой конвертер, если есть предпочтения.</span>
    <meta itemprop="name" content="Выбор конвертера PNG в SVG" >
    <meta itemprop="url" content="{{site.url}}{{page.url}}#p_5" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">На pngtosvg.com сократите палитру до 1 цвета (по умолчанию их 5), загрузите свой файл и сгенерируйте SVG.</span>
    <meta itemprop="name" content="Настройка конвертера" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Если не устраивает качество, подредактируйте 200x200.png (будет видно, что улучшать) или создайте из большого PNG файл 300x300.png и заново пройдите п.&#8201;6. Новый SVG будет аккуратнее, но и тяжелее.</span>
    <meta itemprop="name" content="Что делать, если качество не устраивает" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Остается поблагодарить сайт-конвертер и сохранить результат конвертирования. Но расслабляться рано: размер файла можно существенно уменьшить!</span>
    <meta itemprop="name" content="Финальная конвертация PNG" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Идем на сайт <a href="https://jakearchibald.github.io/svgomg/" rel="noopener" target="_blank">оптимизатора SVGOMG</a>. Загружаем свой файл, в настройках устанавливаем нулевую точность (Precision&thinsp;=&thinsp;0) и снимаем галочку с Remove&thinsp;viewBox. Больше ничего не делаем: результат появится автоматически. Всё: пригодный для иконки черно-белый SVG готов!</span>
    <ul class="nobullets oneline txt-center">
      <li><svg width="210" height="210" role="img" aria-label="Результат после 9 шагов: иконка с кошкой"><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat2"/></svg> &emsp; </li> 
      <li><svg width="210" height="210" role="img" aria-label="SVG весом менее 3 кб: лицо мальчика"><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero1"/></svg></li>
    </ul>
    <meta itemprop="name" content="Оптимизация полученного SVG" >
  </li>
</ol>
<p>Вот что у нас получилось: вес файлов <span class="under">– 2,05&thinsp;КБ и 2,75&thinsp;КБ </span>(будет еще меньше, если включить GZIP-сжатие для SVG). До оптимизации было 7,6&thinsp;КБ и 10,3&thinsp;КБ, то есть оба файла похудели <span class="under">примерно в 3.7 раза</span>!</p>
<p>А вот <a href="/assets/post-on-icons/improper_1.svg" rel="nofollow">что вышло бы</a>, если бы мы сконвертировали котофея в SVG без подготовки и не обработали бы результат: лишние 20&thinsp;КБ + очевидная непригодность к использованию. Исходник с мальчиком контрастнее, поэтому и SVG из него <a href="/assets/post-on-icons/improper_2.svg" rel="nofollow">получился бы</a> более отчетливым, но тоже перегруженным деталями.</p>
</div>
<div>
<h2 id="2">Веб-шрифт из SVG иконок: собираем, взвешиваем За и Против</h2>
<p>У меня готовы 11 манга-иконок в формате SVG: <a href="https://github.com/do-your-own-seo/icons">вот они</a>. Почему бы не собрать из них любительский веб-шрифт? К слову, в комментах поощряются ссылки на другие коллекции SVG в бесплатном доступе.</p> 
<blockquote>Шрифт – не единственный вариант использования иконок: SVG можно подключить из файла или &#171;вшить&#187; в код HTML. Допустимо также применять <a href="{{ site.url }}{{ page.url }}#3">SVG-спрайты</a>. То есть способов много, но каждый имеет недостатки.</blockquote>
<p>Что можно сказать в защиту веб-шрифта?</p>
<ul class="featured plus">
  <li>Не засоряет разметку. Чтобы внутри &lt;span&gt; появилась иконка, достаточно присвоить тегу нужный класс.</li>
  <li>Легко дополнить самодельными SVG, к примеру, Font Awesome и сгенерировать расширенный шрифт.</li>
  <li>К иконкам применимы те же CSS-эффекты, что к окружающему тексту (тень, градиент цвета и пр.).</li>
</ul>
<p>Что против?</p>
<ul class="featured minus">
<li>Загрузка веб-шрифта может снижать производительность сайта и задерживать вывод текста.</li>
<li>Иконочные шрифты не отображаются в браузере Opera Mini (встречается реже, чем на 2% устройств).</li>
</ul>
<p>Однако в нашем случае главный недостаток не так страшен. Кастомный шрифт будет размещен на том же сервере, что и весь сайт: тогда браузеру клиента не придется дополнительно устанавливать соединение с CDN. К тому же более&#160;80% браузеров <a href="https://caniuse.com/#search=preload">поддерживают preload</a> – предзагрузку кешируемых ресурсов, в том числе шрифтов.</p>
<p>Итак, если для организации иконок выбран шрифт, продолжаем. В ином случае <a href="{{ site.url }}{{ page.url }}#3">прыгаем через раздел</a>.</p>
<h3 id="2.1">Генераторы шрифтов в работе: IcoMoon App против Fontello</h3>
<p>Вот два простых в применении, но почти магических приложения для генерации шрифтов: <b><a href="https://icomoon.io/app/">IcoMoon</a></b> и <b><a href="https://fontello.com">Fontello</a></b>.</p>
<table class="txt-center"><caption><small><em>Таблица-сравнение генераторов веб-шрифтов Fontello и IcoMoon App</em></small></caption>
   <tr><th><img src="/assets/post-on-icons/icomoon-logo.jpg" alt="IcoMoon App logo" loading="lazy" width="133" height="48"></th><th><img src="/assets/post-on-icons/fontello-logo.jpg" alt="Fontello logo" loading="lazy" width="81" height="48"></th></tr>
  <tbody>
    <tr><td>Платная и бесплатная версии</td><td>Бесплатный, Open source</td></tr>
    <tr><td colspan="2">Для скачивания шрифта не нужна регистрация</td></tr>
    <tr><td colspan="2">Можно комбинировать готовые иконки и собственные SVG в одном шрифте</td></tr>
    <tr><td>Базовое редактирование иконок</td><td>------</td></tr>
    <tr><td>------</td><td>Иногда &#171;не видит&#187; SVG, пока не обратишь path <b>:(</b></td></tr>
    <tr><td>------</td><td>API для разработчиков</td></tr>
    <tr><td>Возможность скачать иконки в PNG</td><td>------</td></tr>
    <tr><td>WOFF2 только в платной версии</td><td>Поддержка WOFF2</td></tr>
  </tbody>
</table>
<p>А вот ссылки на оригинальные руководства по созданию шрифтов: <a href="https://icomoon.io/#docs/importing">IcoMoon docs</a> и <a href="https://github.com/fontello/fontello/wiki/How-to-create-my-own-font">Fontello wiki</a> (оба на англ.). Я намечу лишь основные этапы для тех, кто не намерен углубляться в детали.</p>
<ol start="10" class="emphasis">
  <li><span>Выбираем приложение и заходим на сайт. Присматриваемся к готовым бесплатным иконкам: возможно, какие-то из них пригодятся. Выделяем нужные.</span></li>
  <li><span><strong class="u">Для Fontello</strong>: перетаскиваем SVG-файлы в &#171;приемник&#187; в разделе  <em>Custom Icons</em>. <strong class="u">Для IcoMoon</strong>: на панели навигации находим кнопку <em>Import Icons</em> и загружаем SVG. Выделяем новые иконки.</span></li>
  <li><span><strong class="u">Для Fontello</strong>: слева от кнопки <em>Download</em> вводим название шрифта и проверяем настройки. Если иконки должны заменить буквы или другие стандартные символы, во вкладке <em>Customize Codes</em> указываем нужные кодовые позиции (U-codepoint). <strong class="u">Для IcoMoon</strong>: нажав на карандаш в верхней панели, оказываемся в окне редактора иконок. Наигравшись, жмем <em>Generate Font</em> и заполняем <em>Preferences</em>. Если нужно, меняем codepoints.</span>
    <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/navbars.jpg" alt="Панели навигации приложений" width="758" height="183"></li><li><small>&#171;Шапка&#187; приложений Fontello (вверху) и IcoMoon</small></li></ul>
  </li>
  <li><span>Если все устраивает, жмем <em>Download</em>. В архиве будет папка со шрифтами (.eot, .svg, .ttf, .woff + .<span class="u">woff2 у Fontello</span>), JSON с информацией о выделенных иконках, CSS-файлы и demo.html с примерами использования.</span>
  <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/icomoon-vs-fontello.jpg" alt="Содержимое архивов, генерируемых fontello и icomoon" width="410" height="280"></li><li><small>Разница в весе шрифтов, сгенерированных Fontello и IcoMoon: .eot и .ttf меньше у IcoMoon, .svg – у Fontello</small></li></ul>
  </li>
  <li><span>Предпочтительный формат шрифта для современных браузеров ­– .woff2. Если вы воспользовались бесплатной версией IcoMoon, придется поискать WOFF &#10132; WOFF2 конвертер. <a href="https://everythingfonts.com/woff-to-woff2">Вот этот</a> – работает. Сохраняем .woff2 в папку с другими форматами и все, шрифт можно подключать!</span></li>
</ol>
<p>Оба шрифта выложены на GitHub, архивы можно скачать по ссылкам <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-icomoon.zip">icomoon-Manga</a></b> и <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-fontello.zip">fontello-Manga</a></b>.</p>
</div>
<div>
<h2 id="3">HTML + CSS для иконок из SVG-спрайтов и веб-шрифтов</h2>
<p>Пришло время продемонстрировать упомянутые манга-иконки. Они собраны в <strong>спрайте</strong> – едином SVG-файле в тегах <code>&lt;symbol&#8201;id="icon-name"&#8201;viewBox="_"&gt;&lt;/symbol&gt;</code>, а на странице выведены как</p>
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
<p>Пусть это не самый кроссбраузерный способ (см. <a href="https://caniuse.com/#feat=mdn-svg_elements_use_external_uri" rel="nofollow">browser support</a>), зато не раздут объем документа. Впрочем, если картинки нужны для единственной статьи и их не слишком много, содержимое спрайта можно включить в тело &lt;html&gt;. Тогда ссылки на отдельные иконки сократятся до <code>&lt;svg&gt;&lt;use&thinsp;xlink:href="#icon-name"/&gt;&lt;/svg&gt;</code>.</p>
<p class="danger"><b>NB!</b> Не могу ручаться, что сайты, с которых взяты PNG, щепетильны в отношении авторских прав. Если правообладатель картинки узнает ее в одном из SVG и будет против его распространения, вот <a href="https://contact.do/44CB" rel="nofollow">форма для обращений</a>.</p>
<p>Следом стоило бы вывести те же иконки как элементы web-шрифта, но мне жаль нагружать страницу. Пусть моделью послужит иконочный шрифт, который используется на сайте: по его примеру легко подключить манга-шрифт.</p>
<div class="iconset flex-wrap flex-center" role="img" aria-label="Иконки стандартного веб-шрифта">
  <i class="icon icon-pencil"></i><i class="icon icon-menu"></i><i class="icon icon-key"></i><i class="icon icon-envelop"></i><i class="icon icon-attachment"></i><i class="icon icon-bubbles4"></i><i class="icon icon-mobile"></i><i class="icon icon-search"></i><i class="icon icon-twitter"></i><i class="icon icon-github"></i><i class="icon icon-facebook"></i>
</div>
<p>Каждый элемент здесь представляет собой <code>&lt;i&nbsp;class="icon icon-name"/&gt;&lt;i&gt;</code>, для которого в стилях прописано:</p>
{%- highlight CSS -%} {%- raw -%}
@font-face {font-family:"fontName"; src:url(__) format(__)}
.icon {font-family:"fontName"; font-style:normal}
.icon-name::before {content:"__"} /* Hex for Unicode */{% endraw %}{% endhighlight %}
<p>Из списка классов <code>&lt;i&nbsp;class=".."/&gt;&lt;i&gt;</code> при желании можно удалить icon: тогда CSS-селектор <code>.icon</code>&thinsp; заменится на</p>
<p class="txt-center"><code>[class^="icon-"],[class*=" icon-"]</code>.</p> 
<blockquote>Поскольку иконки не содержат текста, нужно позаботиться об адекватном их <strong>прочтении скринридерами</strong>.</blockquote>
<p>Если значок имеет смысловую нагрузку, придется снабдить его ролью (role) и описанием (aria-label). Декоративные иконки достаточно скрыть от ассистивных устройств посредством атрибута aria-hidden.</p> {% highlight html %}
<svg role="img" aria-label="Описание">...</svg>
<i class="icon-name" role="button" aria-label="Действие"></i>
<i class="icon-name" aria-hidden="true"></i>{% endhighlight %}
<p>Если же новый шрифт – это просто алфавит, который используется для буквиц, то <code>.icon</code> в CSS стоит заменить селектором 
<code>p:first-of-type::first-letter</code> (заглавная буква первого абзаца раздела). Значение <code>::before</code>&thinsp; при этом задавать не нужно.</p>
<h3 id="3.1" class="red">Стилизация иконок: применяем CSS-эффекты</h3>
<p>Для редактирования можно выбрать любую из иконок manga: для этого введите ее имя вместо <code>icon-cat</code>. Картинка будет преображаться при изменении CSS-свойств.</p>
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
<p>При редактировании в текстовых областях ниже будет обновляться CSS-код.</p>
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
<p>Идея онлайн-декоратора иконок не нова: похожий функционал впервые встретился мне <a href="https://css-tricks.com/examples/IconFont/">на CSS Tricks</a>. В отличие от предшественника, здешний декоратор применяет стили к SVG и работает без JQuery. Замеченные баги постараюсь исправить, так что не колеблясь перечисляйте их в комментах.</p>
<p>Надеюсь, что-то из сказанного читателю пригодится. Буду рада встрече на других страницах!</p>
</div>
<script src="/assets/post-on-icons/iconDecorator.min.js" defer></script>