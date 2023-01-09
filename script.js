let data = null;

window.addEventListener("DOMContentLoaded", createMainButtons());
function createMainButtons() {
  fetch("data.json")
    .then(function (data) {
      return data.json();
    })
    .then(function (obj) {
      data = obj;
      setHeader(obj.main_page.header);
      setButtons(obj.main_page.buttons);
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
}
