import Mock from 'mockjs';

const Customers = [];

for (let i = 0; i < 10; i++) {
    Customers.push(Mock.mock({
    id: Mock.Random.guid(),
    thumb: Mock.Random.dataImage('200x200', 'mock image'),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    // 'age|18-60': 1,
    age:Mock.Random.integer(18, 60),
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { Customers};
