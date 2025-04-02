import {useNavigate} from "react-router-dom"

const backBtn = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  )
}

export default backBtn
