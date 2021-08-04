use bookings; 
db.dropDatabase();

db.guests.insertMany([
    {
        guestName: "Akwasi", 
        guestEmail: "akwasi@codeclan.com",
        checkedInStatus: "yes"

    },
    {
        guestName: "Simon",
        guestEmail:"simon@codeclan.com",
        checkedInStatus:"no"
    },
    {
        guestName: "John",
        guestEmail:"john@codeclan.com",
        checkedInStatus: "yes"
    }
]);