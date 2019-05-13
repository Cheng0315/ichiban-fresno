Rails.application.routes.draw do
  get '/api/plates' => 'plates#index'
  post '/api/sign_in' => 'sessions#create'
  delete '/api/sign_out' => 'sessions#destroy'
  post '/api/create_plate' => 'plates#create'
  patch '/api/update_plates' => 'plates#update'
  delete '/api/delete_plates' => 'plates#destroy'
  get '/api/plates/:id' => 'plates#show'
  post '/api/admin/update_info' => 'admin#update'
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
