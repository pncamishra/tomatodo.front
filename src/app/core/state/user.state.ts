import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { UpdateAuthentication, UpdateUser } from 'core/actions';
import { User } from 'core/models';

export class UserStateModel {
  user: User;
  isAuthenticated: boolean;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
    isAuthenticated: false,
  },
})
@Injectable()
export class UserState {
  @Selector()
  static getUser(state: UserStateModel) {
    return state.user;
  }

  @Selector()
  static isAuthenticated(state: UserStateModel) {
    return state.isAuthenticated;
  }

  @Action(UpdateUser)
  updateUser({ getState, patchState }: StateContext<UserStateModel>, { payload }: UpdateUser) {
    const state = getState();
    patchState({
      ...state,
      user: payload,
    });
  }

  @Action(UpdateUser)
  updateAuthentication({ getState, patchState }: StateContext<UserStateModel>, { payload }: UpdateAuthentication) {
    const state = getState();
    patchState({
      ...state,
      isAuthenticated: payload,
    });
  }
}
