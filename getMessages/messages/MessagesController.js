class MessagesController {
	constructor() {
		this.messages = {
			messages: [
			{
				id: '02f1adc4-fef8-4d41-ba15-a80a1be8a5ed',
				sender: 'Iwo',
				body: 'Hello!',
				timestamp: '1522062643508'
			},
			{
				id: 'f9ea4b1c-53ef-4e83-ba9a-b9e35baa91e8',
				sender: 'Rafał',
				body: 'Hello!',
				timestamp: '1522062750171'
			},
			{
				id: 'e52a9319-8cff-4aa6-8e58-f32f50ddf7e4',
				sender: 'Wojtek',
				body: 'Bye!',
				timestamp: '1522062757050'
			},
			]
		}
	}
	getMessages(req, res) {
		return res.status(200).json({messages: this.messages});
	}
}

module.exports = MessagesController;