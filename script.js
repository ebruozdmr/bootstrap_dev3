let data = null;
let main_page_header = null;
let main_page_buttons = null;
let back = null;
let headerArray = [];
let buttonArray = [];

window.addEventListener("DOMContentLoaded", createMainButtons());
function createMainButtons() {
  fetch("data.json")
    .then(function (data) {
      return data.json();
    })
    .then(function (obj) {
      data = obj;
      main_page_header = obj.main_page.header;
      main_page_buttons = obj.main_page.buttons;

      setHeader(main_page_header); //obj.main_page.header
      setButtons(main_page_buttons); //obj.main_page.buttons
    })
    .catch(function (error) {
      console.log("Fetch problem show: " + error.message);
    });
}
function createInnerButtons(event) {
  event.preventDefault();
  obj = data;
  const id = event.target.id;
  switch (id) {
    case "islem":
      // back = `<a href="index.html" class="${obj.anchor.buttonClassList}">Anasayfa</a>`;
      setHeader(obj.islemKaydi_page.header);
      setButtons(obj.islemKaydi_page.buttons);
      break;
    case "durum":
      // back = `<a href="index.html" class="${obj.anchor.buttonClassList}" >Anasayfa</a>`;
      setHeader(obj.durumTespit_page.header);
      setButtons(obj.durumTespit_page.buttons);
      break;
    case "otobüs":
      setHeader(obj.otobus_page.header);
      setButtons(obj.otobus_page.buttons);
      break;
    case "durak":
      setHeader(obj.durak_page.header);
      setButtons(obj.durak_page.buttons);
      break;
    case "aktarma":
      setHeader(obj.aktarma_page.header);
      setButtons(obj.aktarma_page.buttons);
      break;
  }
  // document.querySelector(".back").innerHTML = back;
}
function setHeader(obj) {
  const newHeader = `<div class="${obj.divClassList}">
  <h1 class="${obj.headerClassList}" style="${obj.headerStyle}">
  ${obj.headerName}
  </h1>
  </div>`;
  headerArray.push(newHeader);
  console.log(headerArray);
  document.querySelector(".header").innerHTML = newHeader;
}
function setButtons(obj) {
  const newButtons = obj.map(
    (button) =>
      `<li class="${button.buttonClassList}" >
      <a href="${button.buttonUrl}" target="${button.urlTarget}"
      style="${button.buttonStyle}" class="${button.anchorClassList}" 
      id="${button.buttonId}" 
      ${button.buttonUrl === "#" ? 'onclick="createInnerButtons(event)"' : ""}>
      ${button.buttonName}</a></li>`
  );

  document.querySelector(".lists").innerHTML = newButtons.join("");
  buttonArray.push(newButtons);
  console.log(buttonArray);

  if (obj === main_page_buttons) return;
  back = `<a style="cursor:pointer;" onClick="setPreviousPage(event)">Back</a>`;
  document.querySelector(".back").innerHTML = back;
}

function setPreviousPage(event) {
  event.preventDefault();
  console.log(headerArray);
  console.log(buttonArray);

  document.querySelector(".header").innerHTML = "";
  document.querySelector(".header").innerHTML =
    headerArray[headerArray.length - 2];
  headerArray.pop();
  document.querySelector(".lists").innerHTML = "";
  document.querySelector(".lists").innerHTML =
    buttonArray[buttonArray.length - 2].join("");
  buttonArray.pop();
  if (buttonArray.find(element=>element.id== "islem")) {
    back = `<a style="display:none;">Back</a>`;
    document.querySelector(".back").innerHTML = back;
  }
}
