class SessionsController < ApiController
  skip_before_action :require_login, only: [:create], raise: false

  def create
    if admin = Admin.validate_login(params[:email], params[:password])
      allow_token_to_be_used_only_once_for(admin)
      send_token_for_valid_login_of(admin)
    else
      render_unauthorized('Error with signin')
    end
  end

  def destroy
    sign_out
    render json: {sign_out: true}.to_json
  end

  private

  def send_token_for_valid_login_of(admin)
    render json: {token: admin.auth_token}
  end

  def allow_token_to_be_used_only_once_for(admin)
    admin.regenerate_auth_token
  end

  def sign_out
    current_user.invalidate_token
  end
end
