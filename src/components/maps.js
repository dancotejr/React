
const Maps =()=>{
   
// let students =['John', 'Mary', 'Doe','Samuel','Ivy' ]
// let StudentList= students.map((student)=>(
//     <h1 key={student}>{student} </h1>
// ))
// return<div>{StudentList}</div>
// }

let studen = ['mary', 'Don','ivy','John','Martin'];
return(
    <div>{
        studen.map((stud)=>(
            <h1>{stud}</h1>
        ))
        }
    </div>
)
}
export default Maps;