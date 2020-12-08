import { User } from 'core/models';

export class UpdateUser {
  static readonly type = '[USER] Update User';

  constructor(public payload: User) {}
}

export class UpdateAuthentication {
  static readonly type = '[USER] Update Authentication';

  constructor(public payload: boolean) {}
}
