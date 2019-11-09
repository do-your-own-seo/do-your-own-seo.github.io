# encoding: UTF-8
require "rubygems"
require "tmpdir"
require "bundler/setup"
require "jekyll"

# Change your GitHub reponame
GITHUB_REPONAME = "do-your-own-seo/do-your-own-seo.github.io"
GITHUB_REPO_BRANCH = "master"

SOURCE = "source/"
DEST = "_site"
CONFIG = {
  'default_lang' => "uk",
  'default_loc' => "ua",
  'default_tags' => "SEO, website optimization",
  'post_ext' => "md"
}

task :default => ["post"]


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
    post.puts "i18n-link: #{ENV['i18n-link'] || 'i18n-ID'}" 

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

    post.puts "comments: true"
    post.puts "categories: #{ENV['category'] || ''}"
    post.puts "tags: [#{CONFIG['default_tags'] + (ENV['tags'] ? ", "+ ENV['tags'] : '')}]"  # tag1, tag2, etc
    post.puts "description: \"\""
    post.puts "keywords: \"\""

    #The 1-st paragraph after the table of contents = Preview on the home page of the blog.
    post.puts "snippet: \"#{ENV['snippet'] || ''}\""

    post.puts "image: \"\""
    post.puts (draft ? "sitemap: false" : "")
    post.puts "---"
  end
end # task :post

def make_slug(title)
  slug = title.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž", "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz")
  slug = slug.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  return slug
end
