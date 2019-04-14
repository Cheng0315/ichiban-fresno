class Admin < ApplicationRecord
  has_many :plates
  has_secure_password
end