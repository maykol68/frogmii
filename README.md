# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
```ruby
  ruby "3.3.0"
```

* System dependencies
  instalar gemas de ruby on rails
  ```ruby
    bundle install
  ```
* Database creation
  debes tener instalado postgresql en tu sistema con un user llamado maymine y el password: maicollo1006 o puedes ir al database.yml y cambiarlo 
  ```ruby
    rails db:create
  ```

* Database initialization
```ruby
rails db:migrate
```

* Services (task)
  Cuando ejecutes esta task automaticamente se van a cargar la earthquakes en tu base de datos 
```ruby
  rails mi_tarea:ejecutar
```

* Filtros
  1.Al filtrar por mag_type tiene que ir separado por comas ej: [mag_type]=mw,ml,mlg.
  2. Al colocar el numero de earthquakes que quieres por pagina este no debe sobrepasar los 1000 si sobre pasa los 1000 solamente te traera 1000.
  [x] http://localhost:3000/earthquakes?filters[mag_type]=mw&page=1&per_page=2000 

