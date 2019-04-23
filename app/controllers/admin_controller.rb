class AdminController < ApiController
  before_action :require_login, except: [:create]
  
  
end