import * as WebApi from "../Lib/Network";
import * as webContent from "../constants/WebConstent";

export function onLogin(params) {
    return WebApi.postRequest(webContent.LOGIN, params, (result) =>  {
        return result;
    });
}
