import "./featured.scss"
import ken from "../../../assets/ken.jpg"
import { InfoOutlined, PlayArrow } from "@material-ui/icons"

export default function Featured() {
    return (
        <div>
            <div className="featured">
                <img src={ken} alt="" width="100%"/>
            </div>
            <div className="info">
                <img src={ken} alt=""/>
                <span className="desc">Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Ratione excepturi nihil exercitationem ab ipsa 
                consectetur sequi voluptas consequuntur rem dolorum labore,
                numquam hic assumenda saepe dicta impedit iure vitae? Nobis.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
