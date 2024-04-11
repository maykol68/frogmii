Rails.application.routes.draw do
  
    resources :earthquakes do
      resources :comments, only: [:create]
    end
end
