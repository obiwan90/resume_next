import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface Country {
    name: {
        en: string;
        zh: string;
        ja: string;
    };
    coordinates: [number, number];
    type?: string;
    highlights: {
        en: string[];
        zh: string[];
        ja: string[];
    };
    color: string;
}

interface TravelMapProps {
    visitedCountries: Country[];
    plannedCountries: Country[];
    lang: 'en' | 'zh' | 'ja';
    translations: {
        visitedPlaces: string;
        plannedPlaces: string;
    };
}

const TravelMap = ({ visitedCountries, plannedCountries, lang, translations }: TravelMapProps) => {
    const placeLabels = {
        en: {
            visited: "Places visited:",
            planned: "Places to visit:"
        },
        zh: {
            visited: "去过的地方：",
            planned: "想去的地方："
        },
        ja: {
            visited: "訪問した場所：",
            planned: "訪問予定の場所："
        }
    };

    return (
        <div className="relative h-full">
            <MapContainer
                key={lang}
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
                        key={country.name[lang]}
                        position={[country.coordinates[1], country.coordinates[0]]}
                    >
                        <Popup>
                            <div className="p-3 min-w-[200px]">
                                <h3 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">
                                    <span>✈️</span> {country.name[lang]}
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">{placeLabels[lang].visited}</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {country.highlights[lang].map((highlight, index) => (
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
                        key={country.name[lang]}
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
                                    <span>🎯</span> {country.name[lang]}
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">{placeLabels[lang].planned}</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {country.highlights[lang].map((highlight, index) => (
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
                            <span>✈️</span> {translations.visitedPlaces}
                        </h4>
                        <div className="space-y-1">
                            {visitedCountries.map((country) => (
                                <div key={country.name[lang]} className="text-sm text-muted-foreground">
                                    • {country.name[lang]}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <span>🎯</span> {translations.plannedPlaces}
                        </h4>
                        <div className="space-y-1">
                            {plannedCountries.map((country) => (
                                <div key={country.name[lang]} className="text-sm text-muted-foreground">
                                    • {country.name[lang]}
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