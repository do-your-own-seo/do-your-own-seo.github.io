# [SEO blog for everyone: read, think & Do It Yourself!](https://do-your-own-seo.com)

* [x] SEO friendly
* [x] Responsive
* [x] Multilingual
* [x] No JQuery, no Disqus
* [x] Static comments that you own

## Features 

* Pagination for each language via [Jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2) (non-supported by Github Pages).
* Аutomatic generation of the sitemap. The [Jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) plugin allows us to exclude pages and files from sitemap.xml.
* Full control over the commenting system with [Staticman](https://github.com/eduardoboucas/staticman).
* RSS feeds for each language without plugins.
* Post sharing buttons (Twitter, Facebook, LinkedIn, Reddit) + social meta tags.
* Schema.org markup (WebSite, WebPage, BlogPosting).

NB! TOCs for the posts are compiled manually, because I prefer to change the anchor text when necessary. You might want to use the [Jekyll-toc](https://github.com/toshimaru/jekyll-toc) plugin instead. In this case, you can remove the "snippet" variable from the front matter and use {{post.excerpt}} in templates.

## Background

This static blog is based on the free Jekyll theme [end2end](https://nandomoreirame.github.io/end2end/blog/) (MIT, &copy; Fernando Moreira).

It was possible to make the site multilingual thanks to helpful and inspiring examples found in the articles by [Sylvain Durand](https://www.sylvaindurand.org/making-jekyll-multilingual/), [Anthony Granger](http://chocanto.me/2016/04/16/jekyll-multilingual.html), and [Klaasnotfound](https://www.klaasnotfound.com/2017/02/16/proper-multilingual-site-with-github-pages-and-jekyll/).

I did not hesitate to choose [Staticman](https://staticman.net/) as a commenting system, because third-party services like Disqus load tons of scripts, and it is unclear what do they do on the page. In addition, I personally do not like tracking. Many thanks to [Staticman's creator](https://github.com/eduardoboucas), Eduardo Bouças, for such a great, Github-related commenting system.

There is a step-by-step guide on [static comments implementation](https://mademistakes.com/articles/jekyll-static-comments/) on  "Made-Mistakes" blog. Moreover, the source code for that blog is [available on Github](https://github.com/mmistakes/made-mistakes-jekyll). From there and [here](https://github.com/mmistakes/minimal-mistakes) I borrowed the client-side nested comments structure. 

As of September 2019, neither v2 nor v3 of public Staticman instance was working, and official docs didn’t explain anything. So I had to set up my own instance of the API. It was feasible because of detailed Vincent Tam's [instructions](https://vincenttam.gitlab.io/post/2018-09-16-staticman-powered-gitlab-pages/2/) on deployment Staticman App to Heroku, and his further [explanation](https://github.com/eduardoboucas/staticman/issues/299#issuecomment-508029359) of the issue.

I am grateful to all the people mentioned for the opportunity to use the results of their work!

Oh, and the cat :cat:: I met a similar [on CodePen](https://codepen.io/agoodwin/pen/ypeWYE). Now the pet is resting in the footer of the homepage and asks not to poke him any kind of :mouse: mice.

## Quick start

1. Download or clone this repo.
2. Enter the folder: `cd PROJECT_NAME`.
3. Install Ruby gems: `bundle install`.
4. Start Jekyll server: `bundle exec jekyll serve`.
5. Access offline: `localhost:4000`.

---
### Create a new post in /\_posts or /lang/\_posts

Run `rake` `title="Post title"` `url=words-joined-with-hyphens`
				`dir=lang` `i18n-link=ID-for-all-translations`
				`category=something` `tags="Tag_1, Tag_2"`
				`date=YYYY-MM-DD` `snippet="The text."`.

**NB!** URL (for non-Latin languages) or TITLE is required, other variables are optional. See the hints in the Rakefile.

By default, the post will be hidden. If you prefer to publish it immediately, please add `public=y` to the rake task. 

---
### Create a draft in /\_drafts or /lang/\_drafts

Run the above rake task with the additional parameter `draft=y`. In this case no need to specify `date` and `public`.

To preview the draft, run `bundle exec jekyll serve --drafts`. When you finish editing, add the date to the filename and move the draft to the corresponding \_posts folder.

---
### Deploy to Github Pages

Run `bundle exec jekyll build` to compose a production version of the Jekyll blog. Then place the contents of the \_site folder into the source repo for your GitHub Pages site. Alternatively, to avoid manual rebuilds, you can set up a build environment on [Travis](https://jekyllrb.com/docs/continuous-integration/travis-ci/).

---
## Copyright and license

Content is under copyright. The source code is available under the [MIT license](https://github.com/do-your-own-seo/do-your-own-seo.github.io/blob/source/LICENSE).
