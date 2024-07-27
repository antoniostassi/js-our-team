// DATI PER ESERCIZIO:

// Name            Role                    Image
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


let staffUsers = [
    {
        name: "Wayne",
        lastname: "Barnett",
        role: "Founder & Ceo",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        lastname: "Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        lastname: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        lastname: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        lastname: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

let unorderedList = document.querySelector(div > ul);


staffUsers.forEach(element => {

    console.log(element.name, element.lastname, element.role, element.image);
    
    unorderedList.innerHTML += `<li>${element.name} ${element.lastname} ${element.role} ${element.image}</li>`;
    
});

