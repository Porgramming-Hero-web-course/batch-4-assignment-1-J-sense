{
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
      }
      const person = {
        name: 'Alice',
        age: 30,
        profession: 'Engineer'
    };
    const personName = getProperty(person, 'name'); 
    console.log(personName);
}