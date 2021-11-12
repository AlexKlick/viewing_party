class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  helper_method :convert_minutes_to_hours_and_minutes

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def convert_minutes_to_hours_and_minutes(minutes)
    seconds = minutes * 60
    ActiveSupport::Duration.build(seconds).inspect
  end

  private
  
  def require_login
    unless current_user
      flash[:warning] = 'Must be logged in to view this page!'
      redirect_to '/'
    end
  end
end
