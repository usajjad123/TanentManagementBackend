import { Router } from 'express';
import { getNewTicket_, postNewTicket_ } from "../NewTickets/NewTickets";
export const feedBackRouter = Router();

feedBackRouter.get('/new-ticket', getNewTicket_);
// feedBackRoutes.post('/put-new-ticket', postNewTicket_);