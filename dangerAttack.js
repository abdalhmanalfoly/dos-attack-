import axios from "axios";
const numThreads = 100; 
const url = "URL"; 

async function sendRequest(i) {
    while (true) {
        try {
            const response = await axios.get(url, {
                headers: { "User-Agent": "Mozilla/5.0" }
            });
            console.log(`Sent request: ${i} ${response.status}`);
        } catch (error) {
            
        }
    }
}

for (let i = 0; i < numThreads; i++) {
    sendRequest(i);
}






