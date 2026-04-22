const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else"
    : responseObj[userInput];
};

const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

const renderWelcomeMessage = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("chatbot-message", "welcome-wrapper");

  const text = document.createTextNode("Hi! How can I help you today?");
  wrapper.append(text);

  const recommended = document.createElement("span");
  recommended.classList.add("recommended-label");
  recommended.textContent = "Recommended";
  wrapper.append(recommended);

  const btn = document.createElement("button");
  btn.classList.add("option-btn");
  btn.textContent = "Receive notifications";
  btn.addEventListener("click", () => {
    // funcionalidad próxima
  });

  wrapper.append(btn);
  chatBody.append(wrapper);
};

renderWelcomeMessage();