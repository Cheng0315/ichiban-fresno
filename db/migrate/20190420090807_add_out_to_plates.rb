class AddOutToPlates < ActiveRecord::Migration[5.2]
  def change
    add_column :plates, :out, :string
  end
end
