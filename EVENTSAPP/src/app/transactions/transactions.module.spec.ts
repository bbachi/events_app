import { TransactionsModule } from './transactions.module';

describe('TransactionsModule', () => {
  let transactionHistoryModule: TransactionsModule;

  beforeEach(() => {
    transactionHistoryModule = new TransactionsModule();
  });

  it('should create an instance', () => {
    expect(transactionHistoryModule).toBeTruthy();
  });
});
