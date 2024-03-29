---
layout: post 
i18n-link: linking
lang: ru
locale: ru

date: 2023-03-25T10:20:10Z
last_modified_at: 2023-03-25T10:20:10Z

title: "Формируем архитектуру сайта и скрепляем перелинковкой"
tags: [Crosslinking, Links, On-page, SEO]
description: "Под архитектурой сайта понимают его 3D структуру (в противовес плоским дизайн-макетам). За счет семантики между страницами возникают связи; скрепляет каркас внутренняя перелинковка"
keywords: "архитектура сайта"
schema: HowTo

h1: "О структуре сайта и правилах внутренней перелинковки"
snippet_header: "Как семантика и внутренние ссылки формируют архитектуру сайта"

snippet: "Плоская или многоуровневая архитектура – какую предпочтете? О нет, это не о застройке, а о структуре веб-сайта и внутренней перелинковке страниц."

image: "website-architecture.jpg"
---
<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">Как создается архитектура сайта</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Правила перелинковки</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3">Визуализация карты сайта</a></li>
</ul>
<div>
	<p>
		<strong>Архитектура</strong> подразумевает проектирование и выбор средств построения веб-сайта. Строительными блоками будут страницы, цементом – <strong>структурные внутренние ссылки</strong> в навигации и сайдбарах. Роль электропроводов и инженерных коммуникаций сыграют <strong>ссылочные карусели</strong> и панели типа «Сопутствующих товаров» и «Подобных статей». Отдельные комнаты будут организованы в апартаменты посредством <strong>ссылок из контекста</strong>.
	</p>
	<p class="txt-center">
	  <picture>
	  	<source srcset="/images/posts/large/wp/{{ page.image | split: '.' | first }}.webp" type="image/webp">
	    <source srcset="/images/posts/large/{{ page.image }}" type="image/jpeg">
	    <img src="/images/posts/large/{{ page.image }}" alt="Многоуровневая архитектура" class="webfeedsFeaturedVisual" width="780" height="410">
	  </picture><br><small><a href="https://commons.wikimedia.org/wiki/File:Morro_dos_Prazeres_(RJ)_-_01.jpg">Tiago Celestino</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, Wikimedia Commons; внесены изменения</small>
	 </p>
	<p>
		<strong>Архитектура сайта</strong> – совсем не то же, что его дизайн, который заключается в создании макетов. Хороший веб-разработчик предложит вам макеты, которые естественным образом <span class="under">впишутся в структуру сайта</span>, но этого наивно ожидать от программных онлайн-конструкторов.
	</p>
	<p itemscope itemtype="https://schema.org/FAQPage">
		Так все же, почему важно правильно организовать архитектуру?<span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><meta itemprop="name" content="Почему важно правильно организовать архитектуру сайта?"><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text"> Потому, что просчеты в конструкции могут заставить вас постоянно «допиливать» сайт, а в худшем случае сделают невозможной его SEO-оптимизацию.</span></span></span> А вы ведь поставили себе амбициозные цели?!
	</p>
</div>
<div>
	<h2 id="1" itemprop="name">Как спланировать архитектуру для сайтов разного типа</h2>
	<p>
		Считаете, что создание вебсайта начинается с дизайна домашней страницы? Не так быстро:)! Первый этап построения сайта – <strong>сбор ключевых слов</strong>, и от качества проделанной работы зависит успех всего проекта. Сейчас мы пройдем весь путь по пунктам и посмотрим, как семантическое ядро определяет структуру сайта. Итак, to-dos:
	</p>
	<div itemprop="step" itemscope itemtype="http://schema.org/HowToStep">
		<p><strong class="red">1.</strong> <span itemprop="name">Соберите ключевые слова. Используйте все возможные инструменты:</span></p>
		<ul itemprop="text">
			<li>Планировщики ключевых слов от основных поисковых систем;</li>
			<li>Подсказки омнибокса в Поиске (Google, Youtube, Yandex, etc.);</li>
			<li>AI чат-боты типа <a href="https://openai.com/blog/chatgpt">ChatGPT</a> (задать центральные ключевые слова и попросить подобрать связанные фразы);</li>
			<li><a href="https://keywordtool.io">KeywordTool</a> (рекомендую, можно выбрать язык и страну), <a href="https://www.wordtracker.com">WordTracker</a>, <a href="https://seoscout.com/suggest">Seoscout;</a></li>
			<li><a href="https://neilpatel.com/ubersuggest/">Ubersuggest</a> и <a href="https://answerthepublic.com/">AnswerThePublic</a> (для вопросов);</li>
			<li><a href="https://trends.google.com/home">Google Trends</a> (самые актуальные ключевые фразы);</li>
		    <li><a href="https://app.scientificseller.com/keywordtool">ScientificSeller</a> – рекомендую, собирает коммерческие ключевые фразы с Amazon;</li>
		    <li>Google Search Console, Bing и Yandex Webmaster Tools, привязанные одному из ваших тематических сайтов.</li>
		</ul>
		<p class="txt-center">
			<picture>
				<source srcset="/images/posts/wp/omnibox-hints.webp" type="image/webp">
		    	<source srcset="/images/posts/omnibox-hints.jpg" type="image/jpeg">
				<img loading="lazy" src="/images/posts/omnibox-hints.jpg" alt="Bing VS Google: продолжение запросов в поиске" width="660" height="395">
			</picture><br><small>Насколько отличаются подсказки ключевых слов от Google и Bing</small>
		</p>
	</div>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep">
		<strong class="red">2.</strong> <span itemprop="name">Проведите анализ конкурентов</span>. <span itemprop="text">Получите список их органических и рекламных ключевых фраз. Бесплатно это можно сделать только вручную, анализируя основные посадочные страницы. Если располагаете бюджетом, выбирайте любой из SEO инструментов с громким именем: <a href="https://www.semrush.com/features/competitor-website-analysis-tools">Semrush</a>, <a href="https://serpstat.com/#index_competitors">Serpstat</a>, <a href="https://www.spyfu.com/">SpyFu</a> – дельные инструменты, и все можно попробовать бесплатно.</span> Существует также бесплатный <a href="https://moz.com/competitive-research">Moz Competitive Analysis Tool</a>, но что-то толковое он может сказать только о больших веб-сайтах с заметными позициями в выдаче.
	</p>
	<div itemprop="step" itemscope itemtype="http://schema.org/HowToStep">
		<p>
			<strong class="red">3.</strong> <meta itemprop="name" content="Кластеризуйте ключевые слова с учетом намерения"> Кластеризуйте массив ключевых слов, то есть разбейте его на тематические подмножества с учетом <strong>намерения</strong> пользователя. Смысл в том, что каждой ключевой фразе с большой вероятностью можно поставить в соответствие потребность пользователя, которую стремится удовлетворить поисковик. Например:
		</p>
		<ul>
			<li>«Как завязать галстук» – информационный запрос, потребность узнать;</li>
			<li>«Кока-кола сайт» – навигационный запрос, потребность найти;</li>
			<li>«Кофе рядом со мной» – транзакционный, потребность взбодриться:).</li>
		</ul>
		<p itemprop="text">
			Инструментов кластеризации множество, но здесь упомяну два: <a href="https://serpstat.com/keywords-clustering/">Serpstat Keywords Clustering</a> и <a href="https://www.keywordinsights.ai/features/keyword-clustering/">KeywordInsights AI</a>. Пользуетесь чем-то другим – будет здорово, если поделитесь опытом в комментариях. Какой бы инструмент вы ни выбрали, хоть бегло проконтролируйте выданный программой результат.
		</p>
	</div>
	<div itemprop="step" itemscope itemtype="http://schema.org/HowToStep">
		<p>
			<strong class="red">4.</strong> <meta itemprop="name" content="Запланируйте несколько страниц-хабов">Имея кластеры, запланируйте некоторое количество страниц-хабов <span itemprop="text">(типа категорий или тематических разделов блога). В зависимости от того, какой тип сайта вы создаете, продумайте доступ к хабам с главной страницы.</span>
		</p>
		<p>
			К примеру, если у вас e-commerce сайт, категории должны быть в навбаре, подкатегории и предустановленные фильтры – либо там же, либо в сайдбаре. А вот информационные разделы могут прятаться за анкором «Блог».
		</p>
		<p>
			Если же вы создаете авторский блог или фото-портфолио, возможно, главным элементом домашней страницы вы захотите сделать облако тегов со ссылками. Только не стоит захламлять его так, как на рисунке ниже: мало кто захочет им пользоваться.
		</p>
		<p class="txt-center">
			<picture>
				<source srcset="/images/posts/wp/tags-cloud.webp" type="image/webp">
		   		<source srcset="/images/posts/tags-cloud.jpg" type="image/jpeg">
				<img loading="lazy" src="/images/posts/tags-cloud.jpg" alt="Пример облака тегов" width="520" height="190">
			</picture>
		</p>
	</div>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep">
		<strong class="red">5.</strong> <span itemprop="name"> Решите, каким хабам будут принадлежать конечные страницы</span> (глубже которых пользователь уже не пойдет).<span itemprop="text"> Для продающих сайтов это транзакционные/конверсионные страницы; для информационных ресурсов – контент, который удовлетворит жажду знаний. В слове «принадлежать» здесь кроется тонкость, которую мы рассмотрим на примере интернет-магазина. </span>
	</p>
	<p>
		Страница товара «Духовка электрическая» выводится в подкатегории «Духовки» и в пресете «Все для кухни». Но по структуре URL она должна принадлежать хабу более высокого уровня –  категории «Электроприборы» или корневому каталогу сайта. Иначе один и тот же продукт будет выставлен под разными URL, что приведет к проблемам ранжирования в Поиске.
	</p>
	<p class="txt-center">
		<picture>
			<source srcset="/images/posts/wp/eshop-structure.webp" type="image/webp">
	   		<source srcset="/images/posts/eshop-structure.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/eshop-structure.jpg" alt="Правильная структура URL для e-commerce сайта" width="500" height="150">
		</picture>
	</p>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><meta itemprop="name" content="Разложите ключевые слова по страницам">
		<strong class="red">6.</strong> <span itemprop="text">Распределите фразы «с длинным хвостом» по страницам подкатегорий и фильтров; транзакционные ключевые слова – по страницам товаров и услуг; вопросы «как выбрать», «что лучше» и т.д. – по статьям блога. Теперь, даже не имея контента, вы уже знаете, как должны быть связи между ними однотипные («Подарки за ту же цену», «Расходные материалы») и разнотипные страницы (обзоры со ссылками на пресеты, сравнения продуктов).</span>
	</p>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><meta itemprop="name" content="Можно начинать разработку дизайн-макетов">
		<strong class="red">7.</strong> <span itemprop="text">Только теперь, когда заданы взаимосвязи между блоками сайта, можно нанимать веб-разработчика, создавать макеты и расставлять структурные ссылки. Когда остов сайта обрастет контентом, появится возможность связывать страницы напрямую, ссылками из контекста.</span>
	</p>
	<span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><meta itemprop="name" content="планировщики ключевых слов"></span>
    <span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><meta itemprop="name" content="инструменты для кластеризации ключей"></span>
    <span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><meta itemprop="name" content="веб-разработчик"></span> 
</div>
<div><h2 id="2">Внутренняя перелинковка: основы <s>ремесла</s> искусства</h2>
	<p>
		Перелинковка страниц – одна из важнейших составляющих оптимизации сайта, легкие решения тут не работают.
	</p>
	<p>
		Структурные ссылки определяют потоки <a href="{{ site.url }}/ves-stranitsy-raspredelenie-formula-nofollow">ссылочного веса</a> на сайте. Поэтому крайне важно, чтобы якорями таких ссылок были частотные ключевые слова, по которым вы собираетесь ранжироваться.
	</p>
	<p>
		Анкоры ссылок главного меню должны быть емкими не только ради экономии места. Дело в том, что такие ссылки могут появиться в <a href="{{ site.url }}/idealnyj-snippet-v-google-vydache">расширенных сниппетах</a> вашего сайта в Google и Yandex.
	</p>
	<p>
		Ссылки между страницами подобного назначения (скажем, карточками товара) нужны скорее для удобства пользователя. А также для того, чтобы поисковые боты <span class="under">просканировали как можно большее</span> таких карт. С анкорным текстом тут мудрить не стоит: пусть он совпадает с заголовком цитируемой страницы.
	</p>
	<blockquote>
		В сети вы найдете различные схемы перелинковки («звезда» и пр.), но стоит понимать, что Гуглу они тоже известны. Таким внутренним ссылкам он <span class="under">придает меньшую значимость</span>, чем ссылкам из контекста.
	</blockquote>
	<p>
		Поэтому в текстах полезно ссылаться на другие материалы сайта. Ссылок на одну статью на странице может быть несколько, с разными средне-частотными анкорами (но желательно, чтобы href указывал на отдельные разделы статьи). Важно, чтобы старый и новый контент были перелинкованы не только в шаблоне сайта, но и из контекста. Весь этот процесс имеет название <strong>внутренний линкбилдинг</strong>.
	</p>
	<blockquote>
		Вполне естественно, если часть входящих ссылок на вашем сайте будет с якорями «читайте здесь» или «смотрите тут». Но оставьте эту возможность для ссылок извне, с форумов или соцсетей. Раз уж текст своих внутренних ссылок вы можете контролировать, внедрите туда релевантные ключи.
	</blockquote>
	<p>
		Контент-менеджерам онлайн-магазинов советую не бояться добавлять в описания ссылки на похожие товары с чуть другим функционалом («работает при минусовой температуре», «подходит для детей до трех лет» и т.д.). Возможно, на первой странице пользователь и не совершит транзакцию, зато не уйдет к конкурентам читать обзоры и сделает осознанный выбор у вас.
	</p>
	<p class="txt-center">
		<picture>
			<source srcset="/images/posts/wp/sitemap-design.webp" type="image/webp">
	   		<source srcset="/images/posts/sitemap-design.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/sitemap-design.jpg" alt="Схематическое устройство сайта" width="780" height="345">
		</picture>
	</p>
	<p>Необходимый минимум мер по перелинковке ниже попробую оформить в виде списка.</p>
	<h3>Золотые правила внутренней перелинковки</h3>
	<ol>
	  <li><span>Все страницы обязаны ссылаться на главную. Кроме логотипа можно использовать и другие анкоры: высоко&#173;частотные (ВЧ) запросы, по которым домашняя страница будет ранжироваться.</span></li>
	  <li><span>Основные категории должны быть в навигации, подкатегории и пресеты – по степени важности.</span></li>
	  <li><span>Ничего, кроме целевых страниц, общей информации и поиска, в навигационное меню включать не стоит. К примеру, внешние ссылки на другой ваш сайт там точно ни к чему.</span></li>
	  <li><span>Инфо-контент, который генерирует трафик (посты, видео), важно сделать <strong>доступным в один клик</strong> с главной или категории. Кроме удобства для юзера, это обеспечит <strong>прирост значимости</strong> размещающей страницы.</span></li>
	  <li><span>Страницы, удаленные от главной на 4 клика и более, нереально продвинуть в выдаче. Разумнее придержи&#173;ваться <strong>правила трех кликов</strong> и минимизировать «глубину залегания» страниц перелинковкой.</span></li>
	  <li><span>На страницах глубиной более двух кликов разместите несколько вариантов <strong>breadcrumbs</strong>. <a href="{{ site.url }}/idealnyj-snippet-v-google-vydache#breadcrumbs">Хлебные крошки</a> – это цепочка ссылок, которая указывает возможный пусть к домашней странице сайта.</span></li>
	  <li><span>Кнопки пагинации – тоже ссылки, и они передают вес. На всех <a href="{{ site.url }}/ru/page=2/">страницах пагинации</a> должна быть ссылка на первую и не должно быть сквозной ссылки на последнюю (зачем ей вес?).</span></li>
	  <li><span>В категориях и фильтрах с разбиением на страницы популярные продукты пусть красуются в самом верху. Раз уж Google не учитывает rel="next"/"prev", важно подчеркнуть <strong>весомость первой страницы</strong> и второсте&#173;пенность остальных. Не выводите на первом экране залежи со склада: рейтинг категории упадет.</span></li>
	  <li><span>Используйте любую возможность для внутреннего линкбилдинга. Если на сайте нашлись <strong>битые ссылки</strong> и замена их на другие внешние исходящие неочевидна, проанализируйте свой новый контент и подберите пассаж, на который можно сослаться.</span></li>
	</ol>
	<p>И еще одно. Если кто-то не глядя заявит, что «на одной странице должно быть не более ** внутренних ссылок и не более ** внешних», не помешает уточнить у него точное число. Вот прям сколько точно должно быть ссылок на странице, пусть подумает и скажет. Поделитесь тогда в комментариях, плз).</p>
</div>
<div><h2 id="3">Инструменты для наглядного представления структуры сайта</h2>
	<p>Сначала рассмотрим <span class="under">онлайн приложения</span> для визуализации карты сайта. Приведенный ниже список намеренно не пронумерован, чтобы каждый мог выбрать лучший инструмент для своих нужд.</p>
	<p class="txt-center">
	<picture>
		<source srcset="/images/posts/wp/visual-sitemap.webp" type="image/webp">
   		<source srcset="/images/posts/visual-sitemap.jpg" type="image/jpeg">
		<img loading="lazy" src="/images/posts/visual-sitemap.jpg" alt="Визуальная карта сайта; круговая диаграмма структуры директорий" width="600" height="345">
	</picture>
	</p>
	<ul>
	  <li><a href="https://www.powermapper.com/products/mapper/try/">PowerMapper</a> – программа для создания визуальных и xml карт для больших сайтов. Однако ее собственники придерживаются странной маркетинговой политики: для тестирования вам предложат создать карту из... <span class="u">первых 10 сканированных</span> страниц. И какова будет иллюстративная ценность результата? Неограниченная лицензия на 1 пользователя стоит $149, так что продолжаем искать.</li>
	  <li><a href="https://app.rarchy.com/sitemaps/">Rarchy</a> бесплатно просканирует 50 страниц и предложит выбрать разные режимы визуального просмотра (для иллюстрации выше выбрана круговая диаграмма). <a href="https://app.rarchy.com/s/BYm8EnNR40QoC4feABEEgCbt0uK2">Исходник</a> представляет собой разновидность дерева каталогов, то есть визуализация построена на структуре папок и не отображает перекрестные ссылки между страницами. Бюджетная подписка стоит $15.</li>
	  <li><a href="https://octopus.do/">Octopus</a> – популярный «картографический» инструмент, который визуализирует 300 страниц бесплатно (и 1000 страниц для подписчиков). Примечательно, что он позволяет добавлять узлы к уже созданной карте, то есть вы можете пользоваться им как <strong>планировщиком веб-сайтов</strong>. Прокачать план до Pro можно за $8 в месяц.</li>
	  <li><a href="https://visualsitemaps.com/">VisualSitemaps</a> – делает даром 25 скриншотов сайта в месяц и дает возможность настроить автоматизацию. Карта сайта, которую он строит, отображает превью страниц и связи между ними. Удобно, что можно отфильтровать вспомогательные директории типа /admin/ и /assets/.</li>
	  <li>И, наконец, <a href="https://www.figma.com/templates/sitemap-generator/">сайтмап-генератор от Figma</a> и наипростейший возможный инструмент, <a href="https://www.gloomaps.com/">Gloomaps</a>: в любом их них вы сможете составить карту из блоков самостоятельно, что пригодится на этапе планирования веб-сайта.</li>
	</ul>
	<p><picture>
			<source srcset="/images/posts/wp/web-spider.webp" type="image/webp">
	   		<source srcset="/images/posts/web-spider.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/web-spider.jpg" alt="Программа-паук готова сканировать веб-страницы" width="310" height="310" class="fl-left">
		</picture>
		Но по-настоящему широкие возможности для изучения внутренней структуры сайта предложит вам <strong>специализированный SEO софт</strong>.
	</p>
	<p>
		Хотите видеть круговые диаграммы сканирования сайта и иерархические деревья-графы с разбивкой по глубине залегания страниц  –  обратитесь к SEO краулерам с громким именем.
	</p>
	<p>
		К примеру, спайдер <strong>Screaming Frog</strong> описывает свои возможности в этом <a href="https://www.screamingfrog.co.uk/site-architecture-crawl-visualisations/">руководстве</a> по визуализации краулинга. Только имейте в виду, что бесплатная версия просканирует <span class="u">не больше 500 страниц</span> с одного сайта.
	</p>
	<p>
		Если у вас страниц больше, рекомендую взглянуть на <a href="https://sitebulb.com/product/crawl-maps/">интерактивные карты краулинга</a> от другого производителя SEO-софта, <strong>Sitebulb</strong>. Полную версию их десктопной программы вы можете испытывать 14 дней безо всяких ограничений. Считаю, что продукт заслуживает дальнейшей покупки, поскольку им можно пользоваться для всестороннего аудита веб-сайта. 
	</p>
	<p>Если вы не против освежить знания об <a href="{{ site.url }}/tehnicheskij-seo-audit-sajta">аудите сайтов</a> и других аспектах Tech SEO, взгляните на статьи ниже.</p>
</div>
