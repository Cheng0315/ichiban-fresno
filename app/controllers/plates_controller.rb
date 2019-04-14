class PlatesController < ApplicationController

  def index 
    @plates = Plate.all

    render json: @plates
  end
end