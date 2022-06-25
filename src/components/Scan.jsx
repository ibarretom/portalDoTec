import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export function Scan({ showScanner = true, setShowScanner, setData }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedBox, setScannedBox] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    setScanned(showScanner);
  }, [showScanner]);

  const handleBarCodeScanned = ({ data, bounds: { origin, size } }) => {
    const { x, y } = origin;
    const { height, width } = size;
    setScannedBox({ x, y, height, width });
    setShowScanner(false);
    setData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={[showScanner ? styles.scannerContainer : styles.hideScanner]}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <View
          style={{
            position: "absolute",
            top: scannedBox.y,
            left: scannedBox.x,
            width: scannedBox.width,
            height: scannedBox.height,
            borderColor: "red",
            borderWidth: 2,
          }}
        ></View>
      </BarCodeScanner>
    </View>
  );
}

const styles = StyleSheet.create({
  scannerContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: "white",
  },
  hideScanner: {
    display: "none",
  },
});
