import { useState, useEffect } from "react";
import Sawo from "sawo";

const Login = () => {
        const [isLogin, setIsLogin] = useState(false);

        useEffect(() => {
            var config = {
                // should be same as the id of the container created on 3rd step
                containerID: "sawo-container",
                // can be one of 'email' or 'phone_number_sms'
                identifierType: "email",
                // Add the API key copied from 2nd step
                apiKey: process.env.REACT_APP_SAWO_API_KEY,
                // Add a callback here to handle the payload sent by sdk
                onSuccess: (payLoad) => {
                    console.log(payLoad);
                    setIsLogin("true");
                },
            };
            let sawo = new Sawo(config);
            sawo.showForm();
        }, []);

    return (
        <div 
            styLe={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexDirection: "coloumn",
            }}
        >
                <h2>User Logged in: {isLogin}</h2>
            <div
                id="sawo-container"
                styLe={{
                    height: "650px",
                    width: "285px",
                }}
            > </div>
        </div>
    );
};

export default Login;
