import './lesson05.css'
import { forceUsers } from './data'


export default function Lesson04(){
    console.log(forceUsers);
    return(
        <div className="lesson-container">
            <h3>Lesson 04</h3>
            {forceUsers.map((hero, index) => (
                <div key={index}>
                    <h4>{hero.name}</h4>
                    <p>Age: {hero.age}</p>
                    <img width ={200} src={hero.image} alt={hero.name} />
                    <p>Lightsaber colors:</p>
                        <div className='lightsaberColors'>
                            {hero.lightsaberColors.map((color) => (
                                // {/* <span>{color} </span> */}
                                <div className='lightsaberColorsItem'
                                    style={{backgroundColor: color}} 
                                ></div>
                            ))}
                        </div>

                </div>
            ))}
        </div>
    )
}