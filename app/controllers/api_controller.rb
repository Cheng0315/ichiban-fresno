class ApiController < ApplicationController
  def require_login
    authenticate_token || render_unaithorized('Access Denied')
  end

  def current_user
    @current_user ||= authenticate_token
  end

  protected

  def render_unaithorized(msg)
    errors = {errors: [detail: msg]}
    render json: errors, status: :unauthorized
  end

  private

  def authenticate_token
    authenticate_with_http_token do |token, options|
      Admin.find_by(auth_token: token)
    end
  end
end
