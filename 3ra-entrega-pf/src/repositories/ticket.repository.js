export default class TicketRepository{
	constructor(ticketDao){
		this.ticketDao = ticketDao;
	};
	createTicket = async (user, products) => {
		return await this.ticketDao.createTicket(user, products);
	};
}