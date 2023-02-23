---
layout: post 
i18n-link: tech
locale: ua
lang: uk

date: 2022-09-07T00:02:00Z
last_modified_at: 2022-09-07T00:02:00Z


title: "Технічний SEO аудит сайту з нуля. Безплатно. Власноруч"
tags: [SEO-audit, Technical SEO, SEO]
description: "Плануєте просувати сайт? Перша необхідність – технічний аудит. Зробіть SEO аналіз сайту самостійно: це швидко(!), надійно, безплатно! Інструменти для SEO аудиту + букмарклети тут"
keywords: "технічний SEO аудит, технічний аналіз сайту"
code_amount: 2

h1: "SEO аудит сайту інструментами без вхідного бар'єру"
snippet_header: "SEO аудит сайту задарма? Закочуйте рукава: за вечір впораємось!"

snippet: "Всупереч розповсюдженій думці, SEO – це не лише ключові слова та лінкбілдинг. Першочергове завдання оптимізатора – діагностика здоров'я сайту в цілому."

image: "technical-website-audit-DIY.jpg"
---
<ul class="toc">
  <li><a href="#1">Аналіз результатів Google</a></li>
  <li><a href="#2">Швидкість завантаження та інше</a></li>
  <li><a href="#3">Краулери: найкращі і безплатні</a></li>
  <li><a href="#4">Що перевірити On-page</a></li>
</ul>
<div>
<p>Всупереч розповсюдженій думці, SEO – це не тільки робота з копірайтерами та побудова масиву вхідних посилань. Першочергове завдання цієї дисципліни – <strong>діагностика здоров'я сайту в цілому</strong>. Первинний технічний аудит сайту полягає у перевірці того, що:</p>
<ol>
  <li><span>Всі корисні сторінки відкриті для доступу пошукових систем, а допоміжні – навпаки, закриті.</span></li>
  <li><span>Пошуковий робот отримує все необхідне для відображення сторінки (стилі, скрипти), і достатньо швидко.</span></li>
  <li><span>Сайтом легко користуватися з мобільного, плюс він адаптований для скрінрідера.</span></li>
  <li><span>Зі структури сайту зрозуміло, які сторінки найважливіші і як із ними пов'язані всі інші.</span></li>
  <li><span>Кожна сторінка (включно з пагінацією) має правильно заповнені тайтл, метатеги й канонічне посилання.</span></li>
</ol>
<p class="txt-center"><img src="/images/posts/{{ page.image }}" alt="Technical SEO audit" class="webfeedsFeaturedVisual" width="750" height="370"></p>
<ol start="6">
  <li><span>В текстах та навігації немає посилань на сторінки, що не існують (т.зв. биті посилання, або помилка 404).</span></li>
  <li><span>URL-адреси не є абракадаброю: людина здатна їх прочитати, а може і запам'ятати.</span></li>
  <li><span>Сторінки мають небагато спільного контенту. Або всі «двійники» посилаються на спільний <em>canonical</em>.</span></li>
  <li><span>Жоден елемент, з яким можна взаємодіяти (фільтр, сортування) не генерує дублів сторінок з різними URL.</span></li>
  <li><span>Пошукова система зможе з'ясувати призначення кожної кнопки й прочитати, що зображено на кожній ілюстрації з сайту.</span></li>
</ol>
<p>Звісно, це лише основа аудиту. Якщо сайт створювався з думкою про пошукові системи, пункти з наведеного  переліку мають виконуватись автоматично. Однак не всі розробники, а тим паче онлайн-конструктори сайтів замислюються про це. Тому без технічного SEO не обійтись.</p>
<blockquote>Вирішили обійтись, занадто багато справ? Перевірте сайт хоча б на <a href="https://www.siteliner.com/">Siteliner</a>: це безплатно, в один клік. Принаймні будете впевнені, що битих посилань немає. Буде вільний час – повертайтеся, все зробимо як слід!</blockquote>
<p>Насправді брудну роботу роблять спеціальні програми – краулери. <span class="under">Завдання SEO-спеціаліста</span> в тому, щоби проаналізувати результат, систематизувати помилки й дати рекомендації програмістам, як їх виправити. Про краулери буде далі, а поки скажу, що для невеликих сайтів більше користі може принести безпосередній аналіз Google <abbr title="Search Engine Results Page">SERP</abbr> (видачі).</p>
</div>
<div>
<h2 id="1">SEO-аналіз сайту за допомогою Google</h2>
<p>Якщо маєте невеликий сайт і аналогічний бюджет на його підтримку, з аудитом можна впоратись голіруч. У рядок Google пошуку вбийте запит <b>site:ваш-сайт</b> і придивіться до результатів.</p>
<p class="txt-center"><img src="/images/posts/site-search.jpg" alt="Google Search on site:wikipedia.org" width="745" height="455" loading="lazy"></p>
<ul>
  <li>Чи всі ваші важливі сторінки є в Google?</li>
  <li>Чи немає в стрічці однакових заголовків? Принципово, щоб <em>title</em> і <em>description</em> сторінки були унікальними.</li>
  <li>Чи не потрапили до індексу сторінки з приватною інформацією (база клієнтів, замовлень тощо)? Якщо так, треба терміново подати запит на вилучення URL, запаролити доступ та заборонити індексування.</li>
</ul>
<blockquote>Рядки над синіми заголовками насправді не є URL-адресами: вони формуються з breadcrumbs (більше про хлібні крихти <a href="{{site.url}}/yak-rozshyryty-snipet-saitu-v-poshuku#2">в цьому пості</a>). Щоб побачити повний URL, просто наведіть мишку на синє посилання в видачі.</blockquote>
<p>Зверніть увагу на ті перші рядки сніпетів, на ілюстрації їх підкреслено зеленим.</p>
<ul>
  <li>Чи немає серед них адрес з <b>www і без www</b>? Важливо, щоб на сайті був дотриманий єдиний принцип: або всі сторінки починаються з www, або жодна.</li>
  <li>Аналогічно з <strong>https: і &#160;http:</strong>. Якщо наявні обидва протоколи, це ознака того, що сайт не повністю «переїхав» на HTTPS і треба уважно слідкувати за розвитком подій.</li>
  <li>Чи немає в адресах фрагментів, які починаються зі знаку «?», містять «=» і ще якусь нісенітницю, подібну до «?v=19243242.twr&amp;rt=AA&amp;s=price». Навіть якщо є, це поки не шкідливо – просто негарно.</li>
</ul>
<p>А от коли знайдете дві різні адреси, побудовані за схемами</p>
<p align="center"><b>ваш-сайт/.../?x=cat&#8201;&amp;&#8201;y=dog</b>&#160;&#160; і &#160;&#160;<b>ваш-сайт/.../?y=dog&#8201;&amp;&#8201;x=cat</b>&#160;,</p>
<p>відкрийте кожну зі сторінок. Вони однакові? – Це класичний приклад дубльованого контенту. Зверніться до того, хто сайт робив, з вимогою перенастроїти формування URL, а також «склеїти» проіндексовані дублі 301 редиректом.</p>
<p>Ось букмарклет <b><a class="red" href='javascript: (function() {
    var t, e, n, o, r, i, a, l, p = 100, s = document.createDocumentFragment(), c = document.createElement("style"), d = document.createElement("div"); document.title = "inurl: Google Search", c.innerHTML = "#form{width:360px;margin:60px auto;padding:10px;border:4px double #ccc;background:#fff;font-size:16px;border-radius:5px}fieldset{border:none}h2{text-align:center;margin:10px 0 25px}button{float:left;width:calc(50% - 20px);margin:0 10px 3px;padding:10px;border:none;border-radius:5px;cursor:pointer;opacity:.9;font-size:1em;background-color:#61bd65;color:#fff}button:hover{opacity:1}button[type=reset]{background-color:#cbcbcb}input[type=text]{margin:0 10px;border:none;border-bottom:3px solid #f1f1f1}input[type=text]:focus{background-color:#f1f1f1;outline:0}.switch{position:relative;display:inline-block;width:60px;height:30px;margin:15px 10px 10px 7px}label{display:block;margin:10px}label b{display:inline-block;width:70px;margin:0 10px}.switch input{height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;border-radius:6px;transition:.4s}.slider:before{position:absolute;content:\"\";height:20px;width:20px;left:10px;bottom:5px;background-color:#fff;transition:.4s;border-radius:50%}input:checked+.slider{background-color:#81a1bf}input:checked+.slider:before{transform:translateX(22px)}", d.innerHTML = "<form id=\"form\" action=\"#\"><fieldset> <h2>Search \"inurl:\" on Google</h2> <label><b>Domain</b><input id=\"d\" placeholder=\"example.com\" type=\"text\"></label><label><b>String&nbsp;*</b><input id=\"q\" name=\"q\" placeholder=\"test&nbsp; sort&nbsp; search&nbsp;&nbsp; etc.\" type=\"text\" required></label> <label><span class=\"switch\"> <input id=\"f\" type=\"checkbox\" checked> <span class=\"slider\"></span></span>Including omitted results</label> <button type=\"submit\"><b>Search</b></button><button type=\"reset\"><b>Reset</b></button> </fieldset></form>", s.appendChild(c), s.appendChild(d), document.body.textContent = "", document.body.appendChild(s), document.forms[0].querySelector("button[type=\"submit\"]").addEventListener("click", function(c) {
        c.preventDefault(), i = 0, e = l = "", t = document.getElementById("d").value || "", (e = document.getElementById("q").value) ? (n = 1 - document.getElementById("f").checked, r = "https://www.google.com/search?q=site:" + t + "+inurl:" + encodeURIComponent(e) + "&filter=" + n + "&pws=0", (o = window.open(r)).onload = function() {
            var e = o.document, t = e.getElementById("rso"), n = e.createElement("div");
            t && (n.innerHTML = "<i style=\"display:block;margin:0 0 20px 0\"><b>Please wait...</b></i>", t.insertBefore(n, t.firstChild), function c(e) { return fetch(e).then(function(e) { if (e.ok) return e.text(); throw new Error("Response status:" + e.status + ", " + e.statusText) }).then(function(e) { var t = (new DOMParser).parseFromString(e, "text/html"), n = t.querySelectorAll(".g"), r = t.getElementById("pnnext");
                    if (n.length) return n.forEach(function(e) { a = e.querySelector("a:first-of-type"), l += a.href + "\n", i++
                    }), r ? c(r.href) : 1 }).catch(function(e) { o.alert(":(( " + e + ". Repeat later or try after captcha verification")})}(r + "&num=" + p.toString()).then(function() { n.innerHTML = "<span id=\"total\" style=\"float:left;margin-left:-50px\">" + i.toString() + " =</span><textarea style=\"width:100%;height:120px;margin-bottom:20px\">" + l + "</textarea>" })) }) : alert("! Query string is required !") })})();
'>inURL search</a></b>: я користуюсь ним, щоб отримати в Ґугл перелік урлів з параметрами («?search=») або помилково проіндексовані технічні сторінки сайту («/admin/»). Перетягніть скрипт на панель закладок браузера і запустіть з довільної сторінки <span class="under">на домені google.com</span>. Відкриється таке віконце.</p>
<p class="txt-center"><img src="/images/posts/inurl.jpg" alt="bookmarklet UI for inurl: search" width="390" height="280" loading="lazy"></p>
<p>Задайте фрагмент чи одразу кілька для пошуку: скрипт обійде результати, а знайдені URL запише в textarea, звідки їх зручно копіювати. Ось приклад сайту, який не закрив сортування від індексації.</p>
<p class="txt-center"><img src="/images/posts/sorting-pages-in-google-index.jpg" alt="Indexed sorting pages" width="830" height="480" loading="lazy"></p>
<p>Звичайно, якщо ви власник сайту, який досліджуєте через Пошук, Ґугл запропонує вам спробувати <a href="https://search.google.com/search-console/">Search Console</a>. До консолі вебмайстра обов'язково треба навідуватись, щоб розуміти, як пошуковик індексує сторінки, чи бачить на них розмітку Schema.org і т.п. Про проблеми на сайті консоль поінформує власника по email (на жаль, запізно). Ще дуже раджу створити аккаунт в Bing Webmaster tools.</p>
</div>
<div>
<h2 id="2">Життєво важливі показники. Перфоманс сайту</h2>
<p>Наповнення сайту й актуальність інформації – завжди №1. Однак, якщо сайт працює повільно, вибороти високі позиції в Пошуку буде непросто. Адже ще у 2021-му Ґугл <a href="https://developers.google.com/search/blog/2020/11/timing-for-page-experience">заявив, що Core Web Vitals</a> (завантаження, інтерактивність, стабільність макета) стають фактором ранжування. Поки – далеко не основним, але...</p>
<p>Вкрай важливо перевірити performance (продукційність) <span class="under">головної та типових сторінок</span> сайту: категорії, продукту і т.ін. <a href="https://pagespeed.web.dev/">Pagespeed Insights</a> – вдумливий оцінювач: він не лише виявить проблеми, а й підкаже шляхи усунення. Для прикладу – невтішні показники сайту mon.gov.ua.</p>
<p class="txt-center"><img src="/images/posts/pagespeed-mon-gov-ua.jpg" alt="Pagespeed insights for mon.gov.ua" width="510" height="540" loading="lazy"></p>
<p>Жорстко. Втім, хоч на скріні й не побачиш, червоні трикутнички розгортають корисні підказки з оптимізації.</p>
<p>На додачу до перфоманса не завадить перевірити якість коду, доступність сайту для зчитувачів екрана та SEO рівня сторінки: <a href="https://web.dev/measure/">Web.dev</a> зробить це автоматично, а ви отримаєте наочний результат. <b class="red">Update!</b> В Google вирішили закрити цей сервіс, повністю перенісши функціонал  на Pagespeed Insights (посилання вище).</p>
<p>Наступний крок – переконатися, що сайт оптимізовано для мобільних. Ось відповідний інструмент від Google: <a href="https://search.google.com/test/mobile-friendly">Mobile-friendly Test</a> покаже сторінку такою, якою її бачить ґуглбот для смартфонів.</p>
<p>А це інший корисний сервіс, що дає поради з оптимізації коду: <a href="https://yellowlab.tools/">Yellowlab Tools</a>. Для тесту можна обрати режими Десктоп, HD, Смартфон і Планшет. Інструмент оцінює лише найважливіше і видає структурований звіт. Для прикладу – оцінка того ж сайту МОН. Нижче скріншот, а інтерактивний результат <a href="https://yellowlab.tools/result/gd8ti3zrtg" rel="nofollow">тут</a>.</p>
<p class="txt-center"><img src="/images/posts/yellowlab-mon-gov-ua.jpg" alt="Yellowlab audit for mon.gov.ua" width="560" height="300" loading="lazy"></p>
<p>Оцінка низька не через вагу сторінки: в звіті вказано, що завантажуються дві jQuery...</p>
<blockquote>Букмарклети для відправки сторінок на тестування «з льоту»: <b><a class="red" href="javascript:(function()%7b window.open('https://pagespeed.web.dev/report?url='+encodeURIComponent(location.href))%7d)();
">Pagespeed</a></b> * <b><a class="red" href="javascript:(function(){var win=window.open('https://search.google.com/test/mobile-friendly?url='+encodeURIComponent(window.location.href)+'&run=1','_blank');win.focus();})()
">Mobile</a></b> * <b><a class="red" href="javascript:(function(){var win=window.open('https://yellowlab.tools?url='+encodeURIComponent(window.location.href)+'&run=1','_blank');win.focus();})()
">Yellowlab</a></b>. Додайте в закладки й натискайте зі сторінки, яку треба перевірити.</blockquote>
<p>Якщо результати вашого сайту неоптимістичні, доведеться звертатись з рекламацією до розробника або шукати серед знайомих експерта з HTML-JS-CSS.</p>
<blockquote>Корисно ще виміряти затримку відповіді сервера, провести паралельне завантаження сторінок і т.п. – це тут, <a href="https://www.webpagetest.org/">на Webpagetest</a>. Не хочете занадто занурюватись? Тоді <a href="https://tools.pingdom.com/">на Pingdom</a>: він видасть просту і зрозумілу відповідь.</blockquote>
<p>Хай там як, провальні тести не означатимуть кінець всьому. Поки що сайти можуть ранжуватись, користуючись з посилань та якісного контенту, але далі буде складніше. Тож, бажано виправити вади сайту якнайшвидше!</p>
</div>
<div>
<h2 id="3">Free Web Crawlers, або Обираємо черв'ячка на сайт задарма</h2>
<p>Тут будуть не лише безплатні, але й <b>free trial</b> краулери, якими можна користуватися задарма обмежений період. Серед них ви оберете SEO софт, з яким протестуєте сайт не гірше за профі. Складність буде в тому, як той звіт інтерпретувати та як виправити помилки, нічому не зашкодивши.</p>
<p>Перед тим, як відкрити будь-яку програму, пригадайте, будь ласка, термінологію. Най-найнеобхідніший мінімум:
</p>
<ul>
  <li><em>canonical</em> – основна версія сторінки, вказується в href лінку з атрибутом rel="canonical";</li>
  <li><em>redirect</em> – переспрямування на інший URL, може бути постійним 301 або тимчасовим 302;</li>
  <li><em>robots.txt</em> – файл, в якому можна заборонити одному або кільком ботам доступ до сторінок, файлів чи директорій на сайті;</li>
  <li><em>noindex</em> – директива, яка вимагає вилучити дану сторінку з індексу.</li>
  <li><em>sitemap.xml</em> – знаходиться в кореневому каталозі сайту, містить перелік усіх індексованих сторінок.</li>
  <li><em>hreflang</em> – атрибут посилання, який специфікує мову та географічне таргетування даної сторінки.</li>
</ul>
<p>Тепер можна обирати софт. Розрізняють <strong>хмарні</strong> (cloud-based) і <strong>десктопні</strong> вебкраулери. Щоб побачити сайт таким, як його бачить Ґугл, або щоб уникнути блокування, кожен краулер може вдати з себе Googlebot'а, підробивши значення User Agent. Але це можна викрити додатковою перевіркою.</p>
<h3>Хмарні краулери</h3> 
<p>Незамінні для великих сайтів з сотнями тисяч сторінок. Як розумієте, краулінг в такому масштабі безплатно ніхто не забезпечить.</p>
<p class="txt-center"><img src="/images/posts/cloud-based-crawlers.jpg" alt="Best free-trial cloud-based crawlers" width="740" height="60" loading="lazy"></p>
<p>Втім, <a href="https://teracrawler.io/">Teracrawler</a> дозволить вам задарма перевірити до 10 тисяч URL, а <a href="https://www.oncrawl.com/">Oncrawl</a> запропонує пробний 14-денний доступ до платформи. Окремо відмічу український хмарний краулер <a href="https://sitechecker.pro">Sitechecker</a>: простий в налаштуванні, позиціює себе як найкращий вибір для онлайн комерції, але пробний період лише 7 днів.</p>
<h3>Десктопні краулери (спайдери)</h3> 
<p>Годящий варіант, але краулінг буде обмежений можливостями машини, на яку встановлено програму. Назву трьох виробників SEO софту, беззаперечно вартих вашої уваги.</p>
<p class="txt-center"><img src="/images/posts/desktop-crawlers.jpg" alt="Best free-trial desktop crawlers" width="740" height="65" loading="lazy"></p>
<ul>
  <li><a href="https://sitebulb.com/">Аудитор Sitebulb</a>: йому немає рівних у класифікації помилок, поясненні можливих причин їх виникнення і потенційної шкоди. Він знайде приховані вади сайту, намалює граф-карту, все розкладе по полицях і пояснить англійською. Власники пропонують двотижневий trial.</li>
</ul>
<p>Недолік для неспеціаліста: звіт Sitebulb надасть стільки інформації, що без практики в ній можна загубитись. Якщо боїтеся, раджу почати з іншої програми.</p>
<ul>
  <li>Спайдери <a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a> та <a href="https://netpeaksoftware.com/spider">Netpeak Spider</a> мають багато спільного. Перший старший і ширше розповсюджений; другий створено на заміну лідеру: він сучасний (український:) та, можливо, краще адаптований для деяких задач. Для початкового аналізу відмінності між програмами неважливі.</li>
</ul>
<p>Обидва інструменти потребують гідної оплати. Але Netpeak пропонує 14-денний trial, натомість Screaming Frog надає безкоштовну обмежену версію, яка аналізує не більше 500 сторінок з одного домену. </p>
<p>Думаю, ця трійця сервісів здатна на 99.9% закрити проблему SEO-техогляду для будь-якого сайту.</p>
</div>
<div>
<h2 id="4">On-page SEO: перевіряємо сторінки «на лету» букмарклетами</h2>
<p>Тож, що маємо результати краулінгу і хочемо вручну перевірити проблемні сторінки. Прихильники швидких рішень запросять в Ґугл «check on-page seo online», чи щось таке.</p> 
<p>Втім, якщо попередні етапи пройдено, я не рекомендую шукати додаткові сервіси. До інформації від краулерів і web.dev суттєво додати нічого. Прото On-page-валідатори, вірогідно, знайдуть «вади» і відправлять вас скоротити дескріпшн, додати 5 слів до першого абзацу і таке інше. От тільки це вже терени суб'єктивізму, а не технічне сео.</p>
<p><b>1.</b> Про вимоги до тайтлу, дескріпшену і ключових слів є в <a href="{{site.url}}/yak-rozshyryty-snipet-saitu-v-poshuku#2">пості про сніпети</a>. А тут пропоную букмарклет, який покаже <b><a href="javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&&(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()" class="red">Title+meta-tags+canonical</a></b> поточної сторінки. Перетягніть до панелі закладок і користуйтеся.</p>
<blockquote>Якщо канонікал не збігається з поточним URL, значить, поточна сторінка рекомендує пошуковику ранжувати замість себе<span class="under"> іншу – канонічну</span>. Це має бути свідомий вибір! Спрацює лише для сторінок зі схожим контентом та спільним призначенням. Якщо збираєтеся за допомогою canonical розв'язати проблему <a href="{{site.url}}/page=2/#pagination-checklist">пагінації в індексі</a>, краще поглянути на статтю за посиланням.</blockquote>
<p><b>2.</b> Наступний крок – передивитись посилання сторінки: ось букмарклет <b><a class="red" href="javascript: (function() {
    let num = 0, newWin = window.open().document, lnk = document.links, href, text, aria, title, isAccessible, isValid, error1 = '<b>????????href is not a valid URL</b>????????', error2 = '<b>????????inaccessible link????????</b>';
    function htmlEscape(s) { s = s.replace(/&/g, '&').replace(/>/g, '>').replace(/</g, '<'); return s; }
    function isURL(s) { try { return Boolean(new URL(s)); } catch (e) { return false; } }
    newWin.writeln('Links on <a href=\'' + location.href + '\'>' + location.href + '</a><br><hr>');
    for (let i = 0; i < lnk.length; ++i) {isAccessible = 1; isValid = 1; href = lnk[i].href; text = lnk[i].innerText; aria = lnk[i].getAttribute('aria-label'); title = lnk[i].getAttribute('title'); newWin.writeln(++num + '. <a href=\'');
        if (!href.startsWith('javascript:')) { newWin.writeln(htmlEscape(href) + '\'>');} else { newWin.writeln('javascript:\'>'); }
        if (!isURL(href)) {isValid = 0} if (lnk[i].innerHTML) {if (text.length > 1) { newWin.writeln(text.substring(0, 100));} else if (aria) { newWin.writeln(aria); } else if (title) { newWin.writeln(title);} else {isAccessible = 0;}} else { isAccessible = 0;}
        if (!isValid) {newWin.writeln(error1);} if (!isAccessible) { if (!isValid) { newWin.writeln('<br>');} newWin.writeln(error2);} newWin.writeln('</a><br>');} newWin.writeln('<hr></body></html>'); newWin.close(); })();">All-page-links</a></b>. Він відкриє вікно зі списком всіх посилань, включно зі значковими: для них замість анкора буде залучено текст з атрибутів <em>title</em> або <em>aria-label</em>.</p>
<blockquote>Якщо на сайті є кнопки без тексту, але з іконкою, вони мають бути accessible – доступними для тих, хто іконку не бачить. Тобто, елемент кнопки має містити спеціальні атрибути з інформацією для програм-зчитувачів.</blockquote>
<p><b>3.</b> Не завадить придивитись до заголовків та виділеного тексту на сторінці. Приміром, якщо є &lt;h1&gt;,&lt;h3&gt;, але немає &lt;h2&gt; – це недобре. Заголовками користуються лише для структурування! Ні в якому разі не можна задіювати &lt;h3&gt;, коли просто хочете мати великий шрифт. З курсивом та жирним також є тонкощі.</p>
<blockquote>Теги <span class="under">&lt;strong&gt; та &lt;em&gt;</span> є семантичним, смисловими, а їхні двійники<span class="under"> &lt;b&gt; та &lt;i&gt; </span> – декоративними. Виділений ними текст виглядає однаково: <b>жирний /b, strong/</b> або <i>курсив /i, em/</i>, але для пошуковика різниця є.</blockquote>
<p>Пропоную букмарклет <b><a class="red" href="javascript:(function() {let style = document.getElementById('outstanding'), newStyle; if (style) {style.remove()} else {newStyle = document.createElement('style');newStyle.setAttribute('type', 'text/css'); newStyle.setAttribute('id', 'outstanding');newStyle.innerHTML = 'strong:before {content: \u0022<strn: \u0022 !important} b:before {content: \u0022<b>: \u0022 !important} em:before {content: \u0022<em>: \u0022 !important} strong {background-color: #99c93a !important; color: black !important} b {background-color: #90BDD0 !important; color: black !important} em {background-color: #efb6fb  !important; color: black !important;} h1:before {content: \u0022<h1> \u0022 !important} h2:before {content: \u0022<h2> \u0022 !important} h3:before {content: \u0022<h3> \u0022 !important} h4:before {content: \u0022<h4> \u0022 !important} h5:before {content: \u0022<h5> \u0022 !important} h6:before {content: \u0022<h6> \u0022 !important} h1 {padding: 2px !important; background-color: #fc2929 !important; border: solid !important; border-radius: 9px !important; color: black !important} h2 {padding: 2px !important; background-color: #FF7C1C !important; border: solid !important; border-radius: 7px !important; color: black !important} h3,h4 {background-color: #ffb300 !important; border: solid !important; padding: 2px !important; border-radius: 5px !important ; color: black !important}';document.body.appendChild(newStyle);}})()">H1-h6, strong, b, em</a></b>, який розфарбує підзаголовки, а також семантичні і звичайні виділення на сторінці. Придивіться: може, десь &lt;b&gt; доцільно замінити на &lt;strong&gt;, чи навпаки?</p>
<p><b>4.</b> Треба перевірити, чи всі ілюстрації мають заповнені альт-атрибути. Тримайте закладку: <b><a class="red" href="javascript:(function() {function toArray(c) {let a = new Array;for (let k = 0; k < c.length; ++k) a[k] = c[k]; return a; }
    let images = toArray(document.images); for (let i = 0; i < images.length; ++i) { let img = images[i], div = document.createElement('div'); if (!img.alt) { img.alt='There is no alt text'; div.style.backgroundColor='red';} else {div.style.backgroundColor='orange';} div.appendChild(document.createTextNode(img.alt)); img.parentNode.replaceChild(div, img);}})();">Alt text for images</a></b>. Цей скрипт замінить фото та малюнки їхніми описами з альтів або попередить, що альтернативного тексту не існує.
</p>
<blockquote>Пошукові машини розпізнають зображення, але поки не ідеально. До того ж у відвідувача сайту фото може не завантажитись: як тоді дізнатись, що на ньому було? Для цього картинка повинна мати альт-текст, наприклад: alt="Зображення людини, що читає статтю про технічне SEO".</blockquote>
<p>Нюансів безліч, але... Думаю, основний план аудиту виконано. Якщо вважаєте, що тут чогось не вистачає, пишіть коментар: доповнимо разом!</p>
</div>