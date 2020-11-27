'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArquivoNuvemSchema extends Schema {
  up () {
    this.create('arquivo_nuvems', (table) => {
      table.increments()
      table.integer('paginas_id').unsigned().references('id').inTable('paginas').onUpdate('cascade').onDelete('cascade')
      table.integer('galeria_id').unsigned().references('id').inTable('galeria_nuvems').onUpdate('cascade').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('arquivo_nuvems')
  }
}

module.exports = ArquivoNuvemSchema
