import * as types from '../constants';
import * as Service from "../Services/Auth.service";
import { navigate } from '../../Navigations/NavigationService';

export const onLogin = (data) => {
  return async function (dispatch) {
    try {
      const response = await Service.onLogin(data);
      const newData = JSON.parse(response)
      if (newData.code == 400) {
        alert(newData.message)
      } else if (newData.code == 200) {
        navigate("ProfileScreen")
      }
      dispatch({ type: types.ON_LOGIN_RESPONSE, data: newData })
    } catch (error) {
      console.log(" error is " + error)
    }
  }
};