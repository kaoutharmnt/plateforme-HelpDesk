/*import {createServer} from 'node:http';
import{tickets} from './data/tickets.js';

const PORT=3000;

const server= createServer((req, res)=>{
    console.log('${req.method} ${req.url}');

    // LES ROUTES SERONT AJOUTEES ICI
        if(req.method === 'GET' && req.url === '/'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({
                name: 'HelpDesk API',
                version:'1.0'
            }))
        }
        if (req.method === 'GET' && req.url === '/data/tickets') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify(tickets));
        }
        if (req.method === 'GET' && req.url.startsWith('/data/tickets/')) {
            const parts = req.url.split('/');
            const id = Number(parts[3]);
            const ticket = tickets.find(t => t.id === id);
            res.setHeader('Content-Type', 'application/json');
            if (!ticket) {
               res.statusCode = 404;
               return res.end(JSON.stringify({ error: 'Ticket introuvable' }));
            }
            res.statusCode = 200;
            return res.end(JSON.stringify(ticket));
        }
})*/
import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`HelpDesk API : http://localhost:${PORT}`);
});

server.listen(PORT,()=>{
    console.log(`HelpDesk API : http://localhost:${PORT}`);
});