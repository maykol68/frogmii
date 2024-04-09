class CreateEarthquakes < ActiveRecord::Migration[7.1]
    def change
      create_table :earthquakes do |t|
        t.decimal :mag
        t.string :place
        t.datetime :time
        t.string :url
        t.boolean :tsunami
        t.string :mag_type
        t.string :title
        t.decimal :longitude
        t.decimal :latitude
        t.string :external_id
        t.string :feature_type 
        t.timestamps
      end
    end
  end