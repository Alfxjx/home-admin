import { LoggerService, ConsoleLogger } from '@nestjs/common';

export class MyLogger extends ConsoleLogger implements LoggerService {}
