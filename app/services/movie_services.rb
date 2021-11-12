class MovieServices < ApiService
  def top_forty
    endpoint1 = "https://api.themoviedb.org/3/discover/movie?api_key=#{ENV['movies_api_key']}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500&with_watch_monetization_types=flatrate"
    page1 = get_data(endpoint1).get
    endpoint2 = "https://api.themoviedb.org/3/discover/movie?api_key=#{ENV['movies_api_key']}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&vote_count.gte=500&with_watch_monetization_types=flatrate"
    page2 = get_data(endpoint2).get
    result = get_json(page1)[:results].concat(get_json(page2)[:results])
  end

  def search(keywords, page)
    response = get_data('https://api.themoviedb.org/3/search/movie').get do |f|
      f.params['api_key'] = ENV['movies_api_key']
      f.params['query'] = keywords
      f.params['include_adult'] = false
      f.params['page'] = page
    end
    get_json(response)[:results]
  end

  # calls all movie details methods and combines into 1 hash
  def find_movie_details(id)
    movie = basic_movie_details(id)
    movie[:cast] = movie_cast(id)
    movie[:reviews] = movie_reviews(id)
    movie[:video] = movie_video(id)
    movie
  end

  # methods for gathering movie data pieces
  def basic_movie_details(id)
    results = get_data("https://api.themoviedb.org/3/movie/#{id}?api_key=#{ENV['movies_api_key']}&language=en-US").get
    get_json(results)
  end

  def movie_cast(id)
    results = get_data("https://api.themoviedb.org/3/movie/#{id}/credits?api_key=#{ENV['movies_api_key']}&language=en-US").get
    get_json(results)[:cast][0..9] if get_json(results) != []
  end

  def movie_reviews(id)
    results = get_data("https://api.themoviedb.org/3/movie/#{id}/reviews?api_key=#{ENV['movies_api_key']}&language=en-US&page=1").get
    get_json(results)[:results]
  end

  def movie_video(id)
    results = get_data("https://api.themoviedb.org/3/movie/#{id}/videos?api_key=#{ENV['movies_api_key']}&language=en-US").get
    if get_json(results)[:results] != []
      get_json(results)[:results][0][:key]
    end
  end
end
