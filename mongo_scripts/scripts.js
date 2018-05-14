/* eslint-disable no-undef */
db.classes.insert([{
  name: 'B4 - 101',
},
{
  name: 'B4 - 106',
},
{
  name: 'B5 - 201',
},
{
  name: 'B5 - 301',
}]);

db.reservations.insert([
  {
    when: new Date(2018, 5, 10),
    startTime: new Date(2018, 5, 10, 10, 35),
    endTime: new Date(2018, 5, 10, 11, 35),
    name: 'Spotkanie 1',
    class: db.classes.findOne({ name: 'B4 - 101' })._id,
  },
  {
    when: new Date(2018, 5, 10),
    startTime: new Date(2018, 5, 10, 12, 35),
    endTime: new Date(2018, 5, 10, 13, 35),
    name: 'Spotkanie 2',
    class: db.classes.findOne({ name: 'B4 - 101' })._id,
  },
  {
    when: new Date(2018, 5, 15),
    startTime: new Date(2018, 5, 15, 12, 35),
    endTime: new Date(2018, 5, 15, 13, 35),
    name: 'Spotkanie 3',
    class: db.classes.findOne({ name: 'B5 - 201' })._id,
  },
  {
    when: new Date(2018, 4, 15),
    startTime: new Date(2018, 4, 15, 12, 35),
    endTime: new Date(2018, 4, 15, 13, 35),
    name: 'Spotkanie 4',
    class: db.classes.findOne({ name: 'B5 - 201' })._id,
  },
]);
