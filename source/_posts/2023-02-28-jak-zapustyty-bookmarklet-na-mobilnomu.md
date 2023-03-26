---
layout: post
i18n-link: bookmark
locale: ua
lang: uk

date: 2023-02-28T10:11:00Z
last_modified_at: 2023-02-28T10:11:00Z

title: "Як користуватися букмарклетами в мобільному браузері"
tags: [JavaScript, Bookmarklets, On-page, SEO]
description: "Ви знали, що JavaScript закладки працюють і на смартфоні? Треба лише запустити скрипт в контексті поточної сторінки. Браузери Chrome, Edge, Firefox, Opera Mini.."
keywords: "букмарклети на мобільному" 
schema: FAQPage
code_amount: 1

h1: "Як запустити SEO букмарклет на Android, iOS? Залежить від вашого браузера"
snippet_header: 'Як заставити SEO букмарклети працювати з "Favorites" мобільного браузера'

snippet: "Правда ж, несправедливо, що JavaScript закладки з попередніх постів можна запустити лише на ПК? Неправда! Букмарклети працюють і на смартфоні"

image: "use-JS-bookmarklets-on-mobile.jpg"
---

<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">Як зберегти скрипт в закладках на мобільному</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Як користуватися букмарклетом</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3">SEO букмарклет не працює: причини</a></li>
</ul>
<div>
  <p>На думку створити гід з використання мобільних букмарклетів мене наштовхнув коментар під постом <a href="{{site.url}}/yak-rozshyryty-snipet-saitu-v-poshuku#comments">про розширені сніпети</a>. Йшлося про те, що букмарклети не працюють на <strong>пристрої з Android</strong>. Таке трапляється. Добра новина в тому, що у цьому винна не OS, а браузер, який легко змінити.</p>
 <p class="txt-center">
  <picture>
    <source srcset="/images/posts/wp/{{ page.image | split: '.' | first }}.webp" type="image/webp">
    <source srcset="/images/posts/{{ page.image }}" type="image/jpeg">
    <img src="/images/posts/{{ page.image }}" alt="В яких мобільних браузерах працюють букмарклети" class="webfeedsFeaturedVisual" width="680" height="350">
  </picture>
 </p>
  <p>Скажу одразу, що змусити JS-закладки працювати в <strong>Safari на iPhone</strong> та <strong>Opera на Android</strong> (повна версія) в мене не вийшло. І якщо <strong>Safari</strong> хоча б повідомив, що запускати скрипти таким чином заборонено, то <strong>Опера</strong> просто не робила нічого, й при цьому було відключене блокування реклами та дозволені виринаючі вікна. Втім, інші мобільні браузери <span class="under">успішно виконують JavaScript</span> в контексті сторінки.</p>
  <p>Тож, порівняємо <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong>, <strong>Mozilla Firefox</strong>, <strong>Opera Mini</strong> й <strong>DuckDuckGo</strong>. І ви нізащо не здогадаєтеся, який із них вміє все (і це не Chrome)!</p>
</div>
<div><h2 id="1">Як зберегти букмарклет в закладках мобільного браузера</h2>
  <p>На ПК це легко: достатньо перетягнути посилання на панель закладок. А тому <span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><meta itemprop="name" content="Як зберегти букмарклет в закладках на мобільному?"><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">найпростіший спосіб створити JS закладку в телефоні – це ввімкнути у своєму акаунті синхронізацію мобільного й десктопного браузерів. Якщо ж для вас це неприйнятно, лишаються два способи.</span></span></span></p>
  <h3>Зберегти адресу з контекстного меню посилання</h3>
  <p>В браузерах на основі <strong>Chromium</strong> (Chrome, Opera, оновлений Edge) можна натиснути на букмарклет в тексті й обрати "Зберегти адресу" в контекстному меню. Але в Mozilla Firefox (Quantum) та інших браузерах при притисканні JavaScript-посилання контекстне меню не з'являється. Перевірте свій браузер на цьому букмарклеті: <a href="javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&amp;&amp;(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()" class="red">Title-description-keys-canonical</a>.</p>
  <h3>Скопіювати програмний код з джерела</h3>
  <p>Це код наведеного вище букмарклету. Виділіть все й помістіть до буфера обміну: <textarea rows="2" data-nosnippet aria-label="code">javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&amp;&amp;(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()</textarea></p>
  <p>Тепер треба зберегти закладку зі скопійованою адресою. В <strong>Opera</strong> можна створити нову порожню закладку й спокійно зберегти скрипт. В інших браузерах доведеться відправити в Улюблені будь-яку звичайну сторінку, а вже потім замінити їй URL.</p>
  <blockquote>Важливо вигадати для скрипта коротке, але незвичне ім'я (далі буде зрозуміло, чому).<br> Зберігати JavaScript в закладках можна БЕЗ попередньої мініфікації, якщо він не занадто довгий.</blockquote>
  <p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-p.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-p.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-p.jpg" alt="Створити нову закладку в Opera" width="285" height="435" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-q.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-q.jpg" type="image/jpeg">
         <img class="border" src="/images/posts/screenshot-q.jpg" alt="Редагувати закладку" width="295" height="435" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-r.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-r.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-r.jpg" alt="Не мініфікований скрипт в href букмарклету" width="285" height="435" loading="lazy">
    </picture>
   </p>
</div>
<div><h2 id="2">Як користуватися JavaScript букмарклетом на смартфоні</h2>
<p>Заковика в тому, що запустити скрипт <strong>з Обраного</strong> можна лише в <strong>Opera Mini</strong> й <strong>DuckDuckGo</strong>. В <strong>Chrome, Firefox</strong> та інших браузерах букмарклет не спрацює, бо не буде знати, звідки його викликали.</p>
<p>Щоб запустити скрипт у контексті поточної сторінки, потрібно викликати його <strong>з адресного рядка</strong> браузера. Почніть набирати назву букмарклету, й серед підказок омнібоксу з'явиться ваша JavaScript закладка. Клік на тому рядку запустить скрипт на виконання.</p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-z.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-z.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-z.jpg" alt="Оберіть назву свого скрипта серед підказок омнібоксу" width="290" height="443" loading="lazy">
    </picture>
        <picture>
        <source srcset="/images/posts/wp/screenshot-x.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-x.jpg" type="image/jpeg">
         <img class="border" src="/images/posts/screenshot-x.jpg" alt="Букмарклет витягає інформацію з head поточної сторінки" width="295" height="443" loading="lazy">
    </picture>
</p>
<p>Що незвичніше було ім'я закладки, то вищою вона буде в підказках omnibox.</p> <p>Підіб'ємо підсумок: порівняємо придатність мобільних браузерів до роботи з JavaScript букмарклетами.</p>
<table class="txt-center"><caption><small>Аспекти роботи з JS букмарклетами в різних браузерах</small></caption>
  <tr>
    <th class="vert">Адреса в контекст-меню</th>
    <th class="vert">Створення нової закладки</th>
    <th class="vert">Запуск з адресного рядка</th> 
    <th class="vert">Запуск з панелі закладок</th>
    <th class="vert">Дозвіл Pop-ups</th>
    <th class="vert"></th>  
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
<blockquote><span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><meta itemprop="name" content="Який мобільний браузер краще для роботи з  букмарклетами?"><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">З таблиці випливає, що найкращий браузер для запуску букмарклетів на смартфоні &#8211; <strong>Opera mini</strong>. Можливо, тому, що він єдиний не підтримує <b>Content Security Policy</b>. Можна встановить його на <strong>Android й iOS</strong></span></span></span></blockquote></div>
<div>
<h2 id="3">Букмарклети для SEO: які бувають і чому можуть не спрацювати</h2>
<p>Виокремлю три типи закладок-скриптів, які найчастіше використовуються в SEO.</p>
<p><b>1. Букмарклети для відправки сторінки на тестування до стороннього сервісу</b> (PageSpeed, Mobile-Friendly та ін.; більше про <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#2">перевірку сайту</a> тут). Вони не спрацюють, якщо в браузері <span class="under">заборонено pop-ups</span>, тобто виринаючі вікна. Більшість браузерів дозволяє змінити це в налаштуваннях, а в Opera Mini popups дозволені за замовчанням. Наводжу успішний приклад відправки сторінки на валідацію.</p>
  <p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-o.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-o.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-o.jpg" width="285" height="573" alt="Запуск букмарклету з Обраного в Opera mini" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-s.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-s.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-s.jpg" alt="Список букмарклетів" width="285" height="573" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-l.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-l.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-l.jpg" alt="Букмарклет спрацював в новому вікні" width="285" height="573" loading="lazy">
    </picture>   
</p>
<p><b>2. Букмарклети для перевірки On-page SEO, які підміняють код сторінки</b> (виводять alt замість фото, підсвічують семантичні теги й т.ін.; більше скриптів для <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#4">перевірки SEO</a> тут). Вони спрацьовують завжди, але <span class="under">взаємодіють зі стилями</span>  сторінки. Тому результати можуть виглядати по-різному залежно від сайту.</p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-x.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-x.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-x.jpg" alt="Витягнення інформації з head поточної сторінки" width="295" height="443" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-y.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-y.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-y.jpg" alt="Букмарклет підсвічує семантичні html теги" width="288" height="443" loading="lazy">
    </picture>
</p>
<p><b>3. Букмарклети, що працюють на сторінці результатів Google</b> (докладніше про те, <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#1">що вони вміють, тут</a>). З ними рано чи пізно будуть складнощі, оскільки скрипт спирається <span class="under">на HTML-код сторінки пошуку</span> (класи, id, атрибути), а він доволі часто змінюється. До того ж HTML розмітка результатів Google для десктопу та смартфону відрізняється.</p>
<p>В ідеалі, треба мати mobile-версію таких букмарклетів, або користуватися найпростішими, як цей: всі посилання зі вкладки "Відео" виписано в новому вікні. Скрипт легко модифікувати й отримати, приміром, список href посилань з текстовим анкором, довшим ніж 30 символів. </p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-n.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-n.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-n.jpg" alt="Скрипт запускається зі сторінки Google пошуку" width="295" height="562" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-m.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-m.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-m.jpg" alt="Букмарклет вивів список посилань у новому вікні" width="290" height="562" loading="lazy">
    </picture>
</p>
<p>Сподіваюся, написане надихнуло вас зберегти пару скриптів у закладках мобільного і подивитися озброєним оком на улюблені сайти! Якщо знадобиться, в <a href="https://github.com/do-your-own-seo/bookmarklets">цьому репозиторії</a> зібрано SEO скрипти з усіх статей блогу. На GitHub знайдуться й інші подібні repo, тож  букмарклети мають шанси міцно закріпитися в вашому смартфоні!</p>
</div>
