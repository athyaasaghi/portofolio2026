
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Athya Asaghi
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear}
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed with ❤️ by{" "} Athya Asaghi
      </p>
    </div>
  );
};

export default Footer;
