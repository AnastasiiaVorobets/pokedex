import './LoadMore.css';

function LoadMore({ loadMore }) {
  const handleClick = (event) => {
    event.preventDefault();
    loadMore()
  };

  return (
    <button
      type='button'
      className='button'
      onClick={handleClick}
    >
      LoadMore
    </button>
  );
}

export default LoadMore;
