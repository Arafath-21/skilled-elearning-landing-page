import React from 'react'

function Card({data}) {
  return <>
          <div className="col-lg-4">
            <div className={data.isBg?"card-bg card my-5":"card my-5"} >
              <div className="card-body">
                {
                  data.isBg?(<h1 className="card-title">{data.name} </h1>):(<h4 className="card-title">{data.name}</h4>)
                }                
                <p className="card-text py-4">{data.para1} <br />{data.para2} <br />{data.para3} {data.para4} <br /></p>
                <button>{data.an} </button>
              </div>
            </div> 
          </div>  

  </>
}

export default Card

// style={{position:"absolute",top:"0",right:"0"}} 