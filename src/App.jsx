// import './App.css';
import './App2.css';
import logo from './Logo.jpeg';
import QR from './QR.jpeg';

//Permanent Details//

let clinicName = 'Zen Dental Studio';
let clinicISO = "ISO 9001 : 2008 Certified Clinic";

let addressLine1 = "Jayaselvi Nagar, Mettangadu";
let addressLine2 = "Madukkarai SO, Coimbatore";
let contactInfo = "+919446331158, +919495571155";
let emailID = "nicholasrebeiro@gmail.com";

//---------------------------------------------------

//Temporary Details//

let invoiceNumber = 4823515;

var dictMonth = {1: "January",2: "February",3: "March",4: "April",5: "May",6: "June",7: "July",8: "August",9: "September",10: "October",11: "November",12: "December"};
var dictDay = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"}

var showDate = new Date();
var DD = showDate.getDate();
var MM = showDate.getMonth() + 1;
var YYYY = showDate.getFullYear();
var Day = showDate.getDay();
var roman;
if(DD == 1 || DD == 21 || DD == 31){
  roman = 'st';
}
else if(DD == 2){
  roman = 'nd';
}
else if(DD == 3){
  roman = 'rd';
}
else{
  roman = 'th';
}
var currentDate = dictDay[Day] + ', ' +  DD + roman + ' ' + dictMonth[MM] + ' ' + YYYY;

//------------------------------------------------------

//Patient Details//

let patientName = 'Ananya';
let gender = 'Female';
let patientContact = '8921143389';
let patientID = 73829164390;
let visitID = 1234567890;
let age = 23;

//-------------------------------------------------------

//Doctor Details//

let docName = 'Vipin Santhosh';
let qualification = 'MBBS';
let specialization = 'Cardiologist';

//------------------------------------------------------------

//Summary Values//

let subTotal = 0;
let paidAmount = 0;
let balance = 0;

//-------------------------------------------------------------

let paymentMode = 'Card';

let sum = 0;


function Details({desc, CN}){
  return(
    <div>
      <h1 className={CN}>
        {desc}
      </h1>
    </div>
  )
}

function Details2({item, rate, discount, due, paid}){
  due = rate - discount - paid;
  return(
    <div className="Details2">
      <h1 className='item' id='i1'>{item}</h1>
      <h1 className='item' id='i2'>{'₹ ' + rate}</h1>
      <h1 className='item' id='i3'>{'₹ ' + discount}</h1>
      <h1 className='item' id='i4'>{'₹ ' + due}</h1>
      <h1 className='item' id='i5'>{'₹ ' + paid}</h1>
    </div>
  )
}


function App() {
  return(
    <div className='App'>

      <img className="logo" src={logo}></img>
      <img className="logo2" src={logo}></img>

      <div className='Header'>
        <Details desc={clinicName} CN={'clinicName'}></Details>
        <Details desc={clinicISO} CN={'clinicISO'}></Details>
        <Details desc={addressLine1} CN={'addressLine1'}></Details>
        <Details desc={addressLine2} CN={'addressLine2'}></Details>
        <Details desc={'Contact : ' + contactInfo} CN={'contactInfo'}></Details>
        <Details desc={'Email : ' + emailID} CN={'emailID'}></Details>
      </div>

      <div className='line'></div>

      <div className='invoiceDetails'>
       <Details desc={'INVOICE'} CN={'InvoiceHeader'}></Details>
       <Details desc={'Invoice No. : ' + invoiceNumber} CN={'invoiceNumber'}></Details>
       <Details desc={'Date : ' + currentDate} CN={'Date'}></Details>
      </div>

      <div className='PatientDetails'>
       <Details desc={'Patient ID : ' + patientID} CN={'patientID'}></Details>
       <Details desc={'Visit ID : ' + visitID} CN={'visitID'}></Details>
       <Details desc={'Age : ' + age} CN={'age'}></Details>
       <Details desc={'Name : ' + patientName} CN={'patientName'}></Details>
       <Details desc={'Gender : ' + gender} CN={'gender'}></Details>
       <Details desc={'Contact : ' + patientContact} CN={'patientContact'}></Details>

       <h1 className='docDetails' >Doctor : Dr. <strong>{docName}</strong> | {qualification}, {specialization}</h1>
      </div>

      <div className='TableHeader'>
        <h1 className="itemHeader">Item</h1>
        <h1 className="rateHeader">Rate</h1>
        <h1 className="discountHeader">Discount</h1>
        <h1 className="dueHeader">Due</h1>
        <h1 className="paidHeader">Paid</h1>
      </div>

      <Details2 item={'Root Canal'} rate={1000}  discount={250} paid={130}></Details2>
      <Details2 item={'Therapy'} rate={1000}  discount={250} paid={390}></Details2>
      <Details2 item={'Wisdom Tooth Removal'} rate={1000}  discount={250} paid={1}></Details2>
      <Details2 item={'Wisdom Tooth Removal'} rate={1000}  discount={250} paid={0}></Details2>
      <Details2 item={'Wisdom Tooth Removal'} rate={1000}  discount={250} paid={34}></Details2>
      <Details2 item={'Wisdom Tooth Removal'} rate={1000}  discount={250} paid={13}></Details2>
      <Details2 item={'Wisdom Tooth Removal'} rate={1000}  discount={250} paid={700}></Details2>
      <Details2 item={'Wisdom Tooth Removal'} rate={1000}  discount={250} paid={67}></Details2>

      <div className="payModeAndSummary">
        <h1 className='payMode'>Payment Mode : {paymentMode}</h1>
        <div className="Summary">
          <h1 id='summItem'>Subtotal : ₹ {subTotal}</h1>
          <h1 id='summItem'>Paid :      ₹ {paidAmount}</h1>
          <h1 id='summItem'>Balance :      ₹ {balance}</h1>
        </div>
      </div>

      <div className='Footer'>
        <h1 id='foot1'>Note : </h1>
        <h1 id='foot2'>Signature : </h1>
        <h1 id='foot3'>Planning Another Visit? Scan Here!</h1>
        <img id='foot4' src={QR}></img>
      </div>

      <div className='line2'></div>
      
   
    </div>
  )
}

export default App;
