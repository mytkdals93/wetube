import axios from "axios";

const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};
const deleteComment = (comment) => {
  commentList.removeChild(comment);
  decreaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const commentId = comment.dataset.indexNumber;
  const response = await axios({
    url: `/api/delete/${videoId}/comment`,
    method: "POST",
    data: {
      commentId,
    },
  });
  if (response.status === 200) {
    deleteComment(comment);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const handleSubmit = (event) => {
  const comment = event.target.parentElement;
  sendComment(comment);
};

function init() {
  commentList.querySelectorAll("li>i").forEach((e) => {
    e.addEventListener("click", handleSubmit);
  });
}
if (commentList) {
  init();
}
