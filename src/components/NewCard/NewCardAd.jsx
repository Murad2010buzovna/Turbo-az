import './NewCarAd.scss'

export default function NewCarAd() {
    return (
        <div className="newCarAd">
            <div className="newCarAd__inner container">
                <form className="form">
                    <h2>
                        ELAN YERLƏŞDİRMƏK
                    </h2>
                    <div className='formPart1'>
                        <div className='formLeft'>
                            <div className='formGroup'>
                                <label>Marka</label>
                                <select name="marka" id="marka">
                                    <option value="mercedes">Mercedes</option>
                                    <option value="bmw">BMW</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='formGroup'>
                                <label>Marka</label>
                                <select name="marka" id="marka">
                                    <option value="mercedes">Mercedes</option>
                                    <option value="bmw">BMW</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>

                        <div className='formRight'>
                            <div className='formGroup'>
                                <label>Marka</label>
                                <select name="marka" id="marka">
                                    <option value="mercedes">Mercedes</option>
                                    <option value="bmw">BMW</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}