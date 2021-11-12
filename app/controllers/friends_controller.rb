class FriendsController < ApplicationController
  def create
    binding.pry
    user = User.find_by(email: params[:email])

    if user.present?
      Friend.create(followed_id: user.id, follower_id: current_user.id)
    else
      flash[:danger] = 'No user by this email!'
    end
    redirect_to dashboard_index_path
  end
  def index
    user = User.find_by(email: params[:email])
    if user.present?
      
      Friend.create(followed_id: user.id, follower_id: current_user.id)
    else
      flash[:danger] = 'No user by this email!'
    end
    render json: User.all.select(:email, :id)
    redirect_to dashboard_index_path
  end
  def email_list
    render json: User.all.select(:email, :id)
  end
end
