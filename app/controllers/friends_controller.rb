class FriendsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])

    if user.present?
      Friend.create(followed_id: user.id, follower_id: current_user.id)
    else
      flash[:danger] = "No user by this email!"
    end
    redirect_to dashboard_index_path
  end
end
