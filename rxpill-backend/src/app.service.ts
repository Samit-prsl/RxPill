import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis'

@Injectable()
export class AppService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly redis: RedisService,
  ) {}

  async health(): Promise<string> {
    try {
      await this.dataSource.query('SELECT 1');
      const pgStatus = 'Postgres connected';
      await this.redis.getOrThrow().set('health-check', 'ok');
      const redisVal = await this.redis.getOrThrow().get('health-check');
      const redisStatus = redisVal ? ' Redis connected' : ' Redis error';

      return `
        <h2>Welcome to RxPill Backend Health Check</h2>
        <p>${pgStatus}</p>
        <p>${redisStatus}</p>
      `;
    } catch (error) {
      console.error('Health check failed:', error);
      return `<h2> Connection Error</h2><pre>${error.message}</pre>`;
    }
  }
}
