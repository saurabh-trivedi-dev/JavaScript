// async function getUsers() {
//     try
//     {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const data = await response.json();

//         data.forEach(
//             ({
//                 name: personName,
//                 address: { city: cityName },
//                 company: { name: companyName }
//             }) => {
//                 console.log(personName, companyName, cityName);
//             }
//         );

//         const newData = data.map(({id:personId, name:personName, address:{city:cityName}})=>{
//             return {id:personId, fullName:personName, city:cityName}
//         });
//         console.log(newData);
//     }
//     catch(error)
//     {
//         console.error(error.message);
//     }
// }

// getUsers();


// async function getUsers2(){
//     try
//     {
//         const response = await fetch("https://randomuser.me/api/?results=5");

//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const data = await response.json();
//         const {results} = data;

//         results.forEach(({gender, name:{first:firstName, last:lastName}, location:{city, state, country}, dob:{date:dobDate, age}})=>{
//             const formattedDOB = new Date(dobDate).toLocaleDateString();
//             console.log(`${firstName} ${lastName} is ${age} years old. Born on ${formattedDOB}. Lives in ${city}, ${state}, ${country}.`)
//         });

//         const newUsers = results.map(
//             ({
//                 gender,
//                 name: { first, last },
//                 location: { state, country },
//                 dob: { age }
//             }) => ({
//                 fullName: `${first} ${last}`,
//                 location: `${state}, ${country}`,
//                 age,
//                 gender
//             })
//         );

//         console.log(newUsers);
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// getUsers2();




async function getProducts(){
    try{
        const response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();         //data is an array

        const products = data.map(({id, title, price, category, rating:{rate}})=>(
            {
                id,
                title,
                price,
                category,
                rating:rate,
                isExpensive : price>100
            }
        ));
        console.log(products);

        const expensiveProducts = data.filter(({price})=>(price>100));
        console.log(expensiveProducts);

        const allPrices = data.map(({price})=>(price));
        const totalPrice = allPrices.reduce((accum, currValue)=>{ return accum+currValue },0);
        const totalProducts = allPrices.length;
        console.log(`The average is : ${totalPrice/totalProducts}`);
    }
    catch(error){
        console.error(error.message);
    }

}

getProducts();





