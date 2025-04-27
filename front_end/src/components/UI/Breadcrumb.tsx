
const BreadCrumb = ({items}: {items:{label:string;link?:string}[]})=>{
  return (
    <>
      <ol className='BreadCrumb'>
        {
          items.map((item,index)=>(
            <li key={index} className={index === items.length - 1 ? "active": "" }>
              {item.link ? <a href={item.link}>{item.label} </a> : item.label }
            </li>
            
          ))
          
        }
      </ol>
    </>
  )
};

export default BreadCrumb;

