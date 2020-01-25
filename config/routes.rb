Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'post/:post_id/comments/index', to: 'comments#index'
      post 'post/:post_id/comments/create', to: 'comments#create'
      get 'post/:post_id/comments/:id', to: 'comments#show'
      put 'post/:post_id/comments/update/:id', to: 'comments#update'
      delete 'post/:post_id/comments/destroy/:id', to: 'comments#destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'posts/index'
      post 'posts/create'
      get 'post/show/:id', to: 'posts#show'
      put 'post/update/:id', to: 'posts#update'
      delete 'post/destroy/:id', to: 'posts#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
