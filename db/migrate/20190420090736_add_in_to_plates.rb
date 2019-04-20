class AddInToPlates < ActiveRecord::Migration[5.2]
  def change
    add_column :plates, :in, :string
  end
end
