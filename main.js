var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "fa-bubble",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


for(let i=0; i<formData.length; i++){

  var elements =[]
  var item = formData[i]

  var fields = document.querySelector(".fields");

  if(item.type == "text") {

    let input = document.createElement("input")
    input.type = formData[i].type
    input.placeholder = formData[i].label
    input.id = formData[i].id
    elements.push(input)
  }

  if(item.type == "email") {

    let input = document.createElement("email")
    input.type = formData[i].type
    input.placeholder = formData[i].label
    input.id = formData[i].id
    elements.push(input)
  }

  if(item.type == "select") {

    let select = document.createElement("select")
    select.type = formData[i].select
    select.placeholder = formData[i].label
    select.id = formData[i].id
    elements.push(select)

    fields.appendChild(select)
    for(var index = 0; index < item.options.length; index++) {

      let options = document.createElement("option")

      options.textContent = formData[i].options[index].label
      options.value = item.options[index].value

      select.appendChild(options)
    }

  }

  if(item.type == "textarea") {

    let textarea = document.createElement("textarea")
    textarea.type = formData[i].type
    textarea.placeholder = formData[i].label
    textarea.id = formData[i].id
    elements.push(textarea)
  }

  if(item.type == "tel") {

    let input = document.createElement("input")
    input.type = formData[i].type
    input.placeholder = formData[i].label
    elements.push(input)
  }


    var html = `



     `

  var fields = document.querySelector(".fields");

console.log(elements)

  for(var index = 0;index<elements.length;index++) {
   fields.appendChild(elements[index])
  }


}
