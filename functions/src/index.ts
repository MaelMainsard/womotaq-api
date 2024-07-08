/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

import {plainToInstance} from 'class-transformer';
import { validate } from 'class-validator';
import { NewMessageDto } from './dto/new_message.dto';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// @ts-ignore
export const helloWorld = onRequest(async (request, response) => {

  const createUserDto = plainToInstance(NewMessageDto, request.body);

  // Valider les données
  const errors = await validate(createUserDto);
  if (errors.length > 0) {
    // S'il y a des erreurs, retourner une réponse avec les erreurs
    return response.status(400).json({errors: errors.map(err => err.constraints)});
  }

  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
