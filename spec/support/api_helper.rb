module APIHelper
  include Rack::Test::Methods

  def app
    Rails.application
  end
end

RSpec.configure do |config|
  config.include APIHelper, :type=>:api #apply to all spec for apis folder
end
