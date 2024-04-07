
let name = "Mohan";

const users = [
  { name: "AMAR", age: 21 },
  { name: "AYUSH", age: 21 },
  { name: "AKHIL", age: 21 },
  { name: "AKHILESH", age: 21 }
];

function CheckEvenOrOdd(num) {
  if (num % 2 === 0) {
    return <div> EVEN</div>
  } else {
    return <div> ODD </div>
  }
}

function Checkalpha(name) {
  const firstLetter = name.charAt(0).toUpperCase();
  switch (firstLetter) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return <div>{name} starts with a vowel</div>;
    default:
      return <div>{name} does not start with a vowel </div>;
  }
}

function Jsx() {
  return (
    <div className="App">
      <h2> Hello {name}</h2>
      <h3> IF ELSE STATEMENT</h3>
      {CheckEvenOrOdd(5)}

      <h3>IF STATEMENT</h3>
      <p> EVEN NUMBER</p>

      <h3> LOOP</h3>
      {users.map((item, index) => {
        return (
          <div key={index}>
            {item.name} - {item.age}
          </div>
        );
      })}

      <h3>Vowel and not vowel</h3>
      {Checkalpha(name)}
    </div>
  );
}

export default Jsx;


export function Greet(){
    return<h1> Hello Pranav</h1>
}
//----------


