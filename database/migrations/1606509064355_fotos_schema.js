'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FotosSchema extends Schema {
  up () {
    this.create('fotos', (table) => {
      table.increments()
      table.integer('tipo_id').unsigned().references('id').inTable('tipo_nuvems').onUpdate('cascade').onDelete('cascade')
      table.string('texto', 500).notNullable().unique()
      table.string('caminho', 255).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('fotos')
  }
}

module.exports = FotosSchema
