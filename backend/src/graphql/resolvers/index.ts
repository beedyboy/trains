 import * as Query from "./Query"
 import  * as Mutation from './Mutation'; 
 import { GraphQLUpload } from "graphql-upload";
const resolvers = {
    Upload:GraphQLUpload,
    Query,
    Mutation
};
export default resolvers;
// const authResolver = require('./auth');
// const eventsResolver = require('./events');
// const bookingResolver = require('./booking');


// const rootResolver = {
//     ...authResolver,
//     ...eventsResolver,
//     ...bookingResolver
// }
// module.exports = rootResolver;