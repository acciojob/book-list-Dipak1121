//your JS code here. If required.
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", onClick);
let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let tbody = document.getElementById("book-list");
function onClick(){
	let tr = document.createElement("tr");
	tr.innerHTML = `<td>${title.value}</td><td>${author.value}</td><td>${isbn.value}</td><td><button class="cancel-btn" onClick="onCancelBtn(this)">X</button></td>`;
	tbody.appendChild(tr);
}

function onCancelBtn(element){
    element.parentNode.parentNode.remove();
}
