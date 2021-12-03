import axios from "axios";
const Card = (article) => {
  console.log(article);
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  const div = document.createElement("div");
  div.classList.add("card");
  const div1 = document.createElement("div");
  div1.classList.add("headline");
  div1.textContent = article.headline;
  const div2 = document.createElement("div");
  div2.classList.add("author");
  const div3 = document.createElement("div");
  div3.classList.add("img-container");
  const img = document.createElement("img");
  img.src = article.authorPhoto;
  const span = document.createElement("span");
  span.textContent = `By ${article.authorName}`;
  div.appendChild(div1);
  div.appendChild(div2);
  div2.appendChild(div3);
  div2.appendChild(span);
  div3.appendChild(img);

  return div;
};
// Card();

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  // const body = document.querySelector(selector);

  //https was not working for me ******************

  axios
    .get(`http://localhost:5000/api/articles`)
    .then((res) => {
      // console.log(body);
      for (let i = 0; i < Object.keys(res.data.articles).length; i++) {
        res.data.articles[Object.keys(res.data.articles)[i]].forEach((e) => {
          document.querySelector(selector).appendChild(Card(e));
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
// cardAppender();
export { Card, cardAppender };
