import React from "react";
import { Blocks } from "react-loader-spinner";

export default function LoadingSpinnerTemplate() {
    return (
        <div className="container fade-in-effect">
            <div className="centered-text">
                <Blocks
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                />
            </div>
        </div>
    )
}