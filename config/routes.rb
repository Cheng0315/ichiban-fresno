Rails.application.routes.draw do
  get '/api/plates' => 'plates#index'
  post '/api/sign_in' => 'sessions#create'
  delete '/api/sign_out' => 'sessions#destroy'
  resources :plates, only: [:index, :create, :update, :destroy ]
end
