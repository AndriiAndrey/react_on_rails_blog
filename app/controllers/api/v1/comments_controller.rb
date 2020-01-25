class Api::V1::CommentsController < ApplicationController
  def index
    comments = post.comments.all.order(created_at: :desc)
    render json: comments
  end

  def create
    comment = post.comments.create!(comment_params)
    comments = post.comments.all.order(created_at: :desc)
    if comment
      render json: comments
    else
      render json: comment.errors
    end
  end

  def show
    if comment
      render json: comment
    else
      render json: comment.errors
    end
  end

  def update
    if comment.update(comment_params)
      render json: comment
    else
      render json: comment.errors
    end
  end

  def destroy
    comment&.destroy
    render json: { message: 'Post deleted!' }
  end

  private

  def comment_params
    params.permit(:commenter, :body)
  end

  def post
    @post ||= Post.find(params[:post_id])
  end 

  def comment
    @comment ||= post.comments.find(params[:id])
  end

end
