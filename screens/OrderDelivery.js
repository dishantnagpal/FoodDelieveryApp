import React from 'react';
import {
    View, 
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const OrderDelivery = () => {
    
    function renderMap() {
        return(
            <View style={{flex: 1}}>
                <MapView
                style={{flex: 1}}
                >

                </MapView>
            </View>
        ) 
    }

    return (
    <View style={{flex: 1}}>
        {renderMap()}
    </View>
    )
}
export default OrderDelivery;