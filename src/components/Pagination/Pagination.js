import React from "react";
import './Pagination.scss'

const Pagination =(props)=>{
    console.log(props)
    const {onLeftClick,onRightClick,page,totalPages}=props;
    return(
        <div className="pagination">
            <button onClick={onLeftClick}>
        menos
            </button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>más</button>
        </div>
    )
}

export default Pagination;