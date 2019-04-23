class AdminController < ApplicationController

  def sign_in
    @admin = Admin.find_by(params[:email])
    if @admin && @admin.authenticate(params[:password])
      session[:admin_id] = @admin.id
    else

    end
  end

  private

  def admins_params 
    params.require(admin).permit(:email, :password)
  end
end