Rails.application.routes.draw do
  get '/api/plates' => 'plates#index'
  post '/api/sign_in' => 'sessions#create'
  delete '/api/sign_out' => 'sessions#destroy'
  post '/api/create_plate' => 'plates#create'
  patch '/api/update_plates' => 'plates#update'
end
