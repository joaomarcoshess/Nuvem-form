'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string("nome", 45).notNullable().unique()
      table.date("data_nascimentos").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
