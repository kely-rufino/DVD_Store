import { Pagination } from "@material-ui/lab";
import { isEndOfRange } from "@mui/lab/internal/pickers/date-utils";
import "./DVDsPagination.css";

function DVDsPagination({ numberOfMovies, onChange, pageSize }) {
  const count = Math.ceil(numberOfMovies / pageSize);

  return (
    <div className="pagination">
      <footer>
        <Pagination
          count={count}
          onChange={(x, y) => onChange(y)}
          color="primary"
        />
      </footer>
    </div>
  );
}

export default DVDsPagination;
