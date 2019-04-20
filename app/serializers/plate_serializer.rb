class PlateSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :name, :price, :description, :category_id, :in, :out, :image_url

  def image_url
    return rails_blob_path(object.image, only_path: true)
  end
end
