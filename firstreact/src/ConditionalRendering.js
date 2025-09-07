const product = ["towel", "books", "bracelets"];

const productswithkey = [{id:'1',value:'virat'},
                         {id:'2', value:'ms dhoni'} ,
                         {id:'3',value:'rohith'} ];

function ConditionalRendering(){

  return(

    <>
    <h1>Below are the products</h1>
    {product.map(product=><p>{product}</p>)}
    
    <ul>


        { product.map(products =>{
            return(
            <li>{products}</li>
            )

        })}


    </ul>

    <ul>
        {/* Display products with keys */}

        {

       productswithkey.map((item) => {
     return (
      <li 
      key={item.id} 
      className={`${+item.id % 2 === 0 ? 'bg-color' : ''}`} >
      {item.id} - {item.value}
    </li>
  );
})

        
        }
        
      </ul>


    </>
  )

}
export default ConditionalRendering;


