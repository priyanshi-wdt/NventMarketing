import { useEffect } from "react";
import ChatAssistant from "./components/ChatAssistant/ChatAssistant";
import VoiceAssistant from "./components/VoiceAssistant/VoiceAssistant";
import { companyId } from "./config/company";
import { useState } from "react";

function App() {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function loadCompany() {
      try {
        const response = await fetch(
          `http://localhost:5000/company/${companyId}`,
        );

        const data = await response.json();
        setCompany(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadCompany();
  }, []);

  console.log('company',company);
  
  return (
    <div
      style={{
        width: "98%",
        height: "100%",
        padding:"5px 0px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <VoiceAssistant company={company} />
      <ChatAssistant company={company} />
    </div>
  );
}

export default App;
