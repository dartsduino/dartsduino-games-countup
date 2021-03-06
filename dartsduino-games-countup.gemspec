# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'dartsduino/games/countup/version'

Gem::Specification.new do |spec|
  spec.name          = "dartsduino-games-countup"
  spec.version       = Dartsduino::Games::Countup::VERSION
  spec.authors       = ["Ikuo Terado"]
  spec.email         = ["eqobar@gmail.com"]
  spec.summary       = %q{dartsduino games: Count up.}
  spec.description   = %q{dartsduino games: Count up.}
  spec.homepage      = ""
  spec.license       = "MIT"

  # spec.files         = `git ls-files -z`.split("\x0")
  spec.files         = Dir["{lib,vendor}/**/*"] + ["LICENSE.txt", "README.md"]
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.5"
  spec.add_development_dependency "rake"
end
