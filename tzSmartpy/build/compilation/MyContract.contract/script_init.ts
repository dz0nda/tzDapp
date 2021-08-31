interface TStorage {
  storedValue: TNat;
}

@Contract
export class MyContract {
  storage: TStorage = {
      storedValue: 1,
  };

  @EntryPoint
  store(value: TNat): void {
      // Store a new value
      this.storage.storedValue = value;
  }
}

Dev.test({ name: 'MyContract' }, () => {
  const c1 = Scenario.originate(new MyContract());
  Scenario.transfer(c1.store(2));
});

Dev.compileContract('my_contract_compiled', new MyContract());