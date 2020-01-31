# encoding: UTF-8
require "rubygems"
require "tmpdir"
require "bundler/setup"
require "jekyll"
require "html-proofer"
require 'net/http'

SOURCE = "source/"
DEST = "_site"
CONFIG = {
  'url' => 'do-your-own-seo.com',
  'default_lang' => "uk",
  'default_loc' => "ua",
  'default_tags' => "SEO",
  'post_ext' => "md"
}

task :default => ["post"]

desc "Test with html-proofer"
task :test do
  sh "bundle exec jekyll build JEKYLL_ENV=production --drafts"
  options = { 
    assume_extension: true,
    check_opengraph: true, 
    check_favicon: true,
    enforce_https: true,
    typhoeus:  { :ssl_verifypeer => false },
    internal_domains: [CONFIG['url']],
    file_ignore: [/assets/, /editor/, /yandex(.+)\.html/],
    url_ignore: [/LICENSE/, /gstatic\.com/, /google-analytics/, /fontello.com/, /#Google/, /#E-A-T/, /#Content/, /#PageRank/]
  }
  HTMLProofer.check_directory("./#{DEST}", options).run
end

desc "Jekyll serve"
task :serve do
  sh "bundle exec jekyll serve JEKYLL_ENV=development --drafts --livereload"
end

desc "Ping the search engines if sitemap.xml has been updated"
task :ping => ["ping:google", "ping:bing"]
namespace :ping do
  url = "/ping?sitemap=https://#{CONFIG['url']}/sitemap.xml"

  task :google do
    puts Net::HTTP.get("www.google.com", url)
    rescue LoadError
      puts "! Could not ping Google"
  end

  task :bing do
    puts Net::HTTP.get("www.bing.com", url)
    rescue LoadError
      puts "! Could not ping Bing"
  end
end

desc "Create a new post or draft"
task :post do
  draft = (ENV['draft'] == 'y') ? true : false
  destination = draft ? "_drafts" : "_posts"
  path = File.join(SOURCE, "#{(ENV['dir'] || '')}/#{destination}")
  abort("rake aborted: '#{path}' directory not found.") unless FileTest.directory?(path)

  abort("Please, provide a title or preferred URL.") unless (ENV["title"] || ENV["url"])
  slug = ENV["url"] || make_slug(ENV["title"])
  title = ENV["title"] || 'New post'

  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
    time = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%T')
  rescue => e
    puts "Error: the date must be in YYYY-MM-DD format."
    exit -1
  end

  filename = draft ? slug : date + "-" + slug
  filename = File.join(path, filename + "." + CONFIG['post_ext'])
  if File.exist?(filename)
    puts "File #{filename} already exists. Do you want to overwrite it? (( y/n ))" 
    answer = $stdin.gets.chomp
    abort("rake aborted") unless (answer == 'y')
  end

  puts "New post created: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "published: false" unless (ENV['public'] == 'y' || draft)

    #An ID for a whole family of translated posts.
    post.puts "i18n-link: #{ENV['i18n'] || ''}" 

    #The name of the language directory or nothing for default lang.
    post.puts "lang: #{ENV['dir'] || CONFIG['default_lang']}" 

    #The paginator uses locale for filtering. Its value may differ from the lang.
    post.puts "locale: #{ENV['dir'] || CONFIG['default_loc']}" 

    post.puts "date: #{date}T#{time}Z" unless draft
    post.puts "last_modified_at: #{date}T#{time}Z" #You can modify it later.

    #The title for the snippet in the search results.
    post.puts "title: \"#{title}\"" 
    
    #The main heading of the post
    post.puts "h1: \"\""

    post.puts "tags: [#{CONFIG['default_tags'] + (ENV['tags'] ? ", "+ ENV['tags'] : '')}]"  # tag1, tag2, etc
    post.puts "categories: #{ENV['category'] || ''}"
    post.puts "description: \"\""
    post.puts "keywords: \"\""

    # snippet = The 1st paragraph after the table of contents = Preview on the home page of the blog.
    post.puts "snippet: \"#{ENV['snippet'] || ''}\""
    post.puts "snippet_header: \"#{ENV['snippet_header'] || ''}\""

    post.puts "image: \"\""
    post.puts "---"
  end
end # task :post

def make_slug(title)
  slug = title.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž", "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz")
  slug = slug.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  return slug
end
