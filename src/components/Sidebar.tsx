import { Link } from 'react-router-dom';

export const Sidebar = () => (
  <div className="w-20 bg-base-300 shadow-xl h-full p-4">
    <ul className="flex flex-col gap-4 items-center">
      <li>
        <Link to="/" className="tooltip tooltip-right" data-tip="Home">
          <div className="btn btn-circle bg-neutral text-white hover:bg-primary">H</div>
        </Link>
      </li>

      <li>
        <Link
          to="/collection-periods"
          className="tooltip tooltip-right"
          data-tip="Collection Periods"
        >
          <div className="btn btn-circle bg-neutral text-white hover:bg-primary">C</div>
        </Link>
      </li>
    </ul>
  </div>
);
