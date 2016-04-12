'use strict';

import * as mongoose from 'mongoose';
import { HOST } from '../../config/mongo';

mongoose.connect(HOST);

export let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
   console.log('db connected');
});