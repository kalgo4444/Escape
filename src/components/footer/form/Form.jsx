const Form = () => {
  return (
    <form className="mb-[170px] md:mb-28 mx-auto max-w-[500px] flex items-center w-full h-[50px]">
      <input
        type="email"
        placeholder="Enter your email address"
        name="email"
        id="emailLabel"
        className="bg-white text-black text-sm sm:text-lg indent-5 sm:indent-10 h-full flex-1 rounded-tl-sm rounded-l-sm "
      />
      <button
        type="button"
        className="bg-[#F8F8F890] px-[22px] sm:px-[44px] h-full rounded-tr-sm rounded-r-sm"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
