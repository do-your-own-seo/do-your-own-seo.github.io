---
layout: post
i18n-link: tech
locale: ru
lang: ru

date: 2022-09-07T00:02:00Z
last_modified_at: 2022-09-07T00:02:00Z


title: "Технический SEO аудит сайта. Бесплатно. Своими силами"
tags: [SEO audit, Technical SEO, SEO]
description: "Есть качественный контент и желание продвигать сайт в Поиске? Неотложная задача – технический аудит. Проведи SEO анализ сайта сам: быстро(!) надежно(!!) и бесплатно(!!!). Необходимые инструменты и букмарклеты тут"
keywords: "технический SEO аудит, технический анализ сайта"
code_amount: 2

h1: "SEO аудит сайта инструментами без входного барьера"
snippet_header: "SEO аудит сайта даром? Закатывайте рукава: за вечер справимся!"

snippet: "Вопреки расхожему мнению, SEO – это не только ключевые слова и линкбил&#173;динг. Первичная задача оптимизатора – диагностика здоровья сайта в целом."

image: "technical-website-audit-DIY.jpg"
---
<ul class="toc">
  <li><a href="#1">Как сайт выглядит в Google</a></li>
  <li><a href="#2">Скорость загрузки и прочее</a></li>
  <li><a href="#3">Краулеры: лучшие и бесплатные</a></li>
  <li><a href="#4">Что проверить On-page</a></li>
</ul>
<div>
<p>Вопреки расхожему мнению, SEO – это не только работа с копирайтерами и наращивание ссылочной массы. Задача первостепенной важности – <strong>диагностика здоровья сайта</strong>  в целом. Упрощенно, технический анализ сайта заключается в проверке того, что: </p>
<ol>
  <li><span>Все полезные страницы открыты для поисковых роботов, а вспомогательные – наоборот, закрыты.</span></li>
  <li><span>Боты получают все необходимое для отображения страницы (скрипты, стили), причем достаточно быстро.</span></li>
  <li><span>Сайтом легко пользоваться со смартфона; страницы адаптированы для скринридера.</span></li>
  <li><span>Из структуры сайта очевидно, какие страницы важнее и как с ними связаны остальные.</span></li>
  <li><span>На каждой странице правильно заполнены метатеги, тайтл и каноническая ссылка.</span></li>
</ol>
<p class="txt-center"><img src="/images/posts/{{ page.image }}" alt="Technical SEO audit" class="webfeedsFeaturedVisual" width="750" height="370"></p>
<ol start="6">
  <li><span>В текстах и навигации нет ссылок на несуществующие страницы (т.н. битых ссылок, или ошибок 404).</span></li>
  <li><span>URL-адреса читабельны и поняты человеку, в идеале – легко запоминаемы.</span></li>
  <li><span>Страницы имеют мало общего контента, либо каждая группа «двойников» ссылается на общий canonical.</span></li>
  <li><span>Элементы, с которыми можно взаимодействовать (фильтры, сортировка) не генерируют дублей страниц с разными URL.</span></li>
  <li><span>Поисковик сможет понять назначение всех кнопок и прочесть, что изображено на любой иллюстрации.</span></li>
</ol>
<p>Если сайт создавался с мыслью о поисковых системах, пункты этого списка выполняются автоматически. Однако не все разработчики, а уж тем более бесплатные онлайн-конструкторы сайтов задумываются об этом. Так что без технического SEO аудита не обойтись. </p>
<blockquote>Решили обойтись, слишком много работы? Проверьте сайт хотя бы на <a href="https://www.siteliner.com/">Siteliner</a>: это бесплатно, в один клик. По крайней мере, будете уверены в отсутствии битых ссылок. Появится время – возвращайтесь: все сделаем!</blockquote>
<p>На самом деле грязную работу выполняют специальные программы – краулеры. Задача SEO-специалиста в том, чтобы проанализировать результат, систематизировать ошибки и показать программистам, что исправить. О краулерах ниже, а пока скажу, что для небольших сайтов больше пользы может принести анализ Google выдачи.</p>
</div>
<div>
<h2 id="1">SEO-анализ сайта с помощью Google</h2>
<p>Если у вас небольшой сайт и такой же бюджет на его поддержание, с аудитом можно справиться голыми руками. В строку Google поиска вбейте запрос <b>site:ваш-сайт</b> и присмотритесь к результатам.</p>
<p class="txt-center"><img src="/images/posts/site-search.jpg" alt="Google Search on site:wikipedia.org" width="745" height="455" loading="lazy"></p>
<ul>
  <li>Все ли важные для вас страницы есть в Google?</li>
  <li>Нет ли в списке одинаковых заголовков или описаний? Принципиально, чтобы <em>title</em> и <em>description</em> страниц были уникальны.</li>
  <li>Нет ли в индексе страниц с приватной информацией (базы клиентов, заказы и пр.)? Если есть, нужно подать запрос на исключение через консоль вебмастера, запаролить доступ и запретить индексирование.</li>
</ul>
<blockquote>Строки над синими заголовками не являются URL-адресами: они формируются из breadcrumbs (больше о крошках <a href="{{site.url}}/idealnyj-snippet-v-google-vydache#2">в этом посте</a>). Чтобы увидеть полный адрес, наведите мышку на синюю ссылку.</blockquote>
<p>Обратите внимание на эти первые строки сниппетов (на иллюстрации они подчеркнуты зеленым).</p>
<ul>
  <li>Возможно, там найдутся адреса и с <strong>www и без www</strong>? Так нельзя. На сайте должен соблюдаться единый принцип: либо все URL начинаются с www, либо ни один.</li>
  <li>Аналогично с <strong>https: и &#160;http:</strong>. Если присутствуют оба протокола, значит, сайт не полностью «переехал» на HTTPS и нужно обязательно приглядывать за процессом.</li>
  <li>Нет ли в адресах параметров – т.е. фрагментов, которые начинаются со знака «?», содержат «=» и любую абракадабру вроде «?v=19243242.twr&amp;rt=AA&amp;s=price»? Если и есть – пока не страшно, просто некрасиво.</li>
</ul>
<p>А вот если найдете два разных адреса, построенных по схеме</p>
<p align="center"><b>ваш-сайт/.../?x=cat&#8201;&amp;&#8201;y=dog</b>&#160;&#160; и &#160;&#160;<b>ваш-сайт/.../?y=dog&#8201;&amp;&#8201;x=cat</b>&#160;,</p>
<p>откройте каждую из страниц. Они одинаковы? – Это классический пример дублированного контента. Нужно, чтобы разработчик перенастроил формирование URL и «склеил» проиндексированные дубли 301-м редиректом.</p>
<p>Держите букмарклет <b><a class="red" href='javascript: (function() {
    var t, e, n, o, r, i, a, l, p = 100, s = document.createDocumentFragment(), c = document.createElement("style"), d = document.createElement("div"); document.title = "inurl: Google Search", c.innerHTML = "#form{width:360px;margin:60px auto;padding:10px;border:4px double #ccc;background:#fff;font-size:16px;border-radius:5px}fieldset{border:none}h2{text-align:center;margin:10px 0 25px}button{float:left;width:calc(50% - 20px);margin:0 10px 3px;padding:10px;border:none;border-radius:5px;cursor:pointer;opacity:.9;font-size:1em;background-color:#61bd65;color:#fff}button:hover{opacity:1}button[type=reset]{background-color:#cbcbcb}input[type=text]{margin:0 10px;border:none;border-bottom:3px solid #f1f1f1}input[type=text]:focus{background-color:#f1f1f1;outline:0}.switch{position:relative;display:inline-block;width:60px;height:30px;margin:15px 10px 10px 7px}label{display:block;margin:10px}label b{display:inline-block;width:70px;margin:0 10px}.switch input{height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;border-radius:6px;transition:.4s}.slider:before{position:absolute;content:\"\";height:20px;width:20px;left:10px;bottom:5px;background-color:#fff;transition:.4s;border-radius:50%}input:checked+.slider{background-color:#81a1bf}input:checked+.slider:before{transform:translateX(22px)}", d.innerHTML = "<form id=\"form\" action=\"#\"><fieldset> <h2>Search \"inurl:\" on Google</h2> <label><b>Domain</b><input id=\"d\" placeholder=\"example.com\" type=\"text\"></label><label><b>String&nbsp;*</b><input id=\"q\" name=\"q\" placeholder=\"test&nbsp; sort&nbsp; search&nbsp;&nbsp; etc.\" type=\"text\" required></label> <label><span class=\"switch\"> <input id=\"f\" type=\"checkbox\" checked> <span class=\"slider\"></span></span>Including omitted results</label> <button type=\"submit\"><b>Search</b></button><button type=\"reset\"><b>Reset</b></button> </fieldset></form>", s.appendChild(c), s.appendChild(d), document.body.textContent = "", document.body.appendChild(s), document.forms[0].querySelector("button[type=\"submit\"]").addEventListener("click", function(c) {
        c.preventDefault(), i = 0, e = l = "", t = document.getElementById("d").value || "", (e = document.getElementById("q").value) ? (n = 1 - document.getElementById("f").checked, r = "https://www.google.com/search?q=site:" + t + "+inurl:" + encodeURIComponent(e) + "&filter=" + n + "&pws=0", (o = window.open(r)).onload = function() {
            var e = o.document, t = e.getElementById("rso"), n = e.createElement("div");
            t && (n.innerHTML = "<i style=\"display:block;margin:0 0 20px 0\"><b>Please wait...</b></i>", t.insertBefore(n, t.firstChild), function c(e) { return fetch(e).then(function(e) { if (e.ok) return e.text(); throw new Error("Response status:" + e.status + ", " + e.statusText) }).then(function(e) { var t = (new DOMParser).parseFromString(e, "text/html"), n = t.querySelectorAll(".g"), r = t.getElementById("pnnext");
                    if (n.length) return n.forEach(function(e) { a = e.querySelector("a:first-of-type"), l += a.href + "\n", i++
                    }), r ? c(r.href) : 1 }).catch(function(e) { o.alert(":(( " + e + ". Repeat later or try after captcha verification")})}(r + "&num=" + p.toString()).then(function() { n.innerHTML = "<span id=\"total\" style=\"float:left;margin-left:-50px\">" + i.toString() + " =</span><textarea style=\"width:100%;height:120px;margin-bottom:20px\">" + l + "</textarea>" })) }) : alert("! Query string is required !") })})();
'>inURL search</a></b>: я пользуюсь им, чтобы найти в Google индексе URL с параметрами («?search=») или проиндексированные по ошибке технические страницы («/admin/»). Перетащите скрипт на панель закладок браузера и запустите с любой страницы <span class="under">домена google.com</span>. Откроется такое окошко.</p>
<p class="txt-center"><img src="/images/posts/inurl.jpg" alt="bookmarklet UI for inurl: search" width="390" height="280" loading="lazy"></p>
<p>Задайте один или несколько фрагментов для поиска. Скрипт обойдет результаты, извлечет адреса и запишет в textarea, откуда их легко скопировать. Вот, к примеру, сайт, который не закрыл сортировку от индексирования.</p>
<p class="txt-center"><img src="/images/posts/sorting-pages-in-google-index.jpg" alt="Indexed sorting pages" width="830" height="480" loading="lazy"></p>
<p>Если вы собственник ресурса, который исследуете в Поиске, Гугл предложит вам попробовать <a href="https://search.google.com/search-console/">Search Console</a>. И правильно: в консоль обязательно нужно заглядывать, чтобы понимать, как поисковик индексирует страницы, видит ли на них разметку Schema.org, и так далее. О проблемах на сайте консоль проинформирует вебмастера по email, но, к сожалению, с задержкой.</p>
</div>
<div>
<h2 id="2">Жизненно важные показатели. Перфоманс сайта</h2>
<p>Наполнение сайта и актуальность информации – всегда №1. Но если сайт медленно грузится, выйти в Топ Поиска будет непросто. Поскольку еще в 2021-му Google <a href="https://developers.google.com/search/blog/2020/11/timing-for-page-experience">заявил, что Core Web Vitals</a> (скорость загрузки, интерактивность, стабильность макета) стали факторами ранжирования. Пока – далеко не основными, но это пока.</p>
<p>Первым делом стоит проверить performance (производительность) <span class="under">главной и типовых страниц</span> сайта: категории, продукта и пр. Сервис <a href="https://pagespeed.web.dev/">Pagespeed Insights</a> для этого и предназначен: он не только выявит проблемы, но и подскажет способы от них избавиться.</p>
<p>Перфекционистам рекомендую более общую версию этого инструмента, <a href="https://web.dev/measure/">web.dev Measure</a>: кроме перфоманса, здесь проверят качество кода, доступность сайта для скринридеров и SEO уровня страницы. <b class="red">Update!</b> В Google решили закрыть этот сервис, перенеся функционал на Pagespeed Insights (ссылка выше).</p> <p>Для примера – неутешительные показатели сайта minobrnauki.gov.ru.</p>
<p class="txt-center"><img src="/images/posts/web-dev-minobrnauki.jpg" alt="Web.dev measure for minobrnauki.gov.ru" width="740" height="500" loading="lazy"></p>
<p>Жестко. Но хоть на скриншоте не видно, это конструктивная критика. В отчете каждая оценка разбита на составляющие, и по каждому пункту приведены рекомендации, как ее улучшить.</p>
<p>Следующий шаг – убедиться, что сайт оптимизирован для мобильных. Вот сервис от Google: <a href="https://search.google.com/test/mobile-friendly">Mobile-friendly Test</a> покажет страницу такой, какой ее видит гуглбот для смартфона. Проверив сайт министерства образования, видим, что мобильному боту здесь точно делать нечего.</p>
<p class="txt-center"><img src="/images/posts/mobile-minobrnauki.jpg" alt="Mobile friendliness test for minobrnauki.gov.ru" width="375" height="535" loading="lazy"></p>
<p>Может пригодиться еще один инструмент, <a href="https://yellowlab.tools/">Yellowlab Tools</a>: он оценит ключевые параметры производительности, качество кода и выдаст структурированный отчет с рекомендациями. Для теста можно выбрать режимы Десктоп, HD, Смартфон или Планшет. Есть одно но: tool работает на основе безголового браузера Phantomas, и если иссле&#173;дуемый сайт настроен запрещать ему доступ,  вы получите ошибку 403.</p>
<blockquote>Букмарклеты для отправки страниц на тестирование: <b><a class="red" href="javascript:(function()%7b window.open('https://pagespeed.web.dev/report?url='+encodeURIComponent(location.href))%7d)();
">Pagespeed</a></b> * <b><a class="red" href="javascript:(function(){var win=window.open('https://search.google.com/test/mobile-friendly?url='+encodeURIComponent(window.location.href)+'&run=1','_blank');win.focus();})()
">Mobile</a></b> * <b><a class="red" href="javascript:(function(){var win=window.open('https://yellowlab.tools?url='+encodeURIComponent(window.location.href)+'&run=1','_blank');win.focus();})()
">Yellowlab</a></b>. Добавьте в закладки и запускайте на выполнение со страницы, которую хотите проверить.</blockquote>
<p>Если результаты вашего сайта окажутся неоптимистичными, придется обращаться к разработчику с рекламацией или поискать среди знакомых эксперта в HTML-CSS-JS.</p>
<blockquote>Еще полезно измерить скорость ответа сервера, провести параллельную загрузку страниц и пр. – это здесь, <a href="https://www.webpagetest.org/">на Webpagetest</a>. Там много лишней информации? Тогда <a href="https://tools.pingdom.com/">на Pingdom</a>: он выдаст простой и понятный ответ.</blockquote>
<p>Как бы там ни было, провальные тесты еще не означают конец всему. Сайты пока могут ранжироваться за счет ссылок и качественного контента. Но дальше будет сложнее, поэтому ошибки лучше исправить как можно скорее!</p>
</div>
<div>
<h2 id="3">Free Web Crawlers, или Выбираем на сайт червячка даром</h2>
<p>Тут будут не только бесплатные, но и <strong>free trial</strong> краулеры, которые можно испробовать бесплатно в течение короткого периода. С помощью этих программ вы проведете SEO анализ сайта не хуже профи. Сложность будет в том, как перевести результат на человеческий язык и как исправить ошибки, ничему не навредив.</p>
<p>Перед тем, как выбирать софт, хорошо бы восстановить в памяти терминологию. Наинеобходимейший минимум:
</p>
<ul>
  <li><em>canonical</em> – основная версия страницы, указывается в href тега link с атрибутом rel="canonical";</li>
  <li><em>redirect</em> – перенаправление на другой URL, может быть постоянным (301) или временным (302);</li>
  <li><em>robots.txt</em> – файл для роботов, в нем можно запретить одному или всем ботам индексировать страницы, файлы и целые директории на сайте;</li>
  <li><em>noindex</em> – директива уровня страницы, означает запрет индексирования.</li>
</ul>
<p>Теперь можно выбирать краулер: если в интерфейсе программы что-то останется непонятным, придется спросить у Гугла. Обратите внимание: различают облачные (cloud-based) и десктопные веб-краулеры.</p>
<h3>Облачные краулеры</h3> 
<p>Незаменимы для больших сайтов с сотнями тысяч страниц. Понятно, что в таких масштабах предоставлять услуги даром никто не будет.</p>
<p class="txt-center"><img src="/images/posts/cloud-based-crawlers.jpg" alt="Best free-trial cloud-based crawlers" width="740" height="60" loading="lazy"></p>
<p>Однако <a href="https://teracrawler.io/">Teracrawler</a> позволит бесплатно проверить до 10 тысяч URL, а <a href="https://www.oncrawl.com/">Oncrawl</a> предложит пробный 14-дневный доступ к платформе. Отдельно отмечу украинский облачный краулер <a href="https://sitechecker.pro">Sitechecker</a>: простой в настройке, позиционирует себя как лучший выбор для онлайн-коммерции, только пробный период всего 7 дней.</p>
<h3>Десктопные краулеры (спайдеры)</h3> 
<p>Хороший вариант, однако краулинг будет ограничен возможностями машины, на которую установлена программа. Для начала назову трех производителей SEO-софта, стоящих вашего внимания.</p>
<p class="txt-center"><img src="/images/posts/desktop-crawlers.jpg" alt="Best free-trial desktop crawlers" width="740" height="65" loading="lazy"></p>
<ul>
  <li><a href="https://sitebulb.com/">Аудитор Sitebulb</a>: вероятно, ему нет равных в классификации ошибок, объяснении возможных причин их возникновения и потенциального вреда. Он выявит скрытые недостатки сайта, нарисует граф-карту, все разложит по полочкам и растолкует на английском. Собственники предлагают двухнедельный trial.</li>
</ul>
<p>Недостаток для неспециалиста: анализ Sitebulb сообщит вам море информации, в котором без практики можно утонуть. Если не любите углубляться в детали, советую начать с другой программы.</p>
<ul>
  <li>Спайдеры <a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a> и <a href="https://netpeaksoftware.com/spider">Netpeak Spider</a> имеют много общего. Первый взрослее и более широко распространен. Второй создан на замену лидеру: он современный и, возможно, лучше адаптирован для некоторых задач. Для первичного анализа различия между программами не имеют значения.</li>
</ul>
<p>Оба инструмента требуют достойной оплаты. Но Netpeak предлагает 14-дневный trial, а Screaming Frog зато имеет бесплатную урезанную версию, которая анализирует не более 500 страниц с одного домена. </p>
<p>Думаю, что перечисленные сервисы на 99,9% закроют проблему SEO-техосмотра для собственника веб-сайта.</p>
</div>
<div>
<h2 id="4">On-page SEO: проверяем страницу «на лету» букмарклетами</h2>
<p>Представим, что результаты краулинга уже получены, и мы хотим проверить проблемные страницы вручную. Любители легких решений запросят у Гугла «check on-page seo online», или что-то в этом роде.</p> 
<p>Однако если предыдущие этапы уже пройдены, я не рекомендую искать дополнительные инструменты: к отчетам краулеров и советам от web.dev по сути добавить нечего. Но on-page-SEO-валидаторы, вероятно, выявят «ужасные ошибки» и отправят вас сократить дескрипшен, добавить 5 слов к первому абзацу и тому подобное. Только это уже зона субъективности, а мы о техническом сео.</p>
<p><b>1.</b> Требования к тайтлу, дескрипшену и ключевым словам есть в <a href="{{site.url}}/idealnyj-snippet-v-google-vydache#2">посте о сниппетах</a>. Здесь же выложу букмарклет, который показывает <b><a href="javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&&(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()" class="red">Title+meta-tags+canonical</a></b> текущей страницы. Перетяните на панель закладок и пользуйтесь.</p>
<blockquote>Если <em>canonical</em> не совпадает с текущим URL, значит, страница рекомендует поисковику ранжировать вместо себя<span class="under"> другую – каноническую</span>. Это должен быть осознанный выбор! Сработает каноникализация лишь для страниц с похожим контентом и общим предназначением.</blockquote>
<p><b>2.</b> Следующий шаг – пересмотреть ссылки страницы. Скрипт <b><a class="red" href="javascript: (function() {
    let num = 0, newWin = window.open().document, lnk = document.links, href, text, aria, title, isAccessible, isValid, error1 = '<b>????????href is not a valid URL</b>????????', error2 = '<b>????????inaccessible link????????</b>';
    function htmlEscape(s) { s = s.replace(/&/g, '&').replace(/>/g, '>').replace(/</g, '<'); return s; }
    function isURL(s) { try { return Boolean(new URL(s)); } catch (e) { return false; } }
    newWin.writeln('Links on <a href=\'' + location.href + '\'>' + location.href + '</a><br><hr>');
    for (let i = 0; i < lnk.length; ++i) {isAccessible = 1; isValid = 1; href = lnk[i].href; text = lnk[i].innerText; aria = lnk[i].getAttribute('aria-label'); title = lnk[i].getAttribute('title'); newWin.writeln(++num + '. <a href=\'');
        if (!href.startsWith('javascript:')) { newWin.writeln(htmlEscape(href) + '\'>');} else { newWin.writeln('javascript:\'>'); }
        if (!isURL(href)) {isValid = 0} if (lnk[i].innerHTML) {if (text.length > 1) { newWin.writeln(text.substring(0, 100));} else if (aria) { newWin.writeln(aria); } else if (title) { newWin.writeln(title);} else {isAccessible = 0;}} else { isAccessible = 0;}
        if (!isValid) {newWin.writeln(error1);} if (!isAccessible) { if (!isValid) { newWin.writeln('<br>');} newWin.writeln(error2);} newWin.writeln('</a><br>');} newWin.writeln('<hr></body></html>'); newWin.close(); })();">All-page-links</a></b> откроет окно со списком всех ссылок, включая кнопки с иконками. Для них вместо якоря будет задействован текст из атрибутов <em>title</em> или <em>aria-label</em>.</p>
<blockquote>Если на сайте есть кнопки без текста, они должны быть <em>accessible</em>, т.е. доступными для тех, кто иконку не видит. Для этого html-элемент кнопки должен иметь атрибут с информацией для считывающих устройств.</blockquote>
<p><b>3.</b> Стоит присмотреться к заголовкам и выделенному тексту. Если, к примеру, имеются &lt;h1&gt; и &lt;h3&gt;, но нет &lt;h2&gt; – непорядок! Заголовки применяют только для структурирования: нельзя их использовать, чтобы увеличить шрифт или центрировать текст! С курсивом и жирным шрифтом есть свои тонкости.</p>
<blockquote>Теги <span class="under">&lt;strong&gt; и &lt;em&gt;</span> – семантические (смысловые), а их двойники &lt;b&gt; и &lt;i&gt; – декоративные. Выделенный ими текст выглядит одинаково: <b>жирный /b, strong/</b> и <i>курсив /i, em/</i>, но для поисковика все же разница есть.</blockquote>
<p>Предлагаю букмарклет <b><a class="red" href="javascript:(function() {let style = document.getElementById('outstanding'), newStyle; if (style) {style.remove()} else {newStyle = document.createElement('style');newStyle.setAttribute('type', 'text/css'); newStyle.setAttribute('id', 'outstanding');newStyle.innerHTML = 'strong:before {content: \u0022<strn: \u0022 !important} b:before {content: \u0022<b>: \u0022 !important} em:before {content: \u0022<em>: \u0022 !important} strong {background-color: #99c93a !important; color: black !important} b {background-color: #90BDD0 !important; color: black !important} em {background-color: #efb6fb  !important; color: black !important;} h1:before {content: \u0022<h1> \u0022 !important} h2:before {content: \u0022<h2> \u0022 !important} h3:before {content: \u0022<h3> \u0022 !important} h4:before {content: \u0022<h4> \u0022 !important} h5:before {content: \u0022<h5> \u0022 !important} h6:before {content: \u0022<h6> \u0022 !important} h1 {padding: 2px !important; background-color: #fc2929 !important; border: solid !important; border-radius: 9px !important; color: black !important} h2 {padding: 2px !important; background-color: #FF7C1C !important; border: solid !important; border-radius: 7px !important; color: black !important} h3,h4 {background-color: #ffb300 !important; border: solid !important; padding: 2px !important; border-radius: 5px !important ; color: black !important}';document.body.appendChild(newStyle);}})()">H1-h6, strong, b, em</a></b>, который раскрасит подзаголовки и выделенные фразы на странице. Присмотритесь: возможно, где-то &lt;b&gt; целесообразно заменить на &lt;strong&gt;, или наоборот?</p>
<p><b>4.</b> Убедитесь, что все иллюстрации имеют заполненные альт-атрибуты. Вот закладка <b><a class="red" href="javascript:(function() {function toArray(c) {let a = new Array;for (let k = 0; k < c.length; ++k) a[k] = c[k]; return a; }
    let images = toArray(document.images); for (let i = 0; i < images.length; ++i) { let img = images[i], div = document.createElement('div'); if (!img.alt) { img.alt='There is no alt text'; div.style.backgroundColor='red';} else {div.style.backgroundColor='orange';} div.appendChild(document.createTextNode(img.alt)); img.parentNode.replaceChild(div, img);}})();">Alt text for images</a></b>, которая заменит картинки на странице описаниями из alt'ов или предупредит, что альтернативный текст не задан.
</p>
<blockquote>Поисковые машины распознают изображения, но пока еще не идеально. К тому же, у посетителя сайта фото может не загрузиться: как узнать, что на нем было? Для этого картинка должна иметь альт-текст, например: alt="Изображение человека, читающего статью о техническом SEO". При неудачной загрузке текст будет выведен вместо картинки.</blockquote>
<p>Нюансов бездна, однако... Основной план аудита выполнен. Если считаете, что здесь что-то упущено, пишите в комментарии: дополним вместе!</p>
</div>