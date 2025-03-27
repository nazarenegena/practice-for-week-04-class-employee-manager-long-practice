const chai = require('chai');
const expect = chai.expect;
const Employee = require('../Employee');
const Manager = require('../manager.js');

describe('The Company', () => { 
   let hobbes, calvin, susie, lily, clifford;

   beforeEach(() => {
      hobbes = new Manager('Hobbes', 1000000, 'Founder');
      calvin = new Employee('Calvin', 130000, 'Director', hobbes);
      susie = new Employee('Susie', 100000, 'TA Manager', calvin);
      lily = new Employee('Lily', 90000, 'TA', susie);
      clifford = new Employee('Clifford', 90000, 'TA', susie);

      // add the employees dynamically
      hobbes.addEmployee(calvin);
      calvin.addEmployee(susie);
      susie.addEmployee(lily);
      susie.addEmployee(clifford);
   });

   describe('hobbes constructor function', () => {
      it('should have a name property', () => {
         expect(hobbes).to.have.property('name');
      });

      it('should have a salary property', () => {
         expect(hobbes).to.have.property('salary');
      });

      it('should have a title property', () => {
         expect(hobbes).to.have.property('title');
      });

      it('should have a manager property', () => {
         expect(hobbes).to.have.property('manager');
      });

      it('manager property should be set to null if no "manager" argument is passed', () => {
         expect(hobbes.manager).to.eql(null);
      });

      it('should have employees property', () => {
         expect(hobbes).to.have.property('employees');
      });

      it('employees property should be an array', () => {
         expect(hobbes.employees).to.eql([calvin]);
      });
   });

   describe('addEmployees dynamically', () => {
      it('should add the employees', () => {
         expect(hobbes.employees).to.eql([calvin]);
         expect(calvin.employees).to.eql([susie]);
         expect(susie.employees).to.eql([lily, clifford]);
      });
   });

   describe('calculateEmployeeBonus', () => {
      it('should return the bonus for each employee', () => {
         expect(hobbes.calculateBonus(0.05)).to.eql(70500);
         expect(calvin.calculateBonus(0.05)).to.eql(20500);
         expect(susie.calculateBonus(0.05)).to.eql(14000);
         expect(lily.calculateBonus(0.05)).to.eql(4500);
         expect(clifford.calculateBonus(0.05)).to.eql(4500);
      });
   });
});
