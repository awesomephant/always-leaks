import React, { useRef, useState } from "react"

const Room = React.forwardRef(({ color, offset }, ref) => {
  const depth = 10
  const width = 8
  const height = 5

  return (
    <group position={[0, 1, offset || 0]} ref={ref}>
      {/* Floor */}
      <mesh rotation-x={Math.PI / 2} rotation-y={Math.PI} position={[0, -0.5 * height, 0]}>
        <boxGeometry args={[width, depth, 0.01]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation-x={Math.PI / 2} rotation-y={Math.PI} position={[0, 0.5 * height, 0]}>
        <boxGeometry args={[width, depth, 0.01]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Wall left */}
      <mesh rotation-x={Math.PI / 2} rotation-y={Math.PI / 2} position={[-width / 2, 0, 0]}>
        <boxGeometry args={[width, depth, 0.01]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Wall right */}
      <mesh rotation-x={Math.PI / 2} rotation-y={Math.PI / 2} position={[width / 2, 0, 0]}>
        <boxGeometry args={[width, depth, 0.01]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  )
})

export default Room
