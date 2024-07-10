import './lesson05.css'
import { forceUsers } from './data'


export default function Lesson04(){
    console.log(forceUsers);
    return(
        <div className="lesson-container">
            <h3>Lesson 04</h3>
            <div className='forceUsersGrid'>
            {forceUsers.map((hero, index) => (
                <div className={hero.isDark ? 'dark' : 'light'} key={index}>
                    <h4>{hero.name}</h4>
                    <p>Age: {hero.age}</p>
                    <div>
                        <img width ={200} src={hero.image} alt={hero.name} /> 
                    </div>
                    <p>Lightsaber colors:</p>
                        <div className='lightsaberColors'>
                            {hero.lightsaberColors.map((color, index) => (
                                // {/* <span>{color} </span> */}
                                <div key={index} className='lightsaberColorsItem'
                                    style={{backgroundColor: color}} 
                                ></div>
                            ))}
                        </div>
                </div>
            ))}    
            </div>
            
        </div>
    )
}