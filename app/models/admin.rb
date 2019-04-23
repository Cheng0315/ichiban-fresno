class Admin < ApplicationRecord
  has_many :plates
  validates_uniquesness_of :email
  has_secure_password
  has_secure_token :auth_token

  def invalidate_token
    self.update_columns(auth_token: nil)
  end

  def self.validate_login(email, password)
    admin = Admin.find_by(email: email)

    if admin && admin.authenticate(password)
      admin
    end
  end
end
