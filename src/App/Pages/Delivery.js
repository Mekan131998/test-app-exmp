import React from 'react'
import './Styles/Delivery.css'

const Delivery = () => {
  return (
    <div className='delivery'>
        <h4 className='delivery-head'>Eltip bermek we toleg</h4>
        <div className='delivery-row'>
            
            <div className='delivery-col-1'>
                <h4>Eltip bermegiň usullary:</h4>

                <div className='delivery-info'>
                    <h3>1. Özüň baryp almak</h3>
                    <p>
                    Sargydy dükanyň satyjylaryna deslapdan jaň etmek arkaly A.Nyýazow 
                    (Hudayberdiýew) köçesi, 99 jaý salgysyndan özüňiz alyp bilersiňiz.
                    </p>
                </div>
                
                <div className='delivery-info'>
                    <h3>2. Aşgabat şäheriniň çäklerinde eltip bermek</h3>
                    <p>
                    Aşgabat şäheriniň çäklerinde eltip bermek – günüň dowamynda ýa-da ertesi gün (sargyt wagtyna baglylykda) amala aşyrylýar. 
                    Sargyt 300 manat möçberden geçýän bolsa, eltip bermek mugt (eltip bermegiň bahasy – 15 manat).
                    </p>
                </div>
                
                <div className='delivery-info'>
                    <h3>3. Welaýatara eltip bermek</h3>
                    <p>
                    Welaýatlara eltip bermek Türkmenistanyň poçta gullugy tarapyndan amala aşyrylýar. Eltip bermegiň möhleti – ortaça 3-5 gün. Baýramçylyk ýa-da dynç günleri sargyt edilen harytlaryň eltip berilmegi üçin has köp wagt gerek bolup biler. Saýtdan Türkmenistanyň islendik ýerine sargyt edeniňizde, eltip bermek mugt, ýöne sargyt 1000 manat möçberinden geçmeli (eltip bermegiň bahasy – 50 manat). Sargyt edilende, maglumatlary takyk doldurmakda üns bermegiňizi haýyş edýäris, eger salgy we şäher gabat gelmese, sargyt gaýtadan resmileşdirilýänçä, haryt iberilmez.
                    </p>
                </div>

                <p>
                Eltip bermegiň ýokardaky usullary müşderiniň talaplaryna laýyk gelmeýän bolsa, müşderi öz usulyny teklip etmäge hukugy bardyr, munda harytlaryň abatlygy we eltip bermek çykdajylary üçin jogapkärçiligi dolulygyna müşderi öz üstüne alýar.
                </p>

                <p>
                Sargyt resmileşdirenden soň satyjymyz käbir soraglary anyklamak üçin Siziň bilen telefon arkaly habarlaşar. Günüň dowamynda telefon elýeterli bolmasa, sargyt ýatyrylýar.
                </p>

                <p>
                Aşgabat şäheri boýunça eltip bermek sagat 09:00 – 19:00 aralygynda amala aşyrylýar.
                </p>

                <p>
                Dükanyň iş wagty: her gün 09:00-dan 19:00-a çenli, ýekşenbe 11:00-dan 19:00-a çenli.
                </p>
                <h4>Tolegin usullary:</h4>
                <br />
                <p>
                Töleg şu aşakdaky usullar arkaly amala aşyrylyp bilner:
                </p>
                <div className='delivery-info'>
                    <ul>
                        <li>Nagt hasaplaşygy;</li>
                        <li>Bank karty (müşderiniň özi gelip alanda we Aşgabat şäheriniň çäklerinde eltip bermekde terminal arkaly töleg);</li>
                        <li>Onlaýn töleg (VPN we dürli proksi-serwerleri ulananyňyzda, onlaýn tölegiň işlemeýändigini ýadyňyzdan çykarmaň);</li>
                        <li>Nagt däl töleg (ýuridiki şahslar we kärhanalar üçin bank arkaly pul serişdelerini geçirmek, daşary ýurt kompaniýalary üçin walýuta hasabyna tölemäge mümkinçilik berýäris);</li>
                    </ul>
                </div>

                <h4 className='g_info'>Goşmaça maglumat üçin:</h4>
                
                <p><strong>Tel.</strong>: +993 (12) 49-23-43, +993 (12) 26-13-69, +993 (62) 70-80-45</p>
                <p><strong>e-mail:</strong> sumbar.computer@gmail.com</p>
            </div>    

            <div className='delivery-col-2'>
                <img src='./images/delivery/delivery-and-payment-2.jpg' />
                <img src='./images/delivery/delivery-and-payment-3.jpg' />
                <img src='./images/delivery/delivery-and-payment-4.jpg' />
            </div>        
        </div>
    </div>
  )
}

export default Delivery