---
layout: post
i18n-link: algo
locale: en
lang: en

date: 2019-10-07T22:19:00Z
last_modified_at: 2022-08-20T20:00:00Z

tags: [Google, PageRank, Links, SERP, Content, SEO]
title: "What Ranking Factors matter more to Google Algorithms?"
description: "Gray-hat techniques are unreliable because Google algorithms can rank websites like human experts. So what matters more for SEO: content, links, or other ranking factors?"
keywords: "google algorithms, how google ranks pages"
schema: FAQPage

h1: "Google ranking in action: what factors matter more?"
snippet_header: "Ranking by Google in outline: what factors matter?"

snippet: "Unlike the situation in SEO ten years ago, black-hat magic now hardly works. Paid links won’t bring the page to the Top and could even hurt rankings. AI algorithms are more likely to choose high-grade resources, and Google’s patents confirm this trend."

image: "how-do-google-algorithms-work.jpg"

---

<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">Inbound links and reputation</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Behavioral ranking factors</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3">Domain authority VS content quality</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#4">Why can low-grade websites get into the Top 10?</a></li>
</ul>
<div><p>{{ page.snippet }}</p>
<p class="txt-center"> 
<img src="/images/posts/{{ page.image }}" alt="Google algo" class="webfeedsFeaturedVisual" width="600" height="425"></p>
<p>Googlebots tirelessly crawl websites and supply vast amounts of data to machine learning systems. By absorbing information, Artificial Intelligence improves itself, and AI-drawn conclusions are now barely different from those of human experts. Nevertheless, before the next core update is put into practice, the quality of new search results needs necessarily be <a href="https://www.google.com/search/howsearchworks/mission/users/">judged by external raters</a>. According to their opinions, Google launches or doesn’t launch new features and implements the algorithms updates.</p>
<p>To keep up with <strong>Google Core Updates</strong> and track changes on the search results page, it’s enough to follow <a href="https://developers.google.com/search/updates/ranking">this page</a>, where Google officially announces changes in the ranking algorithms.</p>
</div>
<div><h2 id="1">Inbound links, website authority, and trustworthiness</h2>
<p>The amount and quality of the <strong>page’s inbound links</strong> plus the <strong>domain’s backlink profile</strong> are strong signals of the page’s importance to search engines. <a href="{{site.url}}/pagerank-formula-link-equity-distribution">Link equity</a> helps to compare pages of one site with each other and stand them out against the competitors.
</p>
<p>In Google, the <strong>algorithm PageRank</strong> is responsible for handling the link equity. From 2000 to 2016, users could see the page value in the browser toolbar, and then the PR-meter was deprecated. Making it public was considered a mistake because such transparency has led to a significant increase in garbage links.</p>
<p>However, the Google PageRank is still alive: the <a href="https://patents.google.com/patent/US9165040B1/en">respective patent</a> was re-registered in 2017 and will be valid until 2027. So, should we try to replicate the calculations? No, due to its low priority. Without reference to other factors, the <span class="under">PR is useless </span>for making ranking forecasts.</p>
<p><strong>Authoritativeness</strong> and <strong>Trust&#173;worthiness</strong> mostly refer to a domain and indicate its reliability, power of influence, and depth of connection with other relevant resources. There are several reputation-related metrics: <a href="https://moz.com/learn/seo/domain-authority">Moz’s Domain Authority</a>, Majestic’s Topical Trust Flow, etc., but we’ll skip them. They help analyze the SERP, yet surely Google has its own computational models for such concepts.</p>
<p itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<img loading="lazy" class="fullscreen-right" src="/images/posts/link-flow-link-equity-en.jpg" alt="What does link flow mean" width="270" height="265"><span itemprop="name">How can we think of link flow?</span> <span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text"> It’s easy to imagine that link equity and website credibility <strong>can accumulate and are then redistributed</strong> by the link flow. <span class="under">The more reputable websites refer to you</span>, the more trust you get from the search engines, and the higher position you take on the Results Page (SERP). Conversely, if a website has poor links or none at all, it could be difficult to prove its worth and relevance to the topic.</span></span> </p>
<p>That means a newbie site’s homepage won’t immediately surpass the reputable competitors in Web Search. It’s hardly possible to build natural links quickly, and the algorithms won’t believe in artificial ones.
</p>
<p>But it’s too early to talk about total defeat — there are many more ranking factors!</p>
<p>To start, site owners can optimize content for low-volume keywords. If Google considers the page relevant to the query and the user’s intent, the chances of it entering the Top 10 are super high.</p>
<p>So, suppose the page has just appeared at least in the Top 12 search results for a specific location. And then...</p></div>
<div><h2 id="2">Behavioral ranking factors (user experience and response)</h2>
<p>Then the behavior factor comes into effect. No matter how inconsistent googlers’ cues were, practice convinces (and patents indirectly confirm) that user actions on the SERP and later on the page may <strong>affect the rank modification</strong>.</p>
<p>An example: the actions of the visitor who has just returned from the website to the SERP might tell the search engine whether the site met expectations and whether the search results were satisfactory. But who measures satisfaction?</p>
<p><img loading="lazy" class="fl-left" src="/images/posts/user-response.jpg" alt="User response" width="300" height="90"><strong>RankBrain algorithm</strong>. Of course, it doesn’t read the minds of visitors but determines a context and analyzes user interactions with search result data.</p>
<p>RankBrain (a <a href="https://patents.google.com/patent/US9104750">possible patent</a>), along with Panda, Penguin for spam filtering, and Pigeon for local search, have strengthened the complex Google <strong>algorithm Hummingbird</strong>.</p>
<p>No one can say for sure what exactly the ranking engine takes into account when comparing trillions of pages. Still, it’s probable that some activity-oriented metrics have been implemented and may somehow affect the page ranking. They’re:</p>
<ul>
  <li>click data for the given snippet and others on the particular SERP (click-through rate, wait time, etc.);</li>
  <li>deviation of the user’s behavior on the specific SERP from a typical scheme stored in their profile (1st-click rapidity, favorite positions, etc.);</li>
  <li>correlation between the user’s activity and interest in the topic (from the search history);</li>
  <li>the time the user spends on the landing page and the percentage of returns to the SERP.</li>
</ul>
<blockquote class="txt-left">Examples from the Google <a href="https://patents.google.com/patent/US8661029B1/">patent US8661029B1</a>: 
<p>“...user reactions to particular search results or search result lists may be gauged so that results on which users often click will receive a higher ranking...”</p>
<p>“...a user that almost always clicks on the highest-ranked result can have his good clicks assigned lower weights than a user who more often clicks results lower in the ranking first...”</p></blockquote>
<p>Studies like this one <a href="https://www.semrush.com/ranking-factors/">from SEMrush</a> show the direct correlation between site rankings and <i>pages per session</i>, as well as the inverse one between rankings and <i>bounce rate</i> (% of one-page sessions). That’s to be expected, but even so, the fact <b>does not state</b> the causal relationships.
</p>
<p>Surely, there might be other rank-modifying factors. By the way, can Google (or Yandex) know about user actions outside the SERP? In theory, yes. Each of them can use its browser data and statistics from analytical scripts installed on most websites. Note: <span class="under"> I do not say the page’s analytics affect the</span> page’s rank. I can only assume that data may be  used to distinguish user behavior patterns.</p>
<blockquote>NB! The visitor interacts not only with the content of the site but with the interface first; if something slows the page down, anyone will be annoyed. Googlebot also doesn’t like to wait for the resources to load. That is why <strong>website performance</strong> and <strong>mobile friendliness</strong> are necessary to survive the web.</blockquote>
<p>From the section, it’s easy to conclude that neither link equity nor link juice will help a page that is not interesting to the visitor. Meanwhile, useful webpages may get a slight head start and appear on the SERP in notable positions.</p></div>
<div><h2 id="3">Domain authority VS content and code quality. What affects the page rank most?</h2>
<p>The answer depends on query volume, niche competition, the user’s intent, location, and who knows what else. Naturally, everyone wants to see exact numbers, so I’ll roughly estimate them. But you can at least argue about the proportion.</p>  
<p class="txt-center"> 
<img loading="lazy" src="/images/posts/domain-authority-or-page-content-what-weighs-more.jpg" alt="Domain authority or page content: what is more significant for rankings" width="660" height="440"> </p>
<p>For competitive <strong>high-volume search terms</strong> related to conversions, such as “buy a smartphone” or “website promotion”, the ratio is around the following:</p>
<ul>
  <li>domain info and trustworthy characteristics provide <b>30% of success</b>;</li>
  <li>incoming page links and relevance of the anchors to the query – <b>20%</b>;</li>
  <li>content relevance, Schema.org markup, and physical proximity of the company to the user’s location – <b>20%</b>;</li>
  <li>HTTPS protocol, site performance, and usability (especially on mobile devices) – <b>20%</b>;</li>
  <li>users response – <b>the rest 10%</b> (implicit response: interaction with the site and actions on SERP; explicit: brand mentions, reviews on the Internet, etc.).</li>
</ul>
<blockquote>Why is only 20% devoted to the site code quality? Because websites selling those services or gadgets online are not too different in this indicator. In a more diverse business environment, the percentage would be higher.
<p>Why should we not rely too much on user feedback? To get feedback, we first need to lead the user from the SERP, and that’s not easy due to competition. An audience coming from other sources is unlikely to cause a rank boost.</p></blockquote>
<p>In contrast to high-volume searches, <strong>long-tail</strong> ones (“looking for an extraordinary thing in the right color”) allow us to get on&nbsp;Top only due to comprehensive content and user satisfaction, unless the domain is new and its link profile is empty. But when the site grows out of the &ldquo;sandbox&rdquo;, to which the search algorithms are slightly biased, it might be easier to compete for niche-specific or long-tail terms.</p>
<p>Another encouraging thing: it’s possible to bring e-shop product cards to the Top 10 <strong>without building links for the domain</strong> and despite the authority of competitors. But there are some necessary conditions. <img loading="lazy" class="fl-right restrict vw40" src="/images/posts/inStock.jpg" alt="In order for product cards to rank high, the schema.org Product & Offer markup must be implemented." width="130" height="130"></p>
<ol>
  <li><span>The product description shouldn’t be copied from the manufacturer’s website and should contain important information, such as photos or videos, feature comparisons, warranty conditions, etc.</span></li>
  <li><span>The product is on sale; its card shows the price and has a Product with Offer Schema.org markup.</span></li>
  <li><span>There are testimonials from people who have already bought and used this product.</span></li>
  <li><span>All product pages are linked to each other and can be accessed from the category page in 1-2 clicks (for everyone, including bots).</span></li>
  <li><span>The store has been operating online for a while, and from external reviews, it’s clear that the e-shop isn’t fictitious and really delivers goods.</span></li>
</ol>
<p>For some locations, it’s relatively easy, but it’ll be more difficult where Amazon, Ebay, and other marketplaces are strong. To be honest, I have no experience promoting e-commerce sites in &ldquo;Amazon Basin&rdquo; countries. Thus, I can’t advise whether to run your own e-store, or to open a branch on the marketplace and start optimizing it.</p>
<p>The hardest thing is to promote <strong>hub pages</strong>, such as product categories or the blog homepage. They<span class="under"> can’t satisfy the user’s need</span>; their mission is to direct users to the destination. Without an influx of <strong>incoming links</strong> and <strong>authoritative domain</strong> support, they’ll quickly lose equity and be unable to hold top positions.</p>
<h3>About the high-quality content</h3>
<p>Well, you believe in your skills and have decided to climb Olympus, relying on the perfection of your content. I add my full support to the idea! Let’s produce well-structured content with clear headlines and descriptive illustrations.</p>
<p class="txt-left">
<img loading="lazy" class="fl-left restrict vw40" src="/images/posts/content-quality-is-crucial.jpg" alt="The quality of the content is crucial" width="190" height="195"> The quality of the content is crucial, but there are nuances. To prevent misunder­standings with Google about quality, you could always use the <a href="https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf">General Guidelines</a> and this <a href="https://webmasters.googleblog.com/2019/08/core-updates.html">post about core updates</a>, which contains an explanation of E-A-T concepts in the style of questions-to-myself.</p>
<p>In short, <b>E</b>xpertise-<b>A</b>uthority-<b>T</b>rustworthiness means that writing well is not enough; the author should become a subject expert in advance. That is especially true for Your-Money-or-Your-Life websites, which can affect the visitors’ health and financial stability.</p>
<p> With the August 2018 Medic Update, the <strong>expertise</strong> of medical content creators became a necessary ranking factor for Google. Articles on health and nutrition not backed by the professional authority of the author or reviewer (a doctor, therapist, or scientist) are no longer considered reliable. In other niches, poor-quality content may still be helpful for users; some exceptions to the E-A-T rule are mentioned <a href="{{site.url}}/E-A-T-what-does-it-mean#fin">here</a>.</p>
<p>Anyway, the search engine doesn’t have the expertise to verify the accuracy of newly emerging information and thus needs confirmation from the outside. To avoid letting the user down, Google tries to check the authors’ background and confirm their experience.</p> 
<p>But even reputable authors must adhere to <strong>content accuracy</strong> because the search engine will still refer to the knowledge base. If a lot of things don’t add up and the author has no explanation, the article will be considered to be of poor quality. Studies disproving prevailing opinions are quite another matter. A lot will depend on the publisher’s reputation and the community's interest in discussing the issue.</p>
<p>Now that the section is over, it’s worth referring to factors that<span class="under"> are unlikely to be related to</span> the quality score. I believe the <i>optimal keyword density</i> and <i>percentage of unique text</i> make no sense except intuitively. Artificially increased uniqueness won’t turn plagiarism into an original. The necessary non-unique phrases won’t worsen the rating of helpful tips. If you read, understand, and don’t consider the text spam, its keyword density is just optimal.
</p>
</div>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><h2 id="4" itemprop="name">How can low-grade websites get into the Google Top 10?</h2>
<p>If the engines are so wise, why do substandard resources sometimes appear among Google search results? And what are the rules for competing with intruders for leading positions?</p>
<img loading="lazy" class="fl-left restrict vw40" src="/images/posts/low-quality-results-2.jpg" alt="The man gets desperate: why can there be low-quality sites in Top 10?" width="210" height="290">
<img loading="lazy" class="fl-right restrict vw40" src="/images/posts/low-quality-results-1.jpg" alt="Search results may be imperfect" width="170" height="290">
<p class="txt-left" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">The SERP for the particular query may be imperfect if the system <b>cannot associate</b> the new search term with an already known one or does not have <b>enough unbiased data</b> to analyze. Perhaps the topic is poorly represented on the Internet, or the industry as a whole has a desire to earn quick money and adheres to low standards.</span></p>
<p>Although individual sites may offer great content, there is no guarantee that they’ll take the leading positions.</p>
<p>Why? The ranking engine isn’t yet good at sensing what is well and what is ill on the topic. And so far, it operates according to some plan B that is vulnerable to manipulation.</p>
<p>Here is a recipe for cheating the search engines and ranking well for low-volume, specialized search terms.</p>
<ol><li><span>Create a neat and modest webpage.</span></li>
<li><span>According to the query, write human-readable headings.</span></li>
<li><span>Stuff the sections with excerpts from relevant publications. It’s good if they contain related keywords.</span></li>
<li><span>Let there be more text: automate the operation and fill several PC screens.</span></li>
</ol>
<p><b>In sum</b>, the text <span class="under"> is pro forma relevant to </span> the phrase, and the user scrolls, trying to figure out how the mess of familiar words can solve the problem.</p>
<p>A few years ago, you could safely make keyword-enriched text low-contrast or show it in small print at the bottom of the page. Since then, search algorithms have grown wiser and stopped ranking highly what people are unlikely to see.</p>
<p>One more good thing is that <strong>Google bots understand JavaScript</strong> and can anticipate the URL replacement. That’s why malicious redirects of users coming to the over-optimized page are now harder to implement but still possible. For example, they might pretend to be a voluntary user’s decision.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/open-app.jpg" alt="Do not click anything on suspicious sites, even if you got there from Google search results" title="No way!" width="521" height="73"></p>
<p class="txt-center"><small>If the site seems suspicious, it’s better not to click anything but the browser back button.</small></p>
<p>But in fact, even pushy doorways still exist and aren’t going to disappear while their ranking prospects are melting away. Below is a snippet for one such website: the page redirects right away, not even trying to look decent.</p>
<p class="txt-center">
<img loading="lazy" src="/images/posts/doorway-en.jpg" alt="Classical doorways are still alive" title="Snippet of a doorway" width="610" height="130"></p>
<p><b class="question"></b> Why do the tricksters bother with URL replacement; can’t they just prepare two versions of the page? The first could show bots some potentially well-ranking text; the second could meet organic visitors, say, at the casino table <b class="question"></b></p>
<p>Yes, they can. That method is called <em>cloaking</em>; it violates white-hat guidelines and entails <strong>manual actions from Google</strong>. The risk of getting caught and being excluded from the index is huge. No doubt, the content substitution will one day become known, at least due to the opportunity <a href="https://www.google.com/webmasters/tools/spamreportform">to complain to Google</a>. (But catching the cheater will be harder if cloaking is only used to stuff the content with keywords).</p>
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<blockquote class="txt-left">Update: <span itemprop="name">What should we expect from the new BERT algorithm?</span></blockquote> 
<p itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">With the <strong>BERT algorithm’s</strong> implementation on <strong>October 21st, 2019</strong>, Google has begun to better understand phrases. This major update relies on the technique of bidirectional language processing, which helps AI <span class="under"> dive deep into the context </span>of a query and <span class="under">the intent behind it.</span></span> When BERT is fully operational in all languages, we won’t need to arrange words, as we do when searching for <i>(thing) (feature) buy (city)</i>. Besides, we can be more confident that the engine understands the meaning of prepositions and other supplementary parts of speech. UPD: As of <strong>December 9th, 2019</strong>, BERT already speaks as many as 70 languages!</p>
</div>
<h3>Conclusions, quite optimistic</h3>
<p>Anyhow, the main thing is that every single wrong blue link on the SERP <b>harms the search engine’s reputation</b>. Thence, Google is quite sincerely committed to providing quality search results. Over time, algorithms will be smart enough to separate the wheat from the chaff.</p>
<p> Until then, they can use a little help. Why don’t you offer them a sample of quality content for research? One day, your post will be appreciated and appear among the search results for a long-tail query. The chance to hook the user on SERP will be higher if you provide the page with a <a href="{{site.url}}/how-to-earn-a-proper-snippet-on-SERP">rich snippet</a>.</p>
<p>And if the user notices you in the search results, lands on the page, and stays for a while, Google will sooner recognize that you are offering something worthwhile!</p></div>