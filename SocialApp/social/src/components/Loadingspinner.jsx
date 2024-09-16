import "bootstrap/dist/css/bootstrap.min.css";

export default function Loadingspinner() {
    return (
        <div className="d-flex justify-content-center m-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}