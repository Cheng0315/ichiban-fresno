class PlatesController < ApiController
  before_action :require_login, except: [:index]

  def index 
    @plates = Plate.all

    render json: @plates
  end

  def create
    @plate = Plate.new(plate_params)
    @plate.admin = current_user
    @plate.image.attach(params[:image])

    if !params[:plate][:in].empty?
      @plate.in = "In: #{params[:plate][:in]}"
    end
    
    if !params[:plate][:out].empty?
      @plate.out = "Out: #{params[:plate][:out]}"
    end

    if @plate.save
      @plates = Plate.all
      render json: @plates
    else
      render json: { msg: 'Could not create plate'}
    end
  end

  def update
    binding.pry
  end

  private

  def plate_params
    params.require(:plate).permit(:name, :description, :in, :out, :price, :category_id, :image)
  end
end