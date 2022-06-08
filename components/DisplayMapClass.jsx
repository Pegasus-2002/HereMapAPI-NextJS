// src/DisplayMapClass.js
import * as React from 'react';

export class DisplayMapClass extends React.Component {
    mapRef = React.createRef();

    state = {
        // The map instance to use during cleanup
        map: null
    };

    componentDidMount() {

        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "tKHFcIMhSnMSuZaHJZRV2oi8d_qWa12WEgLU1k8595U"
        });

        const defaultLayers = platform.createDefaultLayers();

        // Create an instance of the map
        const map = new H.Map(
            this.mapRef.current,
            defaultLayers.vector.normal.map,
            {
                // This map is centered over Europe
                center: { lat: 50, lng: 5 },
                zoom: 4,
                pixelRatio: window.devicePixelRatio || 1
            }
        );
    
        this.setState({ map });
    }

    componentWillUnmount() {
        // Cleanup after the map to avoid memory leaks when this component exits the page
        // this.state.map.dispose();
    }

    render() {
        return (
            // Set a height on the map so it will display
            <div ref={this.mapRef} style={{ height: "300px", width: '700px' }} />
        );
    }
}