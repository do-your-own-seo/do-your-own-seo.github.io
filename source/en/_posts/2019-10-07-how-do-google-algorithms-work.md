---
layout: post
i18n-link: algo
locale: en
lang: en

date: 2019-10-07T22:19:00Z
last_modified_at: 2019-12-01T00:21:00Z
tags: [Google, Google аlgorithms, Search ranking, SEO]
title: "How do Google Algorithms rank pages?"

description: "SEO magic no longer works. Google Algorithms can analyze contexts and draw the right conclusions. So what's now better for rankings &#10112;&#10113;&#10114;: links or other factors?"
keywords: "google algorithms, how google ranks pages"
modal: "needed"
faq: true

h1: "How does Google rank webpages?"
snippet_header: "How do Google Algorithms rank pages?"

snippet: "Unlike the situation in SEO ten years ago, now purchased magic does not work. Buying links won't bring the page to the Top and could even hurt your rankings. Search algorithms are more likely to choose high-grade resources, and Google patents confirm this trend."

image: "how-do-google-algorithms-work.jpg"

---

<ul class="toc">
  <li><a href="#1">Link equity and website reputation</a></li>
  <li><a href="#2">User experience and response</a></li>
  <li><a href="#3">Domain authority VS content quality</a></li>
  <li><a href="#4">Why can low-grade websites get into the Top 10?</a></li>
</ul>
<div><p>{{ page.snippet }}</p>
<p class="txt-center"> 
<img src="/images/posts/{{ page.image }}" alt="Google algo" class="webfeedsFeaturedVisual"> </p>
<p>Googlebot tirelessly crawls websites and supplies vast amounts of data <span class="under">to machine learning systems.</span> Absorbing and analyzing information, Artificial Intelligence improves itself, and the majority of AI-drawn conclusions are reminiscent of the results of a human expert work.</p>
<p>Before the next core update is put into practice, the quality of new search results need necessarily be <a href="https://www.google.com/search/howsearchworks/mission/users/">rated by external experts</a>. According to their opinion, Google launches or doesn't new features and implements the algorithms update.
</p>
</div>
<div><h2 id="1">Link equity, site authority and trustworthiness</h2>
<p>The amount and quality of <strong>inbound links of a webpage</strong> + domain's link profile are strong signals of page importance to the search engines. Link equity helps to compare pages of one site with each other and stand them out against the competitors.
</p>
<p>In Google, the algorithm <strong>PageRank</strong> is responsible for the treatment of link equity. Since 2000, users had been able to see the value of webpages in the browser toolbar, but in 2016 the PR-meter was deprecated. Making it public was considered a mistake, as this led to a significant increase in garbage links.</p>
<p>However, the Google PageRank is still alive: the <a href="https://patents.google.com/patent/US9165040B1/en">respective patent</a> was re-registered in 2017 and will be valid until 2027. So, should we try to replicate the calculations? No, due to low priority: without reference to other factors, the PR <span class="under"> is useless for</span> ranking forecasts.</p>
<p>The <strong>Authoritativeness</strong> and <strong>Trust&#173;worthiness</strong> mostly refer to a domain and indicate its reliability, power of influence, and depth of connection with other relevant resources. There are several reputation-related third-party metrics: <a href="https://moz.com/learn/seo/domain-authority">Moz's Domain Authority</a>, Majestic's Topical Trust Flow, etc., but we'll skip them. They are useful in analyzing the SERP, yet surely Google has own computational models for such concepts.</p>
<p itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<img loading="lazy" class="fullscreen-right" src="/images/posts/link-flow-link-equity-en.jpg" alt="Link flow and link equity"><span itemprop="name">How can we think of link equity?</span> <span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text"> It's easy to imagine that link equity and website credibility <strong>accumulate and are redistributed</strong> <a href="{{site.url}}/pagerank-formula-link-equity-distribution">by the link flow</a>. <span class="under">The more reputable websites refer you</span>, the more trust you get from the Search Engines, and higher positions gain on the Results Page (SERP). Conversely, if the website has thinnish links or none at all, it will be difficult to prove its worth and relevance to the topic.</span></span> </p>
<p>That means the homepage of a newbie site won't soon surpass the reputable competitors in Search. It's hardly possible to build natural links quickly, and the algorithms won't believe the rest.
</p>
<p>But it's too early to talk about total defeat: there are many more ranking factors!</p>
<p>To start, site owners can optimize content for low-volume keywords: if Google considers the page relevant to the query and user's intent, chances to enter the Top 10 are super high.</p>
<p>So, suppose the page has just appeared at least in the Top 12 search results for a certain region. And then...</p></div>
<div><h2 id="2">User response and rankings</h2>
<p>Then the behavior factor comes into effect. No matter how inconsistent googlers' cues were, practice convinces and patents indirectly confirm that user doings on the destination page and the SERP may <strong>affect the rank modification</strong>.</p>
<p> An obvious example: actions of the visitor who has just returned from the site to Search, might tell the engine whether<span class="under"> the site met expectations as</span> well as whether the search results were satisfactory. But who measures satisfaction?</p>
<p>
<img loading="lazy" class="fl-left" src="/images/posts/user-response.jpg" alt="User response">The algorithm <strong>RankBrain</strong>. Of course, it doesn't read the mind of visitors but analyzes click chains, time parameters, etc. To prevent the rigging of results, the system algorithmically separates the &ldquo;leased users&rdquo; from organic ones.</p>
<p>No one can say for sure what exactly the ranking engine takes into account comparing trillions of pages. Still, it follows from publications that to date, some activity-centered metrics could have been implemented and may somehow affect the page's rank:</p>
<ul>
  <li>click data for the given snippet and others on the particular SERP (click-through rate, wait time, etc.);</li>
  <li>deviation of user behavior on the specific SERP from a typical scheme stored in his or her profile (1st-click rapidity, favorite positions, etc.);</li>
  <li>correlation between the user's activity and interest in the topic (from the search history);</li>
  <li>time that the user spends on the landing page and percentage of returns to the SERP.</li>
</ul>
<blockquote class="txt-left">Examples from the Google <a href="https://patents.google.com/patent/US8661029B1/">patent US8661029B1</a>: 
<p>“...user reactions to particular search results or search result lists may be gauged, so that results on which users often click will receive a higher ranking...”</p>
<p>“...a user that almost always clicks on the highest ranked result can have his good clicks assigned lower weights than a user who more often clicks results lower in the ranking first...”</p></blockquote>
<p>Besides, studies like this one <a href="https://www.semrush.com/ranking-factors/">from SEMrush</a> show the direct correlation between site rankings and <i>pages per session</i>, as well as the inverse one between rankings and <i>bounce rate</i> (% of one-page sessions). That's to be expected, but even so, the fact <b>does not indicate</b> causal relationships.
</p>
<p>Surely, there might be other rank-modifying factors. By the way, can Google (or Yandex) know about user actions outside the SERP? In theory, yes. Each of them can use its browser data and statistics from analytical scripts installed on most websites. Note, <span class="under"> I do not say the page's analytics affects the</span> page's rank. I only assume that data may be somehow used to distinguish user behavior patterns.</p>
<blockquote>NB The visitor interacts not only with the content of the site but with the interface first: if something slows the page down, anyone will be annoyed. Googlebot also doesn't like to wait for the resources to load. That is why the <strong>website performance</strong> and <strong>mobile-friendliness</strong> are necessary to survive the web.</blockquote>
<p>From the section, it's easy to conclude that neither link equity nor synonymous with it link juice will help a page that is not interesting to the visitor. On the other hand, useful webpages may get a slight head start and occasionally appear on the SERP in notable positions.</p></div>
<div><h2 id="3">Website authority VS code and content quality. What affects the page rank most?</h2>
<p>The answer depends on query volume, niche competition, user's intent, location, and who knows what else. Naturally, everyone wants to see exact numbers, so I'll roughly estimate them. But you can at least argue about the proportion.</p>  
<p class="txt-center"> 
<img loading="lazy" src="/images/posts/domain-authority-or-page-content-what-weighs-more.jpg" alt="Domain authority or page content: what is more significant for rankings"> </p>
<p>For competitive <strong>high-volume commercial query</strong> such as <i>buy a smartphone</i>&thinsp; or <i>website promotion</i>,&thinsp; the ratio is around the following:</p>
<ul>
  <li>domain info and trustworthy characteristics  provide <b>25% of success</b>;</li>
  <li>incoming page links and relevance of the anchors to the query &ndash; <b>35%</b>;</li>
  <li>content relevance, Schema.org markup, and physical proximity of the company to the user's location &ndash; <b>20%</b>;</li>
  <li>HTTPS protocol, site performance, and usability (especially on mobile devices) &ndash; <b>10%</b>;</li>
  <li>explicit and implicit user response &ndash; <b>the rest 10%</b> (implicit &ndash; interaction with the site and actions in Search; explicit &ndash; brand mentions, reviews, etc.).</li>
</ul>
<blockquote>Why is only 10% devoted to the site grade? Because respected websites selling services or gadgets online are not too different in this indicator. For a more diverse business environment, the ratio would be higher.
<p>Why we shouldn't rely too much on the response: to get the feedback we need first lead the user from the SERP, and it is not easy due to competition. An audience coming from other sources is unlikely to cause a rank boost.</p></blockquote>
<p>In contrast to high-volume, the <strong>long-tail searches</strong> <i>(looking for an extraordinary thing in the right color)</i> allow us to get on&nbsp;Top of the Search  only due to comprehensive content and user satisfaction. Unless the domain is newborn and its link profile is empty. But when the site grows out of the &ldquo;sandbox&rdquo; to which the search algorithms are slightly biased, it will be easier to master informational queries.</p>
<p class="txt-left">
<img loading="lazy" class="fl-right restrict vw40" src="/images/posts/inStock.jpg" alt="In order for product cards to rank high, the schema.org Product & Offer markup must be implemented."> Versions of this article in other languages ​​are positive that optimized product pages can get into the Top 10 without link building, even competing with authoritative Web stores.</p>
<p>For some locations, this is the case. But I'm afraid this is not true where Amazon and eBay are so strong: I have no experience in promoting e-commerce sites in &ldquo;Amazon-basin&rdquo; countries. Thus, if it was about my business, I'd better open a branch in the marketplace and start optimizing it than to invest all my efforts into a separate store. So what do you think: is it worth to optimize shop product cards at all?</p>
<p>The<span class="under"> hardest thing is to promote hub pages</span>, such as product category or blog homepage. They can't solve the user's problem: their mission is to redirect to the destination. Without an influx of incoming links and authoritative domain support, they'll quickly lose the equity and be unable to hold Top positions.</p>
<h3>On the high-quality content</h3>
<p>Well, you have faith in your skills and have decided to conquer Olympus with the perfection of content. I add my full support &nbsp;<i class="icon icon-handshake"></i>&nbsp; to the idea: let's try to produce well-structured content with clear headlines and descriptive illustrations.</p>
<p class="txt-left">
<img loading="lazy" class="fl-left restrict vw40" src="/images/posts/content-quality-is-crucial.jpg" alt="The quality of the content is crucial"> But there are nuances. To prevent misunder&#173;standing with Google regarding content quality, you could always use the <a href="https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf">General Guidelines</a> and this <a href="https://webmasters.googleblog.com/2019/08/core-updates.html">official post</a> about core updates. The latter contains an explanation of E-A-T concepts in a style of questions-to-myself.</p>
<p>In short, <b>E</b>xpertise-<b>A</b>uthority-<b>T</b>rustworthiness means that writing well is not enough: the author should become a subject expert in advance. That is especially true for Your-Money-or-Your-Life websites, which can affect the health and financial stability of the visitors.</p>
<blockquote>
 With the Aug 2018 Medic Update, the <strong>expertise</strong> of medical content creators became the necessary ranking factor to Google. Articles on health and nutrition not backed by the professional authority of the author or reviewer (doctor, therapist, or scientist) are no longer considered reliable.
</blockquote>
<p>Understandably &ndash; the search engine doesn't have the expertise to verify the accuracy of newly emerging information and thus, needs confirmation from the outside. But this doesn't mean the unimportance of correctness. If possible, Google checks the <strong>content accuracy</strong> and classifies articles with provable factual errors as substandard.</p> 
<p>Studies disproving prevailing opinions are quite another matter: in this case, a lot depends on the publisher's reputation and community involvement.</p>
<p>Now that the section is over, it's worth mentioning factors that<span class="under"> are unlikely to be relevant to</span> ranking and quality of content. I think the <i>optimal keyword density</i> and <i>percentage of text uniqueness</i> make no sense other than an intuitive.</p>
<p>Falsely enhanced uniqueness won't turn plagiarism into an original. The necessary non-unique phrases won't worsen the rating of helpful tips. If you read, understand, and don't consider the text spam, keywords density is just optimal.
</p>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><h2 id="4" itemprop="name">How can low-grade websites get into the Top 10?</h2>
<p>If the engines are so wise, why do substandard resources sometimes appear among Google search results? And what are the rules to compete with intruders for leading positions?</p>
<img loading="lazy" class="fl-left restrict vw40" src="/images/posts/low-quality-results-2.jpg" alt="The man gets desperate: why can there be low-quality sites in Top 10?">
<img loading="lazy" class="fl-right restrict vw40" src="/images/posts/low-quality-results-1.jpg" alt="Search results may be imperfect">
<p class="txt-left" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">The rankings may be imperfect if the machine learning system <b>has&nbsp;not got enough data</b> to analyze. Perhaps the topic is poorly represented on the Internet, or the industry as a whole has a desire to earn quick money and adheres to low standards.</span></p>
<p>Although individual sites may offer great content, there is no guarantee that they'll take the leading positions.</p>
<p>Why? Artificial Intelligence has not built an information model and is not good enough at sensing what is well and what is ill. And so far operates according to some plan B, vulnerable to manipulation.</p>
<p>Here is a recipe for cheating the search engines and ranking well for low-volume specialized search terms.</p>
<ol><li><span>Create a neat and modest web-page.</span></li>
<li><span>According to the query, write human-readable headings.</span></li>
<li><span>Stuff the sections with related and specifying keywords.</span></li>
<li><span>Let there be more text: fill several PC screens. You can even automate the operation.</span></li>
</ol>
<p><b>In sum</b>, the text <span class="under"> is pro forma super relevant to </span> the query, and the user scrolls, trying to figure out how the mess of familiar words can solve the problem. The interaction is apparent, and the content reaches a higher position.</p>
<blockquote><b>Example</b>: <i>lastresort&thinsp;carrental.&thinsp;com</i> occupies the 3rd/4th pos. for <i>javascript count occurrences of word in string</i> (broad match, hl=en, gl=ua). You'll see from the <button id="trigger" data-src="/images/posts/tricky-page-en.jpg">full-tricky-page screenshot</button> that the text is just a compilation. The page itself is quite aggressive: you can't even move on it; otherwise, it'll redirect you to a gaming site. Likely, this wasn't always the case: the site used to rank well for a number of IT queries. 
</blockquote>
<p>Of course, that result is hard to achieve without black-hat techniques, but it would have been hardly possible if the query were precise and search engine were competent in the subject.</p>
<p>A few years ago, you could safely make enriched with keywords text low-contrast, or show it in small print at the bottom of the page. Since then, search algorithms have grown wiser and stopped to rank what people are scarcely to see.</p>
<p><strong>Oct 16th update</strong>: last time the <i>lastresort</i>&thinsp; wins the Top 5 was October 14th. Today it is not even in the Top 100. It is easier to find on the SERP the twin from percolos&thinsp;.com than the formerly successful page. Isn't this an evidence of search algorithms progress? <i class="icon icon-wink"></i></p>
<p>The goal of any content fraud is to make some money off the user. The shams want to sell you something or redirect to where you waste an extra dollar or even more &ndash; your time. The good news is that it's getting harder for them: Google bots have already learned JavaScript and can foresee a change of location. So, any sensible redirect today attempts to pretend to be a voluntary user's decision.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/open-app.jpg" alt="Do not click anything on suspicious sites, even if you got there from Google search results" title="No way!"></p>
<p class="txt-center"><small>If the site seems suspicious, it's better not to click anything but the browser back button.</small></p>
<p>But in fact, even pushy doorways still exist and aren't going to disappear, while their ranking prospects are melting away. Below is a snippet for one such website: the page redirects right away, not even trying to look decent.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/doorway-en.jpg" alt="Classical doorways are still alive" title="Snippet of a doorway"></p>
<p><b class="question"></b> Why do the tricksters bother with URL replace&#173;ment? Can't they have on the target site two versions of the page: the 1st one could show to bots some potentially well-ranking text; the 2nd &ndash; meet organic visitors, say, at the casino table&nbsp;<b class="question"></b></p>
<p>Yes, they can. That method is called <em>cloaking</em>: it violates white-hat guidelines and entails <strong>manual actions from Google</strong>. The risk of getting caught and being excluded from the index is huge. No doubt, the content substitution will become known, at least due to the opportunity <a href="https://www.google.com/webmasters/tools/spamreportform" rel="nofollow">to complain to Google</a>.</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<blockquote class="txt-left">Update: <span itemprop="name">What to expect from the new algorithm BERT?</span></blockquote> 
<p itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">With the implementation of the <strong>BERT algorithm on Oct 21st, 2019</strong>, Google has begun to better understand phrases. This major update relies on the technique of bidirectional language process&#173;ing that helps Google to <span class="under"> dive deep into the context </span>of a query and <span class="under">the intent behind it.</span></span> When BERT is fully operational in all languages, we won't need to arrange word order, as we do when searching <i>(thing) (feature) buy (conditions)</i>. On the side, we can be more confident that the engine will correctly understand the meaning of prepositions and other supplementary parts of speech. UPD: As of <strong>December 9th, 2019</strong>, BERT already speaks as many as 70 languages!</p>
</div>
<h3>Conclusion, quite optimistic</h3>
<p>Anyhow, the main thing is that every single wrong blue link on the SERP <b>harms the search engine's reputation</b>. Thence Google is quite sincerely committed to providing quality search results. Over time, algorithms will be smart enough to select the grains from the chaff.</p>
<p> Until then, they can use a little help: why don't you offer them a sample of quality content for research. Once Google crawls the page, perhaps it won't be so crucial whether the content will be appreciated next week or next quarter. Plus, the chances to attract the user on the SERP will increase if you provide the page with an intriguing title and description.</p>
<p>And if the user notices you in the search results, lands the page, and stays for long, Google will sooner recognize that you are offering something worthwhile!</p></div>