import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';
import { JwtService } from './jwt.service';

// 클래스로 만드는 형식
@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if ('x-jwt' in req.headers) {
      const token = req.headers['x-jwt'];
      try {
        const decoded = this.jwtService.verify(token.toString());
        if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
          const user = await this.userService.findById(decoded['id']);
          req['user'] = user;
        }
      } catch (e) {}
    }
    next();
  }
}

//function으로 만드는 방식

// export function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
//   console.log(req.headers);
//   next();
// }
// 이 함수는 main.ts 에 app.use(jwtMiddleware) 를 통해 사용 가능하다.
