exports.handler = function(context, event, callback) {
    
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const syncSid = process.env.TWILIO_FLEX_SYNC_SID;
    const syncDoc = process.env.TWILIO_FLEX_EMERGENCY_DOC;
    const client = require('twilio')(accountSid, authToken);
    
       client.sync
          .services(syncSid)
          .documents.create({
            data: {
              Status : 'Open'
            },
            uniqueName: syncDoc,
          })
          .then((document) => {
            console.log(JSON.stringify(document.sid));
            return callback(null, 'success');
          })
          .catch((error) => {
            console.log(error);
            return callback(error);
          });
      };