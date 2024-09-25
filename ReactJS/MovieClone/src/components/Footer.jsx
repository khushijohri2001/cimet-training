const Footer = () => {
  return (
    <div className="h-64 bg-slate-900 border-gray-700 text-white flex flex-col gap-10 items-center justify-center">
      <ul className="flex gap-6">
        <li>Terms Of Use</li>
        <li>Privacy-Policy</li>
        <li>About</li>
        <li>Blog</li>
        <li>FAQ</li>
      </ul>
      <p className="w-[50rem] text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam
        tenetur autem tempora debitis officiis veritatis molestiae fugit earum,
        iusto ducimus, at amet eius quibusdam nam! Ea, doloremque libero?
        Cumque?
      </p>
      <ul className="flex gap-6">
        <li><i className="fa-brands fa-facebook-f"></i></li>
        <li><i className="fa-brands fa-instagram"></i></li>
        <li><i className="fa-brands fa-twitter"></i></li>
        <li><i className="fa-brands fa-linkedin-in"></i></li>
      </ul>
    </div>
  );
};

export default Footer;
