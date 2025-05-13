import React from "react";

const Chatbot = () => {
    return (
        <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <iframe
                src="https://console.dialogflow.com/api-client/demo/embedded/490e6455-c0f0-4bcb-bcab-76b7bdc40b4d"
                style={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                }}
                title="Chatbot"
            ></iframe>
        </div>
    );
};

export default Chatbot;