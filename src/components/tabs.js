import axios from "axios";

const Tabs = (topics) => {
  // <div>
  //   // console.log(topics);
  //   // TASK 3
  //   // ---------------------
  //   // Implement this function which takes an array of strings ("topics") as its only argument.
  //   // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  //   // then the function returns the markup below.
  //   // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  //   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //   //
  //   // <div class="topics">
  //   //   <div class="tab">javascript</div>
  //   //   <div class="tab">bootstrap</div>
  //   //   <div class="tab">technology</div>
  //   // </div>
  //   //

  // </div>

  const topicsDiv = document.createElement("div");

  topicsDiv.classList.add("topics");

  for (let i = 0; i < topics.length; i++) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topics[i];
    topicsDiv.appendChild(tab);
  }

  return topicsDiv;
};

const tabsAppender = (selector) => {
  axios
    .get("http://localhost:5000/api/topics")
    .then((resp) => {
      const data = Tabs(resp.data.topics);
      document.querySelector(selector).appendChild(data);
    })
    .catch((err) => {
      console.error(err + " something is not working 😢");
    });
};

export { Tabs, tabsAppender };
