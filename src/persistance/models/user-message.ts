'use strict';

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';

interface IUserMessage {
    name: string;
    message: string;
}

interface IMessageDocument extends IUserMessage, mongoose.Document { }

const _schema: mongoose.Schema = new mongoose.Schema({
    name: String,
    message: String,
    created: {
        type: Date,
        default: Date.now
    }
}).pre('save', function(next) {
   this.updated = new Date();
    next();
});

const _model = mongoose.model<IMessageDocument>('UserMessage', _schema);

export class UserMessages {
    static create(message: IUserMessage): Promise<UserMessage> {
        return new Promise<UserMessage> ((resolve, reject) => {
            _model.create(message).onResolve((err, message) => {
                err ? reject(err) : resolve(new UserMessage(message));
            });
        });
    }
}

export class UserMessage implements IUserMessage{
    public name: string;
    public message: string;

    constructor(document: { name: string, message: string }) {
        this.name = document.name;
        this.message = document.message;
    }
}