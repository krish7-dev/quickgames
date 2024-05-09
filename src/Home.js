import './home.css';
import ms from './media/images/ms.png'
import bs from './media/images/bs.png'

function Home(){
    return(
        <div className="home">
            <h1 className="nomargin title">Quickgames</h1>
            <div className="games">
                <div>
                    <div>
                        <div><a href="/minesweeper"><img src={ms}></img></a></div>
                        <div><a href="#"><img src={bs}></img></a></div>
                        <div><a href="#"><img src={bs}></img></a></div>
                    </div>
                    <div>
                        <div></div>
                    </div>

                </div>
        </div>
        </div>
    )
}

export default Home;