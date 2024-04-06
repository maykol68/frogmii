require 'net/https'

class FetchPropertiesService

    def perform
        uri = URI("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson")
        response = Net::HTTP.get(uri)
        parsed_response = JSON.parse(response)
        features = parsed_response.dig("features")

        features.each do |f|
            fa = f.dig("properties")
        end
    end 
end