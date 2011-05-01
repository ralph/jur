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
