window.addEventListener("DOMContentLoaded", createMainButtons());

function createMainButtons() {
  fetch("data.json")
    .then(function (response) {
      return response;
    })
    .then(function (data) {
      return data.json();
    })
    .then(function (obj) {
      const main = obj.main;
      const buttons = main.map(
        (data) =>
          `<li class="${data.buttonClassList}" >
            <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createInnerButtons(event)">
            ${data.buttonTextContent}
            </a>
            </li>`
      );
      document.querySelector(".lists").innerHTML = buttons.join(""); //lilili
    })
    .catch(function (error) {
      console.log("Fetch problem show: " + error.message);
    });
}

function createInnerButtons(event) {
  event.preventDefault();
  fetch("data.json")
    .then(function (response) {
      return response;
    })
    .then(function (data) {
      return data.json();
    })
    .then(function (obj) {
      const id = event.target.id;
      switch (id) {
        case "islem":
          back = `<a href="index.html" class="${obj.anchor.buttonClassList}">Anasayfa</a>`;
          const islemKaydi = obj.islemKaydı;
          buttons = islemKaydi.map(
            (data) =>
              `<li class="${data.buttonClassList}" >
              <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createInnerButtons(event)">
              ${data.buttonTextContent}</a></li>`
          );
          break;
        case "durum":
          back =`<a href="index.html" class="${obj.anchor.buttonClassList}" >Anasayfa</a>`;
          const durumTespit = obj.durumTespit;
          buttons = durumTespit.map(
            (data) =>
              `<li class="${data.buttonClassList}" >
                <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createInnerButtons(event)">
                ${data.buttonTextContent}</a></li>`
          );
          break;
        case "otobüs":
          const otobüs = obj.otobüs;
          buttons = otobüs.map(
            (data) =>
              `<li class="${data.buttonClassList}" >
                  <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}">
                  ${data.buttonTextContent}</a></li>`
          );
          break;
        case "durak":
          const durak = obj.durak;
          buttons = durak.map(
            (data) =>
              `<li class="${data.buttonClassList}" >
                    <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}">
                    ${data.buttonTextContent}</a></li>`
          );
          break;
        case "aktarmaNoktası":
          const aktarmaNoktası = obj.aktarmaNoktası;
          buttons = aktarmaNoktası.map(
            (data) =>
              `<li class="${data.buttonClassList}" >
                      <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}">
                      ${data.buttonTextContent}</a></li>`
          );
          break;
      }
      document.querySelector(".back").innerHTML = back;
      document.querySelector(".lists").innerHTML = buttons.join(""); //lilili
    })
    .catch(function (error) {
      console.log("Fetch problem show: " + error.message);
    });
}
