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
                  console.log(document.data.Status);
                 switch (document.data.Status)  {
                case "Open":
                client.sync
                          .services(syncSid)
                          .documents(syncDoc)
                          .update({
                            data: {
                              Status : 'Closed',
                            },
                          })
                          .then((document) => {
                            console.log('case1',`Documented Updated, Document SID: ${document.sid}`);
                            return callback(
                              null,
                              `Documented Updated, Document SID: ${document.sid}`
                            );
                          })
                          .catch((error) => {
                            console.log(error);
                            return callback(error);
                          });
                
                break;
                
                default:
                client.sync
                          .services(syncSid)
                          .documents(syncDoc)
                          .update({
                            data: {
                              Status : 'Open',
                            },
                          })
                          .then((document) => {
                            console.log('default', `Documented Updated, Document SID: ${document.sid}`);
                            return callback(
                              null,
                              `Documented Updated, Document SID: ${document.sid}`
                            );
                          })
                          .catch((error) => {
                            console.log(error);
                            return callback(error);
                          });
                break;
                        }
        });
    };
    