Rails.application.routes.draw do
  root "welcome#index"
  resources :users, only: [:new, :create]
  resources :dashboard, only: :index
  resources :sessions, only: [:new, :create, :destroy]
  resources :discover, only: :index
  resources :friends, only: [:create, :index]
  resources :movies, only: [:index, :show]
  resources :parties, only: [:new, :create]

  get '/email_list', to: 'friends#email_list'
end
