import { Math as THREEMath, SphereBufferGeometry } from 'three/src/Three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';

export default function Dots() {
    let group = useRef();
    let theta = 0;
    useFrame(() => {
  
      const r = 2 * (THREEMath.degToRad((theta += 0.05)));
  
      group.current.rotation.set(0, 0, r);
      group.current.scale.set(0.1, 0.1, 0.1);
  
    });
  
    const [geo, coords] = useMemo(() => {
  
      const geo = new SphereBufferGeometry(1, 10, 10);
      const coords = new Array(750).fill().map(i => {
  
        let val1 = Math.random() * 400 - 200;
  
        let val2 = Math.random() * 400 - 200;
  
        let val3 = Math.random() * 200 - 250;
  
        return [val1,val2,val3];
      });
  
      return [geo, coords];
  
    }, []);
  
    return <group ref={group}>
        {coords.map(([p1, p2, p3], i) => {
          
          const s = Math.random()*1;
          return (
            <mesh 
              key={i++}
              geometry={geo}
              position={[p1, p2, p3]}
              scale={[s,s,s]}
            >
              <meshBasicMaterial color="whitesmoke" />
            </mesh>
          )})}
    </group>;
} 
