Rails.application.routes.draw do
  get '/api/plates' => 'plates#index'
end
