import { UnitOfWorkOrm } from '@src/libs/ddd/infrastructure/database/base-classes/unit-of-work-orm';
import { UserOrmEntity } from '@modules/user/database/user.orm-entity';
import { UserRepository } from '@modules/user/database/user.repository';
import { WalletOrmEntity } from '@modules/wallet/database/wallet.orm-entity';
import { WalletRepository } from '@modules/wallet/database/wallet.repository';

export class UnitOfWork extends UnitOfWorkOrm {
  // Add new repositories below to use this generic UnitOfWork

  init(): string {
    return UnitOfWork.init();
  }

  // Convert TypeOrm Repository to a Domain Repository
  getUserRepository(correlationId: string): UserRepository {
    return new UserRepository(
      UnitOfWork.getOrmRepository(UserOrmEntity, correlationId),
    ).setCorrelationId(correlationId);
  }

  getWalletRepository(correlationId: string): WalletRepository {
    return new WalletRepository(
      UnitOfWork.getOrmRepository(WalletOrmEntity, correlationId),
    ).setCorrelationId(correlationId);
  }
}