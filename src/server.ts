import {UserMessage, UserMessages} from './persistance/models/user-message';
import './persistance';

UserMessages.create(new UserMessage({name: 'INITIAL NAME', message: 'INITIAL MESSAGE'}))
    .then(d => console.log('SUCCESS', d))
    .catch(err => console.log('ERROR', err));

