import { useState,useEffect } from 'react';


const Pagination = ({pages, setcurrentPage,currentEmployees,sortedEmployees }) => {

  
    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1);



    // sayfalama effekti

    useEffect(() => {
        setcurrentPage(currentButton)
    }, [currentButton, setcurrentPage])


    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries</div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`} ><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                >Previous</a></li>

                    {
                        numOfPages.map((page,index)=>(
                            <li key={index} className={`${currentButton === page ? 'page-item active' :'page-item'}`}><a href="#!" className="page-link"
                                onClick = {()=>setCurrentButton(page)}
                            >{page}</a></li>
                        ))
                    }


                <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`} ><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
                >Next</a></li>

            </ul>
        </div>
    )
}


export default Pagination


// <li class="page-item"><a href="#" class="page-link">1</a></li>
// <li class="page-item"><a href="#" class="page-link">2</a></li>
// <li class="page-item active"><a href="#" class="page-link">3</a></li>
// <li class="page-item"><a href="#" class="page-link">4</a></li>
// <li class="page-item"><a href="#" class="page-link">5</a></li>
// <li class="page-item"><a href="#" class="page-link">Next</a></li>