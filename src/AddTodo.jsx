import React from "react";

export const AddTodo = (props) => {
    const style = {
        button :
        {
            background: 'white',
            color : 'black', 
            borderRadius : '15px',
            // marginTop : '20px'
        },
        
        par :
        {
            marginTop :'20px',
            display : 'flex',
        },

        div1 :
        {
            textAlign : 'left',
        }
    };

    // const handleDeleteClick = (key) => {
    //     // here we are filtering - the idea is remove an item from the todo array on a button click
    //     const removeItem = props.taskList.filter((product) => {
    //       // return the rest of the todos that don't match the item we are deleting
    //       return product.key !== key;
    //     });
    //     // removeItem returns a new array - so now we are setting the todos to the new array
    //     props.settaskList(removeItem);
    //   }
    
    const handleDeleteClick = (key) => {
        const newlist = [...props.taskList]
        newlist.splice(key,1)
        props.settaskList(newlist)
    }
    return (
    <>
      {props.taskList.map((product,index) => {
        return (
          <>
            <div className="par" style={style.par} key={index}>
              <div className="container div1" style={style.div1}>
                    {product.task}
              </div>
              {/* onClick={()=>handleRemove(product.key)} */}
              <button className="btn btn-primary" style={style.button} onClick={() => handleDeleteClick(product.key)}>
                  cancel
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};
