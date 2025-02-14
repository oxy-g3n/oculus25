import EventsComponent from "../../components/EventsLayout";

export default function EventsPage(){
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <h1 className= "text-5xl font-bold drop-shadow-lg">Events Page</h1>
            <EventsComponent/>
        </div>
    );
}