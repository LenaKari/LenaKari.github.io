var fieldStatus = {
  firstName: false,
  surname: false,
  experience: false,
  gender: false,
  address: false,
  email: false,
  phone: false,
  dob: false,
  nativeLanguage: false
};

var validateApplicationField = function(fieldName) {
  var fieldElement = {
    experience: $('#application-experience'),
    firstName: $('#application-first-name'),
    surname: $('#application-surname'),
    gender: $('#application-gender'),
    address: $('#application-address'),
    email: $('#application-email'),
    phone: $('#application-phone'),
    dob: $('#application-dob'),
    nativeLanguage: $('#application-native-language'),
  };
  if (fieldElement[fieldName].val()) {
    if(fieldName === 'email') {
      if(checkValidEmail(fieldElement[fieldName])) {
        setFieldToValid(fieldName, fieldElement[fieldName]);
      } else {
        fieldElement[fieldName].addClass('missing-information');
      }
    } else if(fieldName === 'dob') {
      if(checkValidDOB(fieldElement[fieldName])) {
        setFieldToValid(fieldName, fieldElement[fieldName]);
      } else {
        fieldElement[fieldName].addClass('missing-information');
      }
    } else if(fieldName === 'nativeLanguage') {
      if(checkValidNativeLanguage(fieldElement[fieldName])) {
        setFieldToValid(fieldName, fieldElement[fieldName]);
      } else {
        fieldElement[fieldName].addClass('missing-information');
      }
    } else {
      setFieldToValid(fieldName, fieldElement[fieldName]);
    }
  } else {
    fieldElement[fieldName].addClass('missing-information');
  }

};

// Sets field status to true and removes the missing-information class
var setFieldToValid = function(fieldName, fieldElement) {
  fieldStatus[fieldName] = true;
  fieldElement.removeClass('missing-information');
};

// Validates email address
var checkValidEmail = function(emailElement) {
  var emailAddress = emailElement.val();
  var atLocation = emailAddress.indexOf('@');
  var dotLocation = emailAddress.indexOf('.');
  if(emailAddress.length > 6) {
    if(atLocation > 0 && atLocation < (emailAddress.length-1)) {
      if(dotLocation > 0 && dotLocation < (emailAddress.length-1)) {
        return true;
      }
    }
  }
  return false;
};

// Validates nativeLanguage
var checkValidNativeLanguage = function(nativeLanguageElement) {
  if(nativeLanguageElement.val().length > 3) {
    return true;
  } else {
    return false;
  }
};


// Validates date of birth
var checkValidDOB = function(dobElement) {
  var dobString = dobElement.val();
  var dobDay;
  var dobMonth;
  var dobYear;
  var maximumDays;
  if(dobString.length === 10) {
    dobDay = parseInt(dobString.slice(0, 2));
    dobMonth = parseInt(dobString.slice(3, 5));
    dobYear = parseInt(dobString.slice(8));
    maximumDays = maximumDaysAvailable(dobMonth, dobYear);

    if(dobDay > 0 && dobDay <= maximumDays) {
      if(dobMonth > 0 && dobMonth < 13) {
        return true;
      }
    }
  }

  return false;
};


// Returns maximum number of day allowed in the month entered
var maximumDaysAvailable = function(month, year) {
  // If the month is February of a leap year
  if(year % 4 === 0) { if(month === 2) { return 29; } }

  // All other months
  if(month === 2) {
    return 28;
  } else if(month === 4 || month === 6) {
    return 30;
  } else if(month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
};

// Returns false if any of the required fields are empty
var allFieldsComplete = function() {
  for(var field in fieldStatus) {
    if(fieldStatus[field] === false) { return false; }
  }
};


var submitApplicationForm = function() {
  // If any of the required information is missing, show the error message. Otherwise, hide it.
  if(allFieldsComplete() === false) {
    errorMessageDisplay(true);
  } else {
    errorMessageDisplay(false);
    $('#applicationModal').modal('show');
  }
};

// Close the application submit modal and navigate back to main page
var closeApplicationModal = function() {
  $('#applicationModal').modal('hide');
  navigateTo('home');

  // Clear all of the application fields
  $('#application-experience').val('');
  $('#application-first-name').val('');
  $('#application-surname').val('');
  $('#application-gender').val('');
  $('#application-address').val('');
  $('#application-email').val('');
  $('#application-phone').val('');
  $('#application-dob').val('');
  $('#application-native-language').val('');
  $('#application-dialect').val('');
  $('#application-voice-age').val('');
  $('#application-other').val('');

  // Set field status back to false
  for(var field in fieldStatus) {
    fieldStatus[field] = false;
  }

};

// Shows/hides the error message
var errorMessageDisplay = function(display) {
  if(display) {
    $('#application-error-message').show();
  } else {
    $('#application-error-message').hide();
  }
};
