
import './bank-card.css'
import chip from "../../assets/images/chip.png"

const BankCard = () => {
    return (
        <div className="flex justify-center my-28">
            <div className="card">
            <div className="face front">
                <h3 className="bankcard">Bank Card</h3>
                <div className="bank">Nam A Bank</div>
                <img src={chip} alt="" className="chip" />
                <div className="number">0123 4567 8910 1122</div>
                <h5 className="valid"><span>Valid<br />thru</span><span>01/01</span></h5>
                <h5 className="cardHolder">Ng Thanh Cong</h5>
            </div>
            <div className="face back">
                <div className="blackbar">

                </div>
                <div className="ccvtext">
                    <h5>Autorized Signature-not valid unless signed</h5>
                    <div className="whiteBar"></div>
                    <div className="ccv">123</div>
                </div>
                <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
            </div>
        </div>
        </div>
    )
}

export default BankCard;