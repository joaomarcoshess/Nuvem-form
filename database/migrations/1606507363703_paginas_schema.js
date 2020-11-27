'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaginasSchema extends Schema {
  up () {
    this.create('paginas', (table) => {
      table.increments()
      table.text("texto", 1000).notNullable()
      table.string("tipo", 50).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('paginas')
  }
}

module.exports = PaginasSchema
