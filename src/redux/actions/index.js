import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
