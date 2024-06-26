class EarthquakesController < ApplicationController
  before_action :set_earthquake, only: %i[ show ]


  def index
    earthquakes = Earthquake.all

    page = [params[:page].to_i, 1].max
    page = 1 if page <= 0

    per_page = [params[:per_page].to_i, 1000].min
    per_page = 3 if per_page <= 0

    total_pages = (earthquakes.count / per_page.to_f).ceil
    page = [page, total_pages].min

    earthquakes = earthquakes.where(mag_type: params[:filters][:mag_type]) if params[:filters].present? && params[:filters][:mag_type].present?
    pagy, records = pagy(earthquakes, items: per_page, page: page)


    # http://localhost:3000/earthquakes?filters[mag_type]=mw&page=1&per_page=2000
    render json: {
      earthquakes: records.as_json(only: [:id, :feature_type], methods: [:attributes, :links]),
      pagination: {
        current_page: pagy.page,
        total: pagy.count,
        per_page: pagy.items
      }
    }
  end


  def show
    sleep 1
    render json: @earthquake
  end
  
  private
    def set_earthquake
      @earthquake = Earthquake.find(params[:id])
    end

    def earthquake_params
      params.require(:earthquake).permit(:mag, :place, :time, :url, :tsunami, :mag_type, :title, :longitude, :latitude)
    end

    def per_page
      [params.fetch(:per_page, 12).to_i, 1000].min 
    end
end
