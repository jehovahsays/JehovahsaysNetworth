#include <iostream>
#include <string>

#ifdef _WIN32
#include <windows.h>
#include <shellapi.h>
#endif

int main() {
    std::cout << "MEV C++ Engine starting..." << std::endl;
    std::cout << "Triggering 'connected' audio signal..." << std::endl;

    // URL to your local server (e.g., the Python or Node gateway)
    std::string url = "http://127.0.0.1:8000/";

    #ifdef _WIN32
        // Opens the browser directly to the MEV internal wiki
        ShellExecuteA(NULL, "open", url.c_str(), NULL, NULL, SW_SHOWNORMAL);
    #else
        std::string command = "open " + url; // For macOS/Linux
        system(command.c_str());
    #endif

    return 0;
}
