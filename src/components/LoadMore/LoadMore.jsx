import './LoadMore.css'
function LoadMore({loadMore}) {
  return (
    <button
      className='button'
      onClick={loadMore}
    >
      LoadMore
    </button>
  );
}

export default LoadMore;