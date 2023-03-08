import TicketModel from "./models/ticket.model.js";
import Connect from "./connect.js";

class Ticket{
	constructor(){
		Connect.getInstance();
	}

	createTicket = async (purchaser, code, products, amount) => {
		return await TicketModel.create({
			purchaser,
			code,
			products,
			amount
		})
	}

}

export default Ticket;