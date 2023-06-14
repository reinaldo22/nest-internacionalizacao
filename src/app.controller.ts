import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { I18n, I18nContext, I18nService } from 'nestjs-i18n';

@Controller("test")
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly i18n: I18nService
  ) { }

  @Get()
  async getHello(@I18n() i18n: I18nContext) {
    return await i18n.t('teste.HELLO');
  }
}
