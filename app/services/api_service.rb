class ApiService
  
  def get_data(endpoint)
    Faraday.new(endpoint)
  end

  def get_json(data)
    JSON.parse(data.body, symbolize_names: true)
  end
end
