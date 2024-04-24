import WeatherProgbar from "@/app/ui/weather-progbar/weather-progbar";
import { FaCloudShowersHeavy,FaMusic  } from "react-icons/fa";

export default function Page() {
    //make list responsive
    return (
        <div className="starting-screen">
            <div className="scroll-container">
                <div className="scroll-item">
                    <div className="scroll-item-logo">
                    <FaCloudShowersHeavy style={{width: '20px',height:'20px'}} />
                    </div>
                    <div className="scroll-item-short-info">
                        <p>WEATHER</p>
                            <WeatherProgbar/>
                        <p>47</p>
                    </div>
                </div>
            </div>
        </div>
   )
}