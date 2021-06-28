
import './Welcome.css'
import ReactAnime from 'react-animejs'

const {Anime} = ReactAnime

function Welcome(props)
{
    const texteWelcome = "Welcome"

    const letterParse = texteWelcome.split('').map(char =>{
      return  <span key={Math.random()} className='letter'>{char}</span>

    })
    
    return (
        <div id="welcome">
            <Anime
                initial={[
                    {
                        targets: '.ml1 .letter',
                        scale: [0.3,1],
                        opacity: [0,1],
                        translateZ: 0,
                        easing: "easeOutExpo",
                        duration: 850,
                        delay: (el, i) => 70 * (i+1)
                    },
                    {
                        targets: '.ml1 .line',
                        scaleX: [0,1],
                        opacity: [0.5,1],
                        easing: "easeOutExpo",
                        duration: 700,
                        offset: '-=875',
                        delay: (el, i, l) => 80 * (l - i)
                    },
                    {
                        targets: '.ml1',
                        opacity: 0,
                        zIndex: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 700
                    }
                ]}
            
            
            
            >

                <h1 className="ml1">
                    <span className="text-wrapper">
                        <span className="line line1"></span>
                        <span className="letters">{letterParse}</span>
                        <span className="line line2"></span>
                    </span>
                </h1>
            </Anime>

            
        </div>
    )
}

export default Welcome