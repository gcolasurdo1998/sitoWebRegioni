function CardRegione({ regione }) {
  return (
   <div className="
      bg-white
      rounded-xl
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      p-6
      flex
      flex-col
      min-h-40
    ">

    <div className="flex items-center gap-5">
      <img
        src={regione.img}
        alt={regione.nome}
        className="w-28 h-20 object-cover rounded-lg"
      />

    <h2 className="text-2xl font-bold text-gray-800">
      {regione.nome}
    </h2>
    </div>


    <div className="mt-auto self-end">
      <a
        href={regione.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
        text-blue-600
        hover:underline
        font-medium
      ">
      Vai al portale →
       </a>
  </div>

</div>
  );
}

export default CardRegione;