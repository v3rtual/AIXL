var oneitemlist = document.getElementsByClassName("question-and-submission-view fade-in");
var question = oneitemlist.item(0);
var prompt = "Near the end of the following content, there may be a question. If there is not, disregard what i am currently saying entirely. If there is, there will be some possible answers to the question, and after that, the word submit.  Your job is to answer the question with one of the following answers. The content begins now." + "\n" + question.innerText;
console.log(prompt);
navigator.clipboard.writeText(prompt);
