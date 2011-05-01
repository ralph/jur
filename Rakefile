# -*- coding: UTF-8 -*-
require 'bundler/setup'
require 'document_mapper'
require 'erubis'
require 'RedCloth'

class Text
  include DocumentMapper::Document
  self.directory = 'texts'
end

task :default => :generate_index

desc 'generate index.html'
task :generate_index do
  input = File.read 'index.html.erb'
  index = ::Erubis::Eruby.new input
  File.open('index.html', 'w') do |f|
    f.write index.result(binding)
  end
end


desc 'deploy static html to s3'
task :deploy do
  system 's3cmd -c ./s3cfg sync --exclude "*" --include-from s3sync.include --delete-removed --acl-public . s3://www.johanna-und-ralph.de'
end
