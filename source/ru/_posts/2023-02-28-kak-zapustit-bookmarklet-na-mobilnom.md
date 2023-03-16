---
layout: post
i18n-link: bookmark
lang: ru
locale: ru 

date: 2023-02-28T10:11:00Z
last_modified_at: 2023-02-28T10:11:00Z

title: "Как пользоваться букмарклетами в мобильном браузере"
tags: [JavaScript, Bookmarklets, On-page, SEO]
description: "Вы знали, что JavaScript закладки работают и на смартфоне? Но нужно уметь запустить букмарклет в контексте текущей страницы. Браузеры Chrome, Edge, Firefox и "
keywords: "букмарклеты на мобильном"
schema: FAQPage
code_amount: 1

h1: "Как запустить SEO букмарклет на Android, iOS? Зависит от браузера"
snippet_header: 'Как заставить SEO букмарклеты работать из "Favorites" на мобильном'

snippet: "Правда, несправедливо, что JavaScript закладки из предыдущих постов можно запустить только на ПК? Неправда! Букмарклеты работают и на мобильном"

image: "use-JS-bookmarklets-on-mobile.jpg"
---

<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">Как добавить скрипт в закладки на мобильном</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Как пользоваться букмарклетом</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">SEO букмарклет не работает: причины</a></li>
</ul>
<div>
  <p>На мысль написать гид по исполь&#173;зованию мобильных букмарклетов меня натолкнул комментарий под постом <a href="{{site.url}}/idealnyj-snippet-v-google-vydache#comments">о расширенных сниппетах</a>: речь шла о том, что букмарклеты не работают на <strong>Android устройстве</strong>. Такое бывает. Хорошая новость в том, что в этом виновата не OS, а браузер, который легко сменить.</p>
 <p class="txt-center">
  <picture>
    <source srcset="/images/posts/wp/{{ page.image | split: '.' | first }}.webp" type="image/webp">
    <source srcset="/images/posts/{{ page.image }}" type="image/jpeg">
    <img src="/images/posts/{{ page.image }}" alt="В каких мобильных браузерах работают букмарклеты" class="webfeedsFeaturedVisual" width="680" height="350">
  </picture>
 </p>
  <p>Сразу скажу, что заставить JS-закладки работать в <strong>Safari на iPhone</strong> и в <strong>Opera на Android</strong> (полная версия) у меня не вышло. И если <strong>Safari</strong> хотя бы уведомил, что запускать скрипты таким образом запрещено, то <strong>Опера</strong> просто не делала ничего, при отключенной блокировке рекламы и с разрешенными всплывающими окнами. Однако другие мобильные браузеры <span class="under">успешно выполняют JavaScript</span> в контексте страницы.</p>
  <p>Здесь рассмотрены <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong>, <strong>Mozilla Firefox</strong>, <strong>Opera Mini</strong> и <strong>DuckDuckGo</strong>. И вы ни за что не догадаетесь, который из них умеет все (и это не Chrome)!</p>
</div>
<div><h2 id="1">Как сохранить букмарклет в закладках мобильного браузера</h2>
  <p>На ПК это легко: достаточно перетащить ссылку на панель закладок. Отсюда, <span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><meta itemprop="name" content="Как сохранить букмарклет в закладках на мобильном?"><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">простейший способ создать JS закладку в телефоне – это включить в своем аккаунте синхронизацию мобильного и десктопного браузеров. Если для вас это неприемлемо, остаются два способа.</span></span></span></p>
  <h3>Сохранить адрес из контекстного меню ссылки</h3>
  <p>В браузерах на основе <strong>Chromium</strong> (Chrome, Opera, обновленный Edge) можно нажать на букмарклет в тексте и выбрать "Сохранить адрес" в появившемся меню. Но в Mozilla Firefox (Quantum) и др. браузерах при удерживании JavaScript-ссылки контекстное меню не появляется. Проверьте на этом букмарклете: <a href="javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&amp;&amp;(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()" class="red">Title-description-keys-canonical</a>.</p>
  <h3>Скопировать программный код из источника</h3>
  <p>А вот код того букмарклета. Выделите все и поместите в буфер обмена: <textarea rows="2" data-nosnippet aria-label="code">javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&amp;&amp;(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()</textarea></p>
  <p>Теперь нужно сохранить закладку со скопированным адресом. В <strong>Opera Mobile и Opera Mini</strong> можно создать новую (пустую) закладку и спокойно сохранить скрипт. В других браузерах вам придется отправить в Избранное любую обычную страницу, а после заменить URL.</p>
  <blockquote>Важно дать скрипту короткое, но необычное имя (дальше будет ясно, почему).<br> Сохранять JavaScript в закладках можно БЕЗ предварительной минификации, если он не слишком длинный.</blockquote>
  <p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-p.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-p.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-p.jpg" alt="Создать закладку в Opera" width="285" height="435" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-q.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-q.jpg" type="image/jpeg">
         <img class="border" src="/images/posts/screenshot-q.jpg" alt="Редактировать закладку" width="295" height="435" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-r.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-r.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-r.jpg" alt="Не минифицированный скрипт в href ссылки" width="285" height="435" loading="lazy">
    </picture>
   </p>
</div>
<div><h2 id="2">Как пользоваться JavaScript букмарклетом на смартфоне</h2>
<p>Загвоздка в том, что вызвать скрипт <strong>из закладок</strong> можно только в <strong>Opera Mini</strong> и <strong>DuckDuckGo</strong>. В <strong>Chrome, Firefox</strong> и др. браузерах букмарклет не сработает, так как не будет знать, откуда его вызвали.</p>
<p>Чтобы выполнить скрипт в контексте текущей страницы, нужно вызвать его <strong>из адресной строки</strong> браузера. Начните набирать название букмарклета, и в какой-то момент в выпадающих подсказках появится ваша JavaScript закладка. Клик на этой строке запустит скрипт на выполнение.</p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-z.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-z.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-z.jpg" alt="Выберите имя скрипта в подсказках омнибокса" width="290" height="443" loading="lazy">
    </picture>
        <picture>
        <source srcset="/images/posts/wp/screenshot-x.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-x.jpg" type="image/jpeg">
         <img class="border" src="/images/posts/screenshot-x.jpg" alt="Букмарклет извлекает информацию из head текущей страницы" width="295" height="443" loading="lazy">
    </picture>
</p>
<p>Чем необычнее было имя закладки, тем выше она будет в подсказках omnibox.</p> <p>Подведем итог: сравним пригодность мобильных браузеров к работе с JavaScript букмарклетами.</p>
<table class="txt-center"><caption><small>Аспекты работы с JS букмарклетами в разных браузерах</small></caption>
  <tr>
    <th class="vert">Адрес в контекст-меню</th>
    <th class="vert">Создание новой закладки</th>
    <th class="vert">Запуск из адресной строки</th> 
    <th class="vert">Запуск из Избранного</th>
    <th class="vert">Разрешение Pop-ups</th>
    <th class="vert"> </th>  
  </tr>
  <tbody>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Chrome</b></td>
    </tr>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Ms Edge</b></td>
    </tr>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="No" class="red">—</b></td><td><b>Opera</b></td>
    </tr>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Opera mini</b></td>
    </tr>
    <tr>
        <td><b aria-label="No" class="red">—</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Firefox</b></td>
    </tr>
    <tr>
        <td><b aria-label="No" class="red">—</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b>DuckDuckGo</b></td>
    </tr>  
  </tbody>
</table>
<blockquote><span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><meta itemprop="name" content="Какой мобильный браузер лучше для работы с букмарклетами?"><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">Из таблицы видно, что лучший браузер для запуска букмарклетов на смартфоне &#8211; <strong>Opera mini</strong>. Возможно, потому, что он единственный не поддерживает <b>Content Security Policy</b>. Устанавливается на <strong>Android и iOS</strong></span></span></span></blockquote></div>
<div>
<h2 id="3">Букмарклеты для SEO: какие бывают и когда с ними возникают проблемы</h2>
<p>Выделю три типа скриптов-закладок, которые чаще используются в SEO.</p>
<p><b>1. Букмарклеты для отправки страницы на тестирование в сторонние сервисы</b> (PageSpeed, Mobile-Friendly и пр.; больше о <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#2">проверке сайта</a> здесь). Они не срабатывают, если в браузере <span class="under">запрещены pop-ups</span>, то есть всплывающие окна. Многие браузеры позволяют изменять это в настройках, а в Opera Mini окна разрешены по умолчанию. Ниже пример успешной отправки страницы на валидацию.</p>
  <p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-o.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-o.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-o.jpg" width="285" height="573" alt="Запустить букмарклет из Избранного в Opera mini" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-s.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-s.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-s.jpg" alt="Список букмарклетов" width="285" height="573" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-l.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-l.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-l.jpg" alt="Букмарклет сработал в новом окне" width="285" height="573" loading="lazy">
    </picture>   
</p>
<p><b>2. Букмарклеты для проверки On-page SEO, которые изменяют код страницы</b> (выводят alt вместо фото, подсвечивают семантические теги и т.д.; больше скриптов для <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#4">проверки SEO</a> тут). Они срабатывают всегда, но <span class="under">взаимодействуют со стилями</span>  страницы. Поэтому результат может выглядеть по-разному в зависимости от сайта.</p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-x.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-x.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-x.jpg" alt="Извлечение информации из head текущей страницы" width="295" height="443" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-y.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-y.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-y.jpg" alt="Букмарклет подсвечивает семантические теги" width="288" height="443" loading="lazy">
    </picture>
</p>
<p><b>3. Букмарклеты, работающие на странице поисковой выдачи</b> (подробнее о том, <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#1">что они могут, тут</a>). С ними рано или поздно будут проблемы, поскольку скрипт опирается <span class="under">на html-код страницы результатов</span> (классы, id, атрибуты), а он довольно часто меняется. К тому же, html мобильной и десктопной выдачи Google различается.</p>
<p>В идеале, нужно иметь mobile-версию таких букмарклетов, либо пользоваться простейшими, как ниже: все ссылки со вкладки "Видео" выписаны в новом окне. Скрипт легко модифицировать и получить, к примеру, список href из ссылок с текстовым анкором > 30 символов. </p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-n.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-n.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-n.jpg" alt="Скрипт вызван со страницы Гугл поиска" width="295" height="562" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-m.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-m.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-m.jpg" alt="Букмарклет вывел список ссылок в новом окне" width="290" height="562" loading="lazy">
    </picture>
</p>
<p>Надеюсь, написанное вдохновило вас сохранить пару скриптов в закладках мобильного и посмотреть вооруженным глазом на любимые сайты! Если понадобится, в <a href="https://github.com/do-your-own-seo/bookmarklets">этом репозитории</a> собраны SEO скрипты из всех статей блога. На GitHub найдутся и другие подобные repo, так что букмарклеты имеют шанс прочно обосноваться в вашем смартфоне!</p>
</div>
