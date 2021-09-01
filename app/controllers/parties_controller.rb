class PartiesController < ApplicationController
  def new
    @movie =  MovieServices.new.find_movie_details(params[:movie_id])
    @party = Party.new
  end

  def create
    data = party_params
    data[:user_id] = current_user.id
    party = Party.new(data)
    if party.save
      params[:friend_ids].each do |id|
        Attendee.create(user_id: id, party_id: party.id)
      end
      redirect_to dashboard_index_path
    else
      flash[:danger] = "Invalid Info"
      redirect_to new_party_path
    end
  end

  private


  def party_params
    params[:time] = params[:time].to_time
    params.permit(:movie, :duration, :date, :time)
  end
end
