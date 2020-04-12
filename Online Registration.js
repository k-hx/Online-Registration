function formValidation() {
	//intake year
	var May2020 = document.registration.May2020;

	//three programme choices
    var choice1 = document.registration.choice1;
    var choice2 = document.registration.choice2;
    var choice3 = document.registration.choice3;   

    //hostel
    var hostel = document.registration.hostel.value;

    //scholarship
    var scholarship = document.registration.scholarship;

    //Chinese name
    var nameCh = document.registration.nameCh;

    //English name
    var nameEn = document.registration.nameEn;

    //gender
    var gender = document.registration.gender.value;

    //date of birth
    var birthdate = document.registration.birthdate;

    //nationality
    var nationality = document.registration.nationality;

    //validate NRIC no.
    var nricNo = document.registration.nricNo;

    //race
    var race = document.registration.race;

    //religion
    var religion = document.registration.religion;

    //house phone number
    var housePhone = document.registration.housePhone;

    //mobile number
    var mobileNumber = document.registration.mobileNumber;

    //email
    var email = document.registration.email;

    //address
    var address = document.registration.address;

    //postcode
    var postcode = document.registration.postcode;

    //state
    var state = document.registration.state;

    //guardian
    var guardian = document.registration.guardian.value;

    //guardian's Chinese name
    var guardianNameCh = document.registration.guardianNameCh;
    
    //guardian's English name
    var guardianNameEn = document.registration.guardianNameEn;

    //guardian NRIC no.
    var guardianNRICno = document.registration.guardianNRICno;
  
   	//guardian's phone number
   	var guardianPhoneNo = document.registration.guardianPhoneNo;

   	//income
   	var income = document.registration.income;

   	//secondary school state
   	var secondaryState = document.registration.secondaryState;

   	//secondary school name
   	var secondarySchoolName = document.registration.secondarySchoolName;

   	//secondary school graduation year
   	var secondarySchoolYear = document.registration.secondarySchoolYear;

   	//higher institution state
   	var higherInstitutionState = document.registration.higherInstitutionState;

   	//higher institution name
   	var higherInstitutionName = document.registration.higherInstitutionName;

   	//higher institution graduation year
   	var higherInstitutionYear = document.registration.higherInstitutionYear;

   	//certificate
   	var certificate = document.registration.certificate;

   	//best five subjects - one
   	var bestFiveSubjectsOne = document.registration.bestFiveSubjectsOne;
   	var bestFiveSubjectsTwo = document.registration.bestFiveSubjectsTwo;
   	var bestFiveSubjectsThree = document.registration.bestFiveSubjectsThree;
   	var bestFiveSubjectsFour = document.registration.bestFiveSubjectsFour;
   	var bestFiveSubjectsFive = document.registration.bestFiveSubjectsFive;

   	//to continue validate
   	let continueValidate = 0;

   	//best five subjects grade 
   	var bestFiveSubjectsGradeOne = document.registration.bestFiveSubjectsGradeOne;
   	var bestFiveSubjectsGradeTwo = document.registration.bestFiveSubjectsGradeTwo;
   	var bestFiveSubjectsGradeThree = document.registration.bestFiveSubjectsGradeThree;
   	var bestFiveSubjectsGradeFour = document.registration.bestFiveSubjectsGradeFour;
   	var bestFiveSubjectsGradeFive = document.registration.bestFiveSubjectsGradeFive;

   	//qualification for Chinese, Bahasa Malaysia and English
   	var qualificationChinese = document.registration.qualificationChinese;
   	var qualificationBahasaMalaysia = document.registration.qualificationBahasaMalaysia;
   	var qualificationEnglish = document.registration.qualificationEnglish;

   	//grade for Chinese, Bahasa Malaysia and English
   	var gradeChinese = document.registration.gradeChinese;
   	var gradeBahasaMalaysia = document.registration.gradeBahasaMalaysia;
   	var gradeEnglish = document.registration.gradeEnglish;


    if(intakeYear_validation(May2020)){
	if(choice_validation(choice1)) {
	if (choice_validation(choice2)) {
	if (choice_validation(choice3)){
	if(hostel_validation(hostel)) {
	if(nameEn_validation(nameEn)) {
	if(allLetter_validation(nameEn)) {
	if(gender_validation(gender)) {
	if(birthdate_validation(birthdate)) {
	if(nationality_validation(nationality)) {
	if(nricNo_validation(nricNo)) {
	if(race_validation(race)) {
	if(religion_validation(religion)) {
	if(mobileNumber_validation(mobileNumber)){
	if(email_validation(email)){
	if(address_validation(address)) {
	if(postcode_validation(postcode)) {
	if(state_validation(state)) {
	if(guardian_validation(guardian)) {
 	if(guardianNameEn_validation(guardianNameEn)){
 	if(nricNo_validation(guardianNRICno)) {
 	if(mobileNumber_validation(guardianPhoneNo)) {
 	if(income_validation(income)){
 	if(state_validation(secondaryState)) {
 	if(secondarySchoolName_validation(secondarySchoolName)) {
 	if(graduationYear_validation(secondarySchoolYear)) {
 	if(higherInstitution_validation(higherInstitutionState,higherInstitutionName,higherInstitutionYear)) {
 		continueValidate++;
 	}
 	}
 	}
 	}
 	}
 	}
 	}
 	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}
	}

    if(continueValidate === 1) {
    if(certificate_validation(certificate)) {
    if(subject_validation(bestFiveSubjectsOne)) {
    if(grade_validation(bestFiveSubjectsGradeOne)) {
    if(subject_validation(bestFiveSubjectsTwo)) {
    if(grade_validation(bestFiveSubjectsGradeTwo)) {
    if(subject_validation(bestFiveSubjectsThree)) {
    if(grade_validation(bestFiveSubjectsGradeThree)) {
    if(subject_validation(bestFiveSubjectsFour)) {
    if(grade_validation(bestFiveSubjectsGradeFour)) {
    if(subject_validation(bestFiveSubjectsFive)) {
    if(subject_validation(bestFiveSubjectsGradeFive)) {
    if(qualification_validation(qualificationChinese)) {
    if(grade_validation(gradeChinese)) {
    if(qualification_validation(qualificationBahasaMalaysia)) {
    if(grade_validation(gradeBahasaMalaysia)) {
    if(qualification_validation(qualificationEnglish)) {
    if(grade_validation(gradeEnglish)) {
    	alert("Form successfully submitted.");
    	window.location.reload();
    	return true;
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
	}	
    }
	}


    return false;
}

//to make sure intake year is selected
function intakeYear_validation (May2020) {
    var x = 0;
    
	//if May2020 is selected
	if (May2020.checked) {
		x++;
	}

    //if no radio button is selected
	if (x == 0) {
		alert("Please select your intake year. Thank you.");
		May2020.focus();
		return false;
	} else {
		return true;
	}
}

//to make sure all three of choices of programme are selected
function choice_validation(choice) {
	if(choice.value == "Default") {
        alert("Please select all THREE of your choices of programme from the list. Thank you.");
    	choice.focus();
    	return false;
    } else {
    	return true;
    }
}

//hostel
function hostel_validation(hostel) {
	if(hostel == "") {
		alert("Please select whether you need to apply for hostel. Thank you.");
		hostel.focus();
		return false;
	} else {
		return true;
	}
}

//make sure they filled in their English name
function nameEn_validation(nameEn) {
	if(nameEn.value == "") {
		alert("Please fill in your English name.");
		nameEn.focus();
		return false;
	} else {
		return true;		
	}
}

//make sure English name contains only alphabet characters
function allLetter_validation(name) {
	var letters = /^[A-Za-z]+$/;

	if(name.value.match(letters)) {
		return true;
	} else {
		alert("English name must have alphabet characters only. Thank you.");
		name.focus();
		return false;
	}
}

//make sure gender is selected
function gender_validation(gender) {
	if(gender == "") {
		alert("Please select your gender. Thank you.");
		gender.focus();
		return false;
	} else {
		return true;
	}
}

//make sure date of birth is selected
function birthdate_validation(birthdate) {
	if(birthdate.value == "2112-09-03") {
		alert("Please select your date of birth. Thank you.");
		birthdate.focus();
		return false;
	} else {
		return true;
	}
}

//make sure nationality is selected 
function nationality_validation(nationality) {
	if(nationality.value == "Default") {
		alert("Please select your nationality from the list. Thank you.");
		nationality.focus();
		return false;
	} else {
		return true;
	}
}

//make sure NRIC no. is filled in correctly
function nricNo_validation(nricNo) {
	if(nricNo.value=="") {
		alert("Please fill in the NRIC no. Thank you.");
		nricNo.focus();
		return false;
	} else if(nricNo.value.length > 12 || nricNo.value.length < 12) {
		alert("Please fill in the NRIC no. correctly. Thank you.");
		nricNo.focus();
		return false;
	} else {
		return true;
	}
}

//make sure race is selected
function race_validation(race) {
	if(race.value == "Default") {
		alert("Please select your race. Thank you.");
		race.focus();
		return false;
	} else {
		return true;
	}
}

//make sure religion is selected
function religion_validation(religion) {
	if(religion.value == "Default") {
		alert("Please select your religion. Thank you.");
		religion.focus();
		return false;
	} else {
		return true;
	}
}

//make sure mobile number is filled in
function mobileNumber_validation(mobileNumber) {
	if(mobileNumber.value == "") {
		alert("Please fill in the mobile number. Thank you.");
		mobileNumber.focus();
		return false;
	} else {
		return true;
	}
}

//make sure email is filled in
function email_validation(email) {
	if(email.value == "") {
		alert("Please fill in your email. Thank you.");
		email.focus();
		return false;
	} else {
		return true;
	}
}

//make sure address contains only alphanumeric characters
function address_validation(address) {
	var letters = /^[0-9a-zA-Z]+$/;

	if (address.value == "") {
		alert("Please fill in your address. Thank you.");
		address.focus();
		return false;
	} else if(address.value.match(letters)) {
		return true;
	} 
}

//validate postcode
function postcode_validation(postcode) {
	if (postcode.value == "") {
		alert("Please fill in your postcode.");
		postcode.focus();
		return false;
	} else if (postcode.value.length > 5 || postcode.value.length < 5) {
		alert("Please fill in your postcode correctly.");
		postcode.focus();
		return false;
	} else {
		return true;
	}
}

//make sure state is selected
function state_validation(state) {
	if (state.value == "Default") {
		alert("Please select the state from the list.Thank you.");
		state.focus();
		return false;
	} else {
		return true;
	}
}

//make sure guardian is selected
function guardian_validation(guardian) {
	if(guardian == "") {
		alert("Please select your guardian. Thank you.");
		guardian.focus();
		return false;
	} else {
		return true;
	}
}

//make sure guardian's English name is filled in
function guardianNameEn_validation(guardianNameEn) {
	var letters = /^[A-Za-z]+$/;
	
	if(guardianNameEn.value == "") {
		alert("Please fill in your guardian's English name. Thank you.");
		guardianNameEn.focus();
		return false;
	} else if (guardianNameEn.value.match(letters)) {
		return true;
	}
}

//make sure household annual income was selected 
function income_validation(income) {
	if(income.value == "Default") {
		alert("Please select your household annual income from the list. Thank you.");
		income.focus();
		return false;
	} else {
		return true;
	}
}

//make sure secondary school name was selected
function secondarySchoolName_validation(secondarySchoolName) {
	if(secondarySchoolName.value == "Default") {
		alert("Please select your secondary school name from the list. Thank you.");
		secondarySchoolName.focus();
		return false;
	} else {
		return true;
	}
}

//make sure graduation year was selected
function graduationYear_validation(graduationYear) {
	if (graduationYear.value == "Default") {
		alert("Please select your graduation year from the list. Thank you.");
		graduationYear.focus();
		return false;
	} else {
		return true;
	}
}

//make sure higher institution name is filled in (if any)
function higherInstitutionName_validation(higherInstitutionName) {
	if(higherInstitutionName.value == "") {
		alert("Please fill in the higher institution name. Thank you.");
		higherInstitutionName.focus();
		return false;
	} else {
		return true;
	}
}

function certificate_validation(certificate) {
	if(certificate.value == "Default") {
		alert("Please select the certificate name from the list. Thank you.");
		certificate.focus();
		return false;
	} else {
		return true;
	}
}

function subject_validation(subject) {
	if(subject.value == "Default") {
		alert("Please select the subject from the list. Thank you.");
		subject.focus();
		return false;
	} else {
		return true;
	}
}

function grade_validation(grade) {
	if(grade.value == "Default") {
		alert("Please select the grade from the list. Thank you.");
		grade.focus();
		return false;
	} else {
		return true;
	}
}

function qualification_validation(qualification) {
	if(qualification.value == "Default") {
		alert("Please select the qualification from the list. Thank you.");
		qualification.focus();
		return false;
	} else {
		return true;
	}
}

function higherInstitution_validation(state,name,year) {
	if (state.value == "Default" && name.value == "" && year.value == "Default") {
		return true;
	} else {
		if(state.value == "Default") {
			alert("Please select your higher institution state from the list. Thank you.");
			state.focus();
			return false;
		} else if(name.value == "") {
			alert("Please fill in your higher institution name. Thank you.");
			name.focus();
			return false;
		} else if(year.value == "Default") {
			alert("Please select your higher institution graduation year from the list. Thank you.");
			year.focus();
			return false;
		} else {
			return true;
		}
	}
		
}

