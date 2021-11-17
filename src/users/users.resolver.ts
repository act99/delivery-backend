import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ok } from 'assert';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import {
  DeleteProfileInput,
  DeleteProfileOutput,
} from './dtos/delete-profile.dto';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UserProfileInput, UserProfileOutput } from './dtos/user-profile.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';

@Resolver((of) => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query((returns) => Boolean)
  hi() {
    return true;
  }
  @Mutation((returns) => CreateAccountOutput)
  async createAccount(
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      return this.usersService.createAccount(createAccountInput);
    } catch (e) {
      return { error: e, ok: false };
    }
  }
  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      return this.usersService.login(loginInput);
    } catch (e) {
      return { ok: false, error: e };
    }
  }
  //@Context => apollo server & graphql 에서 사용하는 함수 / request가 매번 호출되며 이를 가져올 수 있는 그런거?
  @Query((returns) => Users)
  @UseGuards(AuthGuard)
  me(@AuthUser() authUser: Users) {
    return authUser;
  }
  @UseGuards(AuthGuard)
  @Query((returns) => UserProfileOutput)
  async userProfile(
    @Args() userProfileInput: UserProfileInput,
  ): Promise<UserProfileOutput> {
    try {
      const user = await this.usersService.findById(userProfileInput.userId);
      if (!user) {
        throw Error();
      }
      return {
        // 아래 뜻은 user를 찾으면 ok 가 true 고 undefined 면 false 라는 뜻
        ok: true,
        user,
      };
    } catch (e) {
      return { error: 'User Not Found', ok: false };
    }
  }
  @UseGuards(AuthGuard)
  @Mutation((returns) => EditProfileOutput)
  async editProfile(
    @AuthUser() authUser: Users,
    @Args('input') editProfileInput: EditProfileInput,
  ): Promise<EditProfileOutput> {
    try {
      await this.usersService.editProfile(authUser.id, editProfileInput);
      return { ok: true };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
  @UseGuards(AuthGuard)
  @Mutation((returns) => DeleteProfileOutput)
  async deleteProfile(
    @AuthUser() authUser: Users,
    @Args('input') deleteProfileInput: DeleteProfileInput,
  ): Promise<DeleteProfileOutput> {
    try {
      await this.usersService.deleteProfile(authUser.id, deleteProfileInput);
      return { ok: true };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
