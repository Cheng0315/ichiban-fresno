Rails.application.routes.draw do
  get '/api/plates' => 'plates#index'
  post '/api/sign_in' => 'admin#sign_in'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'
  resources :admin
end
