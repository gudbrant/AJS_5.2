import Character from '../character (2)';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Создание нового персонажа Косой Bowman', () => {
  const received = new Bowman('Косой', 'Bowman');
  const expected = { name: "Косой", type: "Bowman", health: 100, level: 1, attack: 55, defence: 25 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Лютик Swordsman', () => {
  const received = new Swordsman('Лютик', 'Swordsman');
  const expected = { name: "Лютик", type: "Swordsman", health: 100, level: 1, attack: 40, defence: 10 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Пепе Magician', () => {
  const received = new Magician('Пепе', 'Magician');
  const expected = { name: "Пепе", type: "Magician", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Саня Daemon', () => {
  const received = new Daemon('Саня', 'Daemon');
  const expected = { name: "Саня", type: "Daemon", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Фителёк Undead', () => {
  const received = new Undead('Фителёк', 'Undead');
  const expected = { name: "Фителёк", type: "Undead", health: 100, level: 1, attack: 25, defence: 25 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Черныш Zombie', () => {
  const received = new Zombie('Черныш', 'Zombie');
  const expected = { name: "Черныш", type: "Zombie", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Имя не string', () => {
  const wrongName = { name: 2, type: 'Bowman' };
  expect(() => {
    const Bowman = new Bowman(wrongName);
    return Bowman;
  }).toThrow();
});

test('Короткое имя', () => {
  const wrongName = { name: 'J', type: 'Swordsman' };
  expect(() => {
    const swordsman = new Swordsman(wrongName);
    return swordsman;
  }).toThrow();
});

test('Слишком длинное имя', () => {
  const wrongName = { name: 'PlusPlusPlusPlus', type: 'Daemon' };
  expect(() => {
    const daemon = new Daemon(wrongName);
    return daemon;
  }).toThrow();
});

test('Класс не string', () => {
  const wrongType = { name: 'Lena', type: 100110101 };
  expect(() => {
    const magician = new Magician(wrongType);
    return magician;
  }).toThrow();
});

test('Такого класса нет', () => {
  const wrongType = { name: 'Joker', type: 'Assasin' };
  expect(() => {
    const undead = new Undead(wrongType);
    return undead;
  }).toThrow();
});

test('Наследуется от Character', () => {
  expect(new Zombie('Kate', 'Swordsman')).toBeInstanceOf(Character);
});

test('Повышение уровня при health > 0', () => {
  const newDaemon = new Daemon('Ivan', 'Undead');
  newDaemon.levelUp();
  expect(2).toEqual(newDaemon.level);
});

test('Повышение уровня при health < 0', () => {
  const newZombie = new Zombie('Pepe', 'Daemon');
  newZombie.health = -1;
  expect(() => newZombie.levelUp()).toThrow();
});

test('Получение урона при health > 0', () => {
  const newDaemon = new Daemon('Ordo', 'Swordsman');
  newDaemon.damage(10);
  expect(94).toEqual(newDaemon.health);
});

test('Получение урона damage при health < 0', () => {
  const newDaemon = new Daemon('Sofa', 'Daemon');
  newDaemon.health = -1;
  expect(() => newDaemon.damage(10)).toThrow();
});