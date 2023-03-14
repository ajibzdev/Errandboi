import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import * as faceapi from "face-api.js";

import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../GlobalStyles";
import NavTitle from "../components/shared/NavTitle";
import Layout from "../constants/Layout";

const { width, height } = Layout.window;

const FaceIdScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [type, setType] = useState(CameraType.back);
  const [detectedFace, setDetectedFace] = useState(null);

  let camera = React.useRef<any>(null);
  const cameraRef = React.useRef<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Functions
  const takePicture = async () => {
    try {
      if (camera) {
        const { uri } = await camera.current.takePictureAsync();
        console.log(uri);
      } else {
        console.log("NO camera");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  // Functions
  const authenticateFace = async () => {
    const descriptors = await faceapi.computeFaceDescriptor(
      detectedFace._descriptor
    );
    // compare the descriptors with the stored descriptors using a similarity metric
    if (similarity > threshold) {
      // authentication successful
    } else {
      // authentication failed
    }
  };

  async function detectFaces(imageUri, faceDetectionOptions) {
    // Load face detection model and options
    const faceDetector = await faceapi.loadTinyFaceDetectorModel();
    const options = faceDetectionOptions();

    // Create canvas element from input image URI
    const img = await faceapi.fetchImage(imageUri);
    const canvas = faceapi.createCanvasFromMedia(img);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Detect faces in the input image
    const detections = await faceDetector.detectAllFaces(canvas, options);

    // Draw bounding boxes around detected faces
    const resizedDetections = faceapi.resizeResults(detections, {
      width: canvas.width,
      height: canvas.height,
    });
    const labeledFaceDescriptors = await faceapi.computeFaceDescriptors(
      canvas,
      resizedDetections
    );
    return {
      detections: resizedDetections,
      descriptors: labeledFaceDescriptors,
    };
  }

  const handleFacesDetected = async ({ faces }: any) => {
    // FaceDetector.detectFacesAsync(uri, {
    //   mode: FaceDetector.FaceDetectorMode.accurate,
    // })
  };

  return (
    <SafeAreaView edges={["bottom", "left"]} style={styles.container}>
      {!detectedFace && (
        <Camera
          style={styles.camera}
          type={type}
          ratio={"16:9"}
          onFacesDetected={handleFacesDetected}
          ref={(ref) => {}}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.accurate,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking: true,
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                toggleCameraType();
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}> Snap </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}

      {detectedFace && (
        <Image
          source={{ uri: detectedFace._imageSrc }}
          style={{ width: 100, height: 100 }}
        />
      )}
    </SafeAreaView>
  );
};

export default FaceIdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
