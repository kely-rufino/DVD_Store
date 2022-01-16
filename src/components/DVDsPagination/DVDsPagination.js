import { Pagination } from "@material-ui/lab";



function DVDsPagination({ numberOfMovies, onChange, pageSize }) {
  const count = Math.ceil(numberOfMovies / pageSize);
  

  return (
    <div>
      <Pagination
        count={count}
        onChange={(x, y) => onChange(y)}
        color="primary"
      />
    </div>
  );
}

export default DVDsPagination;
