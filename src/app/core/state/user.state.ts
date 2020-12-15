import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { User } from 'core/models';

export class UpdateUser {
  static readonly type = '[USER] Update User';

  constructor(public payload: User) {}
}

export class UpdateAuthentication {
  static readonly type = '[USER] Update Authentication';

  constructor(public payload: boolean) {}
}

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
  static user(state: UserStateModel) {
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
