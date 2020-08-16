import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/**
 * ## Implement a simple Trivia Game
 *
 * This API will give you 10 random trivia questions:
 *
 *     https://opentdb.com/api.php?amount=10
 *
 * 1. Build a simple app that displays these questions in a list, where each list item contains:
 *     1. The text `Category: "{category}" | Difficulty: "{difficulty}"`
 *     2. The question, in a h2 element
 *     3. Each answer in a `<button>` element, displayed in random order.
 *     4. Display one question at a time, with prev/next buttons
 *
 * 2. When the player clicks on the answer, add a `.correct` or `.wrong` class to the
 *    list item that wraps the question, based on the correctness of the answer.
 *    Disable all the buttons once the answer is given.
 *
 * 3. Add the following logic for the score keeping:
 *     1. The player starts with 24 points. The goal is to reach 0.
 *     2. If they click on the right answer, we subtract 2 points if the question was easy, 4 if medium, 8 if hard.
 *        If they click on the wrong answer, we add 2 points if the question was easy, 4 if medium, 8 if hard.
 *     3. If they reach a score of exactly 0, display a "Game Over" message, and the number of answers given.
 *     4. Display the current score and the number of answers given in the top-right corner of the page.
 *
 * 4. Add a Leaderboard
 *     1. At the end of the game, ask the player their username and password and save it to a storage of your choice.
 *     2. Display the leaderboard with the top 10 players: their username, the date and their lowest number of answers.
 *     3. Display a "Play again!" button, that starts a new game.
 *     3. Once the user is in the system, they should be able to logout and access again with their username and password.
 */

ReactDOM.render(
  <React.StrictMode>
    <h1>Welcome to TrustLayer Trivia!</h1>
  </React.StrictMode>,
  document.getElementById("root")
);
