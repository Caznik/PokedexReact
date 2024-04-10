import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import './pagination.css';

function Pagination(props: any) {
    const { currentPage, totalItems, itemsPerPage, onPageChange } = props;
    const totalPageItems = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        onPageChange(newPage);
    };

    const renderPageButtons = () => {
        const buttons = [];

        if (totalPageItems <= 5) {
            for (let i = 0; i < totalPageItems; i++) {
                buttons.push(
                    <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
                        {i + 1}
                    </button>
                );
            }
        } else {
            buttons.push(
                <button key={0} onClick={() => handlePageChange(0)} className={currentPage === 0 ? 'active' : ''}>
                    1
                </button>
            );

            if (currentPage > 3) {
                buttons.push(<span key="leftEllipsis">...</span>);
            }

            for (let i = Math.max(1, currentPage - 1); i <= Math.min(currentPage + 1, totalPageItems - 2); i++) {
                buttons.push(
                    <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
                        {i + 1}
                    </button>
                );
            }

            if (currentPage < totalPageItems - 3) {
                buttons.push(<span key="rightEllipsis">...</span>);
            }

            buttons.push(
                <button key={totalPageItems - 1} onClick={() => handlePageChange(totalPageItems - 1)} className={currentPage === totalPageItems - 1 ? 'active' : ''}>
                    {totalPageItems}
                </button>
            );
        }

        return buttons;
    };

    return (
        <>
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
                    <BsCaretLeft />
                </button>

                {renderPageButtons()}

                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPageItems - 1}>
                    <BsCaretRight />
                </button>

                {/* <input type="number" min="1" max={pageCount} value={currentPage + 1}
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 1 && value <= pageCount) {
                            handlePageChange(value - 1);
                        }
                    }}
                />
                <span>of {pageCount}</span> */}
            </div>
        </>
    );
}

export default Pagination;
