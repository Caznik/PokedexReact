import './pagination.css';

function Pagination(props: any) {

    let { totalItems, itemsPerPage, onPageChange } = props;
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        onPageChange(newPage);
    };

    return(
        <>
            <div className="pagination">
                {Array.from(Array(pageCount).keys()).map(
                    (pageNumber) => (
                        <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber + 1}</button>
                    )
                )}
            </div>
        </>
    )
}


export default Pagination;