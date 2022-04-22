import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function App(){
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    }, []);
        
    const takePicture = async () => {
        if (camera){
            const data=await camera.takePictureAsync(null);
            setImage(data.uri);
        }
    }

    if (hasCameraPermission === null) {
        return <Text>Succes</Text>;
    }

    if (hasCameraPermission === false){
        return <Text>Tidak Ada Akses Kamera</Text>;
    }

    return (
        <View style={{ flex:1 }}>
            <View style={styles.cameraContainer}>
                <Camera ref={ref => setCamera(ref)}
                style={styles.fixedRation}
                type={type}
                ratio={'1:1'}
                />
            </View>
            
            <Button title='Balik Kamera' color='green' onPress={() => {
                setType(type === Camera.Constants.Type.back 
                ? Camera.Constants.Type.front 
                : Camera.Constants.Type.back);
            }}></Button>

            <Button title='Ambil Gambar' color='green' onPress={() => takePicture()} />
            {image && <Image source={{ uri: image}} style={{ flex:1 }} />}

        </View>
    );
}
const styles = StyleSheet.create({
    cameraContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor:'#FFFACD'
    },
    fixedRation: {
        flex:1,
        aspectRatio:1,
    }
});