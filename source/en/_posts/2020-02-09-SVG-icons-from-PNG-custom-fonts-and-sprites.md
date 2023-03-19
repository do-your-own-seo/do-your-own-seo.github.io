---
layout: post
i18n-link: manga
lang: en
locale: en

date: 2020-02-09T18:02:00Z
last_modified_at: 2022-08-20T20:00:00Z


title: "How to convert PNG to tiny SVG and create your custom icon font"
tags: [Images, SVG, Content, JavaScript, SEO]
description: "Content is King, but design is the entourage! We’ll create SVG icons from PNG &#10004; Generate a custom webfont and SVG sprite &#10004; Use icons & play with CSS &#10004; Articles with custom icons convince, and the UI encourages actions!"
keywords: "custom svg font from png"
schema: HowTo
styles: /assets/post-on-icons/manga.css
code_amount: 2

h1: "How to turn PNG cartoons to tiny SVGs & create a custom icon set"
snippet_header: "Need some flavoring to spice up your text content? The&#160;custom icon font will work"

snippet: "How to convert colorful PNG to a lightweight SVG without any experience with vector graphics. How to create a web font or sprite from SVG icons, style them, and use to sharpen focus on your text content."

image: "how-to-create-manga-icon-font.jpg"
---
<ul class="toc">
  <li><a href="{{ site.url }}{{ page.url }}#1">PNG image to SVG icon in 9 steps</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2">Web font from SVG: pros and cons</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#2.1">&bullet;&ensp;Fontello vs IcoMoon for creating a webfont</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3">How to use custom icons and SVG sprites in HTML</a></li>
  <li><a href="{{ site.url }}{{ page.url }}#3.1">&bullet;&ensp;CSS styles for SVG sprites and webfonts &nbsp;<span class="red">&#42;interactive</span></a></li>
</ul>
<div>
<p>You may say, am I need one more iconic font if there are enough already? Surely, yes. Using custom icons, you can equip your site with stylish buttons or revive the grave importance content. Another example: the mascot icons can accompany the user on his way to the landing page.</p> 
<p>With the help of themed icons, it’s easy to emphasize the key paragraphs of the article. And if you decide to create an ornamental alphabet, you can use it for <b>drop caps</b> that open every new text section, like below:</p>
<p class="txt-center"><img src="/images/posts/celtic-and-slavic-initial-letters.jpg" alt="Celtic and Slavonic initials" loading="lazy" width="510" height="270"><br>
<small>Celtic (on the left) and ancient Slavic initials</small></p>
<p>In today’s post, we’ll create a collection of black-and-white SVG symbols, generate the Web font and learn how to style icons with CSS. Those who need colorful vector icons may still find the guide helpful since the mentioned tools apply to color PNGs and SVGs too.</p>
<blockquote>The effort of creating a font will be rewarded because the likelihood that the user will <strong>stay on the page</strong> longer and <strong>click</strong> the unique icon will increase. That implies that your site’s <strong>web session metrics</strong> will improve and your rankings will, most likely, too (<a href="{{site.url}}/how-do-google-algorithms-work">more on ranking factors here</a>).</blockquote>
</div>
<div>
<h2 id="1" itemprop="name">How to make an SVG icon from PNG</h2>
<meta itemprop="image" content="{{site.url}}/assets/post-on-icons/result-thumbnail.svg" >
<p itemprop="description"><b>The task</b> is to convert the PNG to a lightweight, single-color, but eye-catching SVG icon. Fortunately, experience with vector graphics isn’t required to complete it. In general, the logic is simple. The more contrasting the neighboring colors are and smoother the contours of PNG we can make, the better SVG we’ll get.</p>
<p>But we won’t take the easy road: we’ll make icons with manga characters!</p>
<blockquote>Probably everybody knows that <b>manga means</b> the cartoon story: like comics, but not necessarily funny. It may be sad, heartwarming, cruel, and whatsoever. Manga was born in Japan, but today people draw these cartoons across the globe. People write novels based on popular episodes and even produce full-length series of anime.</blockquote>
<p>For our purpose, we’ll use only<span class="under"> free online tools</span> (details will appear as we go on):</p>
<ul>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">PNG editor</span></span> supporting the transparent background;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">PNG to SVG converter</span></span>;</li>
	<li><span itemprop="tool" itemtype="http://schema.org/HowToTool" itemscope><span itemprop="name">SVG optimizer</span></span> to reduce the file size.</li>
</ul>
<p>Let’s "iconize" two pictures at once:</p>
<p class="txt-center"><img loading="lazy" src="/images/posts/before_1.png" alt="The source PNG no.1" width="400" height="400"> &thinsp; <img loading="lazy" src="/images/posts/before_2.png" alt="The source PNG no.2" width="400" height="400"></p>
<p>These and other sources for icons were downloaded from the websites offering free PNG: <b>hiclipart.com</b>, <b>imgbin.com</b>, <b>pngocean.com</b>, <b>pngguru.&#173;com</b>. But there are plenty of other resources on the Internet.</p>
<p>Already have a <span itemprop="supply" itemtype="http://schema.org/HowToSupply" itemscope><span itemprop="name">proper PNG</span></span>? Let’s start with the following steps. You can go immediately to <a href="{{ site.url }}{{ page.url }}#p_5">step 5</a>, but it would be nice to work a little on the drawing.</p>
<ol class="emphasis">
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Open your PNG in the online (<a href="https://pixlr.com/editor/">pixlr.com</a>, <a href="https://www7.lunapic.com/editor/">lunapic.&#173;com</a>, etc.) or desktop editor.</span>
    <ol type="A">  
      <li><span>Crop the picture in a 1:1 ratio.</span></li>
      <li><span>Increase the contrast rate.</span></li>
      <li><span>Get rid of unessential details.</span></li>
    </ol>
    <meta itemprop="name" content="Cropping and preparation of the chosen PNG" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Select the light areas that should be white on the result SVG, and clear them. They should be empty (you may have to renew a border somewhere). This trick will give the lines in SVG more sharpness.</span>
    <meta itemprop="name" content="Light areas handling" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Look at the dark-colored areas: if there are lighter pieces inside, the converter may conclude that they are &ldquo;white&rdquo;. It’s better to make them darker by hand, and the accuracy is not very important. The main thing is not to go beyond the contours. Save the resulting PNG; it will look like these:</span>
    <ul class="nobullets oneline txt-center"><li><img loading="lazy" src="/images/posts/after-the-3rd-step_1.jpg" alt="Png no.1 after step 3" width="400" height="400"> &thinsp; </li><li><img loading="lazy" src="/images/posts/after-the-3rd-step_2.jpg" alt="Png no.2 after step 3" width="400" height="400"></li></ul>
    <meta itemprop="name" content="Dark-colored areas examination" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Resize the image to 200x200px: within our scheme, that provides a reasonable balance between detail and the SVG file size. Increase the contrast again and save the file <span class="u">as 200x200</span>.png.</span>
    <meta itemprop="name" content="Resizing PNG befor the conversion" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text" id="p_5">
Go to the website of PNG&#10132;SVG converter. I recommend the free tool <a href="https://www.pngtosvg.com">pngtosvg.com</a>: it doesn’t require any settings and produces SVGs with clean markup. But you can choose another converter if you have preferences.</span>
    <meta itemprop="name" content="Picking a PNG-to-SVG converter" >
    <meta itemprop="url" content="{{site.url}}{{page.url}}#p_5" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">On pngtosvg.com, reduce the palette to 1 color (there are 5 by default), upload your file, and generate the SVG.</span>
    <meta itemprop="name" content="Converter adjustment" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">If the quality is not satisfactory yet, edit 200x200.png or make 300x300.png from the large PNG, and redo step 6. The new SVG will be more precise but weighty.</span>
    <meta itemprop="name" content="What if the quality is poor" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">It remains to thank the converter (they accept donations) and save the output SVG. But it’s too early to relax: the file size can be significantly reduced!</span>
    <meta itemprop="name" content="Final conversion of the enhanced PNG" >
  </li>
  <li itemprop="step" itemscope itemtype="http://schema.org/HowToStep"><span itemprop="text">Switch to the <a href="https://jakearchibald.github.io/svgomg/" rel="noopener" target="_blank">SVGOMG optimizer</a>. Upload your file, set <em>Precision=0</em> in settings, and uncheck the <em>Remove&thinsp;viewBox</em>. That’s all! The result appears automatically: ready for use black-and-white icon has just been created!</span>
    <ul class="nobullets oneline txt-center">
      <li><svg width="210" height="210" role="img" aria-label="The result after the final step: the cat icon"><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat2"/></svg> &emsp; </li> 
      <li><svg width="210" height="210" role="img" aria-label="SVG weighing less than 3 kb: boy’s face"><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero1"/></svg></li>
    </ul>
    <meta itemprop="name" content="Optimization of the outcome SVG" >
  </li>
</ol>
<p>Here’s what we got: <span class="under">2.05&#8239;KB and 2.75&#8239;KB</span> files (and they’ll be even lighter if you enable GZIP compression for SVG). Before optimization, we had 7.6&#8239;KB and 10.3&#8239;KB, respectively. That is, both <span class="under">files lost more than 70% of</span> their weight!</p>
<p>But what would happen if we converted the PNG cat to SVG without preparation? The file would have gained an extra 20KB and would be <a href="/assets/post-on-icons/improper_1.svg" rel="nofollow">completely unusable</a> as icon. The manga-boy PNG is more contrasty, so the raw SVG from it would <a href="/assets/post-on-icons/improper_2.svg" rel="nofollow">come out sharp</a> but still overloaded with details.</p>
</div>
<div><h2 id="2">Webfont from SVG icons: the scheme of creation and known pitfalls</h2>
<p>We already have 11 manga icons: here are these <a href="https://github.com/do-your-own-seo/icons">SVGs</a>. Why not make an amateur web font from them? (To the point, everyone can post links to other custom SVG collections in the comments.)</p>
<blockquote>Webfont isn’t the only way to use icons: a single SVG can be loaded from an external file or embedded into HTML. It’s also a common practice to use <a href="{{ site.url }}{{ page.url }}#3">SVG sprites</a>. There are many ways to use custom icons, but each has some limitations.</blockquote>
<p>What can we say in favor of Web fonts?</p>
<ul class="featured plus">
  <li>They do not clog the markup: in order for the icon to appear inside the &lt;span&gt;, just add the class to the tag.</li>
  <li>It’s easy to add self-made SVGs to the well-known icon set, such as Font Awesome, and generate an extended font.</li>
  <li>We can apply to icons the same CSS effects as to surrounding text (color, text-shadow, etc.).</li>
</ul>
<p>What is against them?</p>
<ul class="featured minus">
<li>Webfont loading can slow down site performance and delay the text output.</li>
<li>Iconic fonts are not working in the Opera Mini browser (usage is about 2%).</li>
</ul>
<p>However, in our case, the main drawback is not so frightful. The custom webfont can be hosted on the same server as the entire site, and the client browser won’t establish the connection to the CDN. Besides, at least 80% of browsers support the <a href="https://caniuse.com/#search=preload">preload</a> hint, enabling the preloading of cacheable resources like webfonts.</p>
<p>So, if a webfont is your choice for organizing the set of icons, let’s continue. Otherwise, <a href="{{ site.url }}{{ page.url }}#3">let’s jump</a> through the section.</p>
<h3 id="2.1">Webfont generators in use: IcoMoon vs Fontello</h3>
<p>Here are two powerful and user-friendly font generation applications: <b><a href="https://icomoon.io/app/">IcoMoon App</a></b> and <b><a href="https://fontello.com">Fontello</a></b>.</p>
<table class="txt-center"><caption><small><em>The comparison of Web font generators Fontello and IcoMoon App</em></small></caption>
   <tr><th><img src="/assets/post-on-icons/icomoon-logo.jpg" alt="IcoMoon App logo" loading="lazy" width="133" height="48"></th><th><img src="/assets/post-on-icons/fontello-logo.jpg" alt="Fontello logo" loading="lazy" width="81" height="48"></th></tr>
  <tbody>
    <tr><td>Free and Premium versions</td><td>Free and open source</td></tr>
    <tr><td colspan="2">No registration required for downloading the font</td></tr>
    <tr><td colspan="2">You can combine free icons and your own SVGs in one webfont</td></tr>
    <tr><td>Basic editing capability</td><td>------</td></tr>
    <tr><td>------</td><td>Doesn’t see some SVGs until you reverse the path <b>:(</b></td></tr>
    <tr><td>------</td><td>API for developers</td></tr>
    <tr><td>You can download icons in PNG and other formats</td><td>------</td></tr>
    <tr><td>WOFF2 is available for premium users only</td><td>Default WOFF2 support</td></tr>
  </tbody>
</table>
<p>And here are links to the original documentation: <a href="https://icomoon.io/#docs/importing">IcoMoon docs</a> and <a href="https://github.com/fontello/fontello/wiki/How-to-create-my-own-font">Fontello wiki</a>. I’m just going to outline the main steps for creating a webfont.</p>
<ol start="10" class="emphasis">
  <li><span>Select the application and go to the site. Look closely at the available icons: perhaps some will come in handy. Select the necessary ones.</span></li>
  <li><span><strong class="u">Fontello</strong>: drag and drop SVG files to the input area in <em>Custom Icons</em> section. <strong class="u">IcoMoon</strong>: in the navbar, find the import button and upload your SVG. Select the new icons.</span></li>
  <li><span><strong class="u">Fontello</strong>: to the left of <em>Download</em> button, enter the font name and check the settings. If the icons should replace letters or standard characters, specify Unicode codepoints in <em>Customize Codes</em> tab. <strong class="u">Ico&#173;Moon</strong>: Click on the pencil in the navbar, and then on any selected icon: you’ll find yourself in the editor interface. Play with the icons and agree to <em>Generate Font</em>. Fill the <em>Preferences</em> and set codepoints, if needed.</span>
    <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/navbars.jpg" alt="The navbars of the Icomoon and Fontello apps" width="758" height="183"></li><li><small>The navigation of the Fontello (upper) and IcoMoon applications</small></li></ul>
  </li>
  <li><span>Done, you can push <em>Download</em>. The font archive will contain .eot, .svg, .ttf, .woff (+ .<span class="u">woff2 from Fontello</span>); JSON with the info on selected icons, CSS files, and demo.html with examples of use.</span>
  <ul class="nobullets txt-center"><li><img loading="lazy" src="/images/posts/icomoon-vs-fontello.jpg" alt="Contents of archives generated by fontello and icomoon" width="410" height="280"></li><li><small>Font weight difference: IcoMoon’s .eot and .ttf are lighter then Fontello’s; .svg font, on the contrary, is heavier.</small></li></ul>
  </li>
  <li><span>The preferred font format for modern browsers ­is .woff2. If you have used free IcoMoon generator, you need WOFF &#10132; WOFF2 converter. <a href="https://everythingfonts.com/woff-to-woff2">This one</a> works. </span></li>
  <li><span>Save .woff2 to the folder with other formats. Congratulations, you have created the ready-for-use webfont.</span></li>
</ol>
<p>Both fonts are hosted on GitHub; you can download the archives from <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-icomoon.zip">icomoon-Manga</a></b> and <b><a class="red" href="https://github.com/do-your-own-seo/icons/archive/manga-font-fontello.zip">fontello-Manga</a></b>.</p>
</div>
<div>
<h2 id="3">How to use custom icon sets in HTML and style them with CSS</h2>
<div>
<p>It’s time to show all the manga icons. They are collected in the <strong>sprite</strong> – general SVG file containing elements</p> 
{%- highlight html -%}<symbol id="icon-name" viewBox="..."> <path d="..." /> </symbol>{% endhighlight %}
<p>for each icon item. To display the icons on the page, we use</p>
{%- highlight html -%}<svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-name"/></svg>{% endhighlight %}
<div id="svgs" class="iconset flex-wrap flex-center" data-size="52" title="Zoom In/Out" role="img" aria-label="Manga character icons and cat icons">
  <b class="arrow hidden">&#10237;</b>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat1"/></svg><div class="txt-center hidden"><code>icon-cat1</code></div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat2"/></svg><div class="txt-center hidden">icon-cat2</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat3"/></svg><div class="txt-center hidden">icon-cat3</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat4"/></svg><div class="txt-center hidden">icon-cat4</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero1"/></svg><div class="txt-center hidden">icon-hero1</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero2"/></svg><div class="txt-center hidden">icon-hero2</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero3"/></svg><div class="txt-center hidden">icon-hero3</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero4"/></svg><div class="txt-center hidden">icon-hero4</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero5"/></svg><div class="txt-center hidden">icon-hero5</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero6"/></svg><div class="txt-center hidden">icon-hero6</div></div>
  <div class="box"><svg><use xlink:href="/assets/post-on-icons/manga.svg#icon-hero7"/></svg><div class="txt-center hidden">icon-hero7</div></div>
  <b class="arrow hidden">&#10238;</b>
</div>
<p>This way isn’t the most cross-browser (see <a href="https://caniuse.com/#feat=mdn-svg_elements_use_external_uri" rel="nofollow">support</a>), but it preserves the size of the HTML document. If the symbols are needed for a single article, and there are not too many of them, the contents of the sprite can be included directly inside the &lt;body&gt;. Thus, links to individual icons become shorter: <code>&lt;svg&gt;&lt;use&thinsp;xlink:href=&#173;"#icon-name"/&gt;&lt;/svg&gt;</code>.</p>
<p class="danger"><b>NB!</b> I can not guarantee that the sites from which PNGs are downloaded always respect the copyright. If the owner of the PNG recognizes it among the SVGs and opposes the spread of the icon, it’s enough to <a href="https://contact.do/44CB" rel="nofollow">let me know</a>.</p>
<p>Here I should present the same icons as the webfont characters, but I don’t want to overload the page. As a demo, we’ll use the main iconic font: we have to download it anyway. It’s easy to treat our manga font similarly.</p>
<div class="iconset flex-wrap flex-center" role="img" aria-label="Webfont icons">
  <i class="icon icon-pencil"></i><i class="icon icon-menu"></i><i class="icon icon-key"></i><i class="icon icon-envelop"></i><i class="icon icon-attachment"></i><i class="icon icon-bubbles4"></i><i class="icon icon-mobile"></i><i class="icon icon-search"></i><i class="icon icon-twitter"></i><i class="icon icon-github"></i><i class="icon icon-facebook"></i>
</div>
<p>Every item above is just an <code>&lt;i&nbsp;class="icon icon-name"/&gt;&lt;i&gt;</code> element, and stylesheets for it contain</p>
{%- highlight CSS -%} {%- raw -%}
@font-face {font-family:"fontName"; src:url(__) format(__)}
.icon {font-family:"fontName"; font-style:normal}
.icon-name::before {content:"__"} /* Hex for Unicode */{% endraw %}{% endhighlight %}
<p>If you want, you can exclude "icon" from the &lt;i&gt; class list: the corresponding CSS selector will change to</p>
<p class="txt-center"><code>[class^="icon-"],[class*=" icon-"]</code>.</p> 
<blockquote> Since the icons do not contain readable text, you need to ensure that they can be voiced <strong>by screen readers</strong>. </blockquote>
<p>If the icon has a semantic meaning, consider providing it with a <strong>role</strong> and <strong>aria-label</strong> attributes. Purely decorative icons should be hidden from assistive devices through the <strong>aria-hidden</strong> attribute.</p>{% highlight html %}
<svg role="img" aria-label="Caption">...</svg>
<i class="icon-name" role="button" aria-label="Action"></i>
<i class="icon-name" aria-hidden="true"></i>{% endhighlight %}
<p>If your new webfont is just an alphabet used for drop caps, you need to replace <code>.icon</code> selector with <code>p:first-of-type::first-letter</code> in the stylesheets. The content of the pseudo-element <code>::before</code>&thinsp; is no longer needed.</p>
<h3 id="3.1" class="red">The icon styling: how to apply CSS effects</h3>
<p>For editing, you can select any manga icon: just enter its name instead of <code>icon-cat</code>. The image will be redrawn each time the CSS properties are manually changed.</p>
<div class="flex-wrap flex-center">
  <div class="box enlarged"><svg id="example-icon" role="img" aria-label="The icon to demonstrate capabilities of CSS"><use xlink:href="/assets/post-on-icons/manga.svg#icon-cat3"/></svg></div>
  <div class="editor">
    <div id="palette" class="flex-wrap flex-center">
      <div>
        <div class="option" data-color="#c62828"></div>
        <div class="option" data-color="#8c0032"></div>
        <div class="option" data-color="#8e24bb"></div>
        <div class="option" data-color="#5b068c"></div>
        <div class="option" data-color="#1d2788"></div>
        <div class="option" data-color="#2979ff"></div>
        <div class="option" data-color="#00838f"></div>
        <div class="option" data-color="#04805b"></div>
        <div class="option" data-color="#368026"></div>
        <div class="option" data-color="#7cad43"></div>
        <div class="option" data-color="#f5bc11"></div>
        <div class="option" data-color="#de730e"></div>
        <div class="option" data-color="#e24d1e"></div>
        <div class="option" data-color="#a05a16"></div>
        <div class="option" data-color="#795548"></div>
        <div class="option" data-color="#a26b6b"></div>
        <div id="hide-palette" class="red"><b title="Hide the palette" class="option">Hide</b><b class="option hidden">the palette</b></div>
      </div>
      <div class="option"><label>Shadow color <input type="text" value="rgba(0,0,0,.3)" name="shadowColor"></label></div>
    </div>
    <div class="flex-wrap flex-center">
      <input type="text" value="icon-cat3" class="txt-center" id="select-icon" title="Icon">
      <div id="flip">
        <label class="switch"> <input type="checkbox" title="Flip"> <span class="slider"></span> </label>
      </div>
      <div>
        <label>Icon size <input type="range" id="size-slider" name="size" min="50" max="200" value="200"></label>
      </div>
    </div>
    <div>
      <label for="shadow-1" class="txt-center">&nbsp;Shadow ranges:&nbsp; X-offset,&nbsp; Y-offset,&nbsp; and blur radius</label>
      <div class="flex-wrap flex-center">
        <input type="range" id="shadow-1" value="0" step="0.5" min="-10" max="10" class="shadow-slider" title="X">
        <input type="range" id="shadow-2" value="0" step="0.5" min="-10" max="10" class="shadow-slider" title="Y">
        <input type="range" id="shadow-3" value="0" min="0" max="10" class="shadow-slider" title="Blur">
      </div>
    </div>
  </div>
</div>
<p>The CSS code in the text areas below will be updated automatically.</p>
<div class="flex-wrap flex-center">
<div class="css"><label for="svg-info">CSS styles for SVG icon</label>
<textarea wrap="hard" cols="36" spellcheck="false" id="svg-info">.icon-cat3 {
  fill: #272822;
  width: 200px; height: 200px;
}</textarea>
</div>
<div class="css"><label for="icon-info">CSS for the webfont icon</label>
<textarea wrap="hard" cols="36" spellcheck="false" id="icon-info">.icon-cat3 {
  color: #272822;
  font-size: 200px;
}</textarea>
</div>
</div>
<p>The idea of an ​​online icon decorator is not new: similar functionality was presented <a href="https://css-tricks.com/examples/IconFont/">on CSS Tricks</a> years ago. Unlike the predecessor, the icon decorator from here applies styles to SVG and works without jQuery. I’ll try to fix the noticed bugs, so do not hesitate to point to them in the comments.</p>
<p>See you on other pages of the blog!</p>
</div>
<script src="/assets/post-on-icons/iconDecorator.min.js" defer></script>
