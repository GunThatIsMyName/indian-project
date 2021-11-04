const endPoint = "https://randomuser.me/api"

const getPerson = async()=>{
    const response = await fetch(endPoint)
    const {results} = await response.json();
    const person = results[0];
    const {first,last}=person.name;
    const {large}=person.picture;
    const {email}=person;
    const {phone}=person;
    const {street:{name},city,state,country}=person.location;
    const {date}=person.dob;
    return{
        name:`${first} ${last}`,
        image:large,
        email,
        phone,
        address:`${country} , ${state} ,${city},${name}`,
        date,
    }
}

export default getPerson;