/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

import {RelationshipRepository} from "./repository/relationship.repository";
import {RelationshipModel} from "./models/relationship/relationship.model";
import {ValidateMiddleware} from "./middlewares/validator.middleware";
import {NewMessageDto} from "./dto/newMessage.dto";


export const helloWorld = onRequest(ValidateMiddleware(NewMessageDto,request, response) => {

  const relationshipRepository: RelationshipRepository = new RelationshipRepository();
  const relationship: RelationshipModel | null = await relationshipRepository.getRelationShipById(request.body.groupId);

  response.send(relationship!.toEntity().toString());
});
