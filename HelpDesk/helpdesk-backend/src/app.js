import express from 'express';
import { tickets } from './data/tickets.js';
import { 
    getOpenTickets, 
    getHighPriorityTickets, 
    getTicketById, 
    getTicketByTitle
} from './utils/ticketUtils.js';

const app = express();

console.log("Tous les tickets:", tickets);
console.log("Tickets ouverts", getOpenTickets(tickets));
console.log("High Priority", getHighPriorityTickets(tickets));
console.log("Ticket 2", getTicketById(tickets, 2));

export default app;