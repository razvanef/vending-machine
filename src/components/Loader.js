import React from "react";

const Loader = ({ loading }) => (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center position-absolute w-100 h-100 p-5 loader">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : ''
        }
        </div>
    )

export default Loader;