module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Tatuadores', [
			{
				nome: 'Ana Souza',
				telefone: '1196578-4569',
				endereco: 'Rua Inacio Teixeira N-45',
        bairro: 'Vila Marcela',
				valor_min: '150.00',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				telefone: '1194687-3546',
				endereco: 'Rua Texas N-68',
        bairro: 'Jardim das Fontes',
				valor_min: '250.00',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				telefone: '1197998-6478',
				endereco: 'Rua Clarissa dantas N-373',
        bairro: 'Vila Marcela',
				valor_min: '100.00',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				telefone: '1195443-4615',
				endereco: 'Rua Juvenal de Souza N-199',
        bairro: 'Jardim das Fontes',
				valor_min: '300.00',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				telefone: '1196442-3114',
				endereco: 'Rua João de Souza B. N-425',
        bairro: 'Jardim das Fontes',
				valor_min: '200.00',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				telefone: '1197993-5416',
				endereco: 'Rua Satelite Dioneia N-04',
        bairro: 'Vila Marcela',
				valor_min: '100.00',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Tatuadores', null, {})
  }
}
