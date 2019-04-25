# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
admin = Admin.create(email: 'admin@admin.com', password: 'admin')

admin.plates.create(name: 'Ichiban Roll', in: 'In: Spicy Tuna (raw)', out: 'Out: Deep fried', price: 9.25, category_id: 1, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic1.png"), filename: 'pic1.png')

admin.plates.create(name: 'Spicy Tuna Tempura', in: 'In: Spicy Tuna (raw)', out: 'Out: Deep fried, green onion, fish eggs', price: 8.95, category_id: 1, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic2.png"), filename: 'pic2.png')

admin.plates.create(name: 'Chicken Teriyaki Roll', in: 'In: Crabmeat, avocado, grilled chicken', out: 'Out: Deep fried, green onion, fish eggs', price: 9.25, category_id: 1, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic3.png"), filename: 'pic3.png')

admin.plates.create(name: "Beef Teriyaki Roll", in: 'In: Crabmeat, avocado, grilled beef', out: 'Out: Deep fried, green onion, fish eggs', price: 10.95, category_id: 2, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic4.png"), filename: 'pic4.png')

admin.plates.create(name: 'Chicken Teriyaki Roll', in: 'In: Crabmeat, avocado, grilled chicken', out: 'Out: Deep fried, green onion, fish eggs', price: 9.25, category_id: 2, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic3.png"), filename: 'pic3.png')

admin.plates.create(name: 'Spicy Tuna Tempura', in: 'In: Spicy Tuna (raw)', out: 'Deep fried, green onion, fish eggs', price: 8.95, category_id: 2, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic2.png"), filename: 'pic2.png')

admin.plates.create(name: 'Spicy Tuna Tempura', in: 'In: Spicy Tuna (raw)', out: 'Deep fried, green onion, fish eggs', price: 8.95, category_id: 3, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic2.png"), filename: 'pic2.png')

admin.plates.create(name: 'Ichiban Roll', in: 'In: Spicy Tuna (raw)', out: 'Deep fried', price: 9.25, category_id: 3, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic1.png"), filename: 'pic1.png')

admin.plates.create(name: 'Chicken Teriyaki Roll', in: 'In: Crabmeat, avocado, grilled chicken', price: 9.25, category_id: 3, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic3.png"), filename: 'pic3.png')

admin.plates.create(name: 'Chicken Teriyaki Roll', in: 'In: Crabmeat, avocado, grilled chicken', out: 'Out: Deep fried, green onion, fish eggs', price: 9.25, category_id: 4, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic3.png"), filename: 'pic3.png')

admin.plates.create(name: 'Ichiban Roll', in: 'In: Spicy Tuna (raw)', out: 'Deep fried', price: 9.25, category_id: 4, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic1.png"), filename: 'pic1.png')

admin.plates.create(name: "Beef Teriyaki Roll", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', in: 'In: Crabmeat, avocado, grilled beef', out: 'Lorem ipsum dolor sit amet,  ligula eget dolor.', price: 10.95, category_id: 4, admin_id: 1)
admin.plates.last.image.attach(io: File.open("public/images/pic4.png"), filename: 'pic4.png')