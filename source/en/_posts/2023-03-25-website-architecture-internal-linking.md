---
layout: post 
i18n-link: linking
lang: en
locale: en

date: 2023-03-25T10:20:10Z
last_modified_at: 2023-03-25T10:20:10Z

title: "Cementing your site’s architecture with internal linking"
tags: [Crosslinking, Links, On-page, SEO]
description: "By site architecture, we mean its 3D structure, not layouts. Thanks to semantics, there are ties between the pages, and the structure is bound together by internal cross-linking"
keywords: "website architecture"
schema: HowTo

h1: "Good site structure: the basic rules for internal linking"
snippet_header: "Website architecture: how semantics and cross-links shape it"

snippet: "Do you prefer flat or tiered architecture? Oh no, it’s not about slum cities; it’s about website structure and internal linking. We’ll consider what roles structural and contextual links play."

image: "website-architecture.jpg"
---

<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">How to create a website architecture</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Internal linking strategy</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3">Site structure visualization</a></li>
</ul>
<div>
	<p><strong>Website architecture</strong> is about construction design and choosing the right facilities to build a site. Web pages are the building blocks, and <strong>structural internal links</strong>, like menu or sidebar ones, are the cement mortar. The role of electrical wires and other engineering utilities is played by <strong>cross-linking panels</strong> like "Related Products" or "Similar Articles". Arranging individual rooms into apartments is made easy with <strong>contextual links</strong>.</p>
	<p class="txt-center">
	  <picture>
	  	<source srcset="/images/posts/large/wp/{{ page.image | split: '.' | first }}.webp" type="image/webp">
	    <source srcset="/images/posts/large/{{ page.image }}" type="image/jpeg">
	    <img src="/images/posts/large/{{ page.image }}" alt="Multilayer architecture" class="webfeedsFeaturedVisual" width="780" height="410">
	  </picture><br><small><a href="https://commons.wikimedia.org/wiki/File:Morro_dos_Prazeres_(RJ)_-_01.jpg">Tiago Celestino</a>, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>, via Wikimedia Commons; modified</small>
	 </p>
	<p>
		<strong>Site architecture</strong> is different from website design, which usually refers to designing page layouts. A good web developer will choose <span class="under">layouts that naturally fit the</span> structure of your site, but this is not the case with online site builders.
	</p>
	<p itemscope itemtype="https://schema.org/FAQPage">
		<span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><span itemprop="name">Why should you care about good website architecture?</span> <span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">Because constructional flaws can force you to constantly redesign the site and, in the worst scenario, make it impossible to <span class="under">achieve any ambitious SEO goal</span>.</span></span></span>
	</p>
</div>
<div>
	<h2 id="1" itemprop="name">How to create an architecture for different types of websites</h2>
	<p>
		Do you think website creation should start with the homepage design? Not so fast. The first stage of building a website is <strong>keyword research</strong>, and the success of the entire project depends on the quality of this work done. So, let’s break down point by point how the collected keywords determine the structure of your future website. The to-dos are:
	</p>
	<div itemprop="step" itemscope itemtype="http://schema.org/HowToStep">
		<p><strong class="red">1.</strong> <span itemprop="name">Collect as many keywords as possible, using any available tool</span>:</p>
		<ul itemprop="text">
			<li>Keyword Planners from the major search engines;</li>
			<li>Omnibox suggestions in Search (Google, Youtube, Bing, etc.);</li>
			<li>AI chatbots like <a href="https://openai.com/blog/chatgpt">ChatGPT</a> (specify the seed keywords and ask it for related phrases);</li>
			<li><a href="https://keywordtool.io">KeywordTool</a> (recommended; you can select your language and country), <a href="https://www.wordtracker.com">WordTracker</a>, <a href="https://seoscout.com/suggest">Seoscout;</a></li>
			<li><a href="https://neilpatel.com/ubersuggest/">Ubersuggest</a> and <a href="https://answerthepublic.com/">AnswerThePublic</a> for questions;</li>
			<li><a href="https://trends.google.com/home">Google Trends</a>, which shows the most topical keywords;</li>
		    <li><a href="https://app.scientificseller.com/keywordtool">ScientificSeller</a>, an amazing tool that collects commercial keywords from Amazon;</li>
		    <li>Google Search Console, Yandex and Bing Webmaster Tools, tied to one of your topic-related sites.</li>
		</ul>
	</div>
	<p class="txt-center">
		<picture>
			<source srcset="/images/posts/wp/omnibox-hints.webp" type="image/webp">
	    	<source srcset="/images/posts/omnibox-hints.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/omnibox-hints.jpg" alt="Bing suggestions VS Google suggestions" width="660" height="395">
		</picture><br><small>How different Google’s and Bing’s keyword hints are</small>
	</p>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><meta itemprop="name" content="Grab your competitors’ organic and advertising keys">
		<strong class="red">2.</strong> <span itemprop="text">Analyze your competitors. Get a list of their organic and advertising keyword phrases. For free, you can only do this by examining their landing pages and the corresponding SERPs. If you have a reasonable budget, choose any of the big-name SEO tools: <a href="https://www.semrush.com/features/competitor-website-analysis-tools">Semrush</a>, <a href="https://serpstat.com/#index_competitors">Serpstat</a>, or <a href="https://www.spyfu.com/">SpyFu</a>. These three are great and can be tried for free.</span> There is also the free <a href="https://moz.com/competitive-research">Moz Competitive Analysis Tool</a>, but it can only say something useful about large websites with prominent rankings.
	</p>
	<div itemprop="step" itemscope itemtype="http://schema.org/HowToStep">
		<p>
			<strong class="red">3.</strong> <meta itemprop="name" content="Cluster the keyword universe considering the intent">Cluster the keyword universe. That is, break it down into thematic subsets, keeping in mind the <strong>intent</strong> behind the queries. The point is that each keyword phrase is likely correlated with a certain user need that the search engine seeks to satisfy. For example:
		</p>
		<ul><li>“How to tie a tie” is an informational query; the intent is <strong>to know</strong>;</li>
			<li>“Coca-Cola website” is a navigational key; the intent is <strong>to find</strong>;</li>
			<li>“Coffee near me” is a transactional keyphrase; the intent is <strong>to cheer up:)</strong>.</li>
		</ul>
		<p itemprop="text">
			There are many keyword clustering tools, but here I’ll mention only these two: <a href="https://serpstat.com/keywords-clustering/">Serpstat Clustering</a> and <a href="https://www.keywordinsights.ai/features/">Keyword Insights</a>. If you use something else, it would be great if you shared your experiences in the comments. Whatever tool you choose, be sure to review and control the result given by the program.
		</p>
	</div>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><meta itemprop="name" content="Plan your taxonomies and pillar pages"><strong class="red">4.</strong> <span itemprop="text">After you have clusters ready, plan a number of hub pages, including categories and pillar pages with cornerstone content. Depending on what type of site you’re creating, think about how to access the hubs from the home page. For example, let’s start planning the architecture of an e-commerce site.</span> </p>
	<p>If you have an online store, your categories must be listed in the navbar. Subcategories and preset filters should be available either from the navigation or from the sidebar, but all informational sections could be hidden behind a link with the anchor text “Blog”. Except for some pillar posts with contextual links to other pages that should be available from the content of the main page.</p>
	<p>But if you’re creating an author’s blog or a photo portfolio, you might decide to make the main element of the homepage a tag cloud with links. But don’t clog it up like in the image below, or no one will be able to use it. </p>
	<p class="txt-center">
		<picture>
			<source srcset="/images/posts/wp/tags-cloud.webp" type="image/webp">
	   		<source srcset="/images/posts/tags-cloud.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/tags-cloud.jpg" alt="An example of a tag cloud" width="520" height="190">
		</picture>
	</p>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><meta itemprop="name" content="Decide which hubs the dead-end pages will belong to">
		<strong class="red">5.</strong> <span itemprop="text">Consider which hubs the dead-end pages (supposed to be conversion or transactional ones) will belong to. There is a subtlety here; let’s consider it on the example of an online store.</span>
	</p>
	<p>
		The product page “Electric oven DIVA” is displayed in the “Ovens” subcategory and in the “Kitchen” preset. But according to the URL structure, it should belong to a higher-level hub page, i.e., the category “Appliances” or the root directory of the site. Otherwise, the same product will have different URLs, which will lead to search ranking problems.
	</p>
	<p class="txt-center">
		<picture>
			<source srcset="/images/posts/wp/eshop-structure.webp" type="image/webp">
	   		<source srcset="/images/posts/eshop-structure.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/eshop-structure.jpg" alt="The right URL structure for an e-commerce website" width="500" height="150">
		</picture>
	</p>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><meta itemprop="name" content="Break down the keywords by page">
		<strong class="red">6.</strong> <span itemprop="text">Distribute the “long-tail” phrases across subcategory and filter pages; transactional keywords across product and service pages; “how to choose”, “what’s the best” and other questions across blog articles. Now, with no content created, you already know how the same-type pages (“Gifts for that price”, “Product consumables”) and different-type pages (reviews with links to subcategories, comparisons of individual products) should be linked to each other.</span>
	</p>
	<p itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><meta itemprop="name" content="It’s time to create different page layouts">
		<strong class="red">7.</strong> <span itemprop="text">Since the relationships between the site blocks are set, it’s a good time to engage a developer, create layouts, and implement structural linking. When the framework of the website fills up with content, it will be possible to link pages directly with contextual links.</span>
	</p>
	<span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><meta itemprop="name" content="keyword planners"></span>
    <span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><meta itemprop="name" content="keyword clustering tools"></span>
    <span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><meta itemprop="name" content="a web developer"></span> 
</div>
<div>
	<h2 id="2">Internal linking strategy: crosslinking in depth and in time</h2>
	<p>Internal page linking is one of the most important components of site optimization, and easy solutions don’t work here.</p>
	<p>
		Structural links determine the link flow on your site and distribute a great deal of <a href="{{ site.url }}/pagerank-formula-link-equity-distribution">link equity</a>. That’s why it’s important that the anchor texts of such internal links be high-volume keywords for which you are going to rank.
	</p>
	<p>
		Navbar link anchors should be concise, not just to save space. The point is that this kind of internal links appears often within the <a href="{{ site.url }}/how-to-earn-a-proper-snippet-on-SERP">rich snippets</a> of “big sites” on Google.
	</p>
	<p>
		Links between sibling pages with a common purpose (e.g., product cards) are needed mainly for user comfort. And also, for the search bots to scan as many pages as they can. You don’t need to be fancy with the anchor text here; let it match the title or header of the cited page.
	</p>
	<blockquote>
		You’ll find various crosslinking schemes on the web (“star”, etc.), but you should understand that Google is aware of them too. Moreover, <span class="under">it attaches less importance to</span> the templated linking than to natural links from the context.
	</blockquote>
	<p>
		For this reason, it’s beneficial to link from the texts to other articles on your site. There can be several links to one blog post on the page, with different anchors; the links’ <em>hrefs</em> should, preferably, point to separate post sections.
	</p>
	<p>
		It’s also essential to relate your<span class="under"> new and old content</span>, not just in templates but in the context as well. Don’t forget to refer to the new posts from popular publications! The whole process of creating cross-links between pages from the same site is called <strong>internal link building</strong>. 
	</p>
	<blockquote>
		It’s quite natural if some of the links on your site have anchors like “read more” or “look here”. But leave this option for external inbound links from forums or social networks. While you can control the text of your internal links, incorporate some relevant keywords.
	</blockquote>
	<p>
		For content managers in e-shops, I’d advise adding to items’ descriptions links to similar items with slightly different functionality (“works in freezing temperatures”, “suitable for children under 3 years old”, etc.). The user might not make a transaction on that page but won’t go to your competitors to read reviews and make an informed choice at your place.
	</p>
	<p class="txt-center">
		<picture>
			<source srcset="/images/posts/wp/sitemap-design.webp" type="image/webp">
	   		<source srcset="/images/posts/sitemap-design.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/sitemap-design.jpg" alt="Site structure schematically" width="780" height="345">
		</picture>
	</p>
	<p>Below, I’ll try to list briefly the minimum necessary measures for SEO crosslinking.</p>
	<h3>Best practices for internal linking on a website</h3>
	<ol>
	  <li><span>All pages of the site should link to the main page. In addition to the logo, the anchors can be high-volume keywords for which the homepage plans to compete for the Top 10.</span></li>
	  <li><span>The main taxonomies (categories or topical sections) of the site should be present in the navigation; subcategories and presets may be too, according to their importance.</span></li>
	  <li><span>The navigation menu shouldn’t include anything but significant taxonomies, general information, and search input. For example, external links to your other site are definitely not appropriate there.</span></li>
	  <li><span>Informational content that generates traffic, such as posts and videos, should be <strong>one click away</strong> from the main or category page. Besides providing convenience for the user, it will <strong>increase the value</strong> of the hosting page.</span></li>
	  <li><span>Pages distanced from the homepage by more than 3 clicks have no chance to rank highly on Google. Try to stick to the <strong>three-click rule</strong> and build more internal links. Let the architecture of your site be as flat as possible!</span></li>
	  <li><span>On pages that are more than 2 clicks deep, place one or more <a href="{{ site.url }}/how-to-earn-a-proper-snippet-on-SERP#breadcrumbs">breadcrumb chains</a>. They are nothing more than link sequences that indicate a possible path to the home page.</span></li>
	  <li><span>Pagination buttons are links, and they pass value. Thus, all <a href="{{ site.url }}/en/page=2/">paginated pages</a> should link to the first one and should not link to the last one (it doesn’t need value!), except for several next-to-last pages.</span></li>
	  <li><span>In paginated categories and filters, let popular items appear at the top. Since Google doesn’t take rel="next"/"prev" into account, it’s crucial to emphasize the <strong>importance of the first page</strong> and subordinate the others. Do not display unsold goods on the first screen; otherwise, <span class="under"> the category rankings will drop</span>.</span></li>
	  <li><span>Take every opportunity for internal link building. If you find <strong>broken links</strong> and replacing them with other external outbound links is not obvious, analyze your new content and find a text passage to link to.</span></li>
	</ol>
	<p>And one more thing. If someone declares that “one webpage must have no more than XX internal and YY external links”, it does not hurt to ask them the exact number. Let them think and say how many links should be on the page. Then please share your knowledge in the comments:).</p>
</div>
<div>
	<h2 id="3">What tools can you use to visualize your site architecture?</h2>
	<p>First, consider some <strong>visual sitemap builders</strong> that you can use online. The list is intentionally not numbered so that everyone can choose the best mapper for their needs.</p>
	<p class="txt-center">
		<picture>
			<source srcset="/images/posts/wp/visual-sitemap.webp" type="image/webp">
	   		<source srcset="/images/posts/visual-sitemap.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/visual-sitemap.jpg" alt="Visual sitemap of this blog; radial directory diagram" width="600" height="345">
		</picture>
	</p>
	<ul>
	  <li><a href="https://www.powermapper.com/products/mapper/try/">PowerMapper</a> is a tool for site-mapping large sites, but it adheres to a strange marketing policy. For testing, it allows you to create a map of the <span class="u">first 10 crawled pages</span>. I did not appreciate the illustrative value of such a map. The unlimited single-user license costs $149, so the choice is yours.</li>
	  <li><a href="https://app.rarchy.com/sitemaps/">RarchyApp</a> will scan 50 pages for free, and you can choose different views to visualize the structure. To illustrate this section, I’ve chosen a radial diagram. The <a href="https://app.rarchy.com/s/BYm8EnNR40QoC4feABEEgCbt0uK2">outcome</a> is a kind of Directory Tree Visualization: it’s based on the folder structure and doesn’t reflect cross-references between pages. The cheapest subscription would cost you $15.</li>
	  <li><a href="https://octopus.do/">Octopus</a> is a popular sitemap tool that visualizes 300 pages for free (or 1000 for paid subscribers) and allows you to add nodes to the created map. That means you can use it as a website planner, too. You can upgrade the plan to Pro for just $8 per month.</li>
	  <li><a href="https://visualsitemaps.com/">VisualSitemaps</a> grants you 25 site screenshots a month for free and even allows you to set up an automation for this process. The map displays thumbnails of pages and links between them. It’s essential that you can filter some auxiliary subdirectories, such as /assets/, /admin/, etc.</li>
	  <li>And lastly, <a href="https://www.figma.com/templates/sitemap-generator/">Figma’s sitemap generator</a> and the simplest possible tool, <a href="https://www.gloomaps.com/">Gloomaps</a>: here you can draw a sitemap yourself. These online tools are helpful at the planning stage of the web development process.</li>
	</ul>
	<p><picture>
			<source srcset="/images/posts/wp/web-spider.webp" type="image/webp">
	   		<source srcset="/images/posts/web-spider.jpg" type="image/jpeg">
			<img loading="lazy" src="/images/posts/web-spider.jpg" alt="The spider is ready to crawl the web pages" width="310" height="310" class="fl-left">
		</picture>
		But the greatest opportunities to explore the underlying structure of the site will come from <strong>specialized SEO tools</strong>.
	</p>
	<p>
		If you need radial crawl diagrams, flow charts with marked depth levels, and complex hierarchical tree graphs, it’s better to turn to big-name SEO crawlers. <strong>Screaming Frog Spider</strong>, for example, has an <a href="https://www.screamingfrog.co.uk/site-architecture-crawl-visualisations/">excellent guide</a> on crawl visualization. But keep in mind that its free version will allow you to crawl <span class="u">only 500 pages</span> on your site.
	</p>
	<p>
		If you have more pages, I highly recommend trying <a href="https://sitebulb.com/product/crawl-maps/">interactive crawl maps</a> by another creator, <strong>Sitebulb</strong>. You can use the full version of their software for 14 days without any crawling limitations. I think the tool deserves a further purchase since you can use it as a full-featured site auditor.
	</p>
	<p>If you want to refresh your knowledge on the <a href="{{ site.url }}/technical-seo-audit-DIY">site audit</a> or other Tech SEO aspects, please see the related posts below.</p>
</div>