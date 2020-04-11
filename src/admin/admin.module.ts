import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AdminController } from './admin.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JWT_SECRET_KEY } from './secrets';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET_KEY,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AdminService, LocalStrategy, JwtStrategy],
  controllers: [AdminController],
})
export class AdminModule {}
