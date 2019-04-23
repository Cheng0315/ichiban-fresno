class PlatesController < ApiController
  before_action :require_login, except: [:index]

  def index 
    @plates = Plate.all

    render json: @plates
  end

  def create
    @plate = Plate.new(plates_params)
    @plate.admin = current_user

    if @plate.save
      render json: {
        message: 'ok',
        plate: @plate
      }
    else
      render json: { msg: 'Could not create plate'}
    end
  end

  private

  def plates_params
    params.require(plate).permit(:name, :description, :in, :out, :price, :category_id)
  end
end