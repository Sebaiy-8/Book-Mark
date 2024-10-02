var nameInput = document.getElementById("siteName")
var urlInput = document.getElementById("url")
var addBtn = document.getElementById("add")


var bookMarkContainer=[]

if(localStorage.getItem("bookMark") != null  ){
    bookMarkContainer = JSON.parse(localStorage.getItem("bookMark"))
    displayData()
}

function addSite() {
    var bookMark ={
        name:nameInput.value,
        url:urlInput.value
    }
    bookMarkContainer.push(bookMark)
    localStorage.setItem("bookMark", JSON.stringify(bookMarkContainer))
    displayData()
    clearForm()
}
console.log(bookMarkContainer)

function displayData(){
    var cartona = ''
    for(var i = 0    ; i<bookMarkContainer.length ;i++   ){
        cartona += `
        
        <tr>
        <td>  ${[i+1]}  </td>
        <td>  ${bookMarkContainer[i].name}  </td>
        <td><button class="btn btn-danger" onclick="removeData(${i})"><i class="fa-regular fa-trash-can me-2"></i>Delete</button></td>
        <td>
        <button class="btn btn-primary"><a href="   ${bookMarkContainer[i].url} " target="_blank"><i class="fa-regular fa-eye me-2"></i>visit</a></button>
        </td>
    </tr>
        
        `
    }
    document.getElementById("tableData").innerHTML =cartona
}

function removeData(elementOfNum){
    bookMarkContainer.splice(elementOfNum , 1)
    localStorage.setItem("bookMark", JSON.stringify(bookMarkContainer))

    displayData()
}

var nameRegex= /^[A-Za-z_]{1,9}$/

function nameValid() {
    if(nameRegex.test(nameInput.value)){
        return true;
    }else{
        return false
    }
}
var urlRegex= /^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/

function urlValid() {
    if(urlRegex.test(urlInput.value)){
        return true;
    }else{
        return false;
    }
}
nameInput.onkeyup = function(){
    if(nameValid() && urlValid()){
        addBtn.removeAttribute("disabled");
    }else{
        addBtn.disabled = true;
    }
}

urlInput.onkeyup = function(){
    if(nameValid() && urlValid()){
        addBtn.removeAttribute("disabled");
    }else{
        addBtn.disabled = true;
    }
}



function clearForm(){
    nameInput.value=" ";
    urlInput.value=" ";
}