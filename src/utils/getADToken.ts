// import { UserProfile } from "@auth0/nextjs-auth0/client";

// function (user:UserProfile , context:unknown, callback:any) {
//   // only do this for users from Azure AD
//   // or maybe for a specific connection
//   if (user.identities[0].provider !== 'waad')
//     return callback(null, user, context);

//   // To call Azure's Graph API we need an access token
//   // The access token can be either
//   //  - The access token given to the logged in user by the IdP (provided that it has
//   //    the necessary permissions)
//   //  - An access token obtained through the client credentials grant (
//   //    using the same client_id/key configured for the Azure AD connection, 
//   //    or a new set of credentials, obtained specifically for this).

//   // for simplicity, we will use the user's IdP access token
//   var aad_access_token = user.identities[0].access_token;

//   // call Azure's graph api to get information about the user
//   var baseUrl = 'https://graph.windows.net/'+ user.tenantid + '/users/'+ user.oid;
//   console.log('baseUrl:' + baseUrl);
//   var apiRequest = function(segment, nullEncoding, callback) {
//     var options = {
//       url: baseUrl + '/' + segment + '?api-version=1.6',
//       headers: {
//         'Authorization': 'Bearer ' + aad_access_token
//       }
//     };
//     if (nullEncoding) {
//       options.encoding = null;
//     }
//     console.log('Requesting to '+ options.url);
//     request(options, function(err, response, body){
//       if (err) {
//         console.log("Error when calling "+ options.url);
//         console.log(err);
//       }

//       callback(err, response, body);
//     });
//   };

//   var getThumbnail = function(cb) {
//     apiRequest('thumbnailPhoto', true, function(err, response, body) {
//       if (!err && response.statusCode === 200) {
//         user.thumbnailPhoto = "data:" + response.headers"content-type"] + ";base64," + new Buffer(body).toString('base64');
//       }
//       cb(err);
//     });
//   };


//   var getManager = function(cb) {
//     apiRequest('manager', false, function(err, response, body) {
//       if (!err && response.statusCode === 200) {
//         var manager = JSON.parse(body);
//         user.manager = manager.displayName;
//       }
//       cb(err);
//     });
//   };

//   var getDirectReports = function(cb) {
//     apiRequest('directReports', false, function(err, response, body) {
//       if (!err && response.statusCode === 200) {
//         user.directReports = ];
//         var directReports = JSON.parse(body).value;
//         directReports.forEach(function(person) {
//           user.directReports.push(person.displayName);
//         });
//       }
//       cb(err);
//     });
//   };

//   getThumbnail(function(err) {
//     getManager(function(err) {
//       getDirectReports(function(err) {
//         callback(null, user, context);
//       });
//     });
//   });
// }