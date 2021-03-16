function IconCollection({ name }) {
  if (name == "bar") {
    return (
      <svg
        width="34"
        height="24"
        viewBox="0 0 34 24"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12H18.3112M1 1H33M1 23H33"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (name == "search") {
    return (
      <svg
        width="21"
        height="21"
        viewBox="0 -1 30 30"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M22.5387 20.7713L27.8925 26.1238L26.1238 27.8925L20.7713 22.5387C18.7797 24.1353 16.3025 25.0036 13.75 25C7.54 25 2.5 19.96 2.5 13.75C2.5 7.54 7.54 2.5 13.75 2.5C19.96 2.5 25 7.54 25 13.75C25.0036 16.3025 24.1353 18.7797 22.5387 20.7713ZM20.0312 19.8438C21.6176 18.2124 22.5036 16.0255 22.5 13.75C22.5 8.915 18.5837 5 13.75 5C8.915 5 5 8.915 5 13.75C5 18.5837 8.915 22.5 13.75 22.5C16.0255 22.5036 18.2124 21.6176 19.8438 20.0312L20.0312 19.8438Z"
        />
      </svg>
    );
  }
}

export default IconCollection;
