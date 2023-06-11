import   './NoPage.scss'
export default function Page() {
    return (
        <div>
   <form class="form" action="">

<div class="part1">
   
        <div class="form-group">

            <div class="left">

                <label for="marka">Marka</label>
                <select name="marka" id="marka">
                    <option value="seçin">seçin</option>
                    <option value="audi">Audi</option>
                    <option value="bmw">bmw</option>
                    <option value="mercedes">mercedes</option>
                    <option value="kia">kia</option>
                    <option value="nissan">nissan</option>
                    <option value="ferrari">ferrari</option>
                </select>

                <label for="model">model</label>
                <select name="model" id="model">
                    <option value="seçin">seçin</option>
                    <option value="e 300">E 300</option>
                    <option value="x7">X7</option>
                    <option value="x9">X9</option>
                    <option value="x5">X5</option>
                    <option value="m5">M5</option>
                </select>

                <label for="ban növü">ban növü</label>
                <select name="ban növü" id="ban növü">
                    <option></option>
                    <option value="sedan">sedan</option>
                    <option value="avtobus">avtobus</option>
                    <option value="pikap">pikap</option>
                    <option value="yük maşını">yük maşını</option>
                    <option value="moped">moped</option>
                </select>


                <label for="">
                    Yürüş
                </label>
                <input step="10000" max="" min="0" type="number"/>


                <label for="rəngi">rəngi</label>
                <select name="rəngi" id="rəngi">
                    <option></option>
                    <option value="sarı">sarı</option>
                    <option value="qara">qara</option>
                    <option value="göy">göy</option>
                    <option value="qırmızı">qırmızı</option>
                    <option value="ağ">ağ</option>
                </select>
         

                <label for="qiymeti">qiymeti</label>
                <input min="500" max="2147483647" value="autoprice" type="number"/>
                <label for="neçənçi sahibisiniz">neçənçi sahibisiniz</label>

                <select name="neçənçi sahibisiniz" id="neçənçi sahibisiniz">
                    <option></option>
                    <option value="birinçi">birinçi</option>
                    <option value="ikinçi">ikinçi</option>
                    <option value="üçünçü">üçünçü</option>
                    <option value="dördünçü və ya daha çox">dördünçü və ya daha çox</option>
                </select>
            </div>
            
            <div class="right">
                <label for="Yanacaq növü ">Yanacaq növü </label>
                <select name="Yanacaq növü " id="Yanacaq növü ">
                    <option></option>
                    <option value="benzin">benzin</option>
                    <option value="dizel">dizel</option>
                    <option value="qaz">qaz</option>
                    <option value="hibrit">hibrit</option>
                </select>



                <label for="Ötürücü">Ötürücü  </label>
                <select name=" Ötürücü" id="Ötürücü">
                    <option></option>
                    <option value="arxa">arxa</option>
                    <option value="ön">ön</option>
                    <option value="tam">tam</option>                  
                </select>

                
                <label for=" Sürətlər qutusu ">Sürətlər qutusu  </label>
                <select name=" Sürətlər qutusu " id=" Sürətlər qutusu ">
                    <option></option>
                    <option value="mexanika">mexanika</option>
                    <option value="avtomat">avtomat</option>
                    <option value="robotlaşdırılmış">robotlaşdırılmış</option>
                    <option value="variator">variator</option>
                </select>

                
                <label for=" il ">il </label>
                <select name="il " id=" il ">
                    <option></option>
                    <option value="2023">2023</option>
                    <option value="2050">2050</option>
                    <option value="3000">3000</option>
                    <option value="2010">2010</option>
                </select>

                <label for=" Mühərrikin həcmi, sm3 ">Mühərrikin həcmi, sm3 </label>
                <select name="Mühərrikin həcmi, sm3 " id=" Mühərrikin həcmi, sm3 ">
                    <option></option>
                    <option value="10000">10000</option>
                    <option value="12000">12000</option>
                    <option value="14000">14000</option>
                    <option value="16000">16000</option>
                </select>


                <label for="Mühərrikin gücü, a.g. ">Mühərrikin gücü, a.g. </label>
                <input min="0" max="2147483647" value="autoengine" type="number"/>

                <label for="Hansı bazar üçün yığılıb"> Hansı bazar üçün yığılıb</label>
                <select name=" Hansı bazar üçün yığılıb" id=" Hansı bazar üçün yığılıb ">
                    <option></option>
                    <option value="dubay">dubay</option>
                    <option value="avropa">avropa</option>
                    <option value="amerika">amerika</option>
                    <option value="fransa">fransa</option>
                </select>
            </div>
        </div>

</div>

</form>
        </div>
    )
}