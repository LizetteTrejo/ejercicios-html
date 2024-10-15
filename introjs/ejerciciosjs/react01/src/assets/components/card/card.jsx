export const Card = (props) => {
  let counter = 1;

  const incrementHandle=()=>{
    console.log("Estoy dentro del incremento")
    console.log(++counter);
  }
  return (
    <div>
       <p>{props.title}</p>
       <p>Piezas<span>{counter}</span></p>
       <p>Número de piezas: <span>{props.stock}</span></p>
       <button onClick={incrementHandle}>+</button>
       <button>-</button>
    </div>
  )
}

// export { Card } 
