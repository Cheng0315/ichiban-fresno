# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Admin.create(email: 'admin@admin.com', password: 'admin')

Plate.create(name: 'Ichiban Roll', description: 'In: Spicy Tuna (raw), Out: Deep ried', price: 9.25, category_id: 1, admin_id: 1)
Plate.create(name: 'Spicy Tuna Tempura', description: 'In: Spicy Tuna (raw), Out: Deep ried, green onion, fish eggs', price: 8.95, category_id: 2, admin_id: 1)
Plate.create(name: 'Chicken Teriyaki Roll', description: 'In: Crabmeat, avocado, grilled chicken', price: 9.25, category_id: 3, admin_id: 1)
Plate.create(name: "Beef Teriyaki Roll", description: 'In: Crabmeat, avocado, grilled beef', price: 10.95, category_id: 4, admin_id: 1)