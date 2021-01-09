import axios from "axios";
import { handleSubmit as handleDelete } from "./deleteComment";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};
const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const i = document.createElement("i");
  i.className = "fas fa-backspace";
  span.innerHTML = comment.text;
  // eslint-disable-next-line no-underscore-dangle
  li.dataset.indexNumber = comment._id;
  li.appendChild(span);
  li.appendChild(i);
  i.addEventListener("click", handleDelete);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(response.data);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}
if (addCommentForm) {
  init();
}
