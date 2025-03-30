
import axios from "axios";
import { setInterval } from "timers";
const url = "URL"; 
const numRequestsPerSecond = 100; 

async function sendRequest() {
  try {
    const response = await axios.get(url);
    console.log(`Sent request: ${response.status} - ${new Date().toISOString()}`);
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

async function startRequests() {
  setInterval(() => {
    for (let i = 0; i < numRequestsPerSecond; i++) {
      sendRequest();
    }
  }, 1000); 
}

startRequests();
