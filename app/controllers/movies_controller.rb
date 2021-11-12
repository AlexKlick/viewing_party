class MoviesController < ApplicationController
  def index
    if params['result'] == 'top_40'
      results = MovieServices.new.top_forty
      @results = results.map do |res|
        Movie.new(res)
      end
    else
      @results = MovieFacade.movies_search(search_params[:keywords])
    end
  end

  def show
    movie = MovieServices.new.find_movie_details(movie_find_params[:id])
    @movie = Movie.new(movie)
    @friends = User.all
  end

  private

  def search_params
    params.permit(:keywords)
  end

  def movie_find_params
    params.permit(:id)
  end

  def api_movies_search(keywords)
    json = MovieServices.new.search(keywords)
    Search.new.first_40_results(json)
  end
end
