
/**
* A carbon based lifeform from the Virgo Supercluster
* @typedef {Object} Person
* @property {string} id -  unique non friendly identifier.
* @property {string} name - non unique friendly identifier.
* @property {number} age - number of times person has orbited the sun
*/

/**
* our third party api requires a slightly different format
* @typedef {Object} ApiPerson
* @property {string} _id -  unique non friendly identifier.
* @property {string} personName - non unique friendly identifier.
* @property {number} ageYrs - number of times person has orbited the sun
*/


module.exports = {
    /**
    * @param {string} personToGreet
    * @return {string} a special customised greeting in the format of "hello {personToGreet}"
    */
    greet: (personToGreet) => {
        // here's an example!
        return ('hello ' + personToGreet);
    },
    
    /**
     * @param {Person[]} people
     * @return {number} count of people named Bob
     */
    countOfbobs: (people) => {
        //complete the rest of these yourself!

    },

    /**
     * @param {Person[]} people
     * @return {Person[]} people who are 18 years old or older
     */
    peopleWhoCanVote: (people) => {

    },

    /**
     * @param {Person} person
     * @return {ApiPerson} person in api format
     */
    transformForApi: (person) => {
        
    },

    /**
    * @param {Person} person
    * @return {boolean} true if person has an id and name.  age is not required
    */
    personIsValid: (person) => {
       
    },

    /**
     * @param {Person[]} people
     * @return {Person} returns the oldest person.
     */
    oldestPerson: (people) => {
        
    },
    
    /**
    * @param {number} numPeople
    * @return {number} the number of busses required to transport these people. 0 if no people.
    */
    numberBusesRequired: (numPeople) => {
       
    }
}

