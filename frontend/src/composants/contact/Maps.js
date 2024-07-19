

// A remettre en marche que si API payant OK (mais useless si pas utilisation poussé)


//import React from 'react'
//import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

//const location = {
//    lat: 48.69052345254742,
//    lng: 2.2023919407001147
//}

//const containerStyle = { /* CSS */
//    width: '100%',
//    height: '100%',
//    borderRadius: '10px',
//    border: 'solid 3px #84429A'
//};

//function GoogleMaps() {

//    const { isLoaded } = useJsApiLoader({
//        id: 'google-map-script',
//        googleMapsApiKey: "AIzaSyD2kBEnDyF6SWYWYZ7nJIDGbGrG95IFSok"
//    })
//    // eslint-disable-next-line
//    const [map, setMap] = React.useState(null)

//    const onLoad = React.useCallback(function callback(map) {
//        //const bounds = new window.google.maps.LatLngBounds(location);
//        //map.fitBounds(bounds);
//        setMap(map)
//    }, [])

//    const onUnmount = React.useCallback(function callback(map) {
//        setMap(null)
//    }, [])

//    return isLoaded ? (
//        <GoogleMap
//            mapContainerStyle={containerStyle}
//            center={location}
//            onLoad={onLoad}
//            onUnmount={onUnmount}
//            zoom={12}
//        >
//            { /* Child components, such as markers, info windows, etc. */}
//            <Marker position={location} />
//        </GoogleMap>
//    ) : <></>
//};

//export default GoogleMaps;