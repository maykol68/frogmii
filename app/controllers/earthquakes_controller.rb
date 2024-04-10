class EarthquakesController < ApplicationController
  before_action :set_earthquake, only: %i[ show update destroy ]


  # GET /earthquakes
  def index
    earthquakes = Earthquake.all

    page = [params[:page].to_i, 1].max
    page = 1 if page < 1

    per_page = [params[:per_page].to_i, 1000].min 

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


  # GET /earthquakes/1
  def show
    render json: @earthquake
  end

  # PATCH/PUT /earthquakes/1
  def update
    if @earthquake.update(earthquake_params)
      render json: @earthquake
    else
      render json: @earthquake.errors, status: :unprocessable_entity
    end
  end

  # DELETE /earthquakes/1
  def destroy
    @earthquake.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_earthquake
      @earthquake = Earthquake.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def earthquake_params
      params.require(:earthquake).permit(:mag, :place, :time, :url, :tsunami, :mag_type, :title, :longitude, :latitude)
    end

    def per_page
      [params.fetch(:per_page, 12).to_i, 1000].min 
    end
end
