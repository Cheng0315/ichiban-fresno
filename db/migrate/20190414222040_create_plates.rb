class CreatePlates < ActiveRecord::Migration[5.2]
  def change
    create_table :plates do |t|
      t.string :name
      t.string :description
      t.string :in
      t.string :out
      t.float :price
      t.integer :category_id
      t.belongs_to :admin

      t.timestamps
    end
  end
end
