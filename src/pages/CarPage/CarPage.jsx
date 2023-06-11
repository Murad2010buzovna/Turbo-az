import "./CarPage.scss"

export default function CarPage() {
    return (
        <div className="car-group">
            <div className="left">
                <div className="div">BMW X7, 3.0 L, 2023 il, yeni</div>
                <img className="img" src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/9462/1673948689052/front-left-side-47.jpg" alt="" />
                <table>

                    <tr> <th>Şəhər</th>            <th>Bakı</th>  </tr>
                    <tr>  <th>Marka</th>            <th>BMW</th> </tr>
                    <tr> <th>Model</th>            <th>X7</th> </tr>
                    <tr>  <th>Buraxılış ili</th>            <th>2023</th> </tr>
                    <tr>  <th>Ban növü</th>            <th> Offroader / SUV</th> </tr>
                    <tr>  <th>Rəng</th>                    <th>Qara</th> </tr>
                    <tr> <th>Mühərrik</th>                   <th>3.0 L/340 a.g./Benzin</th> </tr>
                    <tr>  <th>Yürüş</th>      <th>0 km</th>  </tr>
                </table>
                <hr />
                <div>
                    Model 2023
                        Rəsmi diler İmprotex Motors
                            4il zəmanət var(200.000 km)
                                Modelin Tam full komplektasiyasi
                                    NİGHT -paket
                                      X-drive
                </div>

            </div>

            <div className="right">
                <div className="price">150 999 USD</div>
            </div>

        </div>
    )

}
