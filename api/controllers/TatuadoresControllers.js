const database = require('../models')

class TatuadoresControllers {
    static async pegaTodosOsTatuadores(req, res){
      try {
        const todosTatuadores = await database.Tatuadores.findAll()
        return res.status(200).json(todosTatuadores)
      } catch (error) {
        return res.status(500).json(error.message)
        }
      }

      static async mostraUmTatuador(req, res) {
        const { id } = req.params
        try {
          const umTatuador = await database.Tatuadores.findOne( { 
            where: { 
              id: Number(id) 
            }
          })
          return res.status(200).json(umTatuador)
        } catch (error) { 
          return res.status(500).json(error.message)
        }
      }

      static async criaTatuador(req, res) {
        const novoTatuador = req.body
        try {
          const novoTatuadorCriado = await database.Tatuadores.create(novoTatuador)
          return res.status(200).json(novoTatuadorCriado)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      //atualizar um registro
      static async atualizeTatuadores(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
          await database.Tatuadores.update(novasInfos, { where: { id: Number(id) }})
          const tatuadorAtualizado = await database.Tatuadores.findOne( { where: { 
          id: Number(id) }})
          return res.status(200).json(tatuadorAtualizado)
        } catch (error) {
         return res.status(500).json(error.message)
        }

      }

      //deletar um registro

    }    
  
    module.exports = TatuadoresControllers
