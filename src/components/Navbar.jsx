const Navbar = (props) => {
  const { inputValue } = props;

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.inputSearch.value;
    window.location.href = `/search/${query}`;
  };

  return (
    <div className="navbar fixed left-0 top-0 z-50 w-full bg-white shadow">
      <div className="container mx-auto flex h-14 w-full items-center justify-between px-4 md:gap-x-12 md:px-8 xl:h-16 xl:px-16">
        {/*  Logo  */}
        <a
          href="/"
          className="flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="26"
            fill="none"
            viewBox="0 0 48 26"
          >
            <path
              fill="#000"
              d="M45.8 9.087a5.323 5.323 0 1 1-7.528-7.528A5.323 5.323 0 0 1 45.8 9.087Z"
              opacity=".4"
            />
            <path
              fill="#000"
              d="M45.795 9.086a5.323 5.323 0 0 1-7.528 0l-7.434-7.434a5.323 5.323 0 1 0-7.528 7.528l7.434 7.434a5.323 5.323 0 0 0 7.528 0l7.528-7.528Z"
              opacity=".6"
            />
            <path
              fill="#000"
              d="M38.267 16.615a5.323 5.323 0 0 1-7.528 0L16.311 2.187a7.097 7.097 0 0 0-10.038 0L0 8.46a5.323 5.323 0 0 1 7.528 0L23.21 24.143a5.323 5.323 0 0 0 7.528 0l7.528-7.528Z"
            />
          </svg>
          <span className="text-xl font-bold text-gray-800">Storx</span>
        </a>
        {/*  _Logo  */}
        {/*  Search Form  */}
        <form
          id="formSearch"
          className="hidden w-full md:block xl:max-w-xl"
          onSubmit={handleSearch}
        >
          <div className="relative flex h-10 items-center overflow-hidden rounded-full border py-2 pl-10 pr-0">
            <svg
              className="icon icon-tabler icons-tabler-outline icon-tabler-search absolute left-2 z-50 w-6 stroke-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input
              id="inputSearch"
              defaultValue={inputValue || ""}
              name="inputSearch"
              className="absolute inset-0 bg-transparent pl-10 outline-none"
              type="text"
              placeholder="Search Product..."
            />
          </div>
        </form>
        {/*  _Search Form  */}
        {/*  Icons  */}
        <div className="flex items-center gap-2">
          <a href="">
            <svg
              className="icon icon-tabler icons-tabler-outline icon-tabler-search w-6 stroke-gray-700 md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </a>
          <a href="">
            <svg
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart w-6 stroke-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </a>
          <a href="">
            <svg
              className="icon icon-tabler icons-tabler-outline icon-tabler-user w-6 stroke-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </a>
        </div>
        {/*  _Icons  */}
      </div>
    </div>
  );
};

export default Navbar;
