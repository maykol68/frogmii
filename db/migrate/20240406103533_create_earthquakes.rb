class CreateEarthquakes < ActiveRecord::Migration[7.1]
  def change
    create_table :earthquakes do |t|
      t.decimal :mag
      t.string :place, limit: 255
      t.datetime :time
      t.string :url, limit: 255
      t.boolean :tsunami
      t.string :mag_type, limit: 3
      t.string :title
      t.decimal :longitude
      t.decimal :latitude

      t.timestamps
    end
    add_index :earthquakes, [:url, :title, :place, :mag_type, :longitude, :latitude], unique: true, name: 'unique_earthquake'
  end
end
