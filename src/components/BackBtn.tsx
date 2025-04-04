import {useNavigate} from "react-router-dom"
import classes from "./BackBtn.module.css"

const backBtn = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button className={classes.back_btn} onClick={() => navigate(-1)}>Voltar</button>
    </div>
  )
}

export default backBtn
