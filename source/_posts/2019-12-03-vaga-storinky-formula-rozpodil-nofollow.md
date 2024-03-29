---
layout: post
i18n-link: PR
lang: uk
locale: ua 


date: 2019-12-03T20:09:00Z
last_modified_at: 2022-08-20T20:00:00Z

title: "Як nofollow, ugc, sponsored впливають на PageRank"
tags: [PageRank, Links, On-page, Bookmarklets, Google, SEO]
description: "Про перенесення ваги сайту з посиланнями й обачне використання rel-атрибутів nofollow, ugc і sponsored &#10010; Про формулу PageRank і те, чому Google патентує інші її варіанти"
keywords: "вага сторінки"
schema: FAQPage

h1: "Про вагу сторінки й те, як посилання передають PageRank. Пояснення nofollow, ugc і sponsored" 
snippet_header: "Вага притікає до сайту, вага тане&#8230; То що ж впливає на живильну силу посилань?"

snippet: "Всі хочуть знати, як само посилання розподіляють вагу між сторінками. І поки ми пробуємо вгадати пропорцію, гуглбот вирегочує, читаючи, що «кожне вихідне посилання відбирає в донора 10–15% ваги»"

image: "leaking-link-juice.jpg"

---
<ul class="toc">
	<li><a href="{{ site.url }}{{ page.url }}#1">Перша формула PageRank</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#2">Вихідні посилання: шкода та користь</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#3">Nofollow: як запобігти витоку ваги</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#4">Підказки для ботів: ugc і sponsored</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#5">Різновиди ваги (= зайвий розділ)</a></li>
</ul>
<div>
<p> {{ page.snippet }}</p>
<p class="txt-center"> 
<img src="/images/posts/{{ page.image }}" alt="Як запобігти витоку link juice (соку посилань) на сайті" class="webfeedsFeaturedVisual" width="490" height="450"></p>
<p>Почнемо з того, що точної ваги сторінка не має, якщо не говорити про розмір завантажених ресурсів. Є <strong>значущість</strong> в порівнянні з іншими сторінками. Ця значущість (цінність, вага) передається між сайтами за допомогою гіперпосилань, тому що пошуковик сприймає посилання як голос на користь вебсторінки, яку цитують.</p> 
<p id="1">Пошукові системи вираховують важливість сторінки шляхом аналізу сотень чинників, багаторазово уточнюючи результат. От тільки кожна з них – Google, Bing та інші – робить це по-своєму, й точну формулу ваги ми ніколи не дізнаємось. Хоча відомо, що все починалося з цієї рекурентної формули рангу сторінки (не хочете пригадувати жах з дитинства  – <a href="{{ site.url }}{{ page.url }}#FAQ"><b class="red">&thinsp;тисніть сюди</b></a>):</p>
<p class="txt-center"> 
<img loading="lazy" src="/images/posts/page-rank-formula.jpg" alt="Формула PageRank (ваги сторінки)" width="420" height="85"></p>
<p>де <b><i>PR&#8239;(A)</i></b> – <strong>PageRank</strong> сторінки <b><i>A</i></b>, а <b><i>d</i></b> – коефіцієнт загасання (&#8776;&#8239;0.85), який у формулі помножається на суму за всіма посиланнями на <b><i>A</i></b>.&#8239; Кожен доданок (дріб) – це частка від ділення рангу сторінки-донора <b><i>Q</i></b>&#8239; на кількість вихідних посилань з неї. Хоча вираз є часто згадуваним в інтернеті, Google навряд чи ним прямо користується. Інакше 10 &#171;кишенькових&#187; сайтів, посилаючись один на одного, могли б суттєво підвищити ранг окремих сторінок.</p>
<p>В тексті оновленого <a href="https://patents.google.com/patent/US9165040B1/en">патенту PageRank</a> наведено варіації першої формули, які оцінюють <b>&#171;відстань&#187; від <i>A</i></b>&#8239; до вибраної множини сторінок-авторитетів. Знаменно, що в них враховуються коефіцієнти значущості <b>кожного посилання</b> окремо. Числа ці знає тільки Гугл, а ми можемо лише здогадуватися, що й як впливає на вагомість посилань.</p>
<p id="FAQ">Спробуємо дати собі раду з поняттями? Почнемо з простих питань.</p>
<h3 class="faq">Чому вихідні посилання зменшують вагу сторінки?</h3>
<p>Тому що кожне посилання ніби говорить: «Не затримуйся тут, завітай <span class="u">сюди</span>».</p>
<h3 class="faq">Чому вхідні посилання додають авторитету?</h3>
<p>Тому що сторінка з посиланням ніби рекомендує: «Раджу поглянути <span class="u">ось на це</span>».</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">В чому різниця між <em>dofollow</em> і <em>nofollow</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">В першому випадку пошуковий робот за посиланням перейде, а в іншому – ні, якщо це, звісно, добре вихований бот. Атрибут <span class="red">rel="nofollow"</span> для посилання – на кшталт вивіски <span class="red">«Проходу нема»</span>; dofollow – навпаки, дозвільне значення rel за замовчанням. Гуглбот завжди зважав на заборону ступати далі, але <span class="u">1 березня 2020</span> набув <span class="u">право ігнорувати</span> нофолоу і сканувати сторінку.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Як перевірити посилання на <em>dofollow/nofollow</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Це легко зробити за допомогою букмарклета – закладки з кодом JavaScript. Перетягніть <a href='javascript:(function(){var o,e,l=document.links;for(o=0;o<l.length;++o)-1!=(e=l[o].rel.toLowerCase()).indexOf("nofollow")?(l[o].style.backgroundColor="yellow",l[o].title+=" NOfollow"):l[o].style.backgroundColor="lightgreen",-1!=e.indexOf("ugc")&&(l[o].style.border="6px solid orange",l[o].title+=" UGC"),-1!=e.indexOf("sponsored")&&(l[o].style.outline="4px solid red",l[o].title+=" Sponsored")})()'>Nofollow-and-ugc-link-highlighter</a> на панель закладок вашого браузера. Знаходячись на сторінці, посилання якої хочете перевірити, натисніть букмарклет-хайлайтер. Всі nofollow лінки стануть жовтими, інші – зеленими; <a href="{{ site.url }}{{ page.url }}#3">користувацькі та спонсоровані</a> посилання матимуть кольорову границю, помаранчеву або червону.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<img loading="lazy" src="/images/posts/bot.jpg" alt="На малюнку робот" class="fullscreen-right" title="Може, це не гуглбот, але симпатичний, правда?"  width="300" height="515">
	<h3 itemprop="name">Чому посилання з <em>nofollow</em> не передає вагу?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Тому що значущість наосліп не передається. Коли бот не може перевірити, що знаходиться за адресою, то не може й встановити, чи на доречну сторінку спрямовують користувача.</p>
	</div>
</div>
<p>Втім, якщо вже ботам дозволили ігнорувати nofollow...</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Чи можуть <em>nofollow</em> беклінки покращити позиції?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Так, але не гарантовано. <a href="https://www.seroundtable.com/google-nofollow-link-attribute-change-sponsored-ugc-28196.html">Добірка твітів</a> гуглерів та знаних SEO дозволяє припустити, що технічно пошуковик здатен рахувати зовнішні посилання з nofollow як голоси ЗА, обчислюючи рейтинг сторінки. Понадто, якщо лінк розмістив трастовий сайт на зразок Вікіпедії.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Чи з кожним <em>follow</em> посиланням прибуває однаково ваги?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Ні. Найбільш помітне на сторінці посилання – те, яке з більшою ймовірністю клікнуть – є найбільш вагомим. Далі – за зменшенням.</p>
	</div>
</div>
<p class="txt-center"><small>Robot by <a href="https://unsplash.com/@rocknrollmonkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rock'n Roll Monkey</a> on Unsplash. Modified with befunky.com</small></p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Як <em>noopener</em> і <em>noreferrer</em> пов’язані з <em>nofollow</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Спільне в них лише те, що це значення атрибута rel тега &lt;a&gt;. Noopener і noreferrer НЕ впливають на розподіл ваги і НЕ призначені для ботів. Одна з головних їхніх задач – захистити сайт, що містить посилання з target="_blank" на інший домен, від атак з підміною вмісту вікна.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Чи переносить посилання 301-редирект?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Про Google: якщо редирект один, з ним переходить майже вся користь від посилань. Окрім випадків, коли вихідна та цільова сторінки тематично не пов’язані: тоді з редиректом <span class="under"> не перейде нічого,</span> його буде розцінено як Soft 404. Інші пошукові системи, ймовірно, переспрямовують вагу зі втратою.</p>
	</div>
</div>
<p>Коли ж виникає ланцюжок переспрямувань, пошуковик обирає <strong>канонічну сторінку</strong>: їй перепаде майже вся значущість. Але є нюанс: <span class="under">що довше ланцюжок,</span> то менше шансів, що канонічною буде визнана потрібна сторінка. Тобто вага<span class="under"> може не дійти за призначенням.</span></p>
<p class="txt-center">&#10045;&nbsp;&#10045;&nbsp;&#10045;</p>
<p>Ніби все сказано, можна завершувати? Ні, розмова тільки-но починається! Насправді <b>вихідні посилання</b> здатні <b class="green">додати значущості</b>, а <b>вхідні</b>, натомість, можуть <span class="red">додати щербатої слави</span>. До останніх можна зарахувати посилання зі &#171;смітників&#187;, що заслуговують на санкції пошукових систем. Якщо токсичних зовнішніх посилань багато, варто подумати, чи не відмовитися від них взагалі: Google та Bing для цього мають <span class="red">Disavow tool</span> в панелі вебмайстра.</p>
<p>Пропоную надалі забути про підрахунки і покладатися виключно на здоровий глузд. Кожен html-тег</p>
<p class="txt-center">&lt;a href="url-адреса" rel="інструкція"&gt;&#8239;анкор&#8239;&lt;/a&gt;
</p>
<p>впливає на значущість і донора, і реципієнта складним чином. Як само – спробуємо з’ясувати.</p>
</div>
<div>
<h2 id="2">Вихідні посилання: коли вони шкодять, а коли допомагають</h2>
<p>Ділитися вагою з іншими сайтами буває шкода, тому дехто намагається зовсім уникати лінків назовні або додає до кожного атрибут rel=nofollow. Обидві стратегії ні до чого доброго не призводять. Насправді зовнішні посилання не такі вже й страшні, якщо розумієш, як вони працюють.</p>
<p class="txt-left">Ви <span class="under">ділитеся значущістю <b>без користі</b> </span>для себе, коли:</p>
<ul>
  <li>посилаєтеся на сумнівний ресурс з нульовим авторитетом;</li>
  <li>посилання запропоноване в такому контексті, що користувач за ним перейде й навряд чи повернеться («в&nbsp;нас&nbsp;світлин обмаль, а <span class="u">ось тут</span> їх повно»);
<img loading="lazy"  class="fl-right restrict vw35" src="/images/posts/give.jpg" alt="Втрачати PageRank (вагу сторінки)" width="160" height="160"></li>
  <li>анкором посилання є ключове слово, під яке оптимізована ваша сторінка;
  </li>
  <li>посилання розміщене в навігаційному меню або сайдбарі:
    <ul>
      <li>по-перше, наскрізні посилання назовні пошукові системи не схвалюють;</li>
      <li>по-друге, лінк з меню означає, що вагу втрачатиме не одна єдина, а кожна сторінка. </li>
    </ul>
  </li>
</ul>
<p class="txt-left">Поділяючи <span class="under">вагу, <b>ви розбудовуєте</b> репутацію і</span> підкріплюєте довіру до сайту, якщо:</p>
<ul>
  <li>посилаєтеся на визнаних авторитетів у своїй галузі чи загалом в Інтернет;</li>
  <li>створюєте мегакорисний для відвідувача контент («рейтинг безкоштовного софту»);
<img loading="lazy"  class="fl-right restrict vw35" src="/images/posts/give-back.jpg" alt="Поділяти вагу з іншими вебсторінки буває вигідно" width="160" height="160"></li>
  <li>започатковуєте добрі взаємини з тематичним сайтом, чия аудиторія може зацікавитись вашим контентом;</li>
  <li>пропонуєте користувачеві реєстр онлайн-ресурсів, які стануть йому у пригоді на наступному етапі.</li>
</ul>
<blockquote>Навряд чи єдиний сайт задовольнить всі потреби користувача: він все одно піде, але запам’ятає напутню пораду. Можливо, побачивши потім знайомий логотип у Пошуку, людина більш охоче перейде на сайт, що вже здобув довіру.</blockquote>
<p class="txt-left">Коли <span class="under"><b>необхідно</b> додати посилання</span>, незважаючи на ціну втрат:</p>
<ol>
  <li><span>Коли використовуєте чийсь контент за ліцензією, що вимагає атрибуції.</span></li>
  <li><span>Коли перекладаєте іншомовні матеріали.</span></li>
  <li><span>Коли обговорюєте події, що висвітлені в мережі, або чиєсь висловлювання.</span></li>
</ol>
<p>Мова не тільки про етику, а й про те, що пошукова система може не зрозуміти відсутності цитати в цих випадках.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/webpages-and-links.jpg" alt="Розподіл ваги між сайтами: що роблять sponsored, nofollow, ugc" width="710" height="450"></p>
<p>Досі ми говорили здебільшого про лінки назовні і у зворотному напрямку (беклінки). Проте внутрішні посилання теж важливі: вони здатні кардинально переподілити вагу на сайті. <strong>Внутрішній PageRank</strong> сторінок обраховують деякі краулери: з хмарних назвемо <a href="https://www.oncrawl.com/solutions/seo-challenges/internal-linking/">Oncrawl</a>, з десктопних – <a href="https://netpeaksoftware.com/spider#features">Netpeak Spider</a>. Взагалі, внутрішня перелінковка – основа оптимізації сайту, але розповідь про це потребує окремої статті.</p>
</div>
<div>
<h2 id="3">Як запобігти витоку ваги з сайту й не переборщити з nofollow</h2>
<p>Безпідставне застосування нофолоу лише дезорієнтує ботів пошукових систем і може звести нанівець користь від посилань назовні. Тож, користуймося ним обачно, лише щоби попередити витік PageRank.</p>
<p><strong>Краще поставити rel="nofollow"</strong>:</p>
<ul class="featured plus">
  <li>На внутрішньому посиланні, яке веде на неіндексовану сторінку: пошук на сайті, сортування і т.ін.. Це заощадить не тільки вагу, а й зусилля пошукових ботів (=&#8239;збереже ваш краулінговий бюджет).</li>
  <li>На посиланні з контенту, якщо не згодні відповідати за ресурс репутацією. Зокрема, коли лінк розмістив хтось із користувачів.</li>
  <li>На кнопках шерингу в соцмережах.</li>
  <li>На посиланнях з віджетів, лічильників і т.ін., якщо є можливість редагувати код.</li>
  <li>Коли гіперлінк розташований у найвигіднішому місці, а вказує на технічний ресурс (архів і т.ін.), який не потребує ваги й не є авторитетом. Альтернатива nofollow – винести такі посилання з примітками вниз.</li>
</ul>
<p><b>NB!</b> rel&#8239;=&#8239;nofollow – ненадійний захист від сканування сторінки, і точно не спосіб ухилитися від індексації. Небажані внутрішні адреси можна продублювати в файлі robots.txt, але краще <a href="https://support.google.com/webmasters/answer/93710?hl=en">заборонити їх індексацію</a> надійним методом.</p>
<p>Якщо на якійсь «застійній» сторінці сайту більшість посилань веде туди, куди пошуковому роботу краще не заглядати, можна скористатися тегом &lt;<b>meta</b> name="<b>robots</b>" content="nofollow"&#8239;/&gt;, який має міститися в &lt;head&gt; документу. Він забороняє ботам дивитися в бік посилань. І, на відміну від rel="nofollow", забороняє суворо.</p>
<p><strong>Не ставимо rel="nofollow"</strong> не розбираючи:</p>
<ul class="featured minus">
  <li>На кожному посиланні назовні. Всі випадки потребують індивідуального аналізу.</li>
  <li>Посилаючись на першоджерела чи профіль автора цитованого висловлювання.</li>
  <li>З метою «скульптурування рангу» – перерозподілу ваги на своєму сайті.</li>
</ul>
<p>В кожній незрозумілій ситуації згадуємо золоте правило: «<span class="red">Не стій на шляху пошукового бота</span>, коли не маєш на те вагомих причин!»</p></div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<h2 id="4"><span itemprop="name">Що означають UGC і Sponsored</span> і чим відрізняються від Nofollow</h2>
<p>У вересні 2019 до підтримуваної усіма пошуковими системами директиви <strong>nofollow</strong> та її антипода <strong>dofollow</strong> було додано ще дві вказівки, виключно для гугл-ботів.</p>
<p><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">Це значення атрибута rel тегу link: rel="<strong>ugc</strong>" і rel="<strong>sponsored</strong>". Обидва не є директивами, це лише підказки: бот може взяти їх до уваги, але не зобов’язаний. <strong>User Generated Content</strong>, або <strong>UGC</strong> – створений користувачем контент: коментарі, відгуки, пости та обговореннях на форумах. <strong>Sponsored</strong> –  афільовані та платні посилання й реклама.</span></span></p>
<p><b class="red">UPD!</b> Літом 2020 Bing <a href="https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a">підтвердив</a>, що його пошукові боти підтримують введені Гуглом підказки <strong>sponsored і ugc</strong> в атрибуті <strong>rel</strong> посилання.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/user-generated-content.jpg" alt="Молодь створює ugc-контент найбільш активно" width="600" height="420"><br>
<small><a href="https://www.freepik.com">Designed by Freepik</a></small></p>
<blockquote>В <a href="https://webmasters.googleblog.com/2019/09/evolving-nofollow-new-ways-to-identify.html">офіційному анонсі</a> сказано, що нововведення не має за мету посунути старий добрий nofollow. Застосування підказок від вебмайстрів ніхто не вимагає, хіба що вони самі вирішать допомогти Гуглу зрозуміти природу посилань.</blockquote>
<p>Підказки можна застосовувати у зв’язці. Додамо ugc до nofollow – матимемо rel&#8239;=&#8239;"<span class="red">nofollow&nbsp;ugc</span>": користувацький контент, на який боту не варто звертати уваги. Аналогічно, афільоване посилання від юзера може бути подане як rel&#8239;=&#8239;"<span class="red">ugc&nbsp;sponsored</span>". Довідка Google стверджує, що в тих ситуаціях, коли sponsored доречний, варто надати йому перевагу над nofollow. І натякає, що ugc зазвичай також означає заборону для ботів задивлятися на href.</p>
<p>Однак... Для нас безпечніше вважати, що ugc та sponsored <b>НЕ РОБЛЯТЬ посилання nofollow</b>. Хоча б тому, що інші пошукові системи їх не розуміють.</p>
<blockquote>Цей <a href="https://moz.com/blog/ugc-distilledodn-seo-test">A/B тест</a> підтверджує, що не варто відмовлятися від nofollow, коли він на своєму місці. Мoz.com/blog розповідає, як заради експерименту rel="nofollow" замінили на rel="ugc" на половині посилань з коментарів.</blockquote> 
<p>В результаті було відмічено падіння трафіку і доведено, що з імовірністю 95% відвідуваність за місяць лишається в межах<span class="under"> від -26 тис. до +9,3 тис. осіб</span>. Ніби й нічого, а все ж суттєва перевага втрат над виграшем впадає в око.</p>
<p><b>Підсумовуємо</b>. Нові підказки обмежують перенесення ваги посиланнями, і найбільше це стосується sponsored. Проте основним методом контролю PageRank поки залишається nofollow. Якщо не виникає бажання підказувати ботам, на своєму сайті<span class="under"> можна не змінювати нічого. </span>Google стверджує, що в змозі самостійно розібратися, де спам, де реклама, а де значущі посилання, розміщені людьми заради людей.</p></div>
<div>
<h2 id="5">Різновиди ваги сторінки <span class="mute">&nbsp;Розділ, якого не було б, якби не SEO</span></h2>
<p>Тут я мушу розказати, в чому різниця між динамічною і статичною вагою, як перевірити Page Rank онлайн і т.ін. Чому <span class="u">мушу</span>? Тому що сайти, які добре ранжуються за запитами про вагу сторінки, розлого розповідають про все це. Якщо я не зроблю того ж, пошуковик до-о-о-о-овго не зможе збагнути, що ця стаття з тієї ж тематики.</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Чим відрізняються <em>статична</em> і <em>динамічна</em> вага?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text"><strong>Статична вага</strong> – це запитонезалежна величина, яка обчислюється на основі посилань. Тобто, це і є PageRank. <strong>Динамічну вагу</strong> неможна розрахувати заздалегідь: вона змінюється з кожним запитом кожного користувача, залежить від наміру й поведінки юзера.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Як перевірити вагу сторінки <em>онлайн</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Достовірно вагу (PageRank) можна було дізнатися онлайн десь до 2013 року. Після того дані Google вже не оновлювалися, і у 2016 PR зник з тулбару браузера. Але й досі існують сайти на зразок <a href="https://www.checkpagerank.net/">checkpagerank.net</a>, які обчислюють PageRank онлайн. Щоправда, ніхто не гарантує повноту бази посилань.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Чи існує <em>альтернатива</em> PageRank?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Як альтернативу можна розглянути метрики <em>Ahrefs URL Rank, Page Authority (MOZ), Trust Flow (Majestic)</em> і фірмові різновиди рангу – <em>Serpstat PageRank</em> та ін. Якщо ж питання поставлене з думкою про методи ранжування вершин динамічних графів, варто згадати про алгоритми <a href="https://www.researchgate.net/publication/269157620_Adaptive_on-line_page_importance_computation">OPIC</a> і <a href="https://en.wikipedia.org/wiki/SALSA_algorithm">SALSA</a>.</p>
	</div>
</div>
</div>
<p>Поки все. Сподіваюся, текст не викликав жалю за витраченим часом.</p>
<p>Якщо йому не вистачає чогось важливого, доповнення можна обговорити в коментарях.</p>