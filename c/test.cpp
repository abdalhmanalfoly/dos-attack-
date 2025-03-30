#include <iostream>
#include <thread>
#include <vector>
#include <chrono>
#include <cpr/cpr.h>

const std::string url = "URL";
const int numRequestsPerSecond = 100;

void sendRequest() {
    try {
        auto response = cpr::Get(cpr::Url{url});
        std::cout << "Sent request: " << response.status_code << " - " << std::chrono::system_clock::to_time_t(std::chrono::system_clock::now()) << std::endl;
    } catch (const std::exception &e) {
        std::cerr << "Request failed: " << e.what() << std::endl;
    }
}

void startRequests() {
    while (true) {
        std::vector<std::thread> threads;
        for (int i = 0; i < numRequestsPerSecond; ++i) {
            threads.emplace_back(sendRequest);
        }
        for (auto &t : threads) {
            t.join();
        }
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
}

int main() {
    startRequests();
    return 0;
}
