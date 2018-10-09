
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';
import * as bodyParser from "body-parser";
import * as express from 'express';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const app = express();
const main = express();
const itemCollection = 'item';
const bidderCollection = 'bidder';
const bidCollection = 'bid';
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);

// **************************** ITEM ROUTES ****************************

// Add new item
app.post('/item', (req, res) => {
    firebaseHelper.firestore
        .createNewDocument(db, itemCollection, req.body);
    res.send('Create a new Item');
});

// Update new item
app.patch('/item/:itemId', (req, res) => {
    firebaseHelper.firestore
        .updateDocument(db, itemCollection, req.params.itemId, req.body);
    res.send('Update a new Item');
});

// View an item
app.get('/item/:itemId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, itemCollection, req.params.itemId)
        .then(doc => res.status(200).send(doc));
});

// View all items
app.get('/item', (req, res) => {
    firebaseHelper.firestore
        .backup(db, itemCollection)
        .then(data => res.status(200).send(data))
});

// Delete an item
app.delete('/item/:itemId', (req, res) => {
    firebaseHelper.firestore
        .deleteDocument(db, itemCollection, req.params.itemId);
    res.send('Document deleted');
});

// **************************** BID ROUTES ****************************

// Add new bid
app.post('/bid', (req, res) => {
    firebaseHelper.firestore
        .createNewDocument(db, bidCollection, req.body);
    res.send('Create a new Bid');
});

// Update new bid
app.patch('/bid/:bidId', (req, res) => {
    firebaseHelper.firestore
        .updateDocument(db, bidCollection, req.params.bidId, req.body);
    res.send('Update a new Bid');
});

// View a bid
app.get('/bid/:bidId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, bidCollection, req.params.bidId)
        .then(doc => res.status(200).send(doc));
});

// View all bids
app.get('/bid', (req, res) => {
    firebaseHelper.firestore
        .backup(db, bidCollection)
        .then(data => res.status(200).send(data))
});

// Delete a bid
app.delete('/bid/:bidId', (req, res) => {
    firebaseHelper.firestore
        .deleteDocument(db, bidCollection, req.params.bidId);
    res.send('Document deleted');
});

// **************************** BIDDER ROUTES ****************************

// Add new bidder
app.post('/bidder', (req, res) => {
    firebaseHelper.firestore
        .createNewDocument(db, bidderCollection, req.body);
    res.send('Create a new Bidder');
});

// Update new bidder
app.patch('/bidder/:bidderId', (req, res) => {
    firebaseHelper.firestore
        .updateDocument(db, bidderCollection, req.params.bidderId, req.body);
    res.send('Update a new Bidder');
});

// View an bidder
app.get('/bidder/:bidderId', (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, bidderCollection, req.params.bidderId)
        .then(doc => res.status(200).send(doc));
});

// View all bidders
app.get('/bidder', (req, res) => {
    firebaseHelper.firestore
        .backup(db, bidderCollection)
        .then(data => res.status(200).send(data))
});

// Delete an bidder
app.delete('/bidder/:bidderId', (req, res) => {
    firebaseHelper.firestore
        .deleteDocument(db, bidderCollection, req.params.bidderId);
    res.send('Document deleted');
});