import { createModel } from '@rematch/core';
import { RootModel } from './';
// import { login } from '../servers/login';
import history from "./../routes/history"
export interface LoginState {
  token?: string;
  userData?: {
    username: string;
  };
}

export default createModel<RootModel>()({
  state: {
    userData: null,
    token: null,
  },
  reducers: {
    updateState: (state: any, payload: LoginState) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch: any) => ({
    async submit(payload) {
      dispatch.login.updateState({ token: '测试2' });
      console.log("payload", payload)
      history.push("/home")
      // this.updateState()
      // await login({ username: 'test', password: 'www' });
      // dispatch.sharks.increment(payload)
      // `dispatch.s` will suggest `sharks`
    },
  }),
});
