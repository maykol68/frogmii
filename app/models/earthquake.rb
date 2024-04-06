class Earthquake < ApplicationRecord
    validates :title, :url, :place, :mag_type, :longitude, :latitude, presence: true
    validates :mag, numericality: { greater_than_or_equal_to: -1.0, less_than_or_equal_to: 10.0 }
    validates :latitude, numericality: { greater_than_or_equal_to: -90.0, less_than_or_equal_to: 90.0 }
    validates :longitude, numericality: { greater_than_or_equal_to: -180.0, less_than_or_equal_to: 180.0 }
    validates :url, uniqueness: { scope: [:title, :place, :mag_type, :longitude, :latitude] }
end
