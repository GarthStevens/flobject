import chai from 'chai'

describe('Tester', () => {
  it('it should be for', () => {
    chai.expect(4).to.equal(4);
  });
});

// const garth = {
//   fields: {
//     firstName: 'garth',
//     lastName: 'stevens',
//     job: {
//       position:'dev',
//       roles: ['it', 'software']
//     },
//   }
// };

// const mapper = new Mapper();

// mapper
//   .register('person')
//   .field('firstname', a => a.sourceObject.fields.firstName)
//   .field('job', a => {
//     console.log(a)//eslint-disable-line
//     return a.mapper.map('job', a.sourceObject.fields.job);
//   });

// mapper
//   .register('job')
//   .field('position', a => a.sourceObject.position)
//   .field('roles', a => a.sourceObject.roles);


// const mappedGarth = mapper.map('person', garth);

// console.log(mappedGarth)//eslint-disable-line
