import React from "react";
import img from "/earth.jpeg";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import Popup from "./Popup";
import {
  setShowCerts,
  setShowEducation,
  setShowProjects,
  setShowHistory,
  setShowSkills,
} from "../stores/popupSlice";
import { useDispatch } from "react-redux";

export default function Sphere(props) {
  const dispatch = useDispatch();

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const texture = useTexture(img);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <mesh {...props} ref={ref} scale={isMobile ? 1.5 : 2.5}>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial map={texture} />
        <mesh position={[0, 0, 1]} onClick={() => dispatch(setShowEducation())}>
          <sphereGeometry attach="geometry" args={[0.09, 8, 8]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh rotation={[0, 0, 0]} position={[0, 0, 1]}>
          <torusGeometry attach="geometry" args={[0.1, 0.02, 3]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>

        <mesh position={[0, 0, -1]} onClick={() => dispatch(setShowProjects())}>
          <sphereGeometry attach="geometry" args={[0.09, 8, 8]} />
          <meshStandardMaterial color={"yellow"} />
        </mesh>
        <mesh rotation={[0, 0, 0]} position={[0, 0, -1]}>
          <torusGeometry attach="geometry" args={[0.1, 0.02, 3]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>

        <mesh position={[0, 1, 0]} onClick={() => dispatch(setShowHistory())}>
          <sphereGeometry attach="geometry" args={[0.09, 8, 8]} />
          <meshStandardMaterial color={"blue"} />
        </mesh>
        <mesh rotation={[1.5, 0, 0]} position={[0, 1, 0]}>
          <torusGeometry attach="geometry" args={[0.1, 0.02, 3]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>

        <mesh position={[-1, 0, 0]} onClick={() => dispatch(setShowCerts())}>
          <sphereGeometry attach="geometry" args={[0.09, 8, 8]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh rotation={[0, 1.5, 0]} position={[-1, 0, 0]}>
          <torusGeometry attach="geometry" args={[0.1, 0.02, 3]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>

        <mesh position={[1, 0, 0]} onClick={() => dispatch(setShowSkills())}>
          <sphereGeometry attach="geometry" args={[0.09, 8, 8]} />
          <meshStandardMaterial color={"purple"} />
        </mesh>
        <mesh rotation={[0, 1.5, 0]} position={[1, 0, 0]}>
          <torusGeometry attach="geometry" args={[0.1, 0.02, 3]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>
      </mesh>
    </>
  );
}
