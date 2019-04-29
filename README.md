# Ichiban-Fresno

Ichiban-Fresno is a restaurant web application. The application uses Rails API on the back end and React on the front end. 

When using the application, administrators or store owner can view information about the restaurant and create, update or delete dishes while users can only view information about the restaurant.

To login in as administrators, add '/admin' to the end of the application url then press enter. Then use the email 'admin@admin.com' and password 'admin' to login.

# Usage 

This application uses PostgreSQL as the database. To fully test out the functions of this application, please make sure you have PostgreSQL install before running the application.

To use the application, clone this repository, run bundle install, rails active_storage:install, rails db:create, rails db:migrate, rails db:seed, then foreman start.

# Contributing Bugfixes or Features

For submitting something back,

- Fork this repository
- Create a local development branch for the bugfix
- Commit a change, and push your local branch to your github fork
- Send me a pull request for your changes to be included

# LICENSE

Ichiban-Fresno is licensed under the MIT license (https://opensource.org/licenses/MIT).
