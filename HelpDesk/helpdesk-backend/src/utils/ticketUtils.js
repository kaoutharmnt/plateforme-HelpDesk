export function getOpenTickets(tickets){
    return tickets.filter(
        ticket => ticket.status === "OPEN"
    );
}
export function getHighPriorityTickets(tickets){
    return tickets.filter(
        ticket => ticket.priority === "HIGH"
    );
}
export function getTicketById(tickets,id){
    return tickets.find(
        ticket => ticket.id === id
    );
}
export function getTicketByTitle(tickets, title){
    return tickets.find(
        ticket => ticket.title === title
    );
}
