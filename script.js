/* ================= HOTEL DATA ================= */

let data = [

    ["Vijayawada", "Krishna Grand Hotel", 3200],
    ["Vijayawada", "River View Residency", 2800],
    ["Vijayawada", "Capital Comfort Hotel", 3500],
    ["Vijayawada", "Vijaya Palace", 4100],
    ["Vijayawada", "Golden Stay Inn", 2600],
    ["Vijayawada", "Elite Residency", 3800],

    ["Hyderabad", "Hyderabad Grand Palace", 5200],
    ["Hyderabad", "Charminar Residency", 3900],
    ["Hyderabad", "Pearl City Hotel", 4500],
    ["Hyderabad", "Royal Deccan Hotel", 5800],
    ["Hyderabad", "Metro Comfort Inn", 3400],
    ["Hyderabad", "Lake View Suites", 4900],

    ["Visakhapatnam", "Beach Grand Resort", 5500],
    ["Visakhapatnam", "Ocean Pearl Hotel", 4300],
    ["Visakhapatnam", "Vizag Comfort Inn", 3600],
    ["Visakhapatnam", "Sea Breeze Palace", 4800],
    ["Visakhapatnam", "Harbour View Hotel", 4100],
    ["Visakhapatnam", "Sunrise Residency", 3300],

    ["Bangalore", "Tech City Grand", 5000],
    ["Bangalore", "Garden City Hotel", 4400],
    ["Bangalore", "Urban Elite Inn", 3900],
    ["Bangalore", "Silicon Suites", 5600],
    ["Bangalore", "Green Leaf Residency", 3700],
    ["Bangalore", "Metro Plaza Hotel", 4600],

    ["Chennai", "Chennai Grand Hotel", 4700],
    ["Chennai", "Marina Bay Resort", 5300],
    ["Chennai", "Coastal Comfort Inn", 3800],
    ["Chennai", "Royal Marina Hotel", 4900],
    ["Chennai", "South Gate Residency", 3500],
    ["Chennai", "Blue Wave Hotel", 4200]
];


/* ================= HOTEL IMAGES ================= */

let img = [

    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",

    "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=600&q=80",

    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",

    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80",

    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",

    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80"
];


/* ================= DISPLAY HOTELS ================= */

function displayHotels() {

    let list = document.getElementById("list");

    list.innerHTML = "";

    data.forEach((x, i) => {

        list.innerHTML += `

            <div class="card">

                <img src="${img[i % img.length]}"
                     alt="${x[1]}">

                <h3>${x[1]}</h3>

                <p>${x[0]}</p>

                <p class="price">
                    ₹${x[2]} / night
                </p>

                <button
                    onclick="book('${x[1]}',
                    '₹${x[2]} / night')">

                    Book Now

                </button>

            </div>

        `;

    });
}

displayHotels();


/* ================= LOGIN ================= */

function checkLogin() {

    let selectedRole =
        document.getElementById("role").value;

    let userEmail =
        document.getElementById("email").value.trim();

    let userPassword =
        document.getElementById("password").value;

    let error =
        document.getElementById("error");


    /* ADMIN LOGIN */

    if (
        selectedRole === "admin" &&
        userEmail === "starkindustries@gmail.com" &&
        userPassword === "ironman"
    ) {

        alert("Admin Login Successful!");

        document.getElementById("loginPage")
            .style.display = "none";

        document.getElementById("adminPage")
            .style.display = "block";

        displayAdminHotels();

        return;
    }


    /* USER LOGIN */

    if (
        selectedRole === "user" &&
        userEmail === "karthik@gmail.com" &&
        userPassword === "sai"
    ) {

        alert("User Login Successful!");

        document.getElementById("loginPage")
            .style.display = "none";

        document.getElementById("main")
            .style.display = "block";

        return;
    }


    /* INVALID LOGIN */

    error.innerText =
        "Invalid role, email or password.";
}


/* ================= SEARCH ================= */

function find() {

    const query =
        document.getElementById("search")
        .value.trim().toLowerCase();

    const list =
        document.getElementById("list");

    if (!query) {

        displayHotels();

        return;
    }

    const matches = data.filter(x =>
        x[0].toLowerCase().includes(query) ||
        x[1].toLowerCase().includes(query)
    );

    list.innerHTML = "";

    if (matches.length === 0) {

        list.innerHTML =
            "<p>No hotels found.</p>";

        return;
    }

    matches.forEach(x => {

        const index = data.indexOf(x);

        list.innerHTML += `

            <div class="card">

                <img src="${img[index % img.length]}">

                <h3>${x[1]}</h3>

                <p>${x[0]}</p>

                <p class="price">
                    ₹${x[2]} / night
                </p>

                <button
                    onclick="book('${x[1]}',
                    '₹${x[2]} / night')">

                    Book Now

                </button>

            </div>

        `;

    });
}


/* ================= BOOKING ================= */

function book(hotelName, hotelPrice) {

    document.getElementById("hotel")
        .value = hotelName;

    document.getElementById("price")
        .value = hotelPrice;

    document.getElementById("bookBox")
        .style.display = "flex";
}


function closeBox() {

    document.getElementById("bookBox")
        .style.display = "none";
}


function confirmBooking() {

    const name =
        document.getElementById("customerName")
        .value.trim();

    const email =
        document.getElementById("customerEmail")
        .value.trim();

    const checkin =
        document.getElementById("checkin").value;

    const checkout =
        document.getElementById("checkout").value;

    const hotel =
        document.getElementById("hotel").value;


    if (!name || !email ||
        !checkin || !checkout) {

        alert("Please fill all booking details.");

        return;
    }


    if (new Date(checkout) <=
        new Date(checkin)) {

        alert(
            "Check-out date must be after check-in date."
        );

        return;
    }


    alert(
        "Booking Confirmed!\n\n" +
        "Hotel: " + hotel + "\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Check-in: " + checkin + "\n" +
        "Check-out: " + checkout
    );

    closeBox();
}


/* ================= SIGN IN ================= */

function showSignIn() {

    alert(
        "Demo User Account\n\n" +
        "Email: karthik@gmail.com\n" +
        "Password: sai"
    );
}


/* ================= LOGOUT ================= */

function logout() {

    document.getElementById("main")
        .style.display = "none";

    document.getElementById("loginPage")
        .style.display = "flex";

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";
}


function adminLogout() {

    document.getElementById("adminPage")
        .style.display = "none";

    document.getElementById("loginPage")
        .style.display = "flex";

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";
}


/* ================= ADMIN ================= */

function displayAdminHotels() {

    const list =
        document.getElementById("adminList");

    list.innerHTML = "";

    data.forEach((x, i) => {

        list.innerHTML += `

            <tr>

                <td>${i + 1}</td>

                <td>${x[0]}</td>

                <td>${x[1]}</td>

                <td>₹${x[2]}</td>

                <td>

                    <button
                        class="delete-btn"
                        onclick="deleteHotel(${i})">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

    updateStatistics();
}


/* ADD HOTEL */

function addHotel() {

    const city =
        document.getElementById("newCity")
        .value.trim();

    const hotel =
        document.getElementById("newHotel")
        .value.trim();

    const price =
        Number(
            document.getElementById("newPrice")
            .value
        );

    const message =
        document.getElementById("adminMessage");


    if (!city || !hotel || !price) {

        message.innerText =
            "Please enter valid details.";

        return;
    }


    data.push([
        city,
        hotel,
        price
    ]);


    document.getElementById("newCity").value = "";

    document.getElementById("newHotel").value = "";

    document.getElementById("newPrice").value = "";


    message.innerText =
        "Hotel added successfully!";


    displayAdminHotels();

    displayHotels();
}


/* DELETE HOTEL */

function deleteHotel(index) {

    if (confirm("Delete this hotel?")) {

        data.splice(index, 1);

        displayAdminHotels();

        displayHotels();
    }
}


/* STATISTICS */

function updateStatistics() {

    document.getElementById("hotelCount")
        .innerText = data.length;

    const cities =
        new Set(data.map(x => x[0]));

    document.getElementById("cityCount")
        .innerText = cities.size;
}


/* CLOSE MODAL */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("bookBox");

        if (event.target === modal) {

            closeBox();

        }
    }
);