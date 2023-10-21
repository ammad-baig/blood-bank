import { useNavigate, useParams } from "react-router-dom";
import ABButton from "../components/ABButton";

export default function MainPage() {
    const navigate = useNavigate()
    const params = useParams()


    const navToDonor = () => {
        navigate(`/donor`)

    }

    const navToAcceptor = () => {
        navigate('/acceptor')
    }
    return (
        <>
            <div className="">
                <div style={{ height: "100vh" }} className="fw-bold d-flex justify-content-center align-items-center flex-column
                bg-gradient-to-r from-red-400 to-white-500 ">

                    <h1 className="">Welcome To Blood Bank Center</h1>

                    <h3 className="fw-bold">Are You A: </h3>

                    <div className="d-flex">

                        <ABButton onClick={navToDonor} className='m-2' label="DONOR" />
                        <ABButton onClick={navToAcceptor} className='m-2' label="ACCEPTOR" />
                    </div>
                </div>
            </div>

        </>
    )
}
