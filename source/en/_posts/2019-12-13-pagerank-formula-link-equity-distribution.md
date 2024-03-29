---
layout: post 
i18n-link: PR
lang: en
locale: en


date: 2019-12-13T19:02:00Z
last_modified_at: 2022-08-20T20:00:00Z

title: "How do links pass value? Explaining Nofollow, Ugc & Sponsored"
tags: [PageRank, Links, On-page, Bookmarklets, Google, SEO]
description: "Do you know the PageRank formula and why Google patents variations of it? &#10010; Use cases for link hints: nofollow, UGC, sponsored &#10010; How not to waste link equity and be careful with links"
keywords: "link equity"
schema: FAQPage

h1: "How do links pass equity? What are link hints and when does Nofollow hurt?"
snippet_header: "What if link juice is leaking? Let’s dive into how links pass PageRank"

snippet: "Everybody wants to know how links distribute &#8220;juice&#8221; among webpages and what amount of it is usually dissipated. And while we endeavor to guess a proportion, the GoogleBot chuckles reading that &#8220;Every dofollow link passes X% of equity&#8221;."

image: "link-juice-leakage.jpg"
---

<ul class="toc">
	<li><a href="{{ site.url }}{{ page.url }}#1">Good old PageRank formula</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#2">External links: pros and cons</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#3">Nofollow: how not to waste page value</a></li>
	<li><a href="{{ site.url }}{{ page.url }}#4">Link hints "ugc" and "sponsored"</a></li>
</ul>
<div>
<p> {{ page.snippet }}</p>
<p>To begin with, there is no exact <strong>page value</strong> or <strong>page weight</strong> unless we are talking about the size of the resources loaded. There is only page’s <span class="under">importance relative to other </span>web pages. Search engines calculate this value based on hundreds of factors, constantly refining the result. But the point is that Google, Bing, Yandex, Baidu, etc. do it in their own way, and we’ll never know the exact page value formula.
</p>
<p>All this <strong>link juice</strong>, <strong>link equity</strong>, etc., can be understood as a way of transferring some value between relevant pages using hyperlinks. The page with a higher value has more <strong>ranking power</strong> – the ability to take high positions on the <abbr title="Search Engine Results Page">SERP</abbr>.</p>
<p>But why a plain hyperlink can pass something from one document to another? That’s because search engines interpret <strong>links as votes</strong> for the cited page. Every vote is taken into account, but some weigh more than others.
</p>
<p class="txt-center"> 
<img src="/images/posts/{{ page.image }}" alt="SEO-task: prevent link juice leakage" class="webfeedsFeaturedVisual" width="490" height="450">
</p>
<p id="1">The point is that link juice is related to <strong>PageRank</strong> – an estimate of the page’s value that Google got a <a href="https://patents.google.com/patent/US6285999B1/en">patent</a> for in 2001. The underlying method calculates the importance rank of a page from the ranks of pages linking to it. Below is the original formula (click if you want to <a href="{{ site.url }}{{ page.url }}#FAQ"><b class="red">skip it</b></a>):
</p>
<p class="txt-center"><img loading="lazy" src="/images/posts/page-rank-formula.jpg" alt="The PageRank formula" width="420" height="85"></p>
<p>where <b><i>PR&#8239;(A)</i></b>&#8239; denotes PageRank of <i>A</i>; &#8239;<b><i>Q</i></b>&#8239; belongs to the set of all pages pointing to <i>A</i>; &#8239;<b><i>d</i></b>&#8239; is a damping factor (&#8776;&#8239;0.85); and the fraction denominator equals the number of outgoing links from the page <i>Q</i>&#8239;. In fact, the equation above isn’t perfect because <span class="under">it’s easy to manipulate the rank</span> with a bunch of pocket sites (i.e., with the so-called link-farm). That’s why the <a href="https://patents.google.com/patent/US9165040B1/en">renewed patent</a> proposes variations of the formula which estimate the &ldquo;distance&rdquo; from the high-quality <strong>seed pages</strong> to a given page. Besides, the alternate formulae assume that every link <b>has a weight</b> according to its properties. These weights are not known to anyone except Google, but we can guess which properties are involved.</p>
<p>Anyway, PageRank is only one of the hundreds of SERP-rank components: many of them are query-specific, intent-specific, or even user-specific. As opposed to the <em>static</em> PR, they’re sometimes called <em>dynamic</em> ranking factors.
</p>
<p id="FAQ">To sort things out, let’s start with simple questions.</p>
<h3 class="faq">Why do inbound links add credibility to a website?</h3>
<p>Because the page a link is on seems to suggest, &ldquo;Look, I highly recommend <span class="u">this</span>!&rdquo;</p>
<h3 class="faq">Why do outbound links decrease link equity?</h3>
<p>Because every link silently says, &ldquo;Don’t stay here, you’d better stop by <span class="u">there.</span>&rdquo;</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">What are dofollow and nofollow links?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">It’s all about the <em>rel</em> attribute of the link tag &#60;a&#62;. If <span class="red">rel="nofollow"</span>, the search robot won’t follow the link (we assume it’s a well-mannered bot). The default value of <em>rel</em> is "dofollow": such a link kindly asks the bot to go to the href and pass some value to the target page.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">How to check nofollow and dofollow links</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">It’s easy to highlight no-followed links with the help of a bookmarklet. Drag this <a class="red" href='javascript:(function(){var o,e,l=document.links;for(o=0;o<l.length;++o)-1!=(e=l[o].rel.toLowerCase()).indexOf("nofollow")?(l[o].style.backgroundColor="yellow",l[o].title+=" NOfollow"):l[o].style.backgroundColor="lightgreen",-1!=e.indexOf("ugc")&&(l[o].style.border="6px solid orange",l[o].title+=" UGC"),-1!=e.indexOf("sponsored")&&(l[o].style.outline="4px solid red",l[o].title+=" Sponsored")})()'>Nofollow-and-ugc-link-highlighter</a> to your browser’s bookmarks bar. On the page you want to check, click the bookmarklet: all <b>no</b>-follow links will turn yellow; <b>do</b>-follow will turn green. The users’ or paid links will have orange or red borders.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Why aren’t nofollow links intended to pass PageRank?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Because value and credibility cannot be transmitted blindly. If the bot can’t follow the link, it won’t be able to check the relevance of the linked webpage.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<img loading="lazy" src="/images/posts/bot.jpg" alt="How the Googlebot works" class="fullscreen-right" title="It may not be the Googlebot, but it’s cute" width="300" height="515">
	<h3 itemprop="name">What does it mean that nofollow becomes a hint?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">The nofollow attribute of the anchor tag is no longer a directive. <span class="u">On March 1, 2020</span>, the Googlebot <span class="u">got the right to ignore it</span>, follow the link, and crawl the destination page. So, every link may be considered by search engines for ranking purposes.</p>
	</div>
</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Do nofollow links help rankings?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Yes, a nofollow link from a trusted domain like Wikipedia.org can increase site traffic and likely improve its rankings. Also, this <a href="https://www.seroundtable.com/google-nofollow-link-attribute-change-sponsored-ugc-28196.html">collection of tweets</a> from informed people would suggest that the Google search engine could use nofollowed links when ranking pages.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Are all dofollow links equally useful?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">No. The most noticeable link on the page (the one that the user will likely click on) is the most significant. And so on, in descending order.</p>
	</div>
</div>
<p class="txt-center"><small>Robot by <a href="https://unsplash.com/@rocknrollmonkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rock’n Roll Monkey</a> on Unsplash. Modified with befunky.com</small></p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">How are <em>noopener</em> and <em>noreferrer</em> related to nofollow?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">The only thing they have in common is that they are values of the <em>rel</em> attribute of the &lt;a&gt; tag. The noopener and noreferrer do NOT affect PageRank and are NOT intended for bots. One of their main tasks is to secure a page containing a link with target = "_blank" <span class="under">to another domain</span> from malicious attacks using window.opener.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">Does a 301 redirect pass link juice?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">In general, yes. But if the new and previous pages are different in purpose, then most likely no ranking signals will be passed through a redirect. When a redirect chain occurs, the situation gets complicated. Google will try to select the canonical page, but <span class="under">the longer is the chain</span>, <span class="under">the fewer chances there are</span>  for the destination page to become canonical.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">How do I check my Google PageRank?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">Until 2013, it was possible to find the PageRank value on the Google Toolbar. Later, the company stopped updating those values, and in 2016, PR was deprecated. But there are some third-party sites, like <a href="https://www.checkpagerank.net/">checkpagerank.net</a>, that can help you check page rank online. Yet, there is no guarantee that the tool will take into account all existing links to your page.</p>
	</div>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h3 itemprop="name">What are alternatives to Google PageRank?</h3>
	<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
		<p itemprop="text">You can check <em>Ahrefs URL Rank, Moz’s Page Authority, Majestic’s Trust Flow</em>, or even branded PR variations like <em>Serpstat PageRank</em>. If you are interested in graph theory and programming, you might appreciate the <a href="https://en.wikipedia.org/wiki/SALSA_algorithm">SALSA</a> and <a href="https://www.researchgate.net/publication/269157620_Adaptive_on-line_page_importance_computation">OPIC</a> algorithms for page importance computation.</p>
	</div>
</div>

<div><h2 id="2">Outbound links: when they harm and when help</h2>
	<p>It might seem unreasonable to pass a portion of link juice to other sites. So webmasters sometimes totally avoid external links or set rel="nofollow" for each anchor tag. In their pure form, both strategies do not lead to anything good. Outbound links are not so dangerous if you understand how they work.</p>
	<p>You <span class="under">share link juice <b>without any benefit</b></span> when:</p>
	<ul>
		<li><img loading="lazy"  class="fl-right restrict vw35" src="/images/posts/give.jpg" alt="When links hurt" width="160" height="160">you refer to a suspicious or much less reliable website;</li>
		<li>the link is proposed in such a context that users are likely to follow it and not return to the site (&ldquo;we don’t have many photos, but there are plenty of them <span class="u">here</span>&rdquo;);</li>
		<li>the anchor text matches the keyword for which your page is optimized;</li>
		<li>an outbound link is placed in the navigation or sidebar, meaning all the pages of the site waste link equity.</li>
	</ul>
	<p>You share <span class="under">PageRank but <b>build up the site’s</b> reputation</span> if you:</p>
	<ul>
		<li>refer to prominent authorities in the whole industry;</li>
		<li>create incredibly useful content for your users (e.g., the rating of free software);
		<img loading="lazy"  class="fl-right restrict vw35" src="/images/posts/give-back.jpg" alt="When you benefit from external links" width="160" height="160"></li>
		<li>establish a good relationship with a site whose audience might be interested in your content;</li>
		<li>provide users with a list of online resources that will be useful to them in the next step.</li>
	</ul>
<blockquote>It is unthinkable that one site can meet all the needs of the user; he or she will leave anyway but will be grateful to you for farewell recommendations. Next time seeing your logo on the SERP, the loyal user will immediately go to the site.</blockquote>
<p>You <span class="under">definitely <b>need to add</b> an</span> external link, regardless of cost, when:</p>
	<ol type="i">
		<li><span>using someone else’s content under a license with attribution required;</span></li>
        <li><span>translating a foreign publication;</span></li>
    	<li><span>discussing someone’s statement or the event you have read about on the Internet.</span></li>
	</ol>
<p>That isn’t just about ethics: in either case, it’s unlikely that the search engine will applaud the site owner for the missing link.</p>
<p class="txt-center"><img loading="lazy" src="/images/posts/webpages-and-links.jpg" alt="Google PageRank and rel=sponsored, nofollow, ugc" width="710" height="450"></p>
<p>So far, we’ve mostly been talking about outgoing and backward links (commonly spelled as &ldquo;backlinks&rdquo;). But internal links are also essential: they can radically redistribute the link equity. Some crawlers calculate the Internal PageRank for all the pages of a given site. As examples, let’s highlight <a href="https://www.oncrawl.com/solutions/seo-challenges/internal-linking/">OnCrawl</a> (cloud-based) and <a href="https://netpeaksoftware.com/spider#features">Netpeak Spider</a> (desktop). In fact, the internal linking strategy is the basis of website optimization, but talking about that requires more space than we have.</p>
</div>
<div><h2 id="3">Nofollow usage: cut off the extremes. How not to waste link equity</h2>
	<p>Using nofollow indiscriminately, you can make search engines misinterpret your website’s architecture and nullify the benefits of outgoing links. Thus, website owners should use link hints consciously.</p>
<p><strong>It makes sense to set rel="nofollow"</strong> for the hyperlinks like below.</p>
	<ul class="featured plus">
	  <li>Internal links to non-indexable pages (search, sorting, etc.): that can save link juice, the efforts of search bots, and your crawl budget.</li>
	  <li>External links for which you wouldn’t like to vouch (e.g., the link posted by the user).</li>
	  <li>Links from widgets, counters, and other side elements if you have an opportunity to edit the code.</li>
	  <li>Social sharing links.</li>
	  <li>Any noticeable link pointing to the archive or another source that doesn’t care about rankings and isn’t recognized as authoritative. An alternative to nofollow is rendering that source with a linked footnote.</li>
</ul>
<p> <b>NB!</b> No value of <em>rel</em> can protect the page to which the link points from crawling and indexing. You can disallow unwanted internal URLs in robots.txt, but it is better to <a href="https://support.google.com/webmasters/answer/93710?hl=en">prevent their indexing</a> properly.</p>
<p>If on some dead-end page most links point to pages that search robots should not see, it’s preferable to use the tag &lt;<b>meta</b>&nbsp;name="<b>robots</b>" content="nofollow"&#8239;/&gt;. It should be placed in the &lt;head&gt; of the HTML document so that bots do not follow the links. Unlike the nofollow attribute, this meta tag is a strict directive.</p>
<p><strong>When not to use rel="nofollow"</strong>:</p>
<ul class="featured minus">
	<li>For all external links indiscriminately, each case is worth examining.</li>
	<li>When referring to the source of information or the profile of the person you are quoting.</li>
	<li>For PageRank sculpting, which means the artificial redistribution of the Internal PageRank.</li>
</ul>
<p>In any situation, it’s safer to stick to the rule &ldquo;<span class="red">Do not interfere with the search bot</span> without any good reason&rdquo;.</p>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
	<h2 id="4"><span itemprop="name">What are UGC and Sponsored link hints</span> and why they aren’t directives</h2>
	<p>In September 2019, the widely supported <strong>nofollow</strong> directive and its antipode, <strong>dofollow</strong>, were joined by two non-strict instructions, for Google bots exclusively.</p>
	<p><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">They are the values of the rel attribute of the link tag: rel="<strong>ugc</strong>" and rel="<strong>sponsored</strong>". Both rel-values are just hints; bots can take them into account, but they aren’t obliged to do so. <strong>UGC</strong> stands for User Generated Content, such as comments, forum posts, profile bios, etc. <strong>Sponsored</strong> is intended to highlight affiliate and paid links.</span></span></p>
	<p><b class="red">UPD!</b> In the summer of 2020, Bing <a href="https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a">confirmed</a> that its search bots support <strong>sponsored and ugc</strong> hints introduced by Google.</p>
	<p class="txt-center">
		<img loading="lazy" src="/images/posts/user-generated-content.jpg" alt="Young people generating ugc-content" width="600" height="420"><br>
		<small><a href="https://www.freepik.com">Designed by Freepik</a></small>
	</p>
	<blockquote>The official <a href="https://webmasters.googleblog.com/2019/09/evolving-nofollow-new-ways-to-identify.html">announcement from Google</a> says that their new items do not replace widely used nofollow. The purpose of the innovation is to provide webmasters with a tool that helps Google understand the nature of links. The use of the new hints is voluntary.</blockquote>
	<p>The hints could also be combined. Adding ugc to nofollow results in rel="<span class="red">ugc nofollow</span>": the user’s link to which the bot should not pay attention. An affiliate link from someone’s profile can be represented as  rel="<span class="red">ugc sponsored</span>". From the Google Support explanation, it follows that sponsored, when appropriate, is preferable to nofollow. Besides, the support entry claims that both sponsored and ugc &ldquo;will generally not be followed&rdquo;.</p>
	<p>But it’s safer for us to assume that <b>NEITHER ugc NOR sponsored</b> can turn a link into nofollowed, at least because other search engines do not understand them.</p>
	<blockquote>This <a href="https://moz.com/blog/ugc-distilledodn-seo-test">A/B testing</a> confirms that it’s harmful to give up nofollow if it is in the right place. The article tells us about the experiment on <span class="under">replacing nofollow with ugc </span>for half of the anchor tags in MOZ’s blog comments.</blockquote> 
<p>By the end of the testing, a slight decrease in traffic had been detected. It has been proven that at a 95% confidence interval, the traffic shift stays <span class="under">between -26 000 and +9 300 visits</span>/month. No big deal, but possible losses far outweigh the potential increase.</p>
<p><b>To summarize.</b> New Google’s hints restrain the passing of ranking signals and the more so <em>sponsored</em>. But the most steady way to manage the PageRank is still rel="nofollow". For backward compatibility, it’s better to add nofollow to any other a-tag hint. If you don’t want to give an extra clue to bots, it’s OK not to change existing links on your site. In most cases, Google itself can figure out which link is paid, which is spam, and which is useful, placed for the user’s convenience.</p>
</div>