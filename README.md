# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
```ruby
  ruby "3.3.0"
```

* System dependencies
  ```ruby
    bundle install
  ```
* Configuration

* Database creation
  ```ruby
    rails db:create
  ```

* Database initialization
```ruby
rails db:migrate
```

* How to run the test suite

* Services (task)
  Cuando ejecutes esta task automaticamente se van a cargar la earthquakes en tu base de datos 
```ruby
  rails mi_tarea:ejecutar
```

* Filtros 
### http://localhost:3000/earthquakes?filters[mag_type]=mw&page=1&per_page=2000

