const sampleListings = require("./data");
const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/myLand");
    console.log("Connected to MongoDB");
}

const Listing = mongoose.model("Listing", {
    title: String,
    description: String,
    image: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

async function dataEntry() {
    try {
        // Clear existing data
        await Listing.deleteMany({});
        console.log("Cleared existing listings");
        
        // Transform the data before inserting
        const transformedListings = sampleListings.map(listing => ({
            ...listing,
            owner: '685512262e48a15681be439e'
        }));
        
        await Listing.insertMany(transformedListings);
        console.log(`Successfully seeded ${transformedListings.length} listings`);
        
        // Close the connection
        await mongoose.connection.close();
        console.log("Database connection closed");
        
    } catch (error) {
        console.error("Error seeding data:", error);
        await mongoose.connection.close();
        process.exit(1);
    }
}

// Run the seeding process
main()
    .then(() => dataEntry())
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });

