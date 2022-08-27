---
layout: post
i18n-link: snippet
locale: en
lang: en


date: 2021-08-03T18:02:00Z
last_modified_at: 2022-08-20T20:00:00Z


title: "How to enrich a webpage’s SERP snippet and increase CTR?"
tags: [CTR, Rich Results, snippet, SERP, SEO]
description: "Every web page on Google SERP wages a vital struggle for clicks. Low CTR means the page isn’t worthy of high ranking. So, how to improve the snippet and increase organic CTR?"
keywords: "SERP snippet"
schema: FAQPage
styles: /assets/post-on-snippets/snippet.css
code_amount: 2

h1: "What should be done to expand the page’s snippet and increase organic CTR?"
snippet_header: "No one can leave without a click, or How to get an effective snippet on SERP"

snippet: "Can we influence how users see our website on the Google results page? The search engine does not generate snippets in advance: they depend on a query and the user’s intent. However, there are ways to help Google to serve our page as well as possible."


image: "how-to-earn-a-proper-snippet.jpg"
---
<ul class="toc">
  <li><a href="#1">The aim is to get to Rich Results</a></li>
  <li><a href="#2">SEO behind the SERP snippet</a></li>
  <li><a href="#3">Usefull SEO tools&#160;&#160;<i class="icon icon-wrench red"></i></a></li>
</ul>
<div>
	<p>Every web resource dreams of getting to the Top 10, but this is not enough. You also need the user to follow the blue link. So, you should know the needs of the audience and manage to hook the user on in seconds while he glances along the <abbr title="Search Engine Results Page">SERP</abbr>. How to achieve this goal? It’s enough to have the proper snippet.</p>
	<p>Of course, we cannot dictate what features our snipper should contain. What we are capable of is providing the search engine with the information able to enrich the results list as a whole.</p>
	<p class="txt-center"> <img src="/images/posts/{{ page.image }}" alt="The post on Schema markup, nosnippet directive, and other stuff that can influence the structure of the page’s fragment on SERP." class="webfeedsFeaturedVisual" width="700" height="322"></p>
	<p>Before we begin, I must dispel one SEO myth. Have you ever heard this easy recipe for success, “Add a five-star rating for your post or product, use the main keyword in &lt;title&gt; and twice in &lt;description&gt;, and the rank will skyrocket”? Yeh, it’s easy to do, but the rank is unlikely to change this way.</p>
	<p>For now, it seems that neither page stars nor description directly affects the rankings. Even the URL likely isn’t so powerful anymore. But the <strong>&lt;title&gt;</strong> tag probably affects it, so it should be optimized. Another “influential” exception is the <strong>InStock</strong> field of the Product markup (if it’s true). It would be fair if active product cards get a little head start.</p>
	<p>So the most luxurious SERP snippet is not able to improve the rating? It can do this, but not directly. The user reaction and actions on the snippet will be summarized and can be taken into account by the <strong>rank modifier engine</strong>. More on behavior ranking factors you can read <a href="/how-do-google-algorithms-work">there</a>.</p>
	<p>In short, the <strong>organic <abbr title="Click Throught Rate">CTR</abbr></strong> (clicks to views ratio for the snippet that isn’t ads) is one of the likely catalysts for rankings.</p>
    <blockquote>Hence, the goal of any snippet optimization is to catch the user’s eye on SERP, stimulate the click and occupy as<span class="under"> much space</span> as possible. That will nullify the chances of visiting the competitor pages steps behind you.</blockquote>
	<p>Is it always possible? No. In the best case, you’ll get the desired snippet for the main keywords. For others, the page’s fragments will be generated at the discretion of the search engine and sometimes may be unexpected. The good thing is that it’s possible to protect the inappropriate content fragment from entering the SERP.</p>
	<h2 id="1">What are Google Rich Results, and How to earn a featured snippet?</h2>
	<p>The cherished <strong>Rich Results</strong> include any non-standard SERP fragments that stand out against black&#160;&&#160;white snippets with only one blue link. Product, Event, Movie, Book, Review, Carousel, FAQ, How-to, Recipe, Software App, Podcast, etc. There are about 25 items in the <a href="https://developers.google.com/search/docs/guides/search-gallery">Google gallery</a>, and the number is likely to increase.</p>
	<p class="txt-center">
		<img loading="lazy" src="/images/posts/rich-results-en.jpg" alt="Types of Google rich results" width="800" height="385">
	</p>
	<p>The most desired of all rich fragments is the so-called <strong>zero position</strong>, or <strong>Featured Snippet</strong>. In theory, every page has a chance to get there, if for some search query it is ranked in the Top 10. The Google support for webmasters <a href="https://support.google.com/webmasters/answer/6229325">claims</a> that it’s impossible to apply for position 0: any special markup for it does not exist. For every query request, Google decides on a case-by-case basis whose fragment to enrich and whose not.</p> 
	<p>However, some types of markup (<strong>FAQ, How-to, Recipe, VideoObject</strong>), as well as <span class="under">ordinary tables and lists</span>, might work for the featured fragment. And once the page might jump over the head and overtake the competitors. We’ll discuss further how to prepare a page for this; for now, there is a couple of instructive examples.</p>
	<p>1. The featured snippet on the variety of Featured Snippets (paragraph, table, ordered or bulleted list).</p>
	<p class="txt-center"><img loading="lazy" src="/images/posts/featured-snippet-with-the-image-carousel.jpg" alt="Types of text Featured Snippet" width="656" height="433"></p>
	<p>2. Zero position with the other site’s illustration (and link to it). How painful is it to give the win to the competitor since there is no suitable image on the page!</p>
	<p class="txt-center"><img loading="lazy" src="/images/posts/3-party-image-on-featured-snippet.jpg" alt="Third-party image on the Featured Snippet" width="657" height="344"></p>
	<p><strong>Optimization for other types of Rich Results</strong> is just a matter of experience and... semantic markup. It’s worth checking out the <a href="https://developers.google.com/search/docs/guides/prototype">official guide</a> and following the recommendations for developers. If you have no access to the website code, you can add a markup to the pages through <strong>Google Tag Manager</strong>.</p>
	<p>The preferred markup format is <strong>JSON-LD</strong>, but both Microdata and RDFa are supported by the search engines. The image below shows the Google snippet for the post with Microdata embedded.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/faq-schema-en.jpg" alt="The post with FAQ microdata markup" width="611" height="225"></p>
	<blockquote><b>NB!&#160;</b> In that case, JSON-LD would mean duplication of questions and answers already presented in the document. But increasing the page weight, we lose a lot. There are <a href="https://www.polemicdigital.com/how-seo-for-news-helps-all-websites/">opinions</a> among SEO pros that during the first visit, the Googlebot sends to index a limited number of KB per page.</blockquote>
	<p>As for common entities like Person, Organization, BlogPosting, etc., it’s better to present them in JSON. Many helpful tools serve this purpose; we mention some in <a href="#3">this section</a>.</p>
	<p>From common to private: why not talk about business? Let’s look at the markup widely used in online commerce. For the<span class="under"> product cards</span>, online stores use <strong>Product</strong> with <strong>Offer</strong> and <strong>AggregateRating</strong>. But that markup has one more application: it’s intended to summarize trade offers <span class="under">at price aggregators</span> (<a href="https://developers.google.com/search/docs/data-types/product">so says</a> Google).</p> 
	<p>Why have I mentioned it? Because it gives a real possibility to replace the nonexisting <strong>Product Category</strong> markup: pay attention to the price range in the following image.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/category-markup-en.jpg" alt="The replacement for category markup" width="610" height="144"></p>
	<p>I’ve checked that the page above contains the Product markup (one of these <a href="#3">Tools</a> will make you sure).</p>
	<p>Officially Google warns against the not intended use of markup. Warns for many years, and all the time the brave use it: any ranking penalty wasn’t noticed. Sometimes the price range disappears from the snippet and then comes back again. Nobody knows how it will behave tomorrow. That is, if you decide to use it, you must be responsible the consequences.</p>
	<p><img loading="lazy" src="/images/posts/knowledge-card.jpg" alt="Organization" class="fl-right" width="210" height="220">
		Some words on <b>оrganizations on the web</b>. For large or/and well-known companies the knowledge network cards will be generated without their participation. For others, it’s important to have an account on <b>Google Maps</b>, upload quality photos, and update all the information on time.
	</p>
	<p>
		On the main page, it is advisable to implement the <a href="https://schema.org/Organization">Organization</a> markup. It would be even better to choose a specific Schema.org entity, like <b>LocalBusiness, MedicalOrgani&#173;zation</b>, and others. Don’t forget to provide the logo and the website.
	</p> 
	<h2 id="2">On-page SEO behind a proper snippet: details matter</h2>
	<p>In this section, we’ll talk about how on-page SEO affects the page’s presentation on SERP and see what we can do to improve clicks.</p>
	<h3>1. Meta-tags (title, keywords, and description) <img loading="lazy" src="/images/posts/in-the-details.jpg" alt="The devil is in the details" class="fl-right restrict vw40" width="285" height="245"></h3>
	<p> <strong>Title</strong>:  this is what SEO experts mention in the first place, and for a good reason. Because it usually becomes an anchor of the primary blue link on the snippet. Usually, <span class="under">but not always</span>.</p>
	<p>Sometimes Google adds to it your brand or domain name or something else. In one project, it remains unclear why Google appended a phrase to the title: was that because it was the anchor of the backlink, or because it was the excerpt of the five-year-old title? To <span class="under">prevent this from happening</span>, you’d check if there aren’t too short titles on the website (we’ll get back to length).</p>
	<p>It also happens that <span class="under">not the title but heading h1-h2</span> becomes the main link of the page’s fragment on SERP. That is natural in a case when the title doesn’t contain any essential part of the search query. <b>The conclusions</b>: a) the title has to contain the main keywords; b) it’s crucial to structure longreads by subheadings with secondary keys.</p>
	<p><strong>Description</strong>: it also has to contain keywords; otherwise, <span class="under">nobody will ever see it</span>. Google shows the prescribed statement if only it’s relevant to the query but not spammed with keys. It’s also advisable for the description to be unique: its text content shouldn’t be found anywhere else on the site.</p>
	<p><strong>Keywords</strong>: this meta-tag is<span class="under"> useless for SEO</span> promotion if you are aiming for Google Top. You can <b>not fill in at all</b> or write in whatever you want. But other search engines, like Bing, Yandex, etc., may perceive the abundance of keys as spam. So, if you decide to fill, it’s better to use common sense.</p>
	<p>NB! It is possible to <span class="under">use emojis inside the meta-tags</span> and even in the breadcrumbs (more on crumbs below). You can insert colorful emojis or Unicode chars in your titles and descriptions.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/emojis-on-serp.jpg" alt="Emojis on Google SERP" width="611" height="116"> </p>
	<p>The sad truth is that such icons will probably be seen only by those who search “emojis on snippet”. Unlikely, that query “bricks wholesale” or something like that will cause SERP to be colorful. Well, unlikely is not impossible! Emojis are worth using, but keep in mind that outdated browsers may be unable to display them, and users will see something like this.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/too-many-special-chars.jpg" alt="When special chars are not displayed properly" width="593" height="109"> </p>
	<p>In descriptions, we may also use HTML entities like &#160;<b>&amp;phone;</b> &phone;.&#160; But for reliability, the named entities should be replaced with their digital codes <b>&amp;#9742;&#160;&#9742;</b> (<a href="https://www.freeformatter.com/html-entities.html" rel="nofollow">here</a> is the matching table).</p>
	<p><strong>How long should titles</strong> and descriptions be? When googling on the desktop, the user gets 600px wide result fragments. Titles are displayed in one line (up to 55-65 chars), and descriptions – in two lines (approx. 135-180 chars). Words that do not fit are lost. Mobile users can see larger snippets: titles take 2-3, sometimes 4 lines; descriptions take more, depending on the screen width.</p>
	<p>So many spears have been broken in arguments about the right length of the description. I wouldn’t like to break anything, so my point is the following.</p>
	<ul>
		<li>Уou can only take into account desktop snippets. If needed for mobile users, Google itself will add an extra fragment to the description.</li>
		<li>Or, you can provide more (up to 280-300 chars), dividing written into two parts in your mind. The most important part must fit in the first 140 characters. If you cut the second one, nothing will happen.</li>
	</ul>
	<p>There is the working <b><a href="#simulator" class="red">Google snippet simulator</a></b> in the Tools section. It will show you a sketch of the real snippet.</p>
	<h3>2. Subheadings and jump links</h3>
	<p>Well, everybody knows that (and why) subheadings should include the secondary keys. But there’s one more thing: you can add to tags identifiers, like id=“N”; and generate the <abbr title="Table Of Contents">TOC</abbr>. What will you get from this? Simply more blue links.</p>
    <p>The page that <span class="under">on the first screen</span> has the separated group <span class="under"> of internal links</span> located in the content area will have benefits on SERP. I mean, if those links aren’t menu or sidebar items, then the page’s fragment on SERP may contain <strong>“Jump to” links</strong>. The extra blue ones you can see in the picture below.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/toc-in-snippets-en.jpg" alt="Jump links from TOC" width="611" height="130"></p>
	<p>The likelihood that one of them will work is high if the topic is fully disclosed. But how to deal with pages that aren’t articles? Similarly. For example, product categories may show at the top a group of links to presets or subcategories.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/to-become-s-links-en.jpg" alt="'Jump to' links to the subcategories" width="728" height="238"> </p>
	<p>The effect will be the same as if we add the TOC: the more links, the more clicks.</p>
	<p>What could be better? Only the large <strong>branded snippet</strong>: if the search query is “the-big-brand-name”, the description on SERP will be supplemented with several rows of mini-snippets.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/big-links-en.jpg" alt="Branded big links" width="480" height="255"> </p>
	<p>Menu items and popular website pages are often included in the branded snippet. Unfortunately, it’s impossible to influence the choice of quick links. In the example above, you can see that some links may be unexpected. But still, the most likely candidates are pages pointed to by many internal links <span class="under">with the same short anchor</span> (like “Log In”).</p>
	<h3>3. Navigation and the breadcrumbs</h3>
	<p>Do you remember the fairy tale where children scattered crumbs on a forest path to find their way home later? Likewise, a navigation chain that leads the user from the depth of the website to the home page is called <strong>breadcrumbs</strong>.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/bread-crumbs.jpg" alt="Hansel and Gretel leaves a trail of bread crumbs" width="450" height="360"> </p>
	<p>On SERP snippets, that chain can be located above or below the title, depending on the search engine. It looks like this:</p>
	<p class="txt-center"><small>https://support.google.com&#160;&#160;›&#160;&#160;google-ads&#160;&#160;›&#160;&#160;answer&#160;▾</small></p>
	<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<p itemprop="name">What to remember about breadcrumbs?</p>
	<ol itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<li><span itemprop="text">Previously, two types of dictionaries were used to create it, and they were Schema.org and Data-vocabulary.org. But April 6, 2020, Google dropped support of Data-vocabulary: deprecated navigation elements will <b>no longer be displayed</b> on SERP.</span></li>
		<li><span>The only way to set out a nav chain is the <a href="https://schema.org/BreadcrumbList">BreadcrumbList</a> Schema.org markup. You’d keep this in mind using breadcrumbs generators: perhaps they are based on an <b>outdated template</b>.</span></li>
		<li><span>For websites with a complex architecture, where pages can belong to several categories, it’s better to mark up several breadcrumb trails (this <a href="https://developers.google.com/search/docs/data-types/breadcrumb">guide</a> says so). Here’s an example from there:</span></li>
	</ol>
	<p class="txt-center"><small>Books&#160;›&#160;Science Fiction&#160;›&#160;Award Winners</small>&#160;/&#160;<small>Literature&#160;›&#160;Award Winners</small></p>
	</div>
	<p>Of course, only one trail will appear on the SERP fragment: that one that is more relevant to the user’s query.</p>
	<p><b>Favicon</b> is the website’s logo icon. In Google, you can see it in front of the breadcrumbs, but only on mobile SERP. From search results for desktop favicons disappeared after moving the navigation to the top of the snippet. Some other search engines, like Yandex, still display icons for PC users.</p>
	<blockquote>The easiest way to create a favicon is to save to the site root the 32x32px <strong>favicon.ico</strong>: the browser will find it there by default. But modern devices are already waiting for more!</blockquote>
	<p>How to make it better, I’ll not write here: this super-cool <a href="https://favicon.io/">favicon generator</a> will do all the work for you! Here’s the icon <img loading="lazy" src="/images/posts/favicon-32x32.png" alt="favicon з emoji" width="32" height="32">&#160; generated by the app from the emoji. I could download it in 6 variations, from 16x16 to 512x512px.</p>
	<h3>4. Images and videos</h3>
	<p>Unique illustrations and high-quality photos most <span class="under">likely help rankings</span> –  this is the first thing. Withal, images with properly filled-in alt attributes become <span class="under">a source of traffic from</span> the Image Search. Videos are similar, plus they have more chances to earn a featured snippet.</p>
	<p>So what to do to have a media-content preview along with the page’s description on SERP? There are no guarantees, but the following is worth a try.</p>
	<ol>
		<li><span>The title image of the page should be at least 1200x630px, preferably 1600x840px (the aspect ratio needs to be maintained).</span></li>
		<li><span>Apply to the title image this <a href="https://schema.org/ImageObject">ImageObject</a> markup. If it’s crucial for performance, you can display on the page a reduced copy of that illustration.</span></li>
		<li><span>Fill in the meta-tag Open Graph: <b>&lt;meta property="og:image" content="..."></b>. It’s intended for social media, but search engine robots understand it too. For Bing, it might work on a preview.</span></li>
	</ol>
	<p>If the main content is video, it’s better to mark the page up as <a href="https://schema.org/VideoObject">VideoObject</a>. But you don’t have to worry too much about videos. Previews without any markup might appear on SERP if the search engine decides that the <span class="under">user’s intent is to watch</span>.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/thumbnail-en.jpg" alt="Video thumbnail on SERP" width="601" height="131"></p>
	<p>And what if, for some reason, you do not want your pictures to appear in the search results? Then add this to the &lt;head&gt; element of the document:</p>
	<p class="txt-center">&lt;meta&#160; name="robots"&#160; content="<b>max-image-preview: none</b>"&gt;.</p>
	<p>By changing “none” to “large” or “standard”, you can expand or limit the allowable size of the preview.</p>
	<p>For videos, you can also disable playback and leave a static thumbnail (<b>max-video-preview:&#160;0</b>) or limit the fragment duration to seconds (<b>max-video-preview:&#160;number</b>). Everything happens in the robots meta-tag.</p>
	<h3>5. Don’t want the text content to be shown on SERP? Use nosnippet</h3>
	<p>Let’s assume that you can’t allow your SERP snippet to include part or all the contents of <span class="under">the indexed document</span>. For example, a content-poor page might supply the snippet with the text from the sidebar or the login form.</p>
	<p class="txt-center"> <img loading="lazy" src="/images/posts/form-labels-on-snippet-en.jpg" alt="Snippet with a login form" width="528" height="101"></p>
	<p>I’m not saying lack of content is bad: maybe it isn’t really needed there. So we’ll treat the feasible snippet. To do this, add the boolean attribute <strong>data-nosnippet</strong> to all unwanted page elements, such as <b>&lt;div&#160; data-nosnippet &#160;id="widget"&gt;</b>. A living example is the “Related posts” section below this article.</p>
	<blockquote><b>NB!</b> The prohibitory attribute will work only for &lt;div&gt;, &lt;section&gt;, or &lt;span&gt;. If the unwanted block contains non-standard HTML elements, wrap it with a div tag. </blockquote>
	<p>Let’s move on to the <span class="under">page-level directives</span> we can set in the meta-tag robots. The toughest is <strong>nosnippet</strong>: it prohibits the use in the snippet of any excerpt or image found on this page. Another directive is <strong>max-snippet:[number|&#160;0&#160;|&#160;-1]</strong>: it only limits the number of characters in the text description. Null is the same as nosnippet; -1  means no limits at all.</p>
	<p itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><span itemprop="name">When to use max-snippet?</span> <span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">Most often it’s used in conjunction with max-image-preview, like</span></span></p>
	<p class="txt-center">&lt;meta name="robots" content="<b>max-snippet:60, max-image-preview:large"</b>&gt;</p>
	<p>That is, we limit the text length and opt for the largest image at once. Now the decision is up to the search engine!</p>
	<blockquote>Originally, these meta directives were intended only for Googlebot. But in April 2020, Bing announced that its bots learned to understand them too.</blockquote>
	<h2 id="3">Markup generators, snippet simulators, bookmarklets, and other tools</h2>
	<p>
		Those who aim to occupy as much space on SERP as possible should use Schema.org – the popular semantic markup dictionary. The following online tools will make it easier to work with the markup.
	</p>
	<ul>
		<li>Schema-markup generators, working with JSON-LD: <a href="https://technicalseo.com/tools/schema-markup-generator/">Merkle Technicalseo</a> – versatile and multipurpose;&#160; <a href="https://jsonld.com/json-ld-generator/">JsonLD.com</a>&#160;– does not have many features but offers some ready-to-made templates that are easy to edit.</li>
		<li>Structured-Data validator <a href="https://validator.schema.org/">Schema.org</a>: you can give it the page’s URL or the code fragment.</li>
		<li><a href="https://search.google.com/test/rich-results">Rich Results Test</a>: created by Google, lets you choose the robot type (for smartphones or desktops) and shows the preview of the result right away.</li>
	</ul> 
	<blockquote><i class="green"><i class="icon icon-attachment"></i></i>&#160; The bookmarklets to submit the current page for validation on the fly: <b><a class="red" href="javascript:void(window.open(%27https%3A%2F%2Fsearch.google.com%2Ftest%2Frich-results%3Furl=%27+window.location.href,%27_blank%27));">Rich-Results</a></b> and <b><a class="red" href="javascript:void(window.open(%27https://validator.schema.org?url=%27+window.location.href,%27_blank%27));">Schema.org</a></b>. How to use: drag the link to the browser bookmarks bar. When you press the button, it sends the current URL to the correspondent web resource. (You’ll have to allow the popups which the browser blocks by default).
	</blockquote>
	<p>The validators help check your code and can also tell you what kind of markup is implemented on the successful competitor pages.</p>
	<p>The next category of assistant tools simulates the SERP snippet preview using the meta-data (title and description). When needed, I use this:</p>
	<div id="component" class="card"></div>
	<p>From outside sources, I’ll not hesitate to advise <a href="https://technicalseo.com/tools/google-serp-simulator/">Merkle Google SERP simulator</a>. There are plenty of helpful applications on this website, including the mentioned above JSON generator.</p>
	<blockquote><i class="green"><i class="icon icon-attachment"></i></i>&#160;Some other bookmarklets: word and char <b><a class="red" href="javascript:(function()%7bfunction f(d)%7bvar t;if(d.getSelection)t=d.getSelection();else if(d.selection)t=d.selection.createRange();if(t.text!=undefined)t=t.text;if(!t||t=='')%7bvar a=d.getElementsByTagName('textarea');for(var i=0;i<a.length;++i)%7bif(a[i].selectionStart!=undefined&&a[i].selectionStart!=a[i].selectionEnd)%7bt=a[i].value.substring(a[i].selectionStart,a[i].selectionEnd);break;%7d%7d%7d return t;%7d;function g(d)%7bvar t;try%7bt=f(d);%7dcatch(e)%7b%7d;if(!t||t=='')%7bvar fs=d.getElementsByTagName('frame');for(var i=0;i<fs.length;++i)%7bt=g(fs[i].contentDocument);if(t&&t.toString()!='')break;%7d if(!t||t.toString()=='')%7bfs=d.getElementsByTagName('iframe');for(var i=0;i<fs.length;++i)%7bt=g(fs[i].contentDocument);if(t&&t.toString()!='')break;%7d%7d%7dreturn t;%7d;var t=g(document);if(!t||t=='')alert('Текст не выделен...');else alert('Знаков с пробелами: '+t.toString().length+'\nСлов: '+t.toString().match(/(\S+)/g).length);%7d)()">Counter</a></b> in the selected text and <b><a class="red" href="javascript:void(!function(){var a=document.title,b=document.all.description.content,c=document.all.keywords.content,d=document.getElementById('MetaBookmarklet'),f,g;if(d)d.remove();else{f=document.createElement('div');g=document.createElement('div');f.id='MetaBookmarklet';f.style='position:fixed;z-index:999;left:0;right:0;text-align:center';g.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left';g.innerHTML='<p><b>Title</b>%20('+a.length+'):%20'+a+'</p><p><b>Description</b>%20('+b.length+'):%20'+b+'</p><p><b>Keywords</b>%20('+c.length+'):%20'+c+'</p>';f.appendChild(g);document.body.insertBefore(f,document.body.firstChild)}}())">Title-Description-Keys</a></b> reader for the current page (their length will also be computed). For using the scripts, you should save them to the bookmarks bar and run them with a simple click.</blockquote>
	<p>You can use the bookmarks together. For example, select some part of the title, shown by <b>Title-Description-Keys</b>, and count the chars with the other script. If you want to hide the viewed meta-data, press the bookmarklet button again.</p>
	<p class="txt-center">✽ ✽ ✽</p>
	<p>Enough theory: it’s time to practice. For a start, it would be great to review some old blog posts: what if FAQ, Review, or Instruction markup will be appropriate for them? The <strong>on-page SEO</strong> check-up may also be insightful.</p>
	<p>Of course, you can’t bring the web page to the Google Top just following these recommendations. But structured content gives you an extra chance to win the featured snippet: after all, that serves the purposes of Google itself! The user’s click on any SERP fragment not only increases the CTR of the landing page but also shows a sign of favorable assessment of the search engine’s efforts.</p>
</div>
<script src="/assets/post-on-snippets/snippetSimulator-en.js" defer></script>