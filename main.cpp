#include <iostream>
#include <string>

#ifdef _WIN32
#include <windows.h>
#include <shellapi.h>
#endif

int main() {
    std::cout << "MEV C++ Engine starting..." << std::endl;
    std::cout << "Triggering 'connected' audio signal..." << std::endl;

    std::string target = "index.html";

    #ifdef _WIN32
        ShellExecuteA(NULL, "open", target.c_str(), NULL, NULL, SW_SHOWNORMAL);
    #else
        std::string command = "open " + target; 
        system(command.c_str());
    #endif

    return 0;
}
