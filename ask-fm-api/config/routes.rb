Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :questions, only: [:index, :create, :destroy] do
    resources :answers, shallow: true, only: [:create, :destroy] do
      resources :comments, shallow: true, only: [:destroy]
    end
  end
end
