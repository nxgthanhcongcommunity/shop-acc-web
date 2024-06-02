const CopyInput = () => {
  return (
    <>
      <label
        htmlFor="account-id"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Ngân hàng:
      </label>
      <div className="relative mb-4">
        <input
          id="account-id"
          type="text"
          className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          defaultValue={"MB Bank"}
          disabled
          readOnly
        />
        <button
          data-copy-to-clipboard-target="account-id"
          data-tooltip-target="tooltip-account-id"
          className="absolute end-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          <span id="default-icon-account-id">
            <svg
              className="h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
          </span>
          <span
            id="success-icon-account-id"
            className="inlineFlex hidden items-center"
          >
            <svg
              className="h-3.5 w-3.5 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </button>
        <div
          id="tooltip-account-id"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          <span id="default-tooltip-message-account-id">Copy to clipboard</span>
          <span id="success-tooltip-message-account-id" className="hidden">
            Copied!
          </span>
          <div className="tooltip-arrow" data-popper-arrow />
        </div>
      </div>
    </>
  );
};

export default CopyInput;
