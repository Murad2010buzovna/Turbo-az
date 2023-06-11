export default function Filter() {
    return (
        <div>
            <form action="">
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




                <label for="qiymeti">qiymeti</label>
                <input min="500" max="2147483647" value="autoprice" type="number" />



                <label for=" il ">il </label>
                <select name="il " id=" il ">
                    <option></option>
                    <option value="2023">2023</option>
                    <option value="2050">2050</option>
                    <option value="3000">3000</option>
                    <option value="2010">2010</option>
                </select>


                <label for="şəhər">şəhər </label>
                <select name="şəhər" id=" şəhər ">
                    <option></option>
                    <option value="dubay">dubay</option>
                    <option value="avropa">avropa</option>
                    <option value="amerika">amerika</option>
                    <option value="fransa">fransa</option>
                </select>
            </form>
        </div>
    )
}