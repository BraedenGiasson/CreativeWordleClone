import './Navbar.css'
import MaxWidthDialog from '../Settings/Settings'

export function Navbar() {
    return (
        <nav>
            <p id='wordle_title'>Fergalicious Words</p>

            <div>
                {/* <button><img src="/src/assets/setting.png" alt="my image" /></button> */}
                <MaxWidthDialog/>
            </div>
        </nav>
    )
} 