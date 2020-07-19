import React from 'react'
import Particles from 'react-particles-js'

function ParticlesBackground(){
    return (
        <Particles className="particles-js"
        params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "color": {
                    "value": "#366fc5"
                },
            }
        }} />
    )
}

export default ParticlesBackground