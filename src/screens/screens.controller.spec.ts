import { Test, TestingModule } from '@nestjs/testing';
import { ScreensController } from './screens.controller';

describe('ScreensController', () => {
  let controller: ScreensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScreensController],
    }).compile();

    controller = module.get<ScreensController>(ScreensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
