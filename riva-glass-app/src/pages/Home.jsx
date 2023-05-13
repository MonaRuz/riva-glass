import {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className="max-h-[100vh] min-h-[550px] m-6 flex flex-col justify-start items-center">
      <p className="w-[700px] mb-6 text-center">Nacházíte se v okolí Nového Boru a nevíte, na které zajímavé místo se podívat? Přijďte se podívat do naší nově vzniklé galerie sklářského umění a případně si zakoupit nějaký krásný kousek skla  domů.</p>
      <p className="w-[700px] mb-6 text-center">Nabízíme komentovanou prohlídku našeho muzea sklářského umění v Novém Boru, městě skla. Po prohlídce si můžete zakoupit sklářský výrobek a děti do X let dostanou skleněný dárek na památku. Abychom předešli příliš velkým skupinám, doporučujeme si návštěvu předem zarezervovat.</p>
      
      
      <Link className="bg-sky-700 hover:bg-[#55b7dd] py-2 px-3 rounded-lg text-xl my-6" to="/reservation">Rezervovat</Link>
      <div className="w-[700px]">
        <hr className="mb-6" />
        <h2 className="text-center mb-2 text-xl underline">Kde nás najdete?</h2>
        <p className="text-center mb-3">Gen. Svobody 308, Nový bor</p>
        <p className="w-[700px] text-center mt-3">Obchod a galerie se nachází necelé 3 km od centra města, pěšky trvá cesta 45 minut. Pro dopravu můžete využít městské hromadné dopravy z autobusového nádraží,cílová zastávka je Havlíčkova.. Naše galerie je hned vedle této zastávky. Otevíracé dobu jsme přizpůsobili příjezdu autobusu.</p>
        

      </div>
    </section>
  )
}

export default Home