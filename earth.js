cities = ["Jakarta", "Bandung", "Solo", "Yogyakarta"]

function city() {
    kota = document.getElementById("city")

    Kota = Math.floor(Math.random() * 4) 
    console.log (kota.innerText = "There's a beautiful city on earth called " + cities[Kota] + ".")
}

city()
