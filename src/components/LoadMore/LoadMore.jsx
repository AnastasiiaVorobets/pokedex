import './LoadMore.css';

function LoadMore({ loadMore }) {

  return (
    <button
      type='button'
      className='button'
      onClick={loadMore}
    >
      LoadMore
    </button>
  );
}

export default LoadMore;