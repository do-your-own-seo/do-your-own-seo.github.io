--- 
layout: post
i18n-link: PR
lang: ru
locale: ru


date: 2019-12-03T20:09:00Z
last_modified_at: 2022-08-20T20:00:00Z

title: "Ссылочный вес сайта: про PageRank, nofollow, ugc и sponsored"
tags: [PageRank, Links, On-page, Bookmarklets, Google, SEO]
description: "Как не допустить утечки ссылочного веса? Какую формулу PageRank использует Google &#10010; Про nofollow, ugc и sponsored: как rel-атрибуты ссылки влияют на передачу веса страницы"
keywords: "вес страницы"
schema: FAQPage

h1: "Вес страницы и передача PageRank со ссылкой. Объяснение nofollow, ugc и sponsored"
snippet_header: "Как ссылки питают веб-страницы. Когда сайт теряет и набирает вес"

snippet: "Никто не отказался бы узнать, сколько веса передает и рассеивает каждая ссылка. И пока мы силимся угадать пропорцию, гуглбот хихикает украдкой, читая, что «каждая исходящая ссылка отбирает у донора 10&#8211;15% веса»."

image: "leaking-link-juice.jpg"

---
<ul class="toc">
	<li><a href="{{ site.url }}{{ page.url }}#1">Старая добрая формула PageRank</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#2">Исходящие ссылки: польза и вред</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#3">Nofollow: как сберечь вес сайта</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#4">Подсказки для ботов: ugc и sponsored</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#5">Типы веса страницы (лишний раздел)</a></li>
</ul>
<div>
<p>{{ page.snippet }}</p>
<p class="txt-center"> 
<img src="/images/posts/{{ page.image }}" alt="Как не допустить утечки ссылочного сока на сайте" class="webfeedsFeaturedVisual" width="490" height="450"></p>
<p class="txt-justify">Начнем с того, что точного веса у страницы нет, если не говорить о размере загруженных ресурсов. Есть <strong>сравнительная ценность</strong> по отношению к другим страницам. Эта ценность (значимость, вес) передается между сайтами с помощью гиперссылок, т.к. поисковик воспринимает ссылку как голос в пользу цитируемой страницы.</p>
<p id="1">Поисковые системы вычисляют значимость веб-страниц с учетом сотен факторов, многократно уточняя результат. Однако Google, Bing, Yandex, Baidu и пр. делают это по-своему, и точной формулы веса мы никогда не узнаем. Хотя известно, что началось все с этой рекуррентной формулы ранга страницы (если не желаете вспоминать этот кошмар из детства, <a href="{{ site.url }}{{ page.url }}#FAQ"><b class="red">жмите сюда</b></a>):</p>
<p class="txt-center"> 
<img loading="lazy" src="/images/posts/page-rank-formula.jpg" alt="Формула PageRank (ранга страницы)" width="420" height="85"></p>
<p>где <b><i>PR&#8239;(A)</i></b> – <strong>PageRank</strong> страницы <b><i>A</i></b>, а <b><i>d</i> </b>– коэффициент затухания (&#8776;&#8239;0.85), который в формуле умножается на сумму по всем ссылкам на <b><i>A</i></b>. &#8239;Каждое слагаемое представляет собой частное от деления ранга ссылающейся страницы <b><i>Q</i></b>&#8239; на количество ее исходящих ссылок. Хотя выражение в ходу в Интернет, вряд ли Google слишком на него полагается. Иначе N «карманных» сайтов, ссылаясь друг на друга, могли бы повысить ранг отдельных страниц.</p>
<p>В тексте обновленного <a href="https://patents.google.com/patent/US9165040B1/en">патента PageRank</a> приведены вариации первой формулы, оценивающие <b>&#171;расстояние&#187; от <i>A</i>&#8239;</b> до множества избранных («сеянных») страниц. К тому же в новых уравнениях учтены коэффициенты значимости каждой <b>отдельной ссылки</b>. Величины их знает только Гугл, мы же можем лишь предполагать, что и как влияет на весомость ссылок.</p>
<p id="FAQ">Попробуем разобраться? Начнем с простого.</p>
<h3 class="faq">Почему исходящие ссылки отбирают вес?</h3>
<p>Потому что любая ссылка будто бы говорит: «Не задерживайся здесь, загляни <span class="u">сюда</span>».</p>
<h3 class="faq">Почему внешние ссылки добавляют авторитета?</h3>
<p>Потому что разместившая ссылку страница будто предлагает: «Очень рекомендую <span class="u">вот это</span>».</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">В чем разница между <em>dofollow</em> и <em>nofollow</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">В том, что по первой ссылке поисковый робот перейдет, а по второй – нет, если он хорошо воспитан. Атрибут <span class="red">rel&#8239;=&#8239;"nofollow"</span> – вроде таблички <span class="red">«Хода нет»</span>, а dofollow – разрешительное значение rel по умолчанию. Раньше при виде nofollow googlebot послушно отворачивался, но <span class="u">1 марта 2020</span> получил право <span class="u">игнорировать запрет</span> и сканировать страницу.</p>
	</div>
</div>

<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Как проверить ссылки на <em>dofollow/nofollow</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Это легко сделать с помощью букмарклета – закладки с кодом JavaScript. Перетащите <a href='javascript:(function(){var o,e,l=document.links;for(o=0;o<l.length;++o)-1!=(e=l[o].rel.toLowerCase()).indexOf("nofollow")?(l[o].style.backgroundColor="yellow",l[o].title+=" NOfollow"):l[o].style.backgroundColor="lightgreen",-1!=e.indexOf("ugc")&&(l[o].style.border="6px solid orange",l[o].title+=" UGC"),-1!=e.indexOf("sponsored")&&(l[o].style.outline="4px solid red",l[o].title+=" Sponsored")})()'>Nofollow-and-ugc-link-highlighter</a> на панель закладок браузера. Находясь на странице, ссылки которой хотите проверить, кликните букмарклет-хайлайтер. Все nofollow станут желтыми, остальные ссылки – зелеными, причем <a href="{{ site.url }}{{ page.url }}#3">пользовательские и спонсорские</a> будут обведены оранжевым и красным.</p>
	</div>
</div>

<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<img loading="lazy" src="/images/posts/bot.jpg" alt="На рисунке робот" class="fullscreen-right" title="Может, и не гуглбот, но симпатичний, правда?" width="300" height="515">
	<h3 itemprop="name">Почему ссылки с <em>nofollow</em> не передают вес?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Потому что значимость не передается вслепую. Если бот не проверит, что находится по ссылке, то не сможет и оценить, на достойный ли ресурс отправляют пользователя.</p>
	</div>
</div>
<p>Но раз уж ботам разрешили игнорировать nofollow...</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Могут ли <em>nofollow</em> бэклинки улучшить позиции?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Могут, но не гарантированно. <a href="https://www.seroundtable.com/google-nofollow-link-attribute-change-sponsored-ugc-28196.html">Подборка твитов гуглеров</a> и известных SEO вселяет надежду, что технически поисковик способен учитывать обратные ссылки с нофоллоу как голос "за" при ранжировании. Тем более, если они размещены на трастовых сайтах вроде Википедии.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Все ли <em>follow</em> ссылки прибавляют равную долю веса?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Нет. Самая заметная ссылка на странице (та, которую скорее всего кликнут) и есть самая весомая. Далее – по убывающей.</p>
	</div>
</div>
<p class="txt-center"><small>Robot by <a href="https://unsplash.com/@rocknrollmonkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rock'n Roll Monkey</a> on Unsplash. Modified with befunky.com</small></p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Как <em>noopener и noreferrer</em> связаны с <em>nofollow</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Общее у них только то, что это значения атрибута rel тега &lt;a&gt;. Noopener и noreferrer НЕ влияют на передачу веса и НЕ предназначены для ботов. Одна из основных их задач – обезопасить страницу, содержащую ссылку с target="_blank" на другой домен, от атак с подменой родительского окна. </p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Переходит ли ссылочный вес с 301-м редиректом?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Подход Google: если редирект один, перейдет почти весь вес. Кроме случаев, когда исходная и целевая страницы тематически не связаны. Тогда не передастся вообще ничего: перенаправление будет расценено как Soft 404. Другие поисковые системы могут перенаправлять вес с потерями.</p>
	</div>
</div>
<p>Если редиректы идут цепочкой, поисковик попытается определить <strong>каноническую страницу</strong>: ей и достанется значимость. Но <span class="under">чем длиннее цепь </span>редиректов, тем меньше шансов, что канонической будет признана нужная страница. То есть весь вес <span class="under">может не дойти по назначению.</span></p>
<p class="txt-center">&#10045;&nbsp;&#10045;&nbsp;&#10045;</p>
<p>Казалось бы, все просто, можно заканчивать... Но нет, разговор только начинается! На деле <strong>исходящие</strong> ссылки способны <strong class="green">добавить важности</strong>, а <strong>входящие</strong> – наоборот, <span class="red">подмочить репутацию</span>. К последним относятся ссылки с &#171;помоек&#187;, к которым вот-вот будут (или уже) применены санкции поисковых систем. Если токсичных внешних ссылок много, лучше их отклонить: Bing и Google предоставляют для этого <span class="red">Disavow tool</span> в панели вебмастера.</p> 
<p>Предлагаю с этого момента забыть про формулы и полагаться только на здравый смысл. Каждый тег</p>
<p class="txt-center">&lt;a href="url-адрес" rel="инструкция"&gt;&#8239;анкор&#8239;&lt;/a&gt;</p>
<p>влияет на значимость и донора, и реципиента сложным образом. Каким именно – попробуем разобраться.</p>
</div>
<div>
<h2 id="2">Ссылки на другие сайты: вредны или полезны?</h2>
<p>Делиться весом с другими ресурсами бывает жалковато, поэтому многие стараются избегать ссылок «наружу» либо устанавливают им атрибут rel="nofollow". В чистом виде обе стратегии ни к чему хорошему не приводят. Исходящие ссылки не так страшны, когда понимаешь, как они работают. </p>
<p>Вы <span class="under">делитесь значимостью <b>без выгоды</b>, </span>а то и с ущербом для себя, если:</p>
<ul>
  <li>ссылаетесь на подозрительный или существенно менее авторитетный ресурс;</li>
  <li>анкором ссылки является ключевое слово, под которое вы тщательно оптимизировали свою страницу; 
<img loading="lazy"  class="fl-right restrict vw35" src="/images/posts/give.jpg" alt="Делиться весомостью" width="160" height="160"></li>
  <li>ссылка подана в таком контексте, что на нее, скорее всего, кликнут и не вернутся («у&nbsp;нас&nbsp;фото маловато, а <span class="u">вот тут</span> полно»);</li>
  <li>ссылка размещена в меню или сайдбаре:
    <ul>
      <li>во-первых, сквозные ссылки наружу поисковые системы не одобряют;</li>
      <li>во-вторых, ссылка из меню означает, что весом жертвует не одна, а все ваши страницы.</li>
    </ul>
  </li>
</ul>
<p>Делясь весом<span class="under">, <b>вы приобретаете</b> доверие и</span> репутацию, если:</p>
<ul>
  <li>ссылаетесь на признанных авторитетов в отрасли или вообще в сети;</li>
  <li>создаете контент, мегаполезный для пользователя (рейтинг бесплатного софта); 
<img loading="lazy"  class="fl-right restrict vw35" src="/images/posts/give-back.jpg" alt="Получать выгоду" width="160" height="160"></li>
  <li>завязываете добрые отношения с тематическим сайтом, чьей аудитории может быть полезен ваш контент;</li>
  <li>предоставляете пользователю список онлайн-ресурсов, которые пригодятся ему на следующем этапе.</li>
</ul>
<blockquote>Вряд ли один сайт удовлетворит все будущие потребности пользователя: он уйдет, но будет благодарен за напутствие. Впоследствии, увидев знакомый логотип в результатах поиска, лояльный юзер не колеблясь перейдет на сайт.</blockquote>
<p>Когда<span class="under"><b> необходимо</b> сослаться, не считаясь</span> с ценой:
</p>
<ol>
  <li><span>Когда используете чужой контент по лицензии, требующей атрибуции.</span></li>
  <li><span>Когда переводите иноязычные материалы.</span></li>
  <li><span>Когда обсуждаете освещенное в сети событие или чье-то высказывание.</span></li>
</ol>
<p>Речь не только об этике, но и о том, что поисковая система вряд ли поймет отсутствие ссылки в данных случаях.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/webpages-and-links.jpg" alt="Атрибуты rel=sponsored, nofollow, ugc и передача веса" width="710" height="450"></p>
<p>До сих пор мы говорили, в основном, о ссылках вовне и обратных ссылках – бэклинках. Но внутренние ссылки тоже важны: они способны кардинально перераспределить вес на сайте. <strong>Внутренний PageRank</strong> страниц вычисляют некоторые краулеры: из облачных назовем <a href="https://www.oncrawl.com/solutions/seo-challenges/internal-linking/">Oncrawl</a>, из десктопных – <a href="https://netpeaksoftware.com/spider#features">Netpeak Spider</a>. Вообще, внутренняя перелинковка – основа оптимизации сайта, но разговор об этом требует отдельной статьи.</p></div>
<div>
<h2 id="3">Как предотвратить утечку веса с сайта и не переборщить с nofollow</h2>
<p>При бездумном использовании nofollow только дезориентирует ботов и сводит к нулю пользу исходящих ссылок. Поэтому <strong>применяем rel="nofollow"</strong> избирательно, только чтобы избежать потерь PageRank.</p>
<ul class="featured plus">
  <li>На внутренних ссылках на неиндексируемые страницы (поиск на сайте, сортировку и пр.). Это сбережет не только вес, но и усилия поисковых ботов – краулинговый бюджет.</li>
  <li>Когда нельзя поручиться за цитируемый ресурс репутацией. Например, если ссылка размещена пользователем.</li>
  <li>На ссылках из виджетов, счетчиков и пр. чужеродных элементов, если есть возможность редактировать код.</li>
  <li>На кнопках шеринга в соцсетях.</li>
  <li>Если ссылка выгодно расположена на странице, но указывает на архив или другой технический ресурс, который в весе не нуждается и не является авторитетом. Альтернатива nofollow – вынести такие ссылки со сносками в футер.</li>
</ul>
<p><b>NB!</b> rel&#8239;=&#8239;nofollow – не 100%-ная защита от сканирования ботом (и уж точно не защита от попадания в индекс). Нежелательные внутренние адреса можно продублировать в robots.txt, но если цель – запретить их индексацию, то сделать это лучше <a href="https://support.google.com/webmasters/answer/93710?hl=ru">надежным способом</a>.</p>
<p>Если на некой «тупиковой» странице большинство ссылок ведет туда, куда ботам лучше не заглядывать, можно воспользоваться тегом &lt;<b>meta&nbsp;</b>name="<b>robots</b>" content="nofollow"&#8239;/&gt;. Он размещается в блоке &lt;head&gt; и запрещает ботам переходить по ссылкам страницы. Причем в отличие от атрибута nofollow, запрещает строго.</p>
<p><strong>Не используем rel="nofollow"</strong> без разбору.</p>
<ul class="featured minus">
  <li>Для всех исходящих ссылок: каждый случай стоит рассматривать отдельно.</li>
  <li>Ссылаясь на первоисточник информации или профиль автора цитаты.</li>
  <li>Для «скульптурирования ранга» – перераспределения ссылочного веса у себя на сайте.</li>
</ul>
<p>В любой непонятной ситуации придерживаемся золотого правила: «<span class="red">Не стой на пути поискового бота</span>, не имея на то весомых причин!»</p>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<h2 id="4"><span itemprop="name">Что означают Sponsored и UGC</span> и чем отличаются от Nofollow</h2>
<p>К широко поддерживаемой поисковиками директиве <strong>nofollow</strong> и ее антиподу <strong>dofollow</strong> в сентябре 2019 прибавились две нестрогие инструкции для Google ботов.</p>
<p><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">Это значения аттрибута rel тега link: rel="<strong>ugc</strong>" и rel="<strong>sponsored</strong>". Оба – лишь подсказки: робот может принять их во внимание, но не обязан. <strong>User Generated Content</strong>, или <strong>UGC</strong> – созданный пользователем контент: комментарии, отзывы, посты и обсуждения на форумах. <strong>Sponsored</strong> –  аффилированные и платные ссылки, реклама.</span></span></p>
<p><b class="red">UPD!</b> Летом 2020 Bing <a href="https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a">подтвердил</a>, что его поисковые боты поддерживают введенные Гуглом подсказки <strong>sponsored и ugc</strong> в атрибуте rel ссылки.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/user-generated-content.jpg" alt="Новое поколение создает ugc-контент наиболее активно" width="600" height="420"><br>
<small><a href="https://www.freepik.com">Designed by Freepik</a></small></p>
<blockquote>В <a href="https://webmasters.googleblog.com/2019/09/evolving-nofollow-new-ways-to-identify.html">официальном анонсе</a> сказано, что новинки не вытесняют привычный nofollow. Цель нововведения – предоставить инструмент для владельцев сайтов, которые решат помочь Гуглу понять природу ссылок. Применение ugc и sponsored – дело добровольное.
</blockquote>
<p>Подсказки можно комбинировать. Добавим ugc к nofollow – выйдет rel="<span class="red">ugc&nbsp;nofollow</span>": пользовательский контент, на который боту не стоит обращать внимания. Явно аффилированная ссылка от юзера может быть представлена как rel="<span class="red">ugc sponsored</span>". Справка Google утверждает, что в подходящих ситуациях sponsored предпочтительнее nofollow. И намекает, что ugc тоже включает в себя запрет перехода по href. Однако...</p>
<p>Для нас безопаснее считать, что ни ugc, ни sponsored сами по себе <b>НЕ ДЕЛАЮТ ссылку nofollow</b>. Хотя бы потому, что другие поисковики их не понимают.</p>
<blockquote>Этот <a href="https://moz.com/blog/ugc-distilledodn-seo-test">A/B тест</a> подтверждает, что не стоит отказываться от nofollow там, где он на своем месте: Moz.com/blog рассказал об эксперименте по замене "nofollow" на "ugc" на половине ссылок из комментариев.</blockquote> 
<p>Результатом стало снижение трафика. В ходе анализа было показано, что с вероятностью 95% месячная посещаемость остается в пределах<span class="under"> от -26 тыс. до +9,3 тыс. человек</span>. Не страшно, но перевес возможных потерь налицо.</p>
<p><b>Подытожим</b>. Новые подсказки ограничивают передачу веса, и в большей степени это касается sponsored. Однако основным методом контроля PageRank по-прежнему остается nofollow. Если не возникает желания подсказывать ботам, на сайте можно <span class="under">вообще ничего не менять</span>. Гугл утверждает, что и без подсказок разберется, где реклама, где спам, а где полезные ссылки, оставленные с заботой о пользователе. </p></div>
<div>
<h2 id="5">Типы веса страницы <span class="mute">&nbsp;Раздел, которого не было бы, если б не SEO</span></h2>
<p>Здесь мне придется рассказать о различиях между статическим и динамическим весом; о том, как узнать Page Rank онлайн и пр. Почему <span class="u">придется</span>? Потому что сайты, ранжирующиеся по «вес страницы» и т.п. запросам, всё это подробно описывают. Если я не сделаю того же, поисковику будет сложно понять, что эта статья на ту же тему.</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">В чем разница между <em>статическим</em> и <em>динамическим</em> весом?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text"><strong>Статический вес</strong> вычисляется по ссылочной массе: он не зависит от поискового запроса и других изменчивых факторов. В отличие от него, <strong>динамический вес</strong> не может быть подсчитан наперед: он привязан к запросу и реагирует на поведение пользователей.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Как проверить вес страницы <em>онлайн</em>?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Достоверно узнать статический вес (PageRank) онлайн можно было где-то до 2013 года. После данные Google уже не обновлялись, и в 2016 вес исчез из тулбара браузера. Но до сих пор существуют сайты типа <a href="https://www.checkpagerank.net/">checkpagerank.net</a>, вычисляющие Page Rank онлайн. Правда, никто не гарантирует полноту учета ссылочной массы.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Есть ли альтернативы Google PageRank?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">В качестве альтернативы можно опираться на <em>Ahrefs URL Rank, Page Authority (MOZ), Trust Flow (Majestic)</em> или фирменные разновидности ранга ­типа <em>Serpstat PageRank</em>. Тем, кого интересуют алгоритмы ранжирования вершин динамических графов, стоит ознакомиться с описаниями <a href="https://www.researchgate.net/publication/269157620_Adaptive_on-line_page_importance_computation">OPIC</a> и  <a href="https://en.wikipedia.org/wiki/SALSA_algorithm">SALSA</a>.</p>
	</div>
</div>
</div>
<p>Подвожу черту. Надеюсь, текст не вызвал сожалений о потраченном времени.</p>
<p>Если ему недостает чего-то важного, дополнения можно обсудить в комментариях.</p>