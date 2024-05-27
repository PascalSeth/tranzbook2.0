import prisma from "@/app/lib/db";

const ghanaCapitals = [
    "Accra",         // Greater Accra
    "Kumasi",        // Ashanti
    "Sekondi-Takoradi", // Western
    "Koforidua",     // Eastern
    "Cape Coast",    // Central
    "Tamale",        // Northern
    "Bolgatanga",    // Upper East
    "Wa",            // Upper West
    "Ho",            // Volta
    "Sefwi Wiawso",  // Western North
    "Sunyani",       // Bono
    "Techiman",      // Bono East
    "Goaso",         // Ahafo
    "Dambai",        // Oti
    "Nalerigu",      // North East
    "Damongo"        // Savannah
];

async function seedLocations() {
    for (const capital of ghanaCapitals) {
        await prisma.location.create({
            data: {
                name: capital,
            }
        });
    }
}

seedLocations()
    .then(() => {
        console.log("Seeding completed.");
        prisma.$disconnect();
    })
    .catch((error) => {
        console.error("Error seeding locations:", error);
        prisma.$disconnect();
        process.exit(1);
    });
