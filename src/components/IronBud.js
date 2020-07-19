import React, {useState} from 'react'
import IronBud1Img from '../assets/Iron_Bud_1.PNG'
import IronBud2Img from '../assets/Iron_Bud_2.PNG'
import IronBud3Img from '../assets/Iron_Bud_3.PNG'
import IronBud4Img from '../assets/Iron_Bud_4.PNG'
import IronBud5Img from '../assets/Iron_Bud_5.PNG'
import IronBud6Img from '../assets/Iron_Bud_6.PNG'
import IronBud7Img from '../assets/Iron_Bud_7.PNG'
import IronBud8Img from '../assets/Iron_Bud_8.PNG'

const images = [IronBud1Img, IronBud2Img, IronBud3Img, IronBud4Img, IronBud5Img, IronBud6Img, IronBud7Img, IronBud8Img]

function IronBud(){
    const [imageId, setImageId] = useState(0)

    const incrementImageId = () => {
        setImageId(imageId+1)
    }

    const deincrementImageId = () => {
        setImageId(imageId-1)
    }

    return (
        <div className="iron-bud">
            <div className="iron-bud-info">
                <h1>Iron Bud</h1>
                <p>
                    Gym Bud is an iOS application that helps gym goers track their 
                    progress by allowing them to log their workout, body weight, and 
                    their physical progress. It was written in Swift, and Firebase 
                    was used for user authentication, database management, and storage.
                </p>
            </div>
            <div className="iron-bud-media">
                <button onClick={deincrementImageId} disabled={imageId===0}>{"<"}</button>
                <img src={images[imageId]} alt=""/>
                <button onClick={incrementImageId} disabled={imageId===images.length-1}>{">"}</button>
            </div>
        </div>
    )
}

export default IronBud