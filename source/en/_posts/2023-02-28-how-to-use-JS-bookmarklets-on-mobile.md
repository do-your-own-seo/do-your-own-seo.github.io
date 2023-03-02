---
layout: post
i18n-link: bookmark
lang: en
locale: en

date: 2023-02-28T10:11:00Z
last_modified_at: 2023-02-28T10:11:00Z

title: "How to use bookmarklets on mobile (depending on the browser)"
tags: [JavaScript, bookmarklets, On-page, SEO]
description: "Is it true that you can use JavaScript bookmarks on PC only? – Nope! Bookmarklets work on smartphones too! You just have to know how to run them in the context of the current page"
keywords: "bookmarklets on mobile"
schema: FAQPage
code_amount: 1

h1: "How to run SEO bookmarklets on Android, iOS? It depends on your browser"
snippet_header: 'Will SEO bookmarklets work from "Favorites" in your mobile browser?'

snippet: "Isn’t it unfair that the bookmarklets from previous posts can only be used on PCs? But that’s not true! JavaScript bookmarks work on mobile too, yet it’s not that easy."

image: "use-JS-bookmarklets-on-mobile.jpg"
---

<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">How to add a script to Favorites on mobile</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">How to use bookmarklets</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Reasons why SEO bookmarklets may not work</a></li>
</ul>
<div><p>The idea to write a guide on how to use mobile bookmarklets came from a comment under the post  <a href="{{site.url}}/how-to-earn-a-proper-snippet-on-SERP#comments">about rich snippets</a>. It mentioned that bookmarklets don’t work on the Android device. Yes, that happens. The good news is that it isn’t the fault of the OS but of the browser, which is easy to change.</p>
 <p class="txt-center">
  <picture>
    <source srcset="/images/posts/wp/{{ page.image | split: '.' | first }}.webp" type="image/webp">
    <source srcset="/images/posts/{{ page.image }}" type="image/jpeg">
    <img src="/images/posts/{{ page.image }}" alt="Which mobile browsers are friendly to bookmarklets?" class="webfeedsFeaturedVisual" width="680" height="350">
  </picture>
 </p>
  <p>I have to say that I could not get JS-bookmarks to work in <strong>Safari for iPhone</strong> or <strong>Opera for Android</strong> (full version). And while the <strong>Safari browser</strong> at least informed me that running scripts in this way is prohibited, Opera simply did nothing, despite the fact that it had disabled ad blocking and allowed pop-ups. Meanwhile, other mobile browsers <span class="under">successfully execute JavaScript</span> in the context of the current page.</p>
  <p>Here we test <strong>Google Chrome</strong>, <strong>Microsoft Edge</strong>, <strong>Mozilla Firefox</strong>, <strong>Opera Mini</strong>, and <strong>DuckDuckGo</strong>. And you’ll never guess which one can do absolutely everything (hint: it’s not Chrome)!</p>
</div>
<div><h2 id="1">How to save a bookmarklet to Favorites in mobile browsers</h2>
  <p>It’s so easy on a PC; you just drag the link to the bookmarks bar. That’s why <span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><meta itemprop="name" content="How to add a bookmarklet to the mobile bookmarks?"><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">the easiest way to create a JS bookmark on your phone is to enable synchronization between mobile and desktop browsers in your account. If this is unacceptable to you, there are two ways.</span></span></span></p>
  <h3>Get the link address from the context menu</h3>
  <p>In <strong>Chromium-based</strong> browsers (Chrome, Opera, and the new Edge), you can click the bookmarklet in the text and select "Save address" from the menu that appears. But in Mozilla Firefox (<strong>Quantum</strong>) and other browsers, when you hold down a JavaScript link, the context menu does not appear. Check it with this bookmarklet: <a href="javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&amp;&amp;(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()" class="red">Title-description-keys-canonical</a>.</p>
  <h3>Copy the script code from the source</h3>
  <p>Here is the code for that bookmarklet: select all and paste into the clipboard. <textarea rows="2" data-nosnippet>javascript:!function(){let a,b,e=document.title,f=document.all.description.content,g=document.all.keywords.content,h=document.getElementById('MetaBookmarklet'),d=document.getElementsByTagName('link'),i='';for(let c=0;c<d.length;c++)d[c].rel.match(/canonical/i)&amp;&amp;(i=d[c].href);h?h.remove():(a=document.createElement('div'),b=document.createElement('div'),a.id='MetaBookmarklet',a.style='position:fixed;z-index:999;left:0;right:0;text-align:center',b.style='display:inline-block;max-width:600px;margin:auto;padding:.8cm;background-color:#a6e8a6;text-align:left',b.innerHTML='<p><b>Title</b>%20('+e.length+'):%20'+e+'</p><p><b>Description</b>%20('+f.length+'):%20'+f+'</p><p><b>Keywords</b>%20('+g.length+'):%20'+g+'</p><p><b>canonical: </b> '+i+'</p>',a.appendChild(b),document.body.insertBefore(a,document.body.firstChild))}()</textarea></p>
  <p>Now you need to save the bookmark with the copied address. In <strong>Opera</strong>, you can create a new empty bookmark and easily save the script. In other browsers, you’ll have to save to Favorites any ordinary page and then replace the URL.</p>
  <blockquote>It’s important to give the bookmarklet a short, “strange” name (it will be clear why later).<br> You can save JavaScript to bookmarks WITHOUT pre-minification, as long as it is not too long.</blockquote>
  <p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-p.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-p.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-p.jpg" alt="New bookmark in Opera" width="285" height="435" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-q.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-q.jpg" type="image/jpeg">
         <img class="border" src="/images/posts/screenshot-q.jpg" alt="Edit a bookmark" width="295" height="435" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-r.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-r.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-r.jpg" alt="Non-minified code to bookmarks" width="285" height="435" loading="lazy">
    </picture>
   </p>
</div>
<div><h2 id="2">How to use JavaScript bookmarklets on a smartphone</h2>
<p>The catch is that you can run the script  <strong>from the favorites bar</strong> only in <strong>Opera Mini</strong> and <strong>DuckDuckGo</strong>. In mobile Chrome, Firefox, and other browsers, the bookmarklet won’t work because it won’t know from which page it was called.</p>
<p>To run a script in the current context, you need to call it <strong>from the address bar</strong> of the browser. Just start typing the bookmarklet’s name until your JavaScript bookmark appears in the tooltips. Clicking on this line will run the bookmarklet.</p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-z.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-z.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-z.jpg" alt="Find your bookmark's name among omnibox suggestions" width="290" height="443" loading="lazy">
    </picture>
        <picture>
        <source srcset="/images/posts/wp/screenshot-x.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-x.jpg" type="image/jpeg">
         <img class="border" src="/images/posts/screenshot-x.jpg" alt="The bookmarklet extracts information from the head of the html document" width="295" height="443" loading="lazy">
    </picture>
</p>
<p>The stranger the name is, the earlier it will appear among the omnibox tooltips.</p><p>To summarize, let’s compare the suitability of mobile browsers to work with JavaScript bookmarklets.</p>
<table class="txt-center"><caption><small>Some aspects of working with JS bookmarklets in different browsers</small></caption>
  <tr>
    <th class="vert">URL from the context menu</th>
    <th class="vert">New bookmark</th>
    <th class="vert">Run from the address bar</th> 
    <th class="vert">Run from the favorites bar</th>
    <th class="vert">Are pop-ups allowed?</th>
    <th class="vert"> </th>  
  </tr>
  <tbody>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Chrome</b></td>
    </tr>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Ms Edge</b></td>
    </tr>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="No" class="red">—</b></td><td><b>Opera</b></td>
    </tr>
    <tr>
        <td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Opera mini</b></td>
    </tr>
    <tr>
        <td><b aria-label="No" class="red">—</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b>Firefox</b></td>
    </tr>
    <tr>
        <td><b aria-label="No" class="red">—</b></td><td><b aria-label="No" class="red">—</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="Yes" class="green">&#10004;</b></td><td><b aria-label="No" class="red">—</b></td><td><b>DuckDuckGo</b></td>
    </tr>  
  </tbody>
</table>
<blockquote><span itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"><meta itemprop="name" content="Which mobile browser is better for bookmarklets?"><span itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><span itemprop="text">The table shows that the best browser to run bookmarklets on a smartphone is <strong>Opera Mini</strong>. Maybe because it’s the only one that doesn’t support the <b>Content Security Policy</b>. This mobile browser can be installed on <strong>Android or iOS</strong>.</span></span></span></blockquote></div>
<div>
<h2 id="3">SEO bookmarklets: what they are and when they don’t work</h2>
<p>I’d single out three types of bookmark scripts that are more often used in SEO.</p>
<p><b>1. Bookmarklets for sending pages to third-party services for testing</b> (such as PageSpeed Insights, etc.; more on the <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#2">website audit</a> here). They do not work if the browser <span class="under">doesn’t allow pop-up windows</span>. Most browsers allow you to change this in the settings, but in Opera Mini, popups are allowed by default. Below is an example of sending a page for validation.</p>
  <p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-o.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-o.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-o.jpg" width="285" height="573" alt="Running the bookmarklet from the Favorites in Opera mini" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-s.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-s.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-s.jpg" alt="Favorites list with bookmarklets" width="285" height="573" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-l.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-l.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-l.jpg" alt="The report was opened in a new tab" width="285" height="573" loading="lazy">
    </picture>   
</p>
<p><b>2. Bookmarklets for on-page SEO checking that replace the HTML of the current page</b> (to display <em>alt</em> instead of photos, highlight semantic tags, and so on; more scripts <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#4">for SEO checkup</a> here). They always work <span class="under">but interact with  page styles</span>. Therefore, the result may look different depending on the site being checked.</p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-x.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-x.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-x.jpg" alt="Extraction of the tags from the head of the HTML document" width="295" height="443" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-y.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-y.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-y.jpg" alt="Bookmarklet highlights semantic html tags" width="288" height="443" loading="lazy">
    </picture>
</p>
<p><b>3. Bookmarklets working in the context of Google SERP</b> (more about <a href="{{site.url}}/tehnicheskij-seo-audit-sajta#1">what they can do</a> here). Sooner or later, there will be difficulties with them because the <span class="under">script relies on the HTML of the search page</span> (classes, ids, attributes), which changes quite often. Besides, the HTML markup for mobile and desktop Google SERPs is different.</p>
<p>Ideally, you need to have a mobile version of such bookmarklets, or use the simplest ones, as below: all links from the “Video” tab are displayed in a new window. The script is easy to modify; you can, for example, get a list of links with text anchors longer than 30 characters.</p>
<p class="txt-center">
    <picture>
        <source srcset="/images/posts/wp/screenshot-n.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-n.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-n.jpg" alt="Bookmarklet works on the SERP page" width="295" height="562" loading="lazy">
    </picture>
    <picture>
        <source srcset="/images/posts/wp/screenshot-m.webp" type="image/webp">
        <source srcset="/images/posts/screenshot-m.jpg" type="image/jpeg">
        <img class="border" src="/images/posts/screenshot-m.jpg" alt="All page links in a new window" width="290" height="562" loading="lazy">
    </picture>
</p>
<p>I hope the post inspired you to save a couple of scripts in your mobile bookmarks and take a look at your favorite sites with a sharp eye! If needed, <a href="https://github.com/do-your-own-seo/bookmarklets">this repository</a> contains SEO scripts from all blog articles. There are other similar repos on GitHub, so bookmarklets have a chance of taking root on your smartphone!</p>
</div>
