"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(
  params: any
) {
  // make an async to the api > create question
  // contain all the form values
  // navigate to the home page
  // eslint-disable-next-line no-empty
  try {
    connectToDatabase();
  } catch (error) {}
}
