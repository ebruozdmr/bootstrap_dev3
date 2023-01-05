let buttons = null;
let obj=null;

// const data=JSON.parse(fetch("data.json"));
// console.log(data);

fetch("data.json")
  .then(function (response) {
    return response;
  })
  // config=Response{}
  .then(function (config) {
    return config.json();
  })
  //data= (4)[{},{},{},{}]  the array of config.json
  .then(function (obj) {
    console.log(obj);
    return obj;
  })
//   .then(function (obj) {
//     if (document.readyState === "complete") {
//       const main = obj.main;
//       //new array=buttons
//       buttons = main.map(
//         (data) =>
//           `<li class="${data.buttonClassList}" >
//                <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createButtons(event)">
//                ${data.buttonTextContent}
//                </a>
//                </li>`
//       );
//       console.log(buttons);
//     }
//     // {
//     //     document.getElementById('islem').onclick=function() {

//     //     }
//     // }

//     function createButtons(event) {
//       event.preventDefault();
//       const id = event.target.id;
//       switch (id) {
//         case "islem":
//           const islemKaydi = obj.islemKaydı;
//           buttons = islemKaydi.map(
//             (data) =>
//               `<li class="${data.buttonClassList}" >
//                            <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createButtons(event)">
//                            ${data.buttonTextContent}
//                            </a>
//                            </li>`
//           );
//           console.log(buttons);
//           break;
//         case "durum":
//           const durumTespit = obj.durumTespit;
//           buttons = durumTespit.map(
//             (data) =>
//               `<li class="${data.buttonClassList}" >
//                                <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createButtons(event)">
//                                ${data.buttonTextContent}
//                                </a>
//                                </li>`
//           );
//           console.log(buttons);
//           break;

//         default:
//           break;
//       }
//     }

//     document.querySelector(".lists").innerHTML = buttons.join(""); //lilili
//     //   const islem = document.querySelector("#islem");
//     //   console.log(islem);
//     //   islem.addEventListener("click", createButtons);
//   })

  .catch(function (error) {
    console.log("Fetch problem show: " + error.message);
  });

  

  

// function createButtons(event) {
//   event.preventDefault();
//   if (event.target.id === "islem") {
//     fetch("islemKaydi.json")
//       .then(function (response) {
//         return response;
//       })
//       // data=Response{}
//       .then(function (config) {
//         return config.json();
//       })
//       //data= (4)[{},{},{},{}]  the array of config.json
//       .then(function (array) {
//         //new array=data
//         buttons = array.map(
//           (data) =>
//             `<li class="${data.buttonClassList}">
//      <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createButtons(event)">
//      ${data.buttonTextContent}
//      </a>
//      </li>`
//         );

//         document.querySelector(".lists").innerHTML = buttons.join(""); //lilili
//       })

//       .catch(function (error) {
//         console.log("Fetch problem show: " + error.message);
//       });
//   } else if (event.target.id === "durum") {
//     fetch("durumTespit.json")
//       .then(function (response) {
//         return response;
//       })
//       // data=Response{}
//       .then(function (config) {
//         return config.json();
//       })
//       //data= (4)[{},{},{},{}]  the array of config.json
//       .then(function (array) {
//         //new array=data
//         const buttons = array.map(
//           (data) =>
//             `<li class="${data.buttonClassList}" >
//      <a href="${data.buttonUrl}" target="${data.urlTarget}" style="${data.buttonStyle}" class="${data.anchorClassList}" id="${data.buttonId}" onclick="createButtons(event)">
//      ${data.buttonTextContent}
//      </a>
//      </li>`
//         );

//         document.querySelector(".lists").innerHTML = buttons.join(""); //lilili
//       })

//       .catch(function (error) {
//         console.log("Fetch problem show: " + error.message);
//       });
//   }
// }

// const lists = document.querySelector(".lists"); //ul
// console.log(lists);
// const list = lists.children; //li li li
// console.log(list);

// function createButton(li) {
//   const button = document.createElement("a");
//   button.href = "#";
//   // button.target='_blank';
//   button.textContent = "text";
//   button.style="background-color: rgba(176, 0, 14, 1)";
//   console.log(button);
//     li.style="text-decoration:none";
//   li.appendChild(button);
//   return li;
// }

// for (let i = 0; i < list.length; i++) {
//   console.log(createButton(list[i]));
// }
