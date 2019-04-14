# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Admin.create(email: 'admin@admin.com', password: 'admin')

Plate.create(name: 'California Roll', description: 'In: Crabmeat, avocado', price: 6.45, category_id: 1, admin_id: 1)
Plate.create(name: 'Spicy Tuna', description: 'In: Spicy Tuna (raw)', price: 7.25, category_id: 2, admin_id: 1)
Plate.create(name: 'Salmon Roll', description: 'In: Salmon (raw)', price: 7.25, category_id: 3, admin_id: 1)
Plate.create(name: "Sunbird's Roll", description: 'In: Crabmeat, avocado (deep fried)', price: 8.25, category_id: 4, admin_id: 1)