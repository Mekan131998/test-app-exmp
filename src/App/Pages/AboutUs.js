import React from 'react'
import './Styles/About.css'

const About = () => {
  return (
    <div className='about'>
        <h4 className='about-head'>Biz barada</h4>
        <div className='about-row'>
            <div className='about-col-1'>
                <p>
               <strong> Sumbar Computer</strong> store was founded in 2010 and is a reliable supplier of the entire range of IT equipment for the corporate sector and private clients. Our retail and wholesale store of computer equipment.
                </p>
                <p>
                <strong> Sumbar Computer</strong> offers a wide range of personal computers, individual components, laptops, peripheral devices, computer accessories, printers, office equipment, mobile accessories and much more from the world’s leading <a href='/brands'>manufacturers</a>.
                </p>

                <div className='about-info'>
                    <h3>SC-niň esasy harytlary:</h3>
                    <ul>
                        <li>Şahsy kompýuterler, monobloklar;</li>
                        <li>Ofis we oýun noutbuklary;</li>
                        <li>Oýunçylar üçin toplumlaşdyryjy enjamlar we periferiýa enjamlary;</li>
                        <li>Üznüksiz elektrik üpjünçiligi ulgamlary we bloklary;</li>
                        <li>Ofis enjamlary we guramaçylykly tehnika;</li>
                        <li>Ulgamlaýyn enjamlar;</li>
                    </ul>
                </div>

                <div className='about-info'>
                    <h3>Korporatiw müşderiler üçin enjamlar bilen üpjün etmek we taslamalary durmuşa geçirmek üçin hyzmatlaryň doly toplumy hödürlenýär:</h3>
                    <ul>
                        <li>Kiçi, orta we iri kärhanalar üçin täjirçilik enjamlaryny satyn almakda ýörite meýilleşdirilen bahalar göz öňünde tutulýar;</li>
                        <li>Döwlet buýrujysyna öndürijiler bilen bilelikde ylalaşylan ýa-da işlenip düzülen taslamalar üçin aýratyn arzanladyşlar bilen döwlet pudagyna harytlary işjeň üpjün edýäris;</li>
                    </ul>
                </div>


                <div className='about-info'>
                    <h3>Bölek satuw müşderileri üçin:</h3>
                    <ul>
                        <li>Aňryçäk derejede pes bahalar;</li>
                        <li>Hünär derejeli we hoşniýetli menejerler;</li>
                        <li>Harytlary Türkmenistanyň ähli ýerine <a href='/delivery'>“gapyňyza” eltip bermek</a>.</li>
                        <li>Onlaýn dükan.</li>
                        <li>Saýtda döwürleýin <a href='/discount'>arzanladyşlar</a>.</li>
                        <li>Kart arkaly töleg (onlaýn we töleg terminaly arkaly).</li>
                        <li>Sarp edijileriň hukuklaryny goramak baradaky Türkmenistanyň kanunyna esaslanýan <a href='/garanty'>kepillik şertleri</a>.</li>            
                    </ul>
                </div>
                
                

                <div className='about-info'>
                    <h3>Habarlaşmak üçin:</h3>
                    <ul>
                        <li>Tel.: +993 (12) 49-23-43, +993 (12) 26-13-69, +993 (62) 70-80-45</li>
                        <li>e-mail: sumbar.computer@gmail.com </li>
                        <li>Instagram: <a href='https://www.instagram.com/sumbarcomputer_official'>sumbarcomputer_official</a>.</li>
                        <li>Dükanymyz<a href='https://g.page/sumbar-computer?share'> A.Nyýazow (Hudayberdiýew) köçesi, 99 jaý</a> salgysy boýunça Aşgabat şäheriniň merkezinde ýerleşýär.</li>
                    </ul>
                </div>
                

                
            </div>        
            <div className='about-col-2'>
                <img src='./images/about/about-us-1.jpg' />
                <img src='./images/about/about-us-2.jpg' />
                <img src='./images/about/about-us-3.jpg' />
            </div>        
        </div>
    </div>
  )
}

export default About