// import events from "../data/eventsData";

// export default function EventsComponent() {
//     return (
//         <div className="flex flex-col justify-between items-center w-auto h-screen">
//             {events.map((event, index) => (
//                 <div key={index} className="flex flex-row items-center w-full space-y-4">
//                 <div className="flex items-center justify-center w-1/4 h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
//                     <div>
//                         <h1 className="text-2xl font-bold">{event.name}</h1>
//                         <p>{event.date}</p>
//                         <p>{event.time}</p>
//                         <p>{event.location}</p>
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center w-3/4 h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
//                     <div>
//                         <h1 className="text-2xl font-bold">Event Description</h1>
//                         <p>{event.description}</p>
//                         <p>Event Video</p>
//                     </div>
//                 </div>
//             </div>
//             ))}
//         </div>
//     );
// }

import events from "../data/eventsData";

export default function EventsComponent() {
    return (
        <div className="grid grid-cols-4 gap-4 w-full h-screen p-8">
            {events.map((event, index) => (
                <div key={index} className="grid grid-cols-4 col-span-4 gap-4">
                    <div className="col-span-1 flex flex-col items-center justify-center h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
                        <h1 className="text-2xl font-bold">{event.name}</h1>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.location}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-center h-96 bg-white bg-opacity-80 text-black rounded-lg shadow-lg p-4">
                        <h1 className="text-2xl font-bold">Event Description</h1>
                        <p>{event.description}</p>
                        <p>Event Video</p>
                    </div>
                </div>
            ))}
        </div>
    );
}