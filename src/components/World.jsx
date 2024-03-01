import Room from "./Room"
import React, { useRef, createRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

const Office = () => {
  const roomCount = 4

  const colors = ["red", "pink", "lightblue", "green"]
  const rooms = [
    { id: "r1", color: "#fd6136" },
    { id: "r2", color: "#d9b0b7" },
    { id: "r3", color: "#3772d2" },
    { id: "r4", color: "#75d175" },
  ]

  const refsById = useMemo(() => {
    const refs = {}
    rooms.forEach((el) => {
      refs[el.id] = React.createRef(null)
    })
    console.log(refs)
    return refs
  }, [rooms])

  useFrame((state, delta) => {
    rooms.forEach((room) => {
      refsById[room.id].current.position.z += delta * 2
      if (refsById[room.id].current.position.z > 10) {
        refsById[room.id].current.position.z = -10 * roomCount + 10
      }
    })
  })

  return (
    <group>
      {rooms.map((el, i) => {
        return <Room offset={-10 * i} color={el.color} key={el.id} ref={refsById[el.id]} />
      })}
    </group>
  )
}

const World = () => {
  const styles = {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    right: 0,
    bottom: 0,
    zIndex: -10,
    background: "#000000",
  }

  return (
    <Canvas height={window.innerHeight} style={styles}>
      <fog attach="fog" color="#000000" near={15} far={30} />
      <directionalLight intensity={Math.PI / 2} position={[1, 2, 3]} color="pink" />
      <ambientLight intensity={Math.PI / 3} color={"#e4e9ef"} />
      <Office />
    </Canvas>
  )
}

export default World
