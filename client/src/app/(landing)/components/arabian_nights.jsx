export default function ArabianNights() {
    const images = [
        {
            src: "/images/arabian/palace.jpg",
            title: "Royal Palace",
            description: "Experience the grandeur of ancient Arabian architecture"
        },
        {
            src: "/images/arabian/bazaar.jpg",
            title: "Mystical Bazaar",
            description: "Explore the vibrant markets of the ancient world"
        },
        {
            src: "/images/arabian/desert.jpg",
            title: "Desert Adventures",
            description: "Journey through the mesmerizing sand dunes"
        },
        {
            src: "/images/arabian/lanterns.jpg",
            title: "Magic Lanterns",
            description: "Be enchanted by the glow of traditional lanterns"
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-amber-900 to-amber-600 overflow-hidden">
            <h2 className="text-5xl font-bold font-['Aref_Ruqaa_Ink'] mb-6 grad px-2">
                Arabian Nights
            </h2>
            <div className="max-w-4xl text-center px-4 mb-8">
                <p className="text-xl font-['Noto_Naskh_Arabic'] leading-relaxed text-white">
                    Experience the magic and mystery of the Arabian Nights at Oculus 2025.
                    Where technology meets tradition in a spectacular fusion of culture and innovation.
                </p>
            </div>

            {/* Image Scroller Container */}
            <div className="w-full h-[70vh] max-w-[95vw] mx-auto">
                <div className="h-full overflow-x-auto scrollbar-hide">
                    <div className="flex gap-8 p-4 min-w-max h-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="group h-full flex flex-col"
                            >
                                <div className="relative overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 h-[85%]">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="h-full w-[600px] object-cover cursor-pointer"
                                    />
                                </div>
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-2xl font-semibold text-white mb-2 font-['Aref_Ruqaa_Ink'] text-center">
                                        {image.title}
                                    </h3>
                                    <p className="text-lg text-gray-200 font-['Noto_Naskh_Arabic'] text-center max-w-[600px]">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 