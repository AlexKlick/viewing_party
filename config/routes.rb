Rails.application.routes.draw do
  root "welcome#index"
  resources :users, only: [:new, :create]
  resources :dashboard, only: :index
end
