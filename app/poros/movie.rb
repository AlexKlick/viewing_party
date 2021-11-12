class Movie
  attr_reader :poster_path, :backdrop_path, :title, :vote_average, :runtime, :genres, :overview, :cast, :reviews,
              :video, :id, :release

  def initialize(data)
    @poster_path = data[:poster_path]
    @backdrop_path = data[:backdrop_path]
    @title = data[:title]
    @vote_average = data[:vote_average]
    @runtime = data[:runtime]
    @genres = data[:genres]
    @overview = data[:overview]
    @cast = data[:cast]
    @reviews = data[:reviews]
    @video = data[:video]
    @id = data[:id]
    @release = data[:release_date][0..3] if data[:release_date]
  end
end
