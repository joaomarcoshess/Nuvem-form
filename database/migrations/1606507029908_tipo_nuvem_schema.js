'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoNuvemSchema extends Schema {
  up () {
    this.create('tipo_nuvems', (table) => {
      table.increments()
      table.string("nome", 45).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_nuvems')
  }
}

module.exports = TipoNuvemSchema
