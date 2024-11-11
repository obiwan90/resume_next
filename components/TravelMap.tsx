import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface Country {
    name: string;
    nameZh: string;
    coordinates: [number, number];
    type?: string;
    highlights: string[];
    color: string;
}

interface TravelMapProps {
    visitedCountries: Country[];
    plannedCountries: Country[];
}

const TravelMap = ({ visitedCountries, plannedCountries }: TravelMapProps) => {
    return (
        <div className="relative h-full">
            <MapContainer
                center={[20, 100]}
                zoom={3}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* 已访问的国家 */}
                {visitedCountries.map((country) => (
                    <Marker
                        key={country.name}
                        position={[country.coordinates[1], country.coordinates[0]]}
                    >
                        <Popup>
                            <div className="p-3 min-w-[200px]">
                                <h3 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">
                                    <span>✈️</span> {country.nameZh}
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">去过的地方：</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {country.highlights.map((highlight, index) => (
                                            <li key={index} className="text-sm text-muted-foreground">
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* 计划去的国家 */}
                {plannedCountries.map((country) => (
                    <Marker
                        key={country.name}
                        position={[country.coordinates[1], country.coordinates[0]]}
                        icon={new Icon({
                            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                        })}
                    >
                        <Popup>
                            <div className="p-3 min-w-[200px]">
                                <h3 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                                    <span>🎯</span> {country.nameZh}
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">想去的地方：</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {country.highlights.map((highlight, index) => (
                                            <li key={index} className="text-sm text-muted-foreground">
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* 旅行足迹图例 */}
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg shadow-lg backdrop-blur-sm z-[1000]">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <span>✈️</span> 已去过的地方
                        </h4>
                        <div className="space-y-1">
                            {visitedCountries.map((country) => (
                                <div key={country.name} className="text-sm text-muted-foreground">
                                    • {country.nameZh}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <span>🎯</span> 计划去的地方
                        </h4>
                        <div className="space-y-1">
                            {plannedCountries.map((country) => (
                                <div key={country.name} className="text-sm text-muted-foreground">
                                    • {country.nameZh}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelMap;