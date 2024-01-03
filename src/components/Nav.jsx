export default function Nav() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <a href="/portfolio-earth/#/" className="p-3">
                Home
              </a>
              <a href="/portfolio-earth/#/globe" className="p-3">
                Globe
              </a>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/portfolio-earth/#/">
            Brenden King
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 text-lg">
            <a href="/portfolio-earth/#/">Home</a>
            <a href="/portfolio-earth/#/globe">Globe</a>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
