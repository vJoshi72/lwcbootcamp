function beforeSubmit() {
    let inputDate = document.querySelector(".inputDate");
    let outputDate = document.querySelector(".outputDate");
    console.log("inputDate Value", inputDate.value);
    let formatedDate = new Date(inputDate.value).toLocaleDateString('en-IN');
    outputDate.value = formatedDate;
}