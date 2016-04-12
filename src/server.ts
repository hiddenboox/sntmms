import * as ws from 'ws';
import {UserMessage, UserMessages} from './persistance/models/user-message';
import './persistance';

const port: number = process.env.PORT || 3000;
const WsServer = ws.Server;
const server = new WsServer({ port: port });

// server.on('connection', ws => {
//    ws.on('message', payload => {
//       try {
//           let data = JSON.parse(payload);
//           let message = new UserMessage(data);
//
//           UserMessages.create(message).then(userMessage =>{
//               broadcast(JSON.stringify(userMessage));
//           });
//       } catch(e) {
//           console.error(e.message);
//       }
//    });
// });
//
// function broadcast(data: string): void {
//     server.clients.forEach(client => {
//         client.send(data);
//     })
// }

UserMessages.create(new UserMessage({name: 'DUPAAAAAAAAAA', message: 'HELLO'}))
    .then(d => console.log('SUCCESS', d))
    .catch(err => console.log('ERROR', err));

console.log(`Server is runnig on port ${port}`);