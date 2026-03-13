export default function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  switch (name) {
    case "wifi":
      return (
        <svg {...common}>
          <path
            d="M2.5 8.8c5.9-5.1 13.1-5.1 19 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5.7 12c4.1-3.6 8.5-3.6 12.6 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8.9 15.2c2.3-2.1 4.0-2.1 6.3 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 19.7h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "water":
      return (
        <svg {...common}>
          <path
            d="M12 2.6c2.6 3.3 5.2 6.3 5.2 9.6A5.2 5.2 0 1 1 6.8 12.2c0-3.3 2.6-6.3 5.2-9.6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.1 12.6c.4 2 1.9 3.3 3.9 3.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "bed":
      return (
        <svg {...common}>
          <path
            d="M4 12V9.8c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8V12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M6.2 8.1V7c0-.8.7-1.5 1.5-1.5h2.8c.8 0 1.5.7 1.5 1.5v1.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 14.3h18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 14.3V19M19 14.3V19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "parking":
      return (
        <svg {...common}>
          <path
            d="M7 4.8h6.1a4.1 4.1 0 0 1 0 8.2H7V4.8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M7 13v6.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4.6 3.8h14.8"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity=".35"
          />
        </svg>
      );
    case "market":
      return (
        <svg {...common}>
          <path
            d="M3 7.5h18l-1.5 12H4.5L3 7.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 10.5v3M12 10.5v3M15.5 10.5v3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 7.5V5.8c0-.8.7-1.5 1.5-1.5h9c.8 0 1.5.7 1.5 1.5v1.7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
