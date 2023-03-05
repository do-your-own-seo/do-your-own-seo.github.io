# [SEO blog for everyone: read, think & Do It Yourself!](https://do-your-own-seo.com/en/) ![Build Status](https://github.com/do-your-own-seo/do-your-own-seo.github.io/actions/workflows/build-deploy.yml/badge.svg)

* [x] SEO-friendly
* [x] Responsive
* [x] Multilingual
* [x] No jQuery, no Disqus
* [x] Static comments that you own

## Features 

* Pagination for each language via [Jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2) (non-supported by GitHub Pages).
* Full control over the commenting system with [Staticman](https://github.com/eduardoboucas/staticman).
* Instant site search for each language with [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search).
* Sitemap.xml: adding `sitemap:false` to the front-matter excludes the page from the map; setting `sitemap_exclude:[paths]` in *\_config.yml* does the same with files and folders.
* RSS-feed for each language, optimized for Feedly.
* Post sharing buttons (Twitter, Facebook, LinkedIn, Reddit, Telegram) + Open Graph meta tags.
* Schema.org markup (WebSite, WebPage, BlogPosting).

NB! TOCs for the posts are compiled manually, because I prefer to change the anchor text when necessary. You might want to use the [Jekyll-toc](https://github.com/toshimaru/jekyll-toc) plugin instead. In this case, you can remove the "snippet" variable from the front matter and use {{post.excerpt}} in templates.

## Background

This static blog is based on the free Jekyll theme [end2end](https://nandomoreirame.github.io/end2end/blog/) (MIT, &copy;Fernando Moreira).

It was possible to make the site multilingual thanks to helpful and inspiring examples found in the articles by [Sylvain Durand](https://www.sylvaindurand.org/making-jekyll-multilingual/), [Anthony Granger](http://chocanto.me/2016/04/16/jekyll-multilingual.html), and [Klaasnotfound](https://www.klaasnotfound.com/2017/02/16/proper-multilingual-site-with-github-pages-and-jekyll/).

I didn't hesitate to choose [Staticman](https://staticman.net/) as a commenting system, because third-party services like Disqus load tons of scripts, and it is unclear what do they do on the page. Besides, I do not like tracking. Many thanks to [Staticman's creator](https://github.com/eduardoboucas), Eduardo Bouças, for such a great, GitHub-friendly commenting system.

There is a step-by-step guide [on static comments implementation](https://mademistakes.com/articles/jekyll-static-comments/) on the Made-Mistakes blog. The source code for that blog is [available on GitHub](https://github.com/mmistakes/made-mistakes-jekyll). From there and [here](https://github.com/mmistakes/minimal-mistakes), I borrowed the client-side nested comments structure. 

As of September 2019, neither v2 nor v3 of public Staticman instance was working, and official docs didn't explain anything. So I had to set up my own instance of the API. It was feasible because of detailed Vincent Tam's [instructions](https://vincenttam.gitlab.io/post/2018-09-16-staticman-powered-gitlab-pages/2/) on deployment Staticman App to Heroku, and his further [explanation](https://github.com/eduardoboucas/staticman/issues/299#issuecomment-508029359) of the issue. **Update!** Now my own Staticman lives on Fly.io.

I'm grateful to all the people mentioned for the opportunity to use the results of their work!

Oh, and the cat :cat:: I met a similar [on CodePen](https://codepen.io/agoodwin/pen/ypeWYE). Now the pet is resting in the footer of the homepage and asks not to be offered any kind of :mouse: mice.

## Quick start

1. Download or clone this repo.
2. Enter the folder name: `cd PROJECT_NAME`.
3. Install Ruby gems: `bundle install`.
4. Start Jekyll server: `bundle exec jekyll serve`.
5. Access offline: `localhost:4000`.

---
### Create a new post in /\_posts or /lang/\_posts

Run `rake` `title="Post title"` `url=words-joined-with-hyphens`
				`dir=lang` `i18n=ID-for-all-translations`
				`category=something` `tags="Tag_1, Tag_2"`
				`date=YYYY-MM-DD` `snippet="The text."`.

**NB!** URL (for non-Latin languages) or TITLE is required, other variables are optional. See the hints in the Rakefile.

By default, the post will be hidden. If you prefer to publish it immediately, add `public=y` to the rake task. 

---
### Create a draft in /\_drafts or /lang/\_drafts

Run the above rake task with the additional parameter `draft=y`. In this case, no need to specify `date` and `public`.

To preview the draft, run `bundle exec jekyll serve --drafts`. When you finish editing, add the date to the filename and move the draft to the corresponding \_posts folder.

---
### Deploy to GitHub Pages

Since GitHub Pages will not build this site from source, run `bundle exec jekyll build` to compose a production version of the Jekyll blog. Then place the contents of the \_site folder into the source repo for your GitHub Pages site. Alternatively, to avoid manual rebuilds, you can set up a <del>build environment on Travis</del>  GitHub Action.

---
## Copyright and license

Content is under copyright. The source code is available under the [MIT license](https://github.com/do-your-own-seo/do-your-own-seo.github.io/blob/source/LICENSE).