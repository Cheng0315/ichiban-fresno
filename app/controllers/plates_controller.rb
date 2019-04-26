class PlatesController < ApiController
  before_action :require_login, except: [:index, :show]

  def index 
    @plates = Plate.all

    render json: @plates
  end

  def create
    @plate = Plate.new(plate_params)
    @plate.admin = current_user
    @plate.image.attach(params[:image])

    if @plate.save
      @plates = Plate.all
      render json: @plates
    else
      render json: { msg: 'Could not create plate'}
    end
  end

  def show
    @plate = Plate.find(params[:id].to_i)
    render json: @plate
  end

  def update
    @plate = Plate.find(params[:plate][:id].to_i)
    @plate.image.attach(params[:image])

    if @plate.update(plate_params)
      @plates = Plate.all
      render json: @plates
    else
      render json: { msg: 'Could not update plate'}
    end
  end

  def destroy
    @plate = Plate.find(params[:id].to_i)
    @plate.destroy
    @plates = Plate.all
    
    render json: @plates
  end

  private

  def plate_params
    params.require(:plate).permit(:name, :description, :in, :out, :price, :category_id, :image)
  end
end