import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const graphqlCtx = GqlExecutionContext.create(context);
    // explicitly tell the auth guard about the request for graphql
    return graphqlCtx.getContext().req;
  }
}
