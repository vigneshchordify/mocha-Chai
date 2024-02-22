const chai = import('chai');
const { it } = require('mocha');





describe('------Aspect check-----------', async function() {
  let userName = 'code improve';

  let mylist={
    item:[{
      id:1,name:'demo'
    }],
    title:"user List"
  }

  it("check string", async function() {
    const chai = await import('chai');
    const assert = chai.assert;
    assert.typeOf(userName, 'string');
  });

  it("equal check", async function() {
    const chai = await import('chai');
    const assert = chai.assert;
    assert.equal(userName, 'code improve');
  });

  it("length match",async function(){
    const chai= await import ('chai');
    const assert =chai.assert;
    assert.lengthOf(mylist.item,1)
  })
});



// ###########should#######################

describe('------Should check-----------', async function() {
  let userName = 'code improve';

  let mylist={
    item:[{
      id:1,name:'demo'
    }],
    title:"user List"
  }

  it("check string", async function() {
    const chai = await import('chai');
    const should = chai.should();
    userName.should.be.a('string')
  });

  it("check equal", async function() {
    const chai = await import('chai');
    const should = chai.should();
    userName.should.equal('code improve')
  });
  it("check equal", async function() {
    const chai = await import('chai');
    const should = chai.should();
    userName.should.equal('code improve')
  });

  it("length equal", async function() {
    const chai = await import('chai');
    const should = chai.should();
    mylist.should.have.property('item').with.lengthOf(1);
  });
})

// ###########expect########################

describe('------Expect check-----------', async function() {
  let userName = 'code improve';

  let mylist={
    item:[{
      id:1,name:'demo'
    }],
    title:"user List",
    address:{
      country:"india",
      phoneNo:['9747427828','7874563546']
    }
  }

  it("check string", async function() {
    const chai = await import('chai');
    const expect = chai.expect;
   expect(userName).to.be.a('string')
  });

  it("check equal", async function() {
    const chai = await import('chai');
    const expect = chai.expect;
   expect(userName).to.equal('code improve')
  });

  it("nested check", async function() {
    const chai = await import('chai');
    const expect = chai.expect;
   expect(mylist).to.have.nested.property('address.phoneNo[1]')
  });
})
