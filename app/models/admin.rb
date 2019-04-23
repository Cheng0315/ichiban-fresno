class Admin < ApplicationRecord
  has_many :plates
  has_secure_password
  has_secure_token :auth_token
end
