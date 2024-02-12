#include "NativeSampleModule.h"

namespace facebook::react
{

    NativeSampleModule::NativeSampleModule(std::shared_ptr<CallInvoker> jsInvoker)
        : NativeSampleModuleCxxSpec(std::move(jsInvoker)) {}

    std::string NativeSampleModule::reverseString(jsi::Runtime &rt, std::string input)
    {
        return std::string(input.rbegin(), input.rend());
    }

    std::string NativeSampleModule::toUpperCaseString(jsi::Runtime &rt, std::string input)
    {
        std::string result = input;
        for (char &c : result)
        {
            c = std::toupper(c);
        }

        return result;
    }

} // namespace facebook::react