require 'net/https'
require 'json'

namespace :mi_tarea do
  desc "Esta es mi tarea personalizada"
  task ejecutar: :environment do
    puts "Ejecutando mi tarea..."



    uri = URI('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
    response = Net::HTTP.get(uri)
    data = JSON.parse(response)
    features = data["features"]
    
   
    if features.length > 0 
      features.each do |earthquake_data|
        if earthquake_data['properties']['mag'] >= -1.0 &&  earthquake_data['properties']['mag'] <= 10.0 && !Earthquake.exists?(external_id: earthquake_data['id'])
          Earthquake.create!(
            mag: earthquake_data['properties']['mag'],
            place: earthquake_data['properties']['place'],
            time: Time.at((earthquake_data['properties']["time"] || 0) / 1000),
            url: earthquake_data['properties']['url'],
            tsunami: earthquake_data['properties']['tsunami'],
            mag_type: earthquake_data['properties']['magType'],
            title: earthquake_data['properties']['title'],
            longitude: earthquake_data['geometry']['coordinates'][0],
            latitude: earthquake_data['geometry']['coordinates'][1],
            external_id: earthquake_data['id'],
            feature_type: earthquake_data['type']
          )
        end
      end
    end
  end
end