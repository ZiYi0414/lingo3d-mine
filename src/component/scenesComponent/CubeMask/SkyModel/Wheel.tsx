import { Model } from 'lingo3d-react'

const Wheel = () => {
    return (
        <>
            <Model
                src="other/ferris-wheel-wlp-series-v1.glb"
                x={74}
                y={-3348}
                z={-4187}
                scale={60}
                physics="map"
                toon
            ></Model>
        </>
    )
}

export default Wheel
