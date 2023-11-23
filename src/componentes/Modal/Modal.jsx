import react, { useState } from "react";
import './Modal.css'

export default function Modal () {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>

        <button
        onClick={toggleModal}
        className="btn-modal">
            Open            
        </button>

        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>Error</h2>
                <p>
                Todos los campos son obligatorios :)
                </p>
                <button
                className="close-modal"
                onClick={toggleModal}
                >CLOSE</button>
            </div>
        </div>
        </>
    );
}