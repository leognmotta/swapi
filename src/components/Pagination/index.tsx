import React from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

interface Props {
  count: number;
  currentPage: number;
  navigate: (toPage: number) => void;
}

const Pagination: React.FC<Props> = ({ count, currentPage, navigate }) => {
  const pages = Array.from(
    { length: Math.ceil(count / 10) },
    (item, index) => index
  );

  return (
    <div>
      <button
        type="button"
        disabled={currentPage - 1 <= 0}
        onClick={() => {
          navigate(currentPage - 1);
        }}
      >
        <MdNavigateBefore size={18} />
      </button>

      <ul>
        {pages.map(page => (
          <li key={page}>
            <button
              type="button"
              onClick={() => {
                navigate(page + 1);
              }}
            >
              {page + 1}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled={currentPage >= count / 10}
        onClick={() => {
          navigate(currentPage + 1);
        }}
      >
        <MdNavigateNext size={18} />
      </button>
    </div>
  );
};

export default Pagination;
