const placesData = {
    bengaluru: {
        name: "Bengaluru",
        placesToVisit: ["Lalbagh Botanical Garden", "Cubbon Park", "Bangalore Palace","ISKCON Temple","Vidhana Soudha","Bannerghatta Biological Park"],
        hotels: ["Hotel 1", "Hotel 2", "Hotel 3"],
        famousThings: ["Famous Thing 1", "Famous Thing 2", "Famous Thing 3"],
        thingsToDo: ["Activity A", "Activity B", "Activity C"],
        stayWithGoodView: ["Stay X", "Stay Y", "Stay Z"],
        travelInfo: "By road or train...",
        shoppingPlaces: ["Commercial Street", "Brigade Road", "UB City","MG Road","Chickpet Market"],
    },
    mysore: {
        name: "Mysore",
        placesToVisit: ["Mysore palace", "Sri Chamundeshwari Temple", "Sri Chamarajendra Zoological Gardens"],
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        famousThings: ["Famous Thing A", "Famous Thing B", "Famous Thing C"],
        thingsToDo: [" Experience the grandeur of Mysore Palace", "climb Chamundi Hill", "enjoy the musical fountains at Brindavan Gardens"],
        stayWithGoodView: ["Stay P", "Stay Q", "Stay R"],
        travelInfo: "By train or bus...",
        shoppingPlaces: [" Devaraja Market for local products", "Government Silk Factory for silk sarees", "Cauvery Handicrafts Emporium for crafts"],

    },
    ooty: {
        name: "ooty",
        placesToVisit: ["Ooty Botanical Gardens", "Nilgiri Mountain Railway", "Ooty Lake","Doddabetta Peak","Rose Garden"],
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        famousThings: ["Famous Thing A", "Famous Thing B", "Famous Thing C"],
        thingsToDo: ["Take a ride on the Nilgiri Mountain Railway", "enjoy a boat ride on Ooty Lake", "explore the lush gardens"],
        stayWithGoodView: ["Stay P", "Stay Q", "Stay R"],
        travelInfo: "By train or bus...",
        shoppingPlaces: [" Charring Cross for souvenirs", "Upper Bazaar for local produce", "Tibetan Market for winter wear"],
       
    },
    coimbatore: {
        name: "Coimbatore",
        placesToVisit: ["Marudhamalai Temple", "VOC Park and Zoo", "Dhyanalinga Temple","Adhiyogi statue"],
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        famousThings: ["Famous Thing A", "Famous Thing B", "Famous Thing C"],
        thingsToDo: ["Explore the various temples", "experience tranquility at Dhyanalinga Temple", "enjoy at Black Thunder Theme Park"],
        stayWithGoodView: ["Stay P", "Stay Q", "Stay R"],
        travelInfo: "By train or bus...",
        shoppingPlaces: ["RS Puram for textiles and clothing", "Oppanakara Street for traditional markets"],
    },
    palani: {
        name: "palani",
        placesToVisit: ["Palani Murugan Temple ", "Palani Hills", "Thiru Avinankudi Temple"],
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        famousThings: ["Visit the Palani Murugan Temple, take a hike in the Palani Hills."],
        thingsToDo: ["Activity X", "Activity Y", "Activity Z"],
        stayWithGoodView: ["Stay P", "Stay Q", "Stay R"],
        travelInfo: "By train or bus...",
        shoppingPlaces: [" Local markets around Palani Temple for religious artifacts and offerings."],
    },
    madurai: {
        name: "madurai",
        placesToVisit: ["Meenakshi Amman Temple", "Thirumalai Nayak Palace", "Gandhi Memorial Museum", "Alagar Koyil."],
        hotels: ["Hotel A", "Hotel B", "Hotel C"],
        famousThings: ["Famous Thing A", "Famous Thing B", "Famous Thing C"],
        thingsToDo: ["Explore the intricate architecture of Meenakshi Temple", "visit historical landmarks, enjoy the cultural heritage."],
        stayWithGoodView: ["Stay P", "Stay Q", "Stay R"],
        travelInfo: "By train or bus...",
        shoppingPlaces: ["Puthu Mandapam for textiles and handicrafts", "Vilachery Main Road for local markets."],
    }
    // Repeat similar data for other places...
};

function loadContent(place) {
    const contentDiv = document.getElementById("content");
    const data = placesData[place];

    let contentHTML = `<h2>${data.name}</h2>`;
    contentHTML += "<h3>Places to Visit:</h3>";
    contentHTML += "<ul>";
    data.placesToVisit.forEach((place) => {
        contentHTML += `<li>${place}</li>`;
    });
    contentHTML += "</ul>";

    contentHTML += "<h3>Hotels:</h3>";
    contentHTML += "<ul>";
    data.hotels.forEach((hotel) => {
        contentHTML += `<li>${hotel}</li>`;
    });
    contentHTML += "</ul>";

    contentHTML += "<h3>Famous Things:</h3>";
    contentHTML += "<ul>";
    data.famousThings.forEach((thing) => {
        contentHTML += `<li>${thing}</li>`;
    });
    contentHTML += "</ul>";

    contentHTML += "<h3>Things to Do:</h3>";
    contentHTML += "<ul>";
    data.thingsToDo.forEach((activity) => {
        contentHTML += `<li>${activity}</li>`;
    });
    contentHTML += "</ul>";

    contentHTML += "<h3>Stay with Good View:</h3>";
    contentHTML += "<ul>";
    data.stayWithGoodView.forEach((stay) => {
        contentHTML += `<li>${stay}</li>`;
    });
    contentHTML += "</ul>";

    contentHTML += "<h3>Travel Information:</h3>";
    contentHTML += `<p>${data.travelInfo}</p>`;

    contentHTML += "<h3>Shopping Places:</h3>";
    contentHTML += "<ul>";
    data.shoppingPlaces.forEach((shop) => {
        contentHTML += `<li>${shop}</li>`;
    });
    contentHTML += "</ul>";

    contentDiv.innerHTML = contentHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const place = link.getAttribute("href").substring(1);
            loadContent(place);
        });
    });
});

// ... (previous script.js content)

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const place = link.getAttribute("href").substring(1);
            loadContent(place);
        });
    });
});

// ... (previous script.js content)

// document.addEventListener("DOMContentLoaded", () => {
//     const links = document.querySelectorAll("nav a");
//     links.forEach((link) => {
//         link.addEventListener("click", (event) => {
//             event.preventDefault();
//             const place = link.getAttribute("href").substring(1);
//             loadContent(place);
//         });
//     });
// });


