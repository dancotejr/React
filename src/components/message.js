// let Message =() => {
//     return(
//         <h2>My intro to REACT "AM LEARNING REACT IT'S SO NICE"</h2>
//     )
// }
// export default Message;

const Sample = (props) => {
    const { name}= props;
    return (
        <div>
        {/* out pu */}
        <h1>This is a sample component from {name}</h1>
        {/* */}
        <h2>This is a sample component from {props.name}</h2>
        
        </div>
    );
}
export default Sample;