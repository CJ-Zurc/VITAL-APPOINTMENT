import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentModule } from './appointment/appointment.module';
import { PaymentModule } from './payment/payment.module';
import { NotificationModule } from './notification/notification.module';
import { UserService } from './user/user.service';

@Module({
  imports: [AppointmentModule, PaymentModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
