class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = user_params
    if user[:password_confirmation] == user[:password]
      user[:email] = user[:email].downcase
      new_user = User.create(user)
      flash[:success] = "Welcome, #{new_user.email}!"
      redirect_to root_path
    else
      flash[:alert] = "Password and confirmation must match!"
      #if have time, refactor to save information
      redirect_to new_user_path
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end