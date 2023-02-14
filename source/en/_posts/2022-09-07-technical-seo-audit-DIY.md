---
layout: post
i18n-link: tech
locale: en
lang: en

date: 2022-09-07T00:02:00Z
last_modified_at: 2022-09-07T00:02:00Z


title: "Technical SEO audit of your website from scratch. DIY for free!"
tags: [SEO-audit, Technical SEO, SEO]
description: "Do you have high-quality content and want to promote your site on Google? Then the first need is a technical SEO audit. Do It Yourself: it’s fast, reliable, and free! Some helpful tools and bookmarklets will be recommended."
keywords: "Technical SEO audit, Technical website audit"
code_amount: 2


h1: "SEO audit of your website by powerful entry-level tools"
snippet_header: "Website SEO audit for free? Roll up your sleeves: we’ll do it in one evening!"

snippet: "Contrary to popular belief, SEO is not only about link building and keywords analysis. The main task of the optimizer is the health check-up of the website as a whole."

image: "technical-website-audit-DIY.jpg"
---
<ul class="toc">
  <li><a href="#1">How does the site appear on Google?</a></li>
  <li><a href="#2">Core Web Vitals</a></li>
  <li><a href="#3">Crawlers: the best and free</a></li>
  <li><a href="#4">On-Page SEO check-up</a></li>
</ul>
<div>
<p>Contrary to popular belief, SEO is not only building links and working with copywriters. The first task for the optimizer is the <strong>website’s health checkup</strong> in the broadest sense. The initial SEO audit begins with verification if the following holds.</p>
<ol>
  <li><span>All useful pages are open to search bots, while auxiliary ones are closed.</span></li>
  <li><span>Bots get everything they need to render the page (HTML, CSS, JS) fast enough.</span></li>
  <li><span>The website is mobile-friendly and accessible (adapted for screen readers).</span></li>
  <li><span>It’s clear from the site architecture which pages are principal and how other ones are related to them.</span></li>
  <li><span>Each page has correctly filled meta tags and a canonical link.</span></li>
</ol>
<p class="txt-center"><img src="/images/posts/{{ page.image }}" alt="Technical SEO audit" class="webfeedsFeaturedVisual" width="750" height="370"></p>
<ol start="6">
  <li><span>There are no links to non-existent pages in the content and navigation (so-called broken links or 404 errors).</span></li>
  <li><span>The URLs are user-friendly: every adult can read and perhaps even remember them.</span></li>
  <li><span>The pages don’t have a lot of overlapping content, or each group of “twins” refers to a shared canonical page.</span></li>
  <li><span>None of the elements you can interact with doesn’t generate duplicate pages with different URLs.</span></li>
  <li><span>The Search Robots know the purpose of each button on the site and can read what the illustrations show.</span></li>
</ol>
<p>Of course, this is only a frame of the audit. If the website was created with the Web Search in mind, all those checkmarks should be fulfilled by default. However, not all developers, let alone online site constructors, think about it. Therefore, we can’t do without a technical SEO checkup.</p>
<blockquote>Decided to skip the audit because you have too much work to do? Then test the site with the <a href="https://www.siteliner.com/">Siteliner</a>: it’s free, and you’ll do it with a mouse click. At least you’ll be sure there are no broken links on your site. Come back when you have free time, we’ll do everything as it should!</blockquote>
<p>In fact, all the dirty work does special software – the Web crawler. The mission of SEO-human is to analyze the result, systematize errors, and advise programmers on how to fix them. More about web crawlers see below, but here I’m saying that, for small websites, a simple Google SERP analysis may be even more beneficial.</p>
</div>
<div>
<h2 id="1">Site-wide search and SERP analysis</h2>
<p>If you have a small website and a similar budget to maintain it, you can easily handle the audit by yourself. Type <b>site:your-website</b> into the Google search bar and take a close look at the results.</p>
<p class="txt-center"><img src="/images/posts/site-search.jpg" alt="Google Search on site:wikipedia.org" width="745" height="455" loading="lazy"></p>
<ul>
  <li>Are all your significant pages on Google <abbr title="Search Engine Results Page">SERP</abbr>?</li>
  <li>Do any snippets have identical titles or descriptions? The <em>title</em> and <em>description</em> must be declared at the head of the HTML document and must be unique.</li>
  <li>Haven’t some sensitive data (customer database, order list, etc.) happened to be among the results? If so, it’s necessary to submit a request to remove the URL, block access and prohibit indexing.</li>
</ul>
<blockquote>The rows above the blue headers do not show real web addresses: they are generated from the breadcrumbs (more <a href="{{site.url}}/how-to-earn-a-proper-snippet-on-SERP#2">about navigation chains here</a>). To see the full URL hover the mouse over the correspondent blue link on SERP.</blockquote>
<p>Look carefully at those navigation lines of snippets (highlighted in green in the picture).</p>
<ul>
  <li>Perhaps there are URLs <b>with www</b> and <b>without www</b>? You can’t leave it like this!! The whole site should follow the same principle: either all URLs start with www or none.</li>
  <li>Same with <strong>https: and &#160;http:</strong>. If both protocols are present, the site has not entirely “moved” to HTTPS, and you need to keep an eye on the progress.</li>
  <li>Are there parameters in URLs? I mean, don’t you see the question mark “?” followed by one or more equal signs? It might look like «?v=19243242.twr&amp;rt=AA&amp;s=price»? Even if you see them, it’s not harmful yet, but just not nice.</li>
</ul>
<p>But if you find two different web addresses built according to the templates</p>
<p align="center"><b>your-website/.../?x=cat&#8201;&amp;&#8201;y=dog</b>&#160;&#160; і &#160;&#160;<b>your-website/.../?y=dog&#8201;&amp;&#8201;x=cat</b>&#160;,</p>
<p>open both. Are they identical? – This is a classic example of duplicate content and a reason to contact the developer. They will have to reconfigure the URL construction rules and stick together indexed duplicate pages with a 301 redirect.</p>
<p>Keep <b><a class="red" href='javascript: (function() {
    var t, e, n, o, r, i, a, l, p = 100, s = document.createDocumentFragment(), c = document.createElement("style"), d = document.createElement("div"); document.title = "inurl: Google Search", c.innerHTML = "#form{width:360px;margin:60px auto;padding:10px;border:4px double #ccc;background:#fff;font-size:16px;border-radius:5px}fieldset{border:none}h2{text-align:center;margin:10px 0 25px}button{float:left;width:calc(50% - 20px);margin:0 10px 3px;padding:10px;border:none;border-radius:5px;cursor:pointer;opacity:.9;font-size:1em;background-color:#61bd65;color:#fff}button:hover{opacity:1}button[type=reset]{background-color:#cbcbcb}input[type=text]{margin:0 10px;border:none;border-bottom:3px solid #f1f1f1}input[type=text]:focus{background-color:#f1f1f1;outline:0}.switch{position:relative;display:inline-block;width:60px;height:30px;margin:15px 10px 10px 7px}label{display:block;margin:10px}label b{display:inline-block;width:70px;margin:0 10px}.switch input{height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;border-radius:6px;transition:.4s}.slider:before{position:absolute;content:\"\";height:20px;width:20px;left:10px;bottom:5px;background-color:#fff;transition:.4s;border-radius:50%}input:checked+.slider{background-color:#81a1bf}input:checked+.slider:before{transform:translateX(22px)}", d.innerHTML = "<form id=\"form\" action=\"#\"><fieldset> <h2>Search \"inurl:\" on Google</h2> <label><b>Domain</b><input id=\"d\" placeholder=\"example.com\" type=\"text\"></label><label><b>String&nbsp;*</b><input id=\"q\" name=\"q\" placeholder=\"test&nbsp; sort&nbsp; search&nbsp;&nbsp; etc.\" type=\"text\" required></label> <label><span class=\"switch\"> <input id=\"f\" type=\"checkbox\" checked> <span class=\"slider\"></span></span>Including omitted results</label> <button type=\"submit\"><b>Search</b></button><button type=\"reset\"><b>Reset</b></button> </fieldset></form>", s.appendChild(c), s.appendChild(d), document.body.textContent = "", document.body.appendChild(s), document.forms[0].querySelector("button[type=\"submit\"]").addEventListener("click", function(c) {
        c.preventDefault(), i = 0, e = l = "", t = document.getElementById("d").value || "", (e = document.getElementById("q").value) ? (n = 1 - document.getElementById("f").checked, r = "https://www.google.com/search?q=site:" + t + "+inurl:" + encodeURIComponent(e) + "&filter=" + n + "&pws=0", (o = window.open(r)).onload = function() {
            var e = o.document, t = e.getElementById("rso"), n = e.createElement("div");
            t && (n.innerHTML = "<i style=\"display:block;margin:0 0 20px 0\"><b>Please wait...</b></i>", t.insertBefore(n, t.firstChild), function c(e) { return fetch(e).then(function(e) { if (e.ok) return e.text(); throw new Error("Response status:" + e.status + ", " + e.statusText) }).then(function(e) { var t = (new DOMParser).parseFromString(e, "text/html"), n = t.querySelectorAll(".g"), r = t.getElementById("pnnext");
                    if (n.length) return n.forEach(function(e) { a = e.querySelector("a:first-of-type"), l += a.href + "\n", i++
                    }), r ? c(r.href) : 1 }).catch(function(e) { o.alert(":(( " + e + ". Repeat later or try after captcha verification")})}(r + "&num=" + p.toString()).then(function() { n.innerHTML = "<span id=\"total\" style=\"float:left;margin-left:-50px\">" + i.toString() + " =</span><textarea style=\"width:100%;height:120px;margin-bottom:20px\">" + l + "</textarea>" })) }) : alert("! Query string is required !") })})();
'>inURL search</a></b> bookmarklet: I use it to get a list of URLs with query parameters («?search=») or mistakenly indexed pages («/admin») on Google. Drag the script to the bookmarks bar and run it from any page of the <span class="under">domain google.com</span>. This form will pop up.</p>
<p class="txt-center"><img src="/images/posts/inurl.jpg" alt="bookmarklet UI for inurl: search" width="390" height="280" loading="lazy"></p>
<p>Specify the query string of several: the script will walk through the search results and write the URLs into the &lt;textarea&gt;, where you’ll copy them easily. Here is an example of a website that hasn’t prevented sorting from indexing.</p>
<p class="txt-center"><img src="/images/posts/sorting-pages-in-google-index.jpg" alt="Indexed sorting pages" width="830" height="480" loading="lazy"></p>
<p>If you are the owner of the resource that you are exploring on SERP, Google will invite you to try the <a href="https://search.google.com/search-console/">Search Console</a>. And that’s right: you need to look into the Console to understand how the Search Engine indexes pages, whether it sees the Schema.org markup on them, and so on. The Search Console will inform the webmaster about the problems found on the site by email, but unfortunately, with a long delay.</p>
</div>
<div>
<h2 id="2">Core Web Vitals. Website performance checkup</h2>
<p>Relevant and high-quality content is always #1. However, if the website is slow, it won’t be easy to get high positions on Google SERP. As back in 2021, Google <a href="https://developers.google.com/search/blog/2020/11/timing-for-page-experience">stated that Core Web Vitals</a> (load speed, interactivity, layout stability) had become ranking factors. For now, they are far from being the main factors, but this is only for now.</p>
<p>Thus the first step is to check the performance of the site’s <span class="under">homepage and all typical pages</span>, such as categories, products, etc. There is a service, <a href="https://pagespeed.web.dev/">Pagespeed Insights</a>: it identifies performance bottlenecks and suggests ways to get rid of them.</p> 
<p>For perfectionists, I recommend a multi-purpose alternative to this tool, <a href="https://web.dev/measure/">Web.dev Measure</a>: in addition to performance, it’ll verify the page’s accessibility for screen readers, check the source code quality, and validate the main aspects of page-level SEO. <b class="red">Update!</b> Google has decided to shut down this service, completely transferring the functionality to Pagespeed Insights (see the link above).</p> 
<p>For example, here are the scores of the PACE website.</p>
<p class="txt-center"><img src="/images/posts/web-dev-pace-website.jpg" alt="web.dev measures for the PACE website" width="740" height="540" loading="lazy"></p>
<p>It’s a little rough, but although it’s not visible in the screenshot, the criticism is highly constructive. In the report, every estimate is broken down into components, and for them, recommendations for improvement are given.</p>
<p>The next step is to make sure the site is optimized for mobile. Here is a service from Google: <a href="https://search.google.com/test/mobile-friendly">Mobile-friendly Test</a> will show the page as seen by Googlebot for smartphones. After checking the PACE website, we see that mobile bots have absolutely nothing to do here.</p>
<p class="txt-center"><img src="/images/posts/mobile-pace-website.jpg" alt="Mobile friendliness test for the PACE website" width="375" height="530" loading="lazy"></p>
<p>Another service, the <a href="https://yellowlab.tools/">Yellowlab Tools</a>, can come in handy. It relies on the headless browser and evaluates fundamental performance parameters. It also verifies the implementation of best coding practices and provides you with a structured list of recommendations. For testing your page, you can select one from the Desktop, HD, Smartphone, or Tablet modes.</p>
<blockquote>Bookmarklets for submitting pages for testing: <b><a class="red" href="javascript:(function()%7b window.open('https://pagespeed.web.dev/report?url='+encodeURIComponent(location.href))%7d)();
">Pagespeed</a></b> * <b><a class="red" href="javascript:(function(){var win=window.open('https://search.google.com/test/mobile-friendly?url='+encodeURIComponent(window.location.href)+'&run=1','_blank');win.focus();})()
">Mobile</a></b> * <b><a class="red" href="javascript:(function(){var win=window.open('https://yellowlab.tools?url='+encodeURIComponent(window.location.href)+'&run=1','_blank');win.focus();})()
">Yellowlab</a></b>. Bookmark the link and run the script from the page you want to check.</blockquote>
<p>If your site ratings turn out to be unoptimistic, you will have to contact the developer with a complaint or look among your friends for a front-end expert.</p>
<blockquote>It’s also worth measuring the server response delay, load pages in parallel to compare, etc. – it’s all here <a href="https://www.webpagetest.org/">on Webpagetest</a>. Don’t want to dive too deep? Then turn to <a href="https://tools.pingdom.com/">Pingdom</a>: it outputs straightforward answers.
</blockquote>
<p>Anyway, failed tests do not mean the end of everything. Websites can still rank high due to inbound links and content quality. But shortly, it will be more difficult, so it’s better to correct the wrongs as soon as possible!</p>
</div>
<div>
<h2 id="3">The best free and powerful web crawlers</h2>
<p>There will be mentioned not just totally free crawlers but also free-trial soft that you can use to a limited extent without any charge. With the help of these programs, you’ll conduct an audit of your website like SEO pro. The difficulty may be in how to interpret the report and how to fix errors without harming anything.</p>
<p>Before you open any program, please review the terminology. The most necessary minimum:</p>
<ul>
  <li><em>rel="canonical"</em> is the attribute of a &lt;link&gt;. Such a link refers to the principal page among a bunch of similar ones.</li>
  <li><em>redirect</em> is a technique that allows forwarding the original page request to another URL. It may be temporary (302) or permanent (301).</li>
  <li><em>robots.txt</em> is a plain text file in which we can prohibit one or more Search robots from indexing pages, files, or directories on the website.</li>
  <li><em>noindex</em> is a page-level directive that forbids indexing of the current page.</li>
</ul>
<p>Now it’s time to choose a crawler: if something remains incomprehensible in the program UI, you can always ask Google. Please note that there exist cloud-based and desktop web crawlers.</p>
<h3>Cloud-based crawlers</h3>
<p>They’re indispensable for large websites with hundreds of thousands of pages. Of course, no one will provide free crawling on such a scale.</p>
<p class="txt-center"><img src="/images/posts/cloud-based-crawlers.jpg" alt="Best free-trial cloud-based crawlers" width="740" height="60" loading="lazy"></p>
<p>However, <a href="https://teracrawler.io/">Teracrawler</a> lets you examine up to 10,000 URLs for free, and <a href="https://www.oncrawl.com/">Oncrawl</a>  will offer 14-day trial access to the platform. I would also emphasize the Ukrainian cloud-based crawler <a href="https://sitechecker.pro">Sitechecker</a>. It is easy to set up and positions itself as the best choice for online commerce, but the trial period is only 7 days.</p>
<h3>Desktop crawlers (or spiders)</h3>
<p>It’s the most suitable option. But the crawl speed will be limited by the computing performance of your PC. For brevity, I’ll name only three SEO software providers worth your attention.</p>
<p class="txt-center"><img src="/images/posts/desktop-crawlers.jpg" alt="Best free-trial desktop crawlers" width="740" height="65" loading="lazy"></p>
<ul>
  <li><a href="https://sitebulb.com/">Sitebulb auditor</a>: it probably has no equal in classifying errors, explaining possible reasons for them and potential harm from them. He will reveal the hidden flaws of the site, draw a graph map, and sort through everything else. The owners offer a two-week trial.</li>
</ul>
<p>The disadvantage for a beginner is that Sitebulb’s report will provide you with an ocean of information in which you can drown without practicing first. If you don’t like to go deep into details, it might be better to start with another program.</p>
<ul>
  <li><a href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a> and <a href="https://netpeaksoftware.com/spider">Netpeak</a> spiders have much in common. The first is older and more widespread; the second has been created to replace the leader: perhaps, it’s better adapted for some local tasks. For basic audit, the differences between the programs are insignificant.</li>
</ul>
<p>Both tools require decent payment. But Netpeak offers a 14-day trial, while Screaming Frog gives the long-lived free version that tests no more than 500 URLs from the same domain.</p>
<p>I think these services will 99.9% solve the problem of homemade SEO inspection for a website of any size.</p>
</div>
<div>
<h2 id="4">On-page SEO: test the page on the fly with bookmarklets</h2>
<p>Let’s imagine that the crawling reports have already been obtained, and we want to check problematic pages manually. Fans of easy solutions will ask Google if it knows “how to check on-page SEO online”.</p>
<p>However, if the previous steps have already been completed, I do not recommend looking for additional tools. There is nothing significant to add to the spider reports and advice from the web.dev service. But on-page validators will probably find “multiple flaws” and recommend you shorten the description, add five words to the first paragraph, and so on. But that’s just a field of subjectivity, and we are talking about technical SEO.</p>
<p><b>1.</b> Rational requirements for title, description, and keywords are discussed in the <a href="{{site.url}}/how-to-earn-a-proper-snippet-on-SERP#2">post on SERP snippets</a>. Here I share the bookmarklet that shows <b><a href="javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&&(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()" class="red">Title+meta-tags+canonical</a></b> of the current page. It will be usable when you drag it to the browser bookmarks bar.</p>
<blockquote>If the <em>canonical link</em> href doesn’t match the current URL, then the current page recommends the Search Engine to <span class="under">rank another one </span> instead. It must be a conscious choice! Canonicalization will only work for pages with similar content and a common purpose.</blockquote>
<p><b>2.</b> The next step is to check up page links, including the outbound ones. Here is the bookmarklet <b><a class="red" href="javascript: (function() {
    let num = 0, newWin = window.open().document, lnk = document.links, href, text, aria, title, isAccessible, isValid, error1 = '<b>????????href is not a valid URL</b>????????', error2 = '<b>????????inaccessible link????????</b>';
    function htmlEscape(s) { s = s.replace(/&/g, '&').replace(/>/g, '>').replace(/</g, '<'); return s; }
    function isURL(s) { try { return Boolean(new URL(s)); } catch (e) { return false; } }
    newWin.writeln('Links on <a href=\'' + location.href + '\'>' + location.href + '</a><br><hr>');
    for (let i = 0; i < lnk.length; ++i) {isAccessible = 1; isValid = 1; href = lnk[i].href; text = lnk[i].innerText; aria = lnk[i].getAttribute('aria-label'); title = lnk[i].getAttribute('title'); newWin.writeln(++num + '. <a href=\'');
        if (!href.startsWith('javascript:')) { newWin.writeln(htmlEscape(href) + '\'>');} else { newWin.writeln('javascript:\'>'); }
        if (!isURL(href)) {isValid = 0} if (lnk[i].innerHTML) {if (text.length > 1) { newWin.writeln(text.substring(0, 100));} else if (aria) { newWin.writeln(aria); } else if (title) { newWin.writeln(title);} else {isAccessible = 0;}} else { isAccessible = 0;}
        if (!isValid) {newWin.writeln(error1);} if (!isAccessible) { if (!isValid) { newWin.writeln('<br>');} newWin.writeln(error2);} newWin.writeln('</a><br>');} newWin.writeln('<hr></body></html>'); newWin.close(); })();">All-page-links</a></b>: it’ll open a new window with the list of page links together with iconic buttons. For them, the text from the attributes <em>title</em> and <em>aria-label</em> will be used instead of the anchor.</p>
<blockquote>If there are nameless iconic buttons on the website, they must be accessible to those who can’t see or load that symbol. That means the button element must have an attribute with some description for screen readers.</blockquote>
<p><b>3.</b> Let’s look at the headings and other marked-out text on the page. If, for example, we only see &lt;h1&gt;,&lt;h3&gt; but not &lt;h2&gt;, this is a mess! Headings are for structuring: you can’t use, say, &lt;h3&gt;, only to make the font bigger or center the text. Besides, the text markup has its fine points.</p>
<blockquote>HTML tags <span class="under">&lt;strong&gt; and &lt;em&gt;</span> are semantic, while their twin brothers &lt;b&gt; and &lt;i&gt; are just decorative. The text highlighted by them looks the same: <b>bold-faced /b, strong/</b> or <i>italic-type /i, em/</i>, but it might make a difference for Search robots.</blockquote>
<p>So, the bookmarklet will come in handy: <b><a class="red" href="javascript:(function() {let style = document.getElementById('outstanding'), newStyle; if (style) {style.remove()} else {newStyle = document.createElement('style');newStyle.setAttribute('type', 'text/css'); newStyle.setAttribute('id', 'outstanding');newStyle.innerHTML = 'strong:before {content: \u0022<strn: \u0022 !important} b:before {content: \u0022<b>: \u0022 !important} em:before {content: \u0022<em>: \u0022 !important} strong {background-color: #99c93a !important; color: black !important} b {background-color: #90BDD0 !important; color: black !important} em {background-color: #efb6fb  !important; color: black !important;} h1:before {content: \u0022<h1> \u0022 !important} h2:before {content: \u0022<h2> \u0022 !important} h3:before {content: \u0022<h3> \u0022 !important} h4:before {content: \u0022<h4> \u0022 !important} h5:before {content: \u0022<h5> \u0022 !important} h6:before {content: \u0022<h6> \u0022 !important} h1 {padding: 2px !important; background-color: #fc2929 !important; border: solid !important; border-radius: 9px !important; color: black !important} h2 {padding: 2px !important; background-color: #FF7C1C !important; border: solid !important; border-radius: 7px !important; color: black !important} h3,h4 {background-color: #ffb300 !important; border: solid !important; padding: 2px !important; border-radius: 5px !important ; color: black !important}';document.body.appendChild(newStyle);}})()">H1-h6, strong, b, em</a></b>. It will paint the subheadings and other semantic tags, as well as ordinary bold-faced text on the page. Look closely: maybe somewhere &lt;b&gt; should it be replaced with &lt;strong&gt; or vice versa?</p>
<p><b>4.</b> It is necessary to check whether all illustrations have alt-attributes filled in. There is the script bookmark: <b><a class="red" href="javascript:(function() {function toArray(c) {let a = new Array;for (let k = 0; k < c.length; ++k) a[k] = c[k]; return a; }
    let images = toArray(document.images); for (let i = 0; i < images.length; ++i) { let img = images[i], div = document.createElement('div'); if (!img.alt) { img.alt='There is no alt text'; div.style.backgroundColor='red';} else {div.style.backgroundColor='orange';} div.appendChild(document.createTextNode(img.alt)); img.parentNode.replaceChild(div, img);}})();">Alt text for images</a></b>. It will replace pictures with descriptions or warn that no alt text is specified.
</p>
<blockquote>Search engines can recognize images, but not always perfectly. And the user may not be able to load the photo: how then they guess what is shown there? For this, the image must have an alt text, for example, alt=“Image of a person reading an article on technical SEO”.</blockquote>
<p>There are many more nuances, but... I think the plan for our self-made audit has been executed. If you feel something is missing, write it in the comments: we will complete the list together.</p>
</div>