class AddressBook{
   //constructor
   constructor(...params) 
   {
       this.firstName = params[0];
       this.lastName = params[1];
       this.address = params[2];
       this.city = params[3];
       this.state = params[4];
       this.zip = params[5];
       this.phoneNumber = params[6];
       this.email = params[7];
   }
   
     // get and set for firstname 
   //first letter should be capital and min 3 letters
   get firstName() 
   { return this._firstName; 
   }
   set firstName(firstName) 
   {
     let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
     // test returns a boolen value
     if (nameRegex.test(firstName))
       this._firstName = firstName;
     else
       throw "Invalid first Name";
   }
   
    //get and set for lastname
   //first letter should be capital and min 3 letters
   get lastName() 
   { return this._lastName; 
   }
   set lastName(lastName) 
   {
     let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
     // test returns a boolen value
     if (nameRegex.test(lastName))
       this._lastName = lastName;
     else
       throw "Invalid  last Name";
   }
     //get and set for address
   //minimum four characters
   get address() 
   { return this._address; 
   }
   set address(address) 
   {
     let addressRegex = RegExp("^[A-Za-z]{4,}$");
     if (addressRegex.test(address))
       this._address = address;
     else
       throw "Invalid address ";
   }
   
      //get and set for city
   //minimum four characters
   get city() 
   { return this._city; 
   }
   set city(city) 
   {
     let cityRegex = RegExp("^[A-Za-z]{4,}$");
     if (cityRegex.test(city))
       this._city = city;
     else
       throw "Invalid city ";
   }
 
     //get and set for state
   //minimum four characters
   get state() 
   { return this._state; 
   }
   set state(state) 
   {
     let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
     if (stateRegex.test(state))
       this._state = state;
     else
       throw "Invalid state";
   }
   
      //get and set for zip
   //pin code of form 789 987
   get zip() 
   { return this._zip; 
   }
   set zip(zip) 
   {
     let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
     if (zipRegex.test(zip))
       this._zip = zip;
     else
       throw "Invalid zip ";
   }
   
      //get and set for phoneNumber
   //phone number should be of form 91 8149240833
   get phoneNumber() 
   { return this._phoneNumber; 
   }
   set phoneNumber(phoneNumber) 
   {
     let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
     if (phoneRegex.test(phoneNumber))
       this._phoneNumber = phoneNumber;
     else
       throw "Invalid phone number";
   }
 
     // get and set for email
   //ac.xyz@gmail.com.in .xyz-optional  .in-optional
   get email() 
   { return this._email; 
   }
   set email(email) 
   {
     let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
     if (emailRegex.test(email))
       this._email = email;
     else
       throw "Invalid email";
   }
   
     //defining to string method
   toString()
       {
       return "First Name: " + this.firstName + ", Last Name: " + this.lastName
         + "\nAddress: " + this.address
         + ", City: " + this.city + ", State: "
         + this.state + "\nZip: " + this.zip
         + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
      }
   }
   
   //creating an instance and giving contact details
 try 
 {
     let ContactsArray = new Array();
     ContactsArray.push
     (
       new AddressBook
       (
         "Vinit",
         "Joshi",
         "paritgalli",
         "Latur",
         "Mharashtra",
         "446245",
         "91 9764859944",
         "vinitjo2014@gmail.com"
       )
     );
     ContactsArray.push
     (
       new AddressBook
       (
         "Ram",
         "Patil",
         "Shahunagar",
         "Kagal",
         "Maharashtra",
         "268 784",
         "91 7312569875",
         "rampatil33@gmail.com"
       )
     );
     ContactsArray.push
     (
       new AddressBook
       (
         "Neha",
         "Chaugule",
         "Shreenagaar",
         "Panaji",
         "Karnataka",
         "891 258",
         "87 9876543210",
         "neha33@gmail.com"
       )
     );
     ContactsArray.push
     (
       new AddressBook
       (
         "Shubham",
         "Kumar",
         "beachroad",
         "Vizag",
         "Madhypradesh",
         "628 412",
         "91 7878787878",
         "john@gmail.com"
       )
     );
     //printing array before updating
     ContactsArray.forEach((contact_book) => console.log(contact_book.toString()));

     //finding index using name
     let check = ContactsArray.findIndex(
       (contact_book) => contact_book.firstName == "Shubham"
     );
     //updating the contact detail
     ContactsArray[check].zip = "628 412";
   
     //displaying contacts after being updated
     console.log("----------------------After Changing Zip Updated Contacts are------------------------------------");
     ContactsArray.forEach((contact_book) => console.log(contact_book.toString()));

     let check1 = ContactsArray.findIndex((contact_book) => contact_book.firstName == "Vinit");
     ContactsArray.splice(check1, 1);
     console.log("----------------------Contacts after Being Deleted from the array---------------------------------");
     ContactsArray.forEach((contact_book) => console.log(contact_book.toString()));   

  //UC6 Reduce function to find total of contacts in Address Book
     var ContactsPresenceTotal = 0;
     function findTotalContacts(ContactsArray) 
     {
       if (ContactsArray != null) ContactsPresenceTotal++;
       return ContactsPresenceTotal;
     }
     ContactsArray.reduce(findTotalContacts, 1);
     console.log("--Total Contacts Present in the AddressBookMaster array--: " +ContactsPresenceTotal) 



     // check for duplicate Person details
let CountDuplicate = 0;
function CheckDuplicatesCount(contact_book) 
{
  if (contact_book.firstName == "Nandha") CountDuplicate++;
  return CountDuplicate;
}

//using foreach checking the count for each contact
ContactsArray.forEach((contact_book) => CheckDuplicatesCount(contact_book));
if (CountDuplicate == 1)
  console.log( "--It is Not a Duplicate Entry--" );
else
  console.log( "--It is Duplicate Entry--" );



//Ability to search person in particular City or State

  //Search By City
  console.log("\n------------ Search To get Contact by City Kagal---------------------");
  function ContactByCity(contact_book) 
  {
    if (contact_book.city == "Kagal") console.log(contact_book.toString());
  }
  ContactsArray.filter(ContactByCity);

  //Search By State
  console.log( "----------------Search Contact By State Maharashtra----------------");
  let statecontact = ContactsArray.filter((contact_book) => contact_book.state.includes("Mharashtra")
  );
  console.log(statecontact.toString());

 // UC9 - Ability to View Person by City or State using map
 function CityMap(Details) 
 {
  return Details.state + "       " + Details.firstName + "        " + Details.lastName;
}
let addresscityMap = ContactsArray.map(CityMap);
console.log(addresscityMap);

// uc10 by city
function StateMap(Details) 
{
  return Details.state + "     " + Details.firstName + "     " + Details.lastName;
}
let addressStateMap = ContactsArray.map(StateMap);
console.log(addressStateMap);
//uc11 To Sort the Enteries in the address book alphabetically by persons name

console.log("-------------Sorting by FirstName-----------");
for (let contactDetails in ContactsArray)
{
  ContactsArray.sort(contactDetails.firstName);
}
ContactsArray.forEach((contact) => console.log(contact.toString()));
}
catch (e) 
{
  console.log(e);
}