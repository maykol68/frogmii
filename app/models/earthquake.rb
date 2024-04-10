class Earthquake < ApplicationRecord

    def as_json(options = {}) 
        super(only: [:id, :feature_type ], methods:  [:attributes, :links])
    end
    
    def attributes
        {
            external_id: self.external_id,
            magnitude: self.mag,
            place: self.place,
            time: self.time,
            tsunami: self.tsunami,
            mag_type: self.mag_type,
            title: self.title,
            coordinates: {
            longitude: self.longitude,
            latitude: self.latitude
            }
        }
    end

    def links
        {
            external_url: self.url
        }
    end

    validates :title, :url, :place, :mag_type, :longitude, :latitude, presence: true
    validates :mag, numericality: { greater_than_or_equal_to: -1.0, less_than_or_equal_to: 10.0 }
    validates :latitude, numericality: { greater_than_or_equal_to: -90.0, less_than_or_equal_to: 90.0 }
    validates :longitude, numericality: { greater_than_or_equal_to: -180.0, less_than_or_equal_to: 180.0 }

    has_many :comments, dependent: :destroy
end
