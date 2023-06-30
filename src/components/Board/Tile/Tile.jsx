import './Tile.css'

export function Tile({value}) {
    return (
        <>
            <div id='tile'>
                <p>{value}</p>
            </div>
        </>
    )
}