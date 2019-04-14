class PlatesSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :category_id
end
