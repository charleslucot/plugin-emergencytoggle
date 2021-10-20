exports.handler = function(context, event, callback) {

    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const syncSid = process.env.TWILIO_FLEX_SYNC_SID;
    const syncDoc = process.env.TWILIO_FLEX_EMERGENCY_DOC;
    const client = require('twilio')(accountSid, authToken);
    
    
     client.sync
          .services(syncSid)
          .documents(syncDoc)
          .fetch()
          .then((document) => {
            console.log(JSON.stringify(document.data));
            return callback(null, document.data);
        })
        .catch((error) => {
          console.log(error);
          return callback(error);
        });
    };