function firstQ(){
Qperson.style.display = "block"
QUGYear.style.display = "none"
QPGTtype.style.display = "none"
Qpresentiality.style.display = "none"
Qlocation.style.display= "none"
Qvulnerable.style.display = "none"
Qrecent.style.display = "none"
Qpayment.style.display = "none"
}

firstQ();

function selectYear(){
Qperson.style.display = "none"
if(UG.checked){
	
	QUGYear.style.display = "block"
}
else if(PGT.checked){
	QPGTtype.style.display = "block"
}
else{
selectPresentiality();
}
}
function selectPresentiality(){
Qperson.style.display = "none"
QUGYear.style.display = "none"
QPGTtype.style.display = "none"
Qpresentiality.style.display = "block"
}

function selectLocation(){
Qpresentiality.style.display = "none"
if(f2f.checked){
Qlocation.style.display= "block"
}
else{
selectVulnerable();
}
}

function selectVulnerable(){
Qpresentiality.style.display = "none"
Qlocation.style.display = "none"
Qvulnerable.style.display = "block"
}


function selectRecent(){
Qvulnerable.style.display = "none"
Qrecent.style.display = "block"
}


function selectPayment(){
Qrecent.style.display = "none"
Qpayment.style.display = "block"
}
