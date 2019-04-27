class AdminController < ApiController
  before_action :require_login
  
  def update
    current_user.update(admin_params)
    render json: {success: true}
  end

  private 

  def admin_params
    params.require(:admin).permit(:email, :password)
  end
end